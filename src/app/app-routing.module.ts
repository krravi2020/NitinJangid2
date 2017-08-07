import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './pages/home/home.component';
import { MainNavComponent }  from './components/navigation/main-nav/main.nav.component';
import { SideMenuComponent }  from './components/navigation/side-menu/side-menu.component';
// import { LoginComponent }  from './components/loginModal/login.component';
import { PageNotFoundComponent }  from './pages/error/pagenotfound.component';


// Services for WebApp
import { LoggedInGuard } from './services/loggedIn.guard';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: MainNavComponent },
	

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}