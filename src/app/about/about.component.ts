import { Component, OnInit } from '@angular/core';
// import {MatDialog} from '@angular/material';
import { DetailfilmComponent } from '../detailfilm/detailfilm.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
contact={name:'GUESMI Abdessalem', Country:'Tunisia', imgPers:'02',Tel:'(+216).53376894', imgCountry: '01', description: '.........'}
  ngOnInit() {
    this.contact;
   
  }
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(DetailfilmComponent,{
  //     width: '600px',
  //     data: 'Add Post'
  //   });
}
