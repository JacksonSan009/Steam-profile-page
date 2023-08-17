import {
  Player,
  PlayerModule,
  PlayerResponse,
} from './../models/player/player.module';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  url: string = 'api/player/getPlayerData';
  baseUrl: string = '';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getPlayerData(
    playerId: string
  ): Observable<HttpResponse<PlayerModule>> {
    return this.http.get<PlayerModule>(
      this.baseUrl + this.url + '?id=' + playerId,
      {
        observe: 'response',
      }
    );
  }
}
