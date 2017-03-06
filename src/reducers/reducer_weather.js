import {FETCH_WEATHER} from '../actions/index';

export default function (state=[], action) {
    switch(action.type) {
    case FETCH_WEATHER:
    // es6 syntax ... spreads an aray and concatenates it into another array, doesn't change state object.
    // never modify existing state
        return [action.payload.data, ...state];
    };
    return state;
}