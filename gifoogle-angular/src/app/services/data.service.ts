import { Injectable, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  API_HOST,
  API_KEY,
  RANDOM_PATH,
  SEARCH_PATH,
  TRENDING_PATH
} from "./api.constants";

@Injectable({
  providedIn: "root"
})
export class DataService {

  @Output() search: EventEmitter<Object> = new EventEmitter();

  constructor(private http: HttpClient) {}

  getTrendingGifs() {
    const TRENDING_URL = `${API_HOST}${TRENDING_PATH}?api_key=${API_KEY}&limit=30`;
    return this.http.get(TRENDING_URL);
  }

  getRandomGif() {
    const RANDOM_URL = `${API_HOST}${RANDOM_PATH}?api_key=${API_KEY}`;
    return this.http.get(RANDOM_URL);
  }

  getGifsByQuery(query) {
    const SEARCH_URL = `${API_HOST}${SEARCH_PATH}?api_key=${API_KEY}&limit=30&q=${query}`;
    this.http.get(SEARCH_URL).subscribe(res=>{
      this.search.emit(res);
    });
  }
}
