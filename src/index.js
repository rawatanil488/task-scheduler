import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Style
import './App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Router
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Views
import App from './views/App';
import TaskForm from './views/TaskForm'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="App">
        <div className="App-header">
          <h1>Task Manager</h1>
        </div>
        <Router>
          <Switch>
            <Route exact path="/home" component={App} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/addtask" component={TaskForm} />
          </Switch>
        </Router>
      </div>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
