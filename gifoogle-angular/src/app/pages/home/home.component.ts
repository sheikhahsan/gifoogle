import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchGifs: Object = {};

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.search.subscribe(res => {
      this.searchGifs = res;
    });
  }

}
