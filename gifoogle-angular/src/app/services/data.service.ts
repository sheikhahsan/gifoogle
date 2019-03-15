import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTrendingGifs() {
    const API_KEY = "FUOjyQsmrVUVjEAoGfVe538blhej44Sj";
    const API_HOST = "https://api.giphy.com";
    const TRENDING_PATH = "/v1/gifs/trending";
    const RANDOM_PATH = "/v1/gifs/random";
    const SEARCH_PATH = "/v1/gifs/search";
    const TRENDING_URL = `${API_HOST}${TRENDING_PATH}?api_key=${API_KEY}&limit=30`;
    return this.http.get(TRENDING_URL);
  }
}
