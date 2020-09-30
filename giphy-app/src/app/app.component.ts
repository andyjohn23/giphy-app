import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sliderConfig = {
    slidesToShow: 6,
    slideToScroll: 2,
    arrows: true,
    autoplay: false
  };

}
