import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';
import {MenuController} from '@ionic/angular';
import { SessionService } from 'src/app/core/state/session/session.service';
import { SessionRepository } from 'src/app/core/state/session/session.repository';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
@Component({
  selector: 'quiz-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private readonly appService: AppService,
    private authService: AuthService,
    private menuController:MenuController,
    private sessionService:SessionService,
    private sessionRepository:SessionRepository
  ) {
     
    }

  login() {
    this.menuController.enable(false,"main-content");
    // Implement your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
     const payload={
      email: this.email,
      password: this.password
     }
    this.appService.login(payload).subscribe((res:any)=>{
      console.log(res.access_token);
      
      localStorageStrategy.setItem("session",res.access_token);
     // this.authService.setAccessToken(res.access_token);
      this.sessionService.login(res.access_token);
      // localStorage.setItem("token",res.access_token)
      this.router.navigate(['folder/math']);
    },(err:any)=>{
      console.log(err);
      
    });
    // Redirect to home page after successful login
   
  }
  register(){
    this.router.navigate(['registration']);
  }
}
