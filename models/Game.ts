import { Player } from "./Player";

export class Game {
    constructor(public turns: number, public players: Player[]) {}

    getPlayerCount() {
        this.turns = this.players.length;
    }

    startPlayers() {
        this.players.forEach(player => {
            player.createChainAndSheets();
        });
    }
}
