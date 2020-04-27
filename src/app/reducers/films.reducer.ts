import { Film } from '../model/film';
import { createReducer, on, Action } from '@ngrx/store';
import { loadFilms, loadedFilms } from '../actions/films-page.actions';

export const keyFilms = 'films';

export interface State {
    films: Film[];
}

export const initialState: State = {
    films: new Array()
}

const _filmsReducer = createReducer(
    initialState, 
    on(loadedFilms, (state, {films}) => ({films: films}))
);

export function reducer(state: State | undefined, action: Action){
    return _filmsReducer(state, action);
}