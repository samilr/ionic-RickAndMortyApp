import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: any
  character: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activateRoute.snapshot.paramMap.get('id');
    this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe(
      res => {
        this.character = res;
        console.log(this.character);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );


      console.log(this.character)
  }

  showProfile(){
    console.log(this.character)
  }
}
