import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isSignIn = useSelector(authSelectors.getIsAuthorized);

  return (
    <Route {...routeProps}>
      {isSignIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
