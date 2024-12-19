
import { Component } from '@angular/core';
import { HomeResponse } from '../models/HomeResponse.module';
import { formatMinutesToHHMM } from '../utils/Converter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Response: HomeResponse = <HomeResponse>{};;

  onPlayerFound($event: HomeResponse): void {
    this.Response = $event;
  }

  getFormattedPlaytime(playtime: number): string {
    return formatMinutesToHHMM(playtime);
  }

  getFormattedImageUrl(fileName: string, appid: number): string {
    const baseUrl = 'http://media.steampowered.com/steamcommunity/public/images/apps/';
    const hash = fileName.split('.')[0]; // Assuming the filename format is "{hash}.jpg"

    return `${baseUrl}${appid}/${hash}.jpg`;
  }
}
