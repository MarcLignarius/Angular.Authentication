import { Component, OnInit } from '@angular/core';
import { Player } from 'models/Player';
import { PlayerService } from '../player.service';
 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string) {
    var newPlayer: Player = new Player(name);
    this.playerService.addPlayer(newPlayer);
  }


}
