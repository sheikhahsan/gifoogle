import { Component, OnInit, Input } from '@angular/core';

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
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
  };

}
