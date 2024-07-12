import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'quiz-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],
})
export class RegistrationPage {
  formData: any = {};
  photo: string = '';

  constructor(private camera: Camera, private appService:AppService) {}

  async uploadFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
   reader.onload = () => {
      const base64Data = reader.result?.toString().split(',')[1];
      this.formData.photo = base64Data;
    };
   
  }
  async handleFileInput(event: any) {
    const file = event.target.files[0];
    this.uploadFile(file);
  }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    const imageData = await this.camera.getPicture(options);
    this.photo = 'data:image/jpeg;base64,' + imageData;
  }

  register() {
    console.log(this.formData); // Send form data to server
    this.appService.registration(this.formData).subscribe((res:any)=>{
     console.log("successregistration", res);    
    },(err:any)=>{
      console.log("Error", err);
    });

  }
  Done(){
    this.isOpenCalender=false;
  }
  isOpenCalender=false;
  openDate(){
    this.isOpenCalender=true;
  }
}
