import { Component, OnInit } from '@angular/core';
import { Player } from 'models/Player';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  playersList: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  
  }

  showPlayerList(){
     this.playersList = playerService.getPlayers();
    console.log(this.playersList);
    
  }


}
