import { createAction, props } from '@ngrx/store';
import { Film } from '../model/film';

// aqui ficariam outras actions referente a api, como update, delete 

export const loadedFilms = createAction('[Films API] Films Loaded Success', props<{films: Film[]}>());
