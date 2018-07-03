import { Serializable } from '../../serializable';

export class Match extends Serializable {
    venue: string;
    location: string;
    status: string;
    time: null;
    fifaId: string;
    weather: null;
    attendance: null;
    officials: null;
    stageName: string;
    homeTeamCountry: string;
    awayTeamCountry: string;
    datetime: Date;
    winner: boolean;
    winnerCode: null;
    homeTeam: {
        country: string;
        code: string;
        goals: number;
        penalties: number;
    };
    awayTeam: {
        country: string;
        code: string;
        goals: number;
        penalties: number;
    };
    homeTeamEvents: any[];
    awayTeamEvents: any[];
    lastEventUpdateAt: Date;
    lastScoreUpdateAt: Date;

    constructor(json: object) {
        super();
        this.populateFromJSON(JSON.stringify(json));
    }

    homeTeamGoalEvents(): object[] {
        return this.homeTeamEvents.length
            ? this.homeTeamEvents.filter((e) => e['type_of_event'] === 'goal')
            : [];
    }

    awayTeamGoalEvents(): object[] {
        return this.awayTeamEvents.length
            ? this.awayTeamEvents.filter((e) => e['type_of_event'] === 'goal')
            : [];
    }

    goalEvents(): object[] {
        return this.awayTeamEvents.filter((e) => e['type_of_event'] === 'goal').concat(
            this.homeTeamEvents.filter((e) => e['type_of_event'] === 'goal')
        );
    }
}
