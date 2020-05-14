import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayComponent } from './display/display.component'
import {EmployeeComponent} from './employee/employee.component'
import { RegisterComponent } from './register/register.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieService } from './movies/movie.service';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';

const routes: Routes = [{
                          path: 'display',
                          component: DisplayComponent
                       },
                       {
                          path: 'employee',
                          component:EmployeeComponent
                        },
                        {
                          path: 'register',
                          component:RegisterComponent
                        },
                        {
                          path: 'movie-list',
                          component:MovieListComponent
                        },
                        {
                          path: 'movie-edit/:mId',
                          component:MovieEditComponent
                        },
                        {
                          path: 'movie-add',
                          component:MovieAddComponent
                        }
                        
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
