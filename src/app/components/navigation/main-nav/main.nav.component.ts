import { Component,ElementRef,OnInit, animate, state, style, transition, trigger ,AfterViewInit } from '@angular/core';
import { Title,BrowserModule }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import { UserService } from '../../../services/user/user.service';


import { User } from '../../../models/user';
import { ApiResponse } from '../../../models/ApiResponse';

declare var FB: any;
declare const gapi: any;


@Component({
	moduleId: module.id,
	selector: 'main-nav',
	templateUrl: 'main-nav.html',
	styleUrls: [ './style.css' ],
})
export class MainNavComponent implements AfterViewInit {
    

    public Styles:boolean=false;
    public calculatorsval:any={};
    public calculator:any={};
	public showLoginModal: boolean=false;
	public calculatorModal: boolean=false;
	public showRegisterModal: boolean=false;
	public loginForm:any;
	public fbwrongOtp:string="";
	public user:User;
	public loginresponse:any={};
	public seletectedCity:string="SELECT CITY";
	public loginStatus:boolean;
	public registerForm:any;
	public selectedCountry: any;
	public bookingStatus:any;
	public cityName: any;
	public totalval:any;
	public phn:any;
	public fbOtpModal:boolean=false;
	public fbSigins:any;
	public fbRespon:any;
	public loginForms:any;
	
	public resultOfcal:string ="";
	
	public calculations:any={};
	

	
	public bookingStatusLength:number;
	public nameRequried:string;
	public phoneRequried:string;
	public passwordRequrithis:string;
	public passwordRequried:string;
	public emailRequried:string;
	public localcity:string="";
	public checkfbLogin:boolean=false;
	
	public Fbotp:string="";
	
	public countries:any;

	public resetpassword:boolean=false;
	public emailRequriedExists:string;
	public nameRequriedExists:string;
	public phoneRequriedExits:string;
	public showOtpModal: boolean=false;
	public changepassword :boolean=false;
	public emailValid:string;
	public emailmessage:string="";
	public wrongOtp:string;
	public wrongNumber:string;
	public changeuserPassword:any;
	public emailnotvalid:string="";
	public loginCredintial:string="";
	public pleaseRegis:string="";
	public pleaseRegis1:string="";
	public oldPassword:string="";
	public oldPasswords:string="";
	public alredyExist:string;

	
	public fbMobile:boolean=false;
	//public googleLogin:any;
	public citys:any[]=[];
	
	 
  public auth2: any;
  




	constructor(private titleService: Title,private element: ElementRef,public userService:UserService, private router: Router,private _sanitizer: DomSanitizer) {
		this.titleService.setTitle('Demo - Dashboard');
		
		this.calculator={
		 values:""
		}
		this.fbSigins={
			status:false
		};
		
		this.loginForm = {
			email: "",
			password: ""
		};
		
		this.loginForms={
			credential:""
		};
		this.nameRequried="";
		this.phoneRequried="";
		this.passwordRequrithis="";
		this.passwordRequried="";
		this.emailRequried="";
		this.emailRequriedExists="";
		this.phoneRequriedExits="";
		this.nameRequriedExists="";
		
		this.alredyExist="";
		this.phn={value:[]};
		this.emailValid="";
		this.wrongOtp="";
		this.changeuserPassword={
			oldPassword:"",
			newPassword:"",
			email:""
			
		};
		this.fbRespon={
			
		};
		
		
		this.registerForm = {
			phone: "",
			email: "",
			password: ""
		};
		
			
		
	}
	
	

	
	ngAfterViewInit(){
  
  //this.googleInit();
 

  }
  
  
   registerModal(){
      this.showRegisterModal=true;
   }
  saveEventValue=(data: any)=>  {
    
    //alert($event.target.nodeName);
    //alert(JSON.stringify(data));
    if(data.div!=undefined){
    //alert("dif");
    if(data.input1!=undefined && data.input1!=undefined){
    //alert("kk");
    this.calculator.values=data.input1+data.div+data.input2
    
    this.userService.calculation(this.calculator.values).subscribe(
 			response  => {
 				this.totalval=response;
 				//alert(JSON.stringify(this.totalval));
 				
 				this.resultOfcal=this.totalval.Result;
 				
 			
 			  },
 			error =>  this.handleError(error)
 			);
 			
    }
    }
   // this.calculator.values+=$event.target.value
   
   
   //alert(this.calculator.values);
  };
  
