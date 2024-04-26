
import { Component } from '@angular/core';
import { HomeResponse } from '../models/HomeResponse.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Response: HomeResponse = <HomeResponse>{};;

  onPlayerFound($event: HomeResponse): void {
    this.Response = $event;
  }
}
