import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../models/match';
import { WorldCupService } from '../../shared/services/world-cup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wc-todays-matches-matches-grid',
  templateUrl: './todays-matches-matches-grid.component.html',
  styleUrls: ['./todays-matches-matches-grid.component.scss']
})
export class TodaysMatchesMatchesGridComponent implements OnInit {

  matches$: Observable<Match[]>;
  viewDetails = false;

  constructor(
    private worldCupService: WorldCupService,
    private router: Router
  ) { }

  ngOnInit() {

    this.matches$ = this.worldCupService.fetchTodaysMatches();
  }

  handleViewDetailsClick(match: Match): void {
    this.viewDetails = !this.viewDetails;
  }

}
