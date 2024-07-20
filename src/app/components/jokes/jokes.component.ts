import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent implements OnInit {
  constructor(private jokeService: JokeService) {}

  joke: String = 'Loading';

  ngOnInit(): void {
    this.loadJoke();
  }

  loadJoke() {
    this.jokeService.getJokes().subscribe(
      (data: any) => {
        this.joke = data.value;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
