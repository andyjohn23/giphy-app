import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchIt:string;
  @Output() emitSearch = new EventEmitter<any>()

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: HTMLInputElement): void {
    console.log(`User entered: ${searchTerm.value}`);
}

}
