import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show, ShowDetail } from '../models/show.model';

const API_URL: string = 'https://api.tvmaze.com/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  searchShow(query: string) {
    return this.http.get<Show[]>(`${API_URL}search/shows?q=${query}`);
  }

  getShowDetail(id: string) {
    return this.http.get<ShowDetail>(`${API_URL}shows/${id}`);
    /* this.http.get(`${API_URL}shows/139`).subscribe(response => {
      // debugger;
      this.show = response;
    }) */
  }
}
