import { Component, OnInit } from '@angular/core';
import { Player } from 'models/Player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  playersList: Player[] = [];
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.playersList = this.playerService.getPlayers();
    console.log(this.playersList);
  }

  //needs selector of $key on clickedplayer after firebase
  goToPlayerProfile(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer]);
  }
 


}
