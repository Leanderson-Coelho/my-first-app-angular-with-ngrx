import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './../reducers/applicationState';

export const selectFilms = createFeatureSelector<State>('films');

export const selectRecentFilms = createSelector(
    selectFilms,
    state => {
        return state.films.filter(f => {
            console.log(Number(f.release_date) > 2010);
            return Number(f.release_date) > 2010;
        });
    }
)