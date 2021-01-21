import {combineReducers, createStore} from 'redux';
import preview from './reducers/preview';

const initialState = {};
const reducersList = {preview};
export const rootReducers = combineReducers(reducersList);

export function configureStore(initialState = {}){
    const store = createStore(rootReducers, initialState);
    return store;
}

export const store = configureStore(initialState); 

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//unsubscribe()
