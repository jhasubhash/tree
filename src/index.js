import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Reducers/store';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { setServiceWorkerInit, setServiceWorkerUpdate } from './Reducers/actions';

const createHistory = require("history").createBrowserHistory;

const history = createHistory();

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL} history={history}>
    <Switch>
      <Route path="/" exact>
        <Provider store={Store}>
          <App qStr={window.location.search}/>
        </Provider>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => setServiceWorkerInit(),
  onUpdate: reg => setServiceWorkerUpdate(reg)
});