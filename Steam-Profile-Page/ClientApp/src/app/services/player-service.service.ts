import { Player } from './../models/player/player.module';
import { HttpClient } from '@angular/common/http';
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

  public getPlayerData(playerId: string): Observable<Player> {
    return this.http.get<Player>(this.baseUrl + this.url + '?id=' + playerId);
  }
}
