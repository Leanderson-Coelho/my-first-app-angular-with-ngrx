import { createAction, props } from '@ngrx/store';
import { Film } from './../model/film';

export const loadFilms = createAction('[Films Component] Load Films');
export const loadedFilms = createAction('[Films API] Films Loaded Success', props<{films: Film[]}>());