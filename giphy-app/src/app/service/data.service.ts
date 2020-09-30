import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([]);

  private URL= 'https://api.giphy.com/v1/gifs/trending'
  private searchUrl='https://api.giphy.com/v1/gifs/search'
  private api_key=environment.giphyApiKey
  private Limit=48
  
  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`${this.URL}?api_key=${this.api_key}&limit=${this.Limit}`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }

  searchGifs(gifName: string){
    return this.http.get(`${this.searchUrl}?q=${gifName}api_key=${this.api_key}&limit=${this.Limit}`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}

