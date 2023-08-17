import { PlayerService } from './../../services/player-service.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Player } from './../../models/player/player.module';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
@Injectable()
export class SearchBarComponent {
  playersList: Player[] = [];
  playerId: string = '';

  @Output() onDataPlayerFilled = new EventEmitter<Player>();

  constructor(private PlayerService: PlayerService) {}

  onEnter(playerId: string) {
    this.PlayerService.getPlayerData(playerId).subscribe((response) => {
      this.playersList = response.body!.response.players;
      this.onDataPlayerFilled.emit(this.playersList[0]);
    });
  }
}
