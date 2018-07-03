import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TeamResultsSummaryViewModel } from '../../../view-models/TeamResultsSummaryViewModel';
import { TeamResultsSummary } from '../../../models/TeamResultsSummary';
import { WorldCupService } from '../../../../shared/services/world-cup.service';

export interface ResultsSummaryGroup {
  groupId: number;
  groupLetter: string;
  teamResultsSummaries?: TeamResultsSummaryViewModel[];
}

@Component({
  selector: 'wc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  unsubscribe$: Subject<void> = new Subject();
  resultsSummaryGroups$: Observable<ResultsSummaryGroup[]>;

  pointsSort = (obj1, obj2) => {
    return obj1['points'] > obj2['points']
    ? -1 : obj1['points'] < obj2['points']
    ? 1 : 0;
  }

  constructor(
    private worldCupService: WorldCupService
  ) { }

  ngOnInit() {

    const results$ = this.worldCupService.fetchGroupStageResults()
      .pipe(
        map(this.mapToTeamSummaryViewModels),
        takeUntil(this.unsubscribe$)
      );

    const groupIdSort = (obj1, obj2) => {
      return (obj1['groupId'] < obj2['groupId'])
        ? -1
        : (obj1['groupId'] > obj2['groupId'])
        ? 1
        : 0;
    };

    this.resultsSummaryGroups$ = results$
      .pipe(
        map((results: TeamResultsSummaryViewModel[]) => {
          const uniqueGroups: TeamResultsSummaryViewModel[] = results
            .sort(groupIdSort)
            .filter((item, pos, ary) => {
              // tslint:disable-next-line:triple-equals
              return !pos || item['groupId'] != ary[pos - 1]['groupId'];
            });
          return this.mapTeamResultsSummariesToGroups(uniqueGroups, results, this.pointsSort);
        })
      );

  }

  mapToTeamSummaryViewModels(results: TeamResultsSummary[]) {
    return results
      .map((r: TeamResultsSummary) => {
        return new TeamResultsSummaryViewModel(r);
      });
  }

  mapTeamResultsSummariesToGroups(uniqueSummaries: TeamResultsSummaryViewModel[],
    summaries: TeamResultsSummaryViewModel[], sortFn: (o1, o2) => number): ResultsSummaryGroup[] {

      return uniqueSummaries.map((summary) => {
        const sortedSummariesForGroup = summaries
          .filter(r => r.groupId === summary.groupId)
          .sort(sortFn);
        return this.mapTeamResultsSummaryViewModelToResultsSummaryGroup(summary.groupId, summary.groupLetter, sortedSummariesForGroup);
      });
  }

  mapTeamResultsSummaryViewModelToResultsSummaryGroup(
    id: number, letter: string, summaries: TeamResultsSummaryViewModel[]): ResultsSummaryGroup {
    return <ResultsSummaryGroup>{
      groupId: id,
      groupLetter: letter,
      teamResultsSummaries: summaries
    };
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

}
