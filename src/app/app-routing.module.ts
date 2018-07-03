import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ResultsComponent } from './results/components/containers/results/results.component';
import { TodaysMatchesMatchesGridComponent } from './todays-matches/todays-matches-matches-grid/todays-matches-matches-grid.component';

const routes: Routes = [
  { path: '', redirectTo: 'results', pathMatch: 'full' },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'today',
    loadChildren: './todays-matches/todays-matches.module#TodaysMatchesModule'
    // component: TodaysMatchesMatchesGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
