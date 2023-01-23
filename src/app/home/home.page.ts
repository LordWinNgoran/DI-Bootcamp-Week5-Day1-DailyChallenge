import { Component,OnInit } from '@angular/core';
import { films } from '../models/films.models';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  constructor(private api:ApiService) {}

  film!:films []
  loading : boolean = false
  ngOnInit(): void {
    this.api.callApi().then((data=>{
      this.film=data
      this.loading = true
      console.log(this.film)
    }))
  }
}
