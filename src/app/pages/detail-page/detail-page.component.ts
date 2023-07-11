import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Api/api.service';
import { ShowDetail } from 'src/app/models/show.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  detail!: ShowDetail;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* const id = this.activatedRoute.snapshot.params['id'];

    this.apiService.getShowDetail(id)
      .subscribe((response: any) => {
        //TODO: metto un if per l'immagine perchè non carica subito e da errore null
        this.detail = response;

        console.log(this.detail);
      }); */
      this.activatedRoute.data.subscribe(
        ({show}) => {
            this.detail = show;
        });
  }
}
