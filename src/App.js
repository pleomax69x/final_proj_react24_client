import React, { useCallback, useEffect } from 'react';
import './App.css';
import 'modern-normalize/modern-normalize.css';
import {
  BrowserRouter as Router,
  Switch,
  // Route, Link
} from 'react-router-dom';
import Register from './components/pages/register';
import Login from './components/pages/login';
import Project from './components/pages/project';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

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
          <PublicRoute path="/register" redirectTo="/projects" restricted>
            <Register />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/projects" restricted>
            <Login />
          </PublicRoute>
          <PrivateRoute path="/project" redirectTo="/register">
            <Project />
          </PrivateRoute>
          <PrivateRoute path="/projects" redirectTo="/register">
            <Projects />
          </PrivateRoute>
          <PrivateRoute path="/sprints">
            <Sprints />
          </PrivateRoute>
          <PublicRoute path="/" redirectTo="/projects" restricted>
            <Register />
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
