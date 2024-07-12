import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private readonly authService:AuthService) { }

  ngOnInit() {
    this.profile = this.authService.decodeToken();
   console.log("data", this.profile);
  }

  profile:any={
    name:"",
    photo:"",
    class:"",
    dob:"",
    email:"",
    mobile:""
  };
  ionViewWillEnter() {
    // Fetch user profile details from the service
   this.profile = this.authService.decodeToken();
   console.log("data1", this.profile);
  }
}
