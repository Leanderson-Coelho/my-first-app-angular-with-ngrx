import { createSelector } from '@ngrx/store';
import { State } from './../reducers/applicationState';

export const selectFilms = (state: State) => state.films;

export const selectRecentFilms = createSelector(
    selectFilms,
    (films) => {
        return films.filter(f => {
            console.log(Number(f.release_date) > 2010);
            return Number(f.release_date) > 2010
        })
    }
)