import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';





const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('store', store);


console.log('store.getState(): ', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));







ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>, document.getElementById('root'));
