import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-list',                               
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  allMovies: Movie[];
  constructor(protected router:Router,protected movieService: MovieService) { 
   /* this.allMovies = [{
                          movieId: 101,
                          movieUrl:'https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/10/4/original/BeFunky_Collage.jpg',
                          movieTitle:'96',
                          movieDate:'04/10/2018',
                          movieDirector:'Prem Kumar'
                      },
                      {
                        movieId: 102,
                          movieUrl:'https://www.telugu360.com/wp-content/uploads/2018/05/Rajamouli-and-KTR-Praises-Mahanati-Movie.jpg',
                          movieTitle:'Mahanati',
                          movieDate:'09/05/2019',
                          movieDirector:'Nag Aswin'
                      },
                      {
                        movieId: 103,
                          movieUrl:'https://blogtobollywood.com/wp-content/uploads/2014/06/Queen-Movie-poster-e1409404760978.jpg',
                          movieTitle:'Queen',
                          movieDate:'17/07/2019',
                          movieDirector:'Vikas'
                      },
                      {
                        movieId: 104,
                          movieUrl:'https://files.prokerala.com/movies/pics/800/movie-stills-17320.jpg',
                          movieTitle:'Mirchi',
                          movieDate:'14/01/2020',
                          movieDirector:'Siva'
                      },
                      {
                        movieId: 105,
                          movieUrl:'https://mcmscache.epapr.in/post_images/website_197/post_13186523/thumb.jpg',
                          movieTitle:'Red',
                          movieDate:'06/04/2020',
                          movieDirector:'Kishore Tirumala'
                      }
                     ];*/
                }

  ngOnInit(): void 
  {
       this.movieService.getAllMovies().subscribe(
         (response:any)=>{
           this.allMovies = response;
         }
       );
  }
  displayEditMovie(mId: number)
  {
      this.router.navigate(['/movie-edit/'+mId]);
  }
  addMovie()
  {
    this.router.navigate(['/movie-add']);
  }
  deleteMovie(movieId: number)
  {
      this.movieService.deleteMovie(movieId);
      this.allMovies = this.movieService.getAllMovies();
  }
}
