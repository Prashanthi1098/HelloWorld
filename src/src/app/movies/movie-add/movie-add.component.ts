import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movie: Movie;
  constructor(protected movieService: MovieService,protected router: Router) {
                             this.movie={
                                           movieId:0,
                                           movieTitle:"",
                                           movieDate:"",
                                           movieDirector:"",
                                           movieUrl:"",
       
}
   }

  ngOnInit(): void {
  }
  add()
  {
    this.movieService.add(this.movie);
    this.router.navigate(['/movie-list']);
  }
}
