
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
}
