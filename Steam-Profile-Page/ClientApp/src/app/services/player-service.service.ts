import { HttpClient, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlayerModule } from "../models/player.module";
import { RecentPlayedGames } from "../models/RecentPlayedGames.module";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private url: string = "api/player/";
  private baseUrl: string = "";

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getPlayerData(playerId: string): Observable<HttpResponse<PlayerModule>> {
    const path: string = "getPlayerData";

    return this.http.get<PlayerModule>(
      this.baseUrl + this.url + path + "?id=" + playerId,
      {
        observe: "response",
      }
    );
  }

  public getRecentGamesPlayed(playerId: string): Observable<HttpResponse<RecentPlayedGames>> {
    const path: string = "getRecentlyPlayedGames";

    return this.http.get<RecentPlayedGames>(
      this.baseUrl + this.url + path + "?id=" + playerId,
      {
        observe: "response",
      }
    );
  }
}
