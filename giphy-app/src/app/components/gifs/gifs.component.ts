import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  gifs: any[] = [];

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
      .subscribe((response: any) => {
        console.log(response.data)
        this.gifs = response.data;
      },
        (error) => {
          console.log(error)
        }
      )
  }
}
