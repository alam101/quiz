import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  token:any;
  
  constructor(private authService: AuthService){

    //  this.token = localStorage.getAccessToken();
  }

}
