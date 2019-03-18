import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import * as Util from "src/app/utils";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  randomGif: Object = {};

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getRandomGif().subscribe(res => {
      this.randomGif = res;
      console.log(this.randomGif);
    });
  }

  getFullUrl(gifId) {
    return Util.getFullUrl(gifId);
  };
}
