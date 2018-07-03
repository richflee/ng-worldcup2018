import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamResultsSummary } from '../../results/models/TeamResultsSummary';
import { Match } from '../../todays-matches/models/match';

@Injectable()
export class WorldCupService {

    baseApiURL = 'https://worldcup.sfg.io/';

    constructor(private httpClient: HttpClient) { }

    fetchTodaysMatches(): Observable<Match[]> {
        // return this.httpClient.get<object[]>(`assets/json/match.json`)
        return this.httpClient.get<object[]>(`https://worldcup.sfg.io/matches/today`)
            .pipe(
                map(vals => vals.map(v => new Match(v)))
            );
    }

    fetchGroupStageResults(): Observable<TeamResultsSummary[]> {
        return this.httpClient.get<object[]>(`${this.baseApiURL}teams/results`)
            .pipe(
                map(this.mapApiResponseToTeamResultsSummaries)
            );
    }

    mapApiResponseToTeamResultsSummaries(results: object[]) {
        return results.map(r => new TeamResultsSummary(r));
    }
}
