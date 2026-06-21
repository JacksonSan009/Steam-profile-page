import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Injectable } from "@angular/core";
import { Player } from "../../models/player.module";
import { PlayerService } from "../../services/player-service.service";
import { Game } from "src/app/models/RecentPlayedGames.module";
import { HomeResponse } from "src/app/models/HomeResponse.module";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
  standalone: true,
  imports: [CommonModule]
})

@Injectable()
export class SearchBarComponent {
  playerId: string = "";
  loading: boolean = false;

  @Output() onDataPlayerFilled = new EventEmitter<HomeResponse>();

  constructor(private playerService: PlayerService) { }

  onEnter(playerId: string) {
    if (!playerId) {
      return;
    }

    this.loading = true;
    this.playerService.getPlayerData(playerId).subscribe((response) => {
      var Player = response.body!.response.players[0];

      this.playerService.getRecentGamesPlayed(playerId).subscribe({
        next: (response) => {
          var RecentGamesPlayed = response.body!.response.games;
          this.loading = false;
          this.onDataPlayerFilled.emit({ Player, RecentGamesPlayed });
        },
        error: (err) => {
          this.loading = false;
          console.error('Error fetching recent games:', err);
        }
      });

    }, error => {
      this.loading = false;
      console.error('Failed to fetch player data:', error);
    });
  }
}
