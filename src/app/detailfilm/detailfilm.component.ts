import { Component, OnInit } from '@angular/core';
import {Films} from '../../api/data';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailfilm',
  templateUrl: './detailfilm.component.html',
  styleUrls: ['./detailfilm.component.css']
})
export class DetailfilmComponent implements OnInit {

  idfilm:number; 
  film=Films
  f={name:'', img:'',year:'', type:'', description:'', url:''};
  constructor(private route: ActivatedRoute, private router:Router) { 
    this.idfilm= this.route.snapshot.params['id'];
  }
  
  ngOnInit() {
    console.log(this.film[this.idfilm])
    this.f=this.film[this.idfilm];
    
  }
  Back(){
this.router.navigateByUrl('/films')
  }
}