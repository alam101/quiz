import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  
  public appPages = [
    { title: 'Math', url: '/folder/Math', icon: 'mail' },
    { title: 'English', url: '/folder/English', icon: 'paper-plane' },
    { title: 'GK', url: '/folder/Gk', icon: 'heart' },
    { title: 'Science', url: '/folder/Science', icon: 'archive' },
    { title: 'SST', url: '/folder/SST', icon: 'trash' },
    { title: 'History', url: '/folder/History', icon: 'warning' },
  ];
  constructor() { }

  ngOnInit() {}

}
