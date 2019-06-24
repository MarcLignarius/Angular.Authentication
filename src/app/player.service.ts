import { Injectable } from "@angular/core";
import { Player } from "models/Player";


@Injectable()
export class PlayerService {

  players: Player[] = [];
  constructor() {
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
    this.getPlayers();
    console.log(this.players);
  }

  getPlayers(){
    return this.players;
  }
}
