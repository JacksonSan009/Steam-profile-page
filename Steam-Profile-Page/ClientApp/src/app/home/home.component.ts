import { SearchBarComponent } from './../components/search-bar/search-bar.component';
import { Component, ViewChild } from '@angular/core';
import { Player } from '../models/player.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  player: Player | undefined;

  onPlayerFound($event: Player): void {
    this.player = $event;
  }
}