  flushEventValue=($event: any)=>  {
    
    //alert($event.target.value);
    this.calculator.values = "";
    
    
  };
  
  
  
  calculationPopup(){
  
  	this.calculatorModal=true;
  }
  
 
  
 
 calculatorModaldiss(){
 	this.calculatorModal=false;
 }
 

 
calculators() {
	//alert("calculator");
	
	this.userService.calculation(this.calculator.values).subscribe(
 			response  => {
 				this.totalval=response;
 				//alert(JSON.stringify(this.totalval));
 				
 				this.calculator.values=this.totalval.Result;
 				
 			
 			  },
 			error =>  this.handleError(error)
 			);
}

	setupUserInstance(){
		this.user = this.userService.getLocalUser();
		if(!this.user || this.user.id == ''){
			this.loginStatus = false;
			this.user = {
				id: "",
				name: "",
				email: "",
				phone: null,
			};
		}else{
			this.loginStatus = true;
		}
		this.userService.getuser().subscribe((user:User) =>{
			if(!user || user.id == ''){
				this.loginStatus = false;
			}else{
				this.loginStatus = true;
			}
		});
	}


  public registerModal(){
		this.showRegisterModal = !this.showRegisterModal;
	}
	
  registerModalLogin(){
  //alert("");
      this.showLoginModal=true;
  }
  eventHandler($event:any) {
  let keycode = ($event.which) ? $event.which : $event.keycode;
   
    this.phn = document.getElementById('phone');
   
   if (!(keycode==8 || keycode==46)&&(keycode < 48 || keycode > 57))
{
return false;
}
else
{

if (this.phn.value.length <10)
{
return true;
}
else
{
return false;
}
}
} 



 eventHandler1($event:any) {
 
 
  let keycode = ($event.which) ? $event.which : $event.keycode;
   
    this.phn = document.getElementById('phone1');
   
   if (!(keycode==8 || keycode==46)&&(keycode < 48 || keycode > 57))
{
return false;
}
else
{

if (this.phn.value.length <10)
{
return true;
}
else
{
return false;
}
}
} 




 eventHandler2($event:any) {
 
 
  let keycode = ($event.which) ? $event.which : $event.keycode;
   
    this.phn = document.getElementById('phone2');
   
   if (!(keycode==8 || keycode==46)&&(keycode < 48 || keycode > 57))
{
return false;
}
else
{

if (this.phn.value.length <10)
{
return true;
}
else
{
return false;
}
}
} 


eventHandler3($event:any) {
 
 
  let keycode = ($event.which) ? $event.which : $event.keycode;
   
    this.phn = document.getElementById('phone3');
   
   if (!(keycode==8 || keycode==46)&&(keycode < 48 || keycode > 57))
{
return false;
}
else
{

if (this.phn.value.length <10)
{
return true;
}
else
{
return false;
}
}
} 







	
	
	
dropdown(): void{
	this.Styles=!this.Styles;
}

//------------------------login()------------->
	login(): void{
		//alert("login")
		this.userService.loginSubmit(this.loginForm)
		.subscribe(
			response  => {
			
			this.loginresponse=response;
			//alert("hiii");
			//alert(JSON.stringify(this.loginresponse));
				this.userService.setuser(this.loginresponse);
				if (this.loginresponse) {
					console.log(this.loginresponse);
					this.loginModal();
					//this.setupUserInstance();
					 location.reload();
				}
				else{
					this.loginCredintial="invalid Email id or password !!!";
				};
			},
			error =>  {
				console.log(error);
			}
		);
	}


public loginModal(){
		this.showLoginModal = !this.showLoginModal;
	}
	
