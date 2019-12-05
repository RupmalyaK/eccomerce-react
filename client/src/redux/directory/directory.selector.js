import {createSelector} from "reselect"; 


export const selectDirectory = state => state.directory;


export const selectItems = createSelector(selectDirectory, 
    state => state.items);

  