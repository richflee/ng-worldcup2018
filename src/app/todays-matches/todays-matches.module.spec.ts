import { TodaysMatchesModule } from './todays-matches.module';

describe('TodaysMatchesModule', () => {
  let todaysMatchesModule: TodaysMatchesModule;

  beforeEach(() => {
    todaysMatchesModule = new TodaysMatchesModule();
  });

  it('should create an instance', () => {
    expect(todaysMatchesModule).toBeTruthy();
  });
});
