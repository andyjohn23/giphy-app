import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { DataService } from './service/data.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SearchComponent } from './components/search/search.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AnimateVoteBarComponent } from './components/animate-vote-bar/animate-vote-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    SearchComponent,
    NavigationBarComponent,
    AnimateVoteBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
