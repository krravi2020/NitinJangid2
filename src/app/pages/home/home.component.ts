import { Component, OnInit, animate, state, style, transition, trigger,Input } from '@angular/core';
import { Title,BrowserModule }     from '@angular/platform-browser';

import { UserService } from '../../services/user/user.service';

import { MainNavComponent } from '../../components/navigation/main-nav/main.nav.component';

import { ApiResponse } from '../../models/ApiResponse';

@Component({
	moduleId: module.id,
	selector: 'ss-page-home',
	templateUrl: './index.html',
	styleUrls: [ './style.css' ],
})
export class HomeComponent implements OnInit {

public homecity:string="Raipur";

	constructor(private titleService: Title) { 

		this.titleService.setTitle('Service Sathi - Home');
		
		if(localStorage.getItem('cityName')){
			this.homecity=localStorage.getItem('cityName');
		}
	}

	ngOnInit(): void {

	}
	
	scrolltodown():void{
		
		window.scrollTo(1,700);
	}

}