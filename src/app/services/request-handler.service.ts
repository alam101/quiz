import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { APIS } from "../utilities/constants";

import { map } from 'rxjs/operators';
import { forkJoin, from, Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {
  apiUrl:string=APIS.baseurl;
  constructor(private readonly httpClient: HttpClient) { }
   
  getRequest(apiMethod:string): Observable<any>{
    const url = this.apiUrl+`${apiMethod}`;
    return this.httpClient.get(url,{});
  }
  postRequest(apiMethod:string,payload:any): Observable<any>{
    const url = this.apiUrl+`${apiMethod}`;
    return this.httpClient.post(url,payload,{});
  }
  postImage(apiMethod:string,payload:any): Observable<any>{
    const url = this.apiUrl+`${apiMethod}`;
    const header = new HttpHeaders().set("Content-type",'multipart/form-data');
    return this.httpClient.post(url,payload,{headers:header});
  }
}
