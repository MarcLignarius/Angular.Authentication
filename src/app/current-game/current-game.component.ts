import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlayerService } from 'app/player.service';
import { GameService } from "app/game.service";

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css'],
  providers: [PlayerService, GameService]
})
export class CurrentGameComponent implements OnInit {
  playerId: string;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.currentRoute)
  }

  goToGamePage() {
    this.router.navigate([this.currentRoute + '/game']);
  };
}
