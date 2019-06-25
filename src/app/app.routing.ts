    
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'playerlist',
        component: PlayerListComponent
    },


 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);