import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  
  movie: Movie;

  constructor(protected activatedRoute: ActivatedRoute, protected movieService: MovieService,protected router: Router) { }

  ngOnInit(): void {
    //retrieve mId param from the activated route 
    
    this.activatedRoute.paramMap.subscribe(params =>{
      console.log(params.get('mId'));
      this.movie = this.movieService.getMovie(params.get('mId'));
    });
  }
  updateMovie()
  {
    this.movieService.updateMovie(this.movie);
    this.router.navigate(['movie-list']);
  }
}
