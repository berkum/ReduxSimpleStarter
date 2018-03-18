import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppUser from './components/app';
import App from './components/app-book'
import AppCombined from './components/app-combined'
import reducers from './reducers/';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="outerDiv">
            <div className="section">
                <AppUser />
            </div>
            <div className="section">
                <App />
            </div>
            <div className="section">
                <AppCombined />
            </div>

        </div>

  </Provider>
  , document.querySelector('.container'));
