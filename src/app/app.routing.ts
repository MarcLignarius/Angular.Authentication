    
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path: 'playerlist',
        component: PlayerListComponent
    },
    {
        path: 'playerlists/:id',
        component: ProfileComponent
    },
    { 
        path: 'login',
        component: LoginComponent 
    },
    {
         path: 'signup', 
         component: SignupComponent 
    },
    {
         path: 'login-email', 
         component: EmailComponent 
    },
    {
         path: 'members',
         component: MembersComponent, 
         canActivate: [AuthGuard] 
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);