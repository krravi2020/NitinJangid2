// Imports
import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers} from '@angular/http';
import { ApiResponse } from '../../models/ApiResponse';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Import basic endpoint to extend from 
import {Endpoint} from '../endpoint.service';

declare var localStorage: any;

@Injectable()
export class UserService extends Endpoint{
    private loggedIn = false;
    public userEvent: EventEmitter<User> = new EventEmitter();
    
    // Resolve HTTP using the constructor
    constructor (public http: Http) {
        super(http);
        this.loggedIn = !!localStorage.getItem('ss-user');
    }
    
 
    
    // Login
	
    loginSubmit(data:any) : Observable<User> {
    	//alert("ajax call");
         let body = data;
         let headers = new Headers({ 'Accept': 'application/json' });
         headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
         headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Accept', 'application/json');
     //   let headers = new Headers({ 'Accept': 'application/json' });
        return this.http.post(this.baseURL+"SpringMVCHibernate/login" ,body,{headers:headers})
        .map((res:Response) => {                                                          
 	let body : ApiResponse<any> = res.json();                                       
        //alert("nitin"); 
        //alert(JSON.stringify(body));  
        
        if(body.statuss == "success"){
        //alert("sucess");
        	return this.handleLoginResponse(body);
        }
        else{
         //alert("false");
        return false;
       }                                                          
 		//return body;  
 		 })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 
 
    
    // Register
    registerSubmit(data:any) : Observable<any> {
        let body = data;
        //alert("sub-->>");
        //alert(JSON.stringify(data));
        
         
         this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
         this.headers.append('Access-Control-Allow-Credentials', 'true');
         this.headers.append('Accept', 'application/json');

        return this.http.post(this.baseURL+"SpringMVCHibernate/register" ,body,{headers:this.headers})
          .map((res:Response) => {                                                          
 	let body : any = res.json();                                       
        //alert("response");                                                    
 		return body;                                                                  
                                                                                   
 })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));                                                                
                                                                                                                                                                     

    }





    // Get Local Storage Details
    getLocalUser():any{
        return JSON.parse(localStorage.getItem('ss-user'));
    }

    // Delete Local Storage Details
    deleteLocalUser():any{
        localStorage.removeItem('ss-user');
    }

    // Check for logged In
    isLoggedIn() {
        return this.loggedIn;
    }

 
    // Handle Login Response and set Local Storage
    private handleLoginResponse(response : ApiResponse<any>): boolean{
        //alert("suc")
        //alert(response.statuss);
        if(response.statuss!="success"){ 
        //alert("not");
            return false;
        }
        
        localStorage.setItem('ss-user',JSON.stringify(response.data));
        
       
        this.loggedIn = true;
        //alert("res-->>");
        //alert(JSON.stringify(response));
        return response.data;
    } 
    

    
    //--------------------------------------------------------  
    //calculator function
    
    calculation(data:any) : Observable<ApiResponse<any>> {
    
    const headers = new Headers();
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'POST');
//headers.append('Access-Control-Allow-Origin', '*');

        let queryVal = data;
        //alert("data" +queryVal);
        
        return this.http.post(this.baseURL+"SpringMVCHibernate/calculator?op="+queryVal,{},{headers:this.headers})
        .map((res:Response) => {                                                          
 	let body : ApiResponse<any> = res.json(); 
 	     //alert("res");
 	    return body;                                                                  
                                                                                   
 
 })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    
 
    // Observable
    private user: User;
    private subject: Subject<User> = new Subject<User>();

    setuser(user: User): void {
    
        this.user = user;
       
        this.subject.next(user);
    }



    getuser(): Observable<User> {
        return this.subject.asObservable();
    }
}