import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/film';
import { Store, select } from '@ngrx/store';
import { loadFilms } from './films.actions';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films$: Observable<Film[]>;

  constructor(
    private store: Store<{ films: Film[] }>
  ) { }

  ngOnInit() {
    this.store.dispatch(loadFilms());
    this.films$ = this.store.pipe(select('films'));

  }

}