	public logout(){
		this.userService.deleteLocalUser();
		var user: User = {
			id: "",
			name: "",
			email: "",
			phone: null,
		};

		this.userService.setuser(user);
		FB.logout();
		
	}
	
	
	div(){
	  //alert("div");
	  this.calculatorsval.div="/";
	}
	
	sub(){
	  //alert("sub");
	   this.calculatorsval.div="-"
	}
	
	
	add(){
	  //alert("add");
	   this.calculatorsval.div="+"
	}
	
	
	mul(){
	  //alert("mul");
	   this.calculatorsval.div="*"
	}
	
	

loginModaldiss(){
  this.showLoginModal=false;
}
	
	
	//----------------------------------------
	
	handleError(error:any) : void {
 		console.log(error);
 	}
	
	//------------------------register()------------

	register(): void{
	
	
	//alert("riges");
	if(this.registerForm.name==""||this.registerForm.name==null){
	 
		this.nameRequried="please enter name";
	}
	
	 else if(/^[a-zA-Z ]{4,16}$/.test(this.registerForm.name)){
	// alert(this.registerForm.name.length);
	// alert(this.registerForm.name);
	 if(/^\s*$/.test(this.registerForm.name)){
		
	
	
	
	this.nameRequried="Name must be four characters!!!";
	
	
	}else{
		
		this.nameRequriedExists="";
				this.emailRequriedExists="";
				this.phoneRequriedExits="";
				
	   if(this.registerForm.phone==""||this.registerForm.phone==null){
	  this.nameRequried="";
	 
		this.phoneRequried="please enter mobile number";
	}
	else if(this.registerForm.phone.length<10){
		this.phoneRequried="please enter 10 digit's mobile number";
	}
	else if(this.registerForm.email==""||this.registerForm.email==null){
	this.nameRequried="";
	this.phoneRequried="";
	//this.passwordRequrithis.selectedCountry = this.countries[1];
	 
		
	this.emailRequried="please Enter email"
		
	}
	
	else if(this.registerForm.password==""||this.registerForm.password==null){
	this.nameRequried="";
	this.phoneRequried="";
	 this.emailRequried="";
		this.passwordRequried="please enter password";
	}
	
	else{
	this.nameRequried="";
	this.phoneRequried="";
	this.passwordRequried="";
	this.emailRequried="";
	
	
	
 if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/.test(this.registerForm.email)){
           if(/^[0-9a-zA-Z@$#&!*]{6,16}$/.test(this.registerForm.password)){
	
	//alert("if-->");
		this.userService.registerSubmit(this.registerForm)
		.subscribe(
			response  => {
			//alert("hiii");
			//alert(JSON.stringify(response));
			
			    
				if(response.alredyExist=='name'){
			
			this.selectedCountry = this.countries[1];
					this.nameRequriedExists="Name alredy exists";
				
				this.emailRequriedExists="";
				this.phoneRequriedExits="";
				}
				else if(response.alredyExist=='mail'){
				
			
					this.emailRequriedExists="Email alredy exists";
					this.nameRequriedExists="";
			
				this.phoneRequriedExits="";
				}else if(response.alredyExist=='phone'){
			
					this.phoneRequriedExits="Sorry your mobile number is already registered!!!";
					this.nameRequriedExists="";
				this.emailRequriedExists="";
				
				} else{
				this.nameRequriedExists="";
				this.emailRequriedExists="";
				this.phoneRequriedExits="";
				
				this.loginModal();
		       		//this.showOtpModal = !this.showOtpModal; 
				}
				
				
			},
			error =>  {this.selectedCountry = this.countries[1];
				console.log(error);
			}
		);}
		else{
					this.passwordRequried="Password should be minimum 6 characters and maxmum 16 characters!!!";

		}		
	
		       
       } else{
       //alert("invalid");
       	this.emailRequried="Invalid email";
       	  
       }
	
       
	}
		
	}
	
	
	
	
	
	
	
	}
	else{
	this.nameRequried="Allowed only character's";
	}
	};
	
	//--------------------------------------------------------------


  

}