import { Serializable } from '../../serializable';

export class TeamResultsSummary extends Serializable {
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

    constructor(json: object) {
        super();
        this.populateFromJSON(JSON.stringify(json));
    }
}
