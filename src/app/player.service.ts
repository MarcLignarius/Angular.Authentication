import { Injectable } from "@angular/core";
import { Player } from "models/Player";

@Injectable()
export class PlayerService {
  players: Player[] = [];
  constructor() {}

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
    console.log('addPlayer', this.players[0]['name']);
  }
}
