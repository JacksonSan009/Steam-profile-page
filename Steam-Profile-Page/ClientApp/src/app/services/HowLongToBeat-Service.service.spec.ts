import { TestBed } from '@angular/core/testing';
import { HowLongToBeatService, HowLongToBeatEntry } from 'howlongtobeat';

describe('HowLongToBeatService', () => {
  let service: HowLongToBeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HowLongToBeatService]
    });
    service = TestBed.inject(HowLongToBeatService);
  });

  it('should retrieve game information', async () => {
    const gameTitle = 'The Witcher 3';
    const gameInfo: Array<HowLongToBeatEntry> = await service.search(gameTitle);

    expect(gameInfo).toBeDefined();
    expect(gameInfo.length).toBeGreaterThan(0);
    // Add more assertions as needed based on the structure of HowLongToBeatEntry
  });
});
