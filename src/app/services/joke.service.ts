import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getJokes() {
    // this.http
    //   .get('https://api.chucknorris.io/jokes/random?category=dev')
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    // return Obserable then we need to subcribe
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }
}
