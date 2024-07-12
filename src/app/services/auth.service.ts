import { Injectable } from '@angular/core';
// import {jwt_decode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = null;

  constructor() {}

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem("tkn",token);
  }
  
  getAccessToken() {
    return this.accessToken;
  }

  isLoggedIn() {
    return !!this.accessToken;
  }
  // refreshToken() {
  //   const refreshToken = this.getRefreshToken();
  //   return this.http.post<any>('/refresh-token', { refreshToken }).pipe(
  //     tap(response => {
  //       const accessToken = response.accessToken;
  //       this.authService.setAccessToken(accessToken);
  //     })
  //   );
  // }
  logout() {
    this.accessToken = null;
    // You may want to clear other user-related data and navigate to the login page
  }

  decodeToken(){
    const token = localStorage.getItem("tkn")+"";
    return JSON.parse(atob(token.split('.')[1]));
  }
}
