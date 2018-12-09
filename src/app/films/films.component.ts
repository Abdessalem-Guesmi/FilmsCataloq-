import { Component, OnInit } from '@angular/core';
import {Films} from '../../api/data';
import { Router } from '@angular/router';
import { timeout } from 'q';
import { Timeouts } from 'selenium-webdriver';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
films = Films;
count=0
c=0;
mode=false;

  constructor(private route: Router) { }
i:number;
  ngOnInit() {
      
    this.films;
    
  }
  detail(id){
    this.route.navigate(['detail_film',id]);  }

    like(id){
    this.c=this.films[id].count++
      
//this.dislike(id)
      console.log(this.count);
     
    }
    dislike(id){
      
      this.films[id].count--
   //   this.mode=false;
      console.log(this.count);
    }
}
