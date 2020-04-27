import { Film } from './../model/film';
import { FilmsService } from './../services/films.service';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadedFilms } from '../actions/films-api.action';
import { loadFilms } from '../actions/films-page.actions';
import { Action } from '@ngrx/store';

// [Films Component] Load Films
// [Films API] Films Loaded Success

@Injectable()
export class FilmsEffect {

    // responsável por comunicações externas a aplicação

    loadMovies$: Observable<Action> = createEffect(() => 
        this.actions$.pipe(
            ofType(loadFilms),
            mergeMap(() => this.films.getAll().pipe(
                map((data: Film[]) => {
                    console.log('carregando filmes', data);
                    return loadedFilms({films: data});
                })
            )),
            catchError(() => EMPTY)
        )
    );


    constructor(
        private actions$: Actions,
        private films: FilmsService
    ) { }
}