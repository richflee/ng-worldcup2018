import { TeamResultsSummary } from '../models/TeamResultsSummary';

export class TeamResultsSummaryViewModel {
    id: number;
    country: string;
    alternateName: string;
    fifaCode: string;
    groupId: number;
    groupLetter: string;
    wins: number;
    draws: number;
    losses: number;
    gamesPlayed: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifferential: number;

    constructor(tmrs: TeamResultsSummary) {
        this.id = tmrs.id;
        this.country = tmrs.country;
        this.alternateName = tmrs.alternateName;
        this.fifaCode = tmrs.fifaCode;
        this.groupId = tmrs.groupId;
        this.groupLetter = tmrs.groupLetter;
        this.wins = tmrs.wins;
        this.draws = tmrs.draws;
        this.losses = tmrs.losses;
        this.gamesPlayed = tmrs.gamesPlayed;
        this.points = tmrs.points;
        this.goalsFor = tmrs.goalsFor;
        this.goalsAgainst = tmrs.goalsAgainst;
        this.goalDifferential = tmrs.goalDifferential;
    }
}
