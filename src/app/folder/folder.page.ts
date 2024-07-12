import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  quizQuestion:any;
  options:any;
  trueOption:any;
  quizRes:any;
  constructor(private readonly appService: AppService,private router:Router) {}
 
  getQuizDetail(){
   this.appService.getQuiz("?quizName="+this.folder.toLocaleLowerCase()+"").subscribe((res:any)=>{
    if(res[0]!==undefined){
    this.quizRes = res[0];
    console.log("data", this.quizRes);
    this.quizQuestion = res[0]?.question;
    this.options = res[0]?.options;
    this.options = JSON.parse(this.options);
    this.trueOption = JSON.parse(res[0]?.trueOption);
    }
   },(err:any)=>{
    if(err.status===401 || err.status===403){
      this.router.navigate(['login']);
    }
    console.log("error", err);
   });
  }
  submitAnswer(){
    
  }
  next(){
    this.activeIndex=-1;
    this.getQuizDetail();
  }
isActive:any;
activeIndex:number=-1;
  selectedOption(item:any,index:number){
    this.activeIndex=index;

     if(item.option === this.trueOption[0].option){
      this.isActive = true;
     }
     else{
      this.isActive = false;
     }
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getQuizDetail();
  }
  
}
