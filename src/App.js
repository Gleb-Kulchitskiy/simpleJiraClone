import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthorizedRoutes from './components';

import store from './redux'

import 'normalize.css';

function App() {
  return (
    <span className="App">
      <Provider store={store}>
        <Router>
          <AuthorizedRoutes/>
        </Router>
      </Provider>
    </span>
  );
}

export default App;
