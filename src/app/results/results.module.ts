import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './components/containers/results/results.component';
import { SharedModule } from '../shared/shared.module';
import { WorldCupService } from '../shared/services/world-cup.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ResultsComponent],
  providers: [
    WorldCupService
  ]
})
export class ResultsModule { }
