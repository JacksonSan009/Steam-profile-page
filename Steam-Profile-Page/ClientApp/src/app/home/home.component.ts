
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeResponse } from '../models/HomeResponse.module';
import { Game } from '../models/RecentPlayedGames.module';
import { formatMinutesToHHMM } from '../utils/Converter';

import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, SearchBarComponent],
  standalone: true
})
export class HomeComponent {
  Response: HomeResponse = <HomeResponse>{};
  viewMode: 'grid' | 'excel' = 'grid';

  onPlayerFound($event: HomeResponse): void {
    this.Response = $event;
  }

  setViewMode(mode: 'grid' | 'excel'): void {
    this.viewMode = mode;
  }

  trackByAppId(index: number, game: Game): number {
    return game.appid;
  }

  getFormattedPlaytime(playtime: number): string {
    return formatMinutesToHHMM(playtime);
  }

  getFormattedImageUrl(fileName: string, appid: number): string {
    // Use Steam's higher-resolution header image for the game if available.
    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
  }
}
