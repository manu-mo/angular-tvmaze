import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Api/api.service';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  shows: Show[] = [];
  name: string = "";

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  /* searchByName(name: string) {
    if (this.name === '') {
      alert('Name is empty!');
    }
    else {
      this.apiService.searchShow(name)
        .subscribe((response: any) => {
          // if (response === []) {
          //   alert('No shows found with this name!')
          // } else {
          //TODO: metto un if per l'immagine perchè non carica subito e da errore null
          this.shows = response;

          console.log(this.shows);
        })
    }
  } */

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({shows}) => {
          this.shows = shows;
      });
  }
}
