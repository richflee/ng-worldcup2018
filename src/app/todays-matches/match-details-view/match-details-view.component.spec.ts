import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailsViewComponent } from './match-details-view.component';

describe('MatchDetailsViewComponent', () => {
  let component: MatchDetailsViewComponent;
  let fixture: ComponentFixture<MatchDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
