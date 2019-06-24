import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheaderbar',
  templateUrl: './appheaderbar.component.html',
  styleUrls: ['./appheaderbar.component.scss']
})
export class AppheaderbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }



  reservationGo(){
    this.router.navigate(['/reservation']);
  }

}
