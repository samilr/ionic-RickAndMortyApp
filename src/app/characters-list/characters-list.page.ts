import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {

  characters:any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      this.characters = res.results;
    })

    console.log(this.characters)
  }

}
