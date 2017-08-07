import { NgModule }      from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule,FormsModule }   from '@angular/forms';
 import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
//Import All Components
import { AppComponent }  from './app.component';
import { HomeComponent }  from './pages/home/home.component';
import { MainNavComponent }  from './components/navigation/main-nav/main.nav.component';
import { SideMenuComponent }  from './components/navigation/side-menu/side-menu.component';

import { Endpoint }  from './services/endpoint.service';
//import { BookingService }  from './services/booking/booking.service';
import { UserService }  from './services/user/user.service';

import { LoggedInGuard }  from './services/loggedIn.guard';
import { PageNotFoundComponent }  from './pages/error/pagenotfound.component';
//Import All Pipes
import {CapitalizePipe} from './pipes/capitalize.pipe';

@NgModule({
	imports: [ BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpModule,FormsModule,Ng2AutoCompleteModule],
	declarations: [
		AppComponent,
		HomeComponent,
		MainNavComponent,
		SideMenuComponent,
		//Userdashboard,
		//ProfileComponent,
		//Dashboard,
		//BookHistory,
		//Userdetails,
		//Failure,
		//Success,
	//	BookingHistoryComponent,
		//MyAddressComponent,
		PageNotFoundComponent,
		// Booking Services List
		//ApplianceRepairBooking,
		///AutomobileMechanicBooking,
		//CarpenterBooking,
		//PlumberBooking,
		//ElectricianBooking,
		//CarCleaningBooking,
		//PanditBooking,
		//DriverBooking,
		//CookBooking,
		//LaundryBooking,
		//HomeCleaningBooking,
		//PainterBooking,
		CapitalizePipe
	],
	providers: 	[ 
		Title,
		//BookingService, 
		//ZoneService, 
		//LocalityService, 
		UserService,
		LoggedInGuard,
		//ApplianceService,
		//ApplianceCapacity,
		//ApplianceBrands,
		//ApplianceType,
		//ApplianceWork,
		//AutomobileBrands,
		//AutomobileType,
		//AutomobileWork,
		//AutomobileModel,
	],
	bootstrap:    [ AppComponent ],
})
export class AppModule { }
