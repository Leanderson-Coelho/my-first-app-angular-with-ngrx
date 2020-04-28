import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './../reducers/applicationState';

export const selectRootState = createFeatureSelector<State>('state');

export const selectRecentFilms = createSelector(
    selectRootState,
    state => {
        return state.films.filter(f => {
            console.log(Number(f.release_date) > 2010);
            return Number(f.release_date) > 2010;
        });
    }
)