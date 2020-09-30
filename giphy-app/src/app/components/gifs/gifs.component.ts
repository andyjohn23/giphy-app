import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  @Input() sliderConfig;

  gifs;
  loading: boolean;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  this.getGifs()
  }

  getImages(response){
  
    let imagesArray = []
    response.forEach(element => {
      imagesArray.push({ 
        title: element.title,
        username: element.username,
        image: element.images.downsized_medium.url})
    });
   
   return imagesArray
  }

  getGifs():void {
    this.loading = true;
    this.dataservice.getTrendingGifs().subscribe(
    
      (response) => {      
        console.log(response.data) 
        const imageArray = response.data && this.getImages(response.data); 
        this.loading=false;
        this.gifs = imageArray
      }, 
      (error) => {
        console.log(error)
      }
    )
  }

}
