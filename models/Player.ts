import { Game } from "./Game";
import { Sheet } from "./Sheet";

export class Player {
    constructor(public name: string, public email: string, public currentGame: Game, public chain: Sheet[], public sheets: Sheet[]) {}
}
