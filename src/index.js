import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Reducers/store';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/tree" exact>
        <Provider store={Store}>
          <App editMode={false}/>
        </Provider>
      </Route>
      <Route path="/tree/edit">
        <Provider store={Store}>
          <App editMode={true}/>
        </Provider>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
