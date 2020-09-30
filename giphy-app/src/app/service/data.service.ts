import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  trendingGifUrl = `${environment.gifUrl}/trending`;
  searchGifUrl = `${environment.gifUrl}/search`;
  apiKey = `${environment.giphyApiKey}`
  limit = 4
  finalUrl = `${this.trendingGifUrl}?api_key=${this.apiKey}&limit=${this.limit}/`;

  constructor(private http: HttpClient) { }

  getTrendingGifs(): Observable<any> {
    console.log(this.finalUrl)
    return this.http.get(this.finalUrl)
  }
}
