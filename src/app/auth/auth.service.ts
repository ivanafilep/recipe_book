import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
   // registered? : boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3MARsa1dVUaP3pcVV5xKPjqqb09nc1Lo', 
        {
            email: email,
            password: password,
            returnSecureToken : true
        }
      );
    }

    /*
    logIn(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3MARsa1dVUaP3pcVV5xKPjqqb09nc1Lo', 
            {
                email: email,
                password: password,
                returnSecureToken : true
            }
        );

    }
    */
}