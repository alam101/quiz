import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepted Request:');
    console.log('Method:', request.method);
    console.log('URL:', request.url);
    console.log('Body:', request.body); // if you're interested in the request body
    const accessToken = localStorage.getItem('tkn');
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
    // else if(request.url.includes('uploadImage')){
    //   console.log("image upload");
      
    //   request = request.clone({
    //     setHeaders: {
    //       contentType: `multipart/form-data`
    //     }
    //   });
    // }
    // Pass the request to the next handler
    return next.handle(request);
  }
}