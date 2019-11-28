import {createSelector} from "reselect"; 


const selectDirectory = state => state.directory;


const selectItems = createSelector(selectDirectory, 
    state => state.items);

    export {
        selectDirectory,
        selectItems,
    };