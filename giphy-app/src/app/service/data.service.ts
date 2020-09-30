import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL= 'https://api.giphy.com/v1/gifs/trending'
  private searchUrl='https://api.giphy.com/v1/gifs/search'
  private api_key=environment.giphyApiKey
  private Limit=48
  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`${this.URL}?api_key=${this.api_key}&limit=${this.Limit}`)
  }

  searchGifs(){
    return this.http.get(`${this.searchUrl}?api_key=${this.api_key}&limit=${this.Limit}`)
  }
}

