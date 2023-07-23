import { SearchBarComponent } from './../components/search-bar/search-bar.component';
import { Component, ViewChild } from '@angular/core';
import { Player } from './../models/player/player.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  player: Player | undefined;

  @ViewChild('searchBar') searchBar!: SearchBarComponent;

  // onPlayerFound(eventData: { player: Player }) {
  //   this.player = eventData.player;
  // }

  onPlayerFound() {
    // this.player = this.searchBar.onEnter;
    console.log(this.searchBar.player);
  }
}
