import { Game } from "./Game";
import { Sheet } from "./Sheet";

export class Player {
    public currentGame: Game;
    chain: Sheet[];
    sheets: Sheet[];

    constructor( public name: string, public email: string) {  }

    createChainAndSheets() {
       for (let index = 1; index < this.currentGame.players. length; index++) {
         this.chain.push(new Sheet);
         this.sheets.push(new Sheet);
       }
    }

}
