
import { Player } from '../models/player.module';
import { Game } from '../models/RecentPlayedGames.module';

export interface HomeResponse {
  Player: Player;
  RecentGamesPlayed: Game[];
}
