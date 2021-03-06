import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer);
console.log(1, store.getState());
store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
