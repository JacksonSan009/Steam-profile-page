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
  player: Player | undefined;
  playerId: string = '';

  @Output() onDataPlayerFilled = new EventEmitter<Player>();

  constructor(private PlayerService: PlayerService) {}

  onEnter(playerId: string) {
    this.PlayerService.getPlayerData(playerId).subscribe({
      next: (respond) => {
        // console.log(respond);

        this.player = Object.assign({}, respond);

        this.onDataPlayerFilled.emit(this.player);
      },
      error: (e) => console.error(e),
    });
  }
}
