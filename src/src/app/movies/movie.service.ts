import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
   allMovies: Movie[];
    constructor(protected http: HttpClient) { 
      /*this.allMovies = [{
                                  movieId: 101,
                                  movieUrl:'https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                                  movieTitle:'96',
                                  movieDate:'04/10/2018',
                                  movieDirector:'Prem Kumar'
                          },
                          {
                                  movieId: 102,
                                  movieUrl:'https://images.unsplash.com/photo-1581309553233-a6d8e331c921?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                                  movieTitle:'Mahanati',
                                  movieDate:'09/05/2019',
                                  movieDirector:'Nag Ashwin'
                          },
                          {
                                  movieId: 103,
                                  movieUrl:'https://images.unsplash.com/photo-1580554996018-ff8b408fc162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                                  movieTitle:'Queen',
                                  movieDate:'17/07/2019',
                                  movieDirector:'Vikas'
                          },
                          {
                                 movieId: 104,
                                  movieUrl:'https://images.unsplash.com/photo-1580473490637-86ca7968b84f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                                  movieTitle:'Mirchi',
                                  movieDate:'14/01/2020',
                                  movieDirector:'Siva'
                          },
                          {
                                movieId: 105,
                                  movieUrl:'https://images.unsplash.com/photo-1580184481690-5546bb513ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                                  movieTitle:'Red',
                                  movieDate:'06/04/2020',
                                  movieDirector:'Kishore Tirumala'
                          }
                        ];*/
                          
                      }
                          getAllMovies():any{
                            //let size = this.allMovies.length;
                          //return[].concat(this.allMovies);
                          return this.http.get('http://localhost:8097/api/movies/all');
                        }
                        getMovie(mId: string): Movie {
                          let movie:Movie;
                          let size = this.allMovies.length;

                          for(let i=0; i<size; i++)
                          {
                            if(this.allMovies[i].movieId == +mId)
                            {
                              movie = {
                                        movieId: this.allMovies[i].movieId,
                                        movieTitle: this.allMovies[i].movieTitle,
                                        movieDate: this.allMovies[i].movieDate,
                                        movieDirector: this.allMovies[i].movieDirector,
                                        movieUrl: this.allMovies[i].movieUrl
                                      }
                            break;
                            }
                          }
                          return movie;
                        }
                        updateMovie(movie: Movie)
                        {
                              let size = this.allMovies.length;
                              for(let i=0;i<size;i++)
                                {
                                      if(this.allMovies[i].movieId == movie.movieId)
                                      {
                                        this.allMovies[i].movieTitle = movie.movieTitle; 
                                        this.allMovies[i].movieDate = movie.movieDate; 
                                        this.allMovies[i].movieDirector = movie.movieDirector; 
                                        this.allMovies[i].movieUrl = movie.movieUrl; 
                                        break;
                                      };
                                }
                        }
                        add(movie: Movie)
                        {
                          let size = this.allMovies.length;
                          let newmovieId=this.allMovies[size-1].movieId;
                          newmovieId++;
                         
                         movie.movieId=newmovieId;
                         this.allMovies.push(movie);
                        }
                        deleteMovie(movieId: number)
                        {
                          let size = this.allMovies.length;
                          for(let i=0;i<size;i++)
                          {
                            if(this.allMovies[i].movieId == movieId)
                            {
                              this.allMovies.splice(i,1);
                              break;
                            }
                          }
                        }
                      }
