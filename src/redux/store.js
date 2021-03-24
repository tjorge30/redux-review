import { createStore } from 'redux';
import moviesReducer from './moviesReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';




let store = createStore(moviesReducer, devToolsEnhancer())

export default store