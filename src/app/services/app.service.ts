import { Injectable } from '@angular/core';
import { UtilityService } from "../utilities/utility.service";
import { RequestHandlerService } from './request-handler.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly requestHandler:RequestHandlerService) { }
  uploadImage(payload:any):Observable<any>{
    return this.requestHandler.postImage("uploadImage",payload);
  }
  getQuiz(params:string):Observable<any>{
    return this.requestHandler.getRequest("getQuiz"+params);
  }

  postAnswer(payload:any):Observable<any>{
    return this.requestHandler.postRequest("postAnswer",payload);
  }
  login(payload:any):Observable<any>{
    return this.requestHandler.postRequest("login",payload);
  }
  registration(payload:any):Observable<any>{
    return this.requestHandler.postRequest("registration",payload);
  }
  refreshToken(access_toen:any){
    return this.requestHandler.postRequest("token",access_toen);
  }

  
}
