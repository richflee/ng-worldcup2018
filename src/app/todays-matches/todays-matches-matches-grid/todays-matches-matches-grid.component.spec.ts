import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysMatchesMatchesGridComponent } from './todays-matches-matches-grid.component';

describe('TodaysMatchesMatchesGridComponent', () => {
  let component: TodaysMatchesMatchesGridComponent;
  let fixture: ComponentFixture<TodaysMatchesMatchesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysMatchesMatchesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysMatchesMatchesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
