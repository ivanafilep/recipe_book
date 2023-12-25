import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { UserModel } from "./user.model";

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered? : boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{

    user = new Subject<UserModel>();

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3MARsa1dVUaP3pcVV5xKPjqqb09nc1Lo', 
        {
            email: email,
            password: password,
            returnSecureToken : true
        }
      ).pipe(catchError(this.handleError), tap(respData => {
        this.handleAuthentication(
            respData.email, 
            respData.localId, 
            respData.idToken, 
            +respData.expiresIn)
      
      }));
    }

    
    logIn(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3MARsa1dVUaP3pcVV5xKPjqqb09nc1Lo', 
            {
                email: email,
                password: password,
                returnSecureToken : true
            }
        ).pipe(catchError(this.handleError), tap(respData => {
            this.handleAuthentication(
                respData.email, 
                respData.localId, 
                respData.idToken, 
                +respData.expiresIn)
          
          }));

    }

    private handleAuthentication(
        email: string, 
        userId: string, 
        token: string, 
        expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new UserModel(
            email, 
            userId,
            token, 
            expirationDate
            );
            this.user.next(user);
    }
    


    private handleError(errorRes: HttpErrorResponse){
        console.error('Error response:', errorRes); 
        let errorMessage ='An unknown error ocured!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists!'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email was not found!'
                break;
            case 'INVALID_PASSWORD':
                 errorMessage = 'This password is not correct!'
                 break;
                 

        }
        return throwError(errorMessage);
       

    }
    
}