import { Injectable } from "@angular/core";
import { Player } from "models/Player";



@Injectable()
export class PlayerService {

  players: Player[] = [];
  constructor() {
  }

  addPlayer(newPlayer: Player) {
    console.log(newPlayer);
    
    this.players.push(newPlayer);
  }

  getPlayers(){
    return this.players;
  }
}
