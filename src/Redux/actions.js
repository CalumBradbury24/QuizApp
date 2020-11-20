import dataActionTypes from './types';

export const setScore = (value) => ({
    type: dataActionTypes.SET_SCORE, payload: value 
});

export const scoreVis = (value) => ({
    type: dataActionTypes.SCORE_VIS, payload: value 
});




