import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  

  constructor(private router: Router) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse)=>{
      if(err.status===401){
        alert("Unauthorized")
      this.router.navigate(['/login'])
      }
      if(err.status===409){
        
        alert("This email already exist")
      this.router.navigate(['/register'])
      }
      if(err.status===403){
       
        alert("Wrong password or email")
      setTimeout(()=>{this.router.navigate(['/login'])
      }, 1000)}
      return throwError(()=>err)
      
    }))
  }
}
