import { createReducer, on, Action } from '@ngrx/store';
import { loadedFilms } from '../actions/films-api.action';
import { State } from './applicationState';

// responsável por atualizar o state da aplicação de acordo com cada actions 

export const keyFilms = 'films';

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