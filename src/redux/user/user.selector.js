import {createSelector} from "reselect"; 


export const selectUser = state => state.user; 

export const selectCurrentUser = createSelector(selectUser , (user) => user.currentUser);

export const selectUnsubscriber = createSelector(selectUser, (user) => user.unsubscriberFR); 

export const selectIsSigningIn = createSelector(selectUser, state => state.isSigningIn); 

export const selectIsCheckingSession = createSelector(selectUser, state => state.isCheckingSession); 
