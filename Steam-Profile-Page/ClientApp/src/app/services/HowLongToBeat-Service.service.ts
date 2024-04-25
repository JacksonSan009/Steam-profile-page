import { Injectable } from '@angular/core';
import { HowLongToBeatService } from 'howlongtobeat';
import { HowLongToBeat } from "../models/HowLongToBeat.module";

@Injectable({
  providedIn: 'root'
})

export class HowLongToBeatServiceWrapper {
  private hltbService: HowLongToBeatService;

  constructor() {
    this.hltbService = new HowLongToBeatService();
  }

  search(gameName: string): Promise<HowLongToBeat[]> {
    return this.hltbService.search(gameName);
  }
}
