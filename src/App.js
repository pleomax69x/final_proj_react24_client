import React, { useCallback, useEffect, Suspense } from 'react';
import './App.scss';
import 'modern-normalize/modern-normalize.css';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import routesData from './routes';

function App() {
  const dispatch = useDispatch();
  const checkUser = useCallback(
    () => dispatch(authOperations.getUserData()),
    [dispatch],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkUser(), []);
  return (
    <>
      <Header />
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          {routesData.routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.name} {...route} />
            ) : (
              <PublicRoute key={route.name} {...route} />
            ),
          )}
          <Redirect to={routesData.pathes.homePage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
