import React, { useCallback, useEffect } from 'react';
import './App.css';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/pages/register';
import Login from './components/pages/login';
import Project from './components/pages/project';

import Header from './components/Header';
import Projects from './components/pages/projects';
import Sprints from './components/pages/sprints';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';

function App() {
  const dispatch = useDispatch();
  const checkUser = useCallback(
    () => dispatch(authOperations.getUserData()),
    [dispatch],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkUser(), []);
  return (
    <Router>
      <Header />

      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/register">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/sprints">Sprints</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/sprints">
            <Sprints />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
