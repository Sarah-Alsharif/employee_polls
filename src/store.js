// src/store.js
import { createStore } from 'redux';
import reducers from './reducers';
import Middleware from './Middleware';

const store = createStore(reducers, Middleware);

export default store;
