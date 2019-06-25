import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RulesComponent } from './rules/rules.component';
import { CurrentGameComponent } from './current-game/current-game.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'playerlist',
        component: PlayerListComponent
    },
    {
        path: 'players/:$key',
        component: ProfileComponent
    },
    {
        path: 'rules',
        component: RulesComponent
    },
    {
        path: 'players/:$key/game',
        component: CurrentGameComponent
    }


 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);