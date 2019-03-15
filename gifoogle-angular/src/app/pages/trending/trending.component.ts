import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"]
})
export class TrendingComponent implements OnInit {
  trendingGifs: Object = {};

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getTrendingGifs().subscribe(res => {
      this.trendingGifs = res;
      console.log(this.trendingGifs);
    });
  }
}
