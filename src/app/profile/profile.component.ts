import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../../../models/Player';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [PlayerService]
})
export class ProfileComponent implements OnInit {
  profileToDisplay;
  playerId: string;
  currentRoute: string = this.router.url;

  constructor(private route: ActivatedRoute, private location: Location, private PlayerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.profileToDisplay = this.PlayerService.getPlayerById(this.playerId);
  }

  goToGamePage() {
    this.router.navigate([this.currentRoute + '/game']);
  };

}
