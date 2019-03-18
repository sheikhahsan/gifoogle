import { Component, OnInit, Input } from '@angular/core';
import * as Util from "src/app/utils";

@Component({
  selector: 'app-card-columns',
  templateUrl: './card-columns.component.html',
  styleUrls: ['./card-columns.component.scss']
})
export class CardColumnsComponent implements OnInit {

  @Input() gifs: any;

  constructor() { }

  ngOnInit() {
  }

  getFullUrl = gifId => {
    return Util.getFullUrl(gifId);
  };

}
