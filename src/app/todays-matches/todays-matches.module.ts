import { NgModule } from '@angular/core';
import { TodaysMatchesMatchesGridComponent } from './todays-matches-matches-grid/todays-matches-matches-grid.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorldCupService } from '../shared/services/world-cup.service';
import { MatchDetailsViewComponent } from './match-details-view/match-details-view.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'matches',
      pathMatch: 'full'
  },
  {
    path: 'matches/:id',
    component: MatchDetailsViewComponent
  },
  {
    path: 'matches',
    component: TodaysMatchesMatchesGridComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [TodaysMatchesMatchesGridComponent, MatchDetailsViewComponent],
  providers: [
    WorldCupService
  ]
})
export class TodaysMatchesModule { }
