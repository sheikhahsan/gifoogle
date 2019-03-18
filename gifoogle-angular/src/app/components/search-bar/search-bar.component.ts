import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  query: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    this.data.getGifsByQuery(this.query);
  }
}
