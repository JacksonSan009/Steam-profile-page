import { Component, EventEmitter, Output } from "@angular/core";
import { Injectable } from "@angular/core";
import { Player } from "../../models/player.module";
import { PlayerService } from "../../services/player-service.service";
import { Game } from "src/app/models/RecentPlayedGames.module";
import { HomeResponse } from "src/app/models/HomeResponse.module";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
@Injectable()
export class SearchBarComponent {
  playerId: string = "";

  @Output() onDataPlayerFilled = new EventEmitter<HomeResponse>();

  constructor(private playerService: PlayerService) { }

  onEnter(playerId: string) {
    this.playerService.getPlayerData(playerId).subscribe((response) => {
      var Player = response.body!.response.players[0];

      this.playerService.getRecentGamesPlayed(playerId).subscribe({
        next: (response) => {
          var RecentGamesPlayed = response.body!.response.games;

          this.onDataPlayerFilled.emit({ Player, RecentGamesPlayed });
        },
        error: (err) => {
          console.error('Error fetching recent games:', err);
        }
      });

    }, error => {
      console.error('Failed to fetch player data:', error);
    });
  }
}
