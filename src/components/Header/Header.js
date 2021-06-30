import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
// import { ReactComponent as LogOut } from '../../img/LogOut1.svg';
import logo from '../../img/Logo.svg';
import Container from '../Container/Container';
import s from './Header.module.scss';

const Header = () => {
  let isAuthenticated = true;

  const dispatch = useDispatch();
  const logout = useCallback(
    () => dispatch(authOperations.logout()),
    [dispatch],
  );

  return (
    <Container>
      <div className={s.header}>
        <Link to="/">
          <img src={logo} className={s.logo} alt="logo GoIT" />
        </Link>
        {isAuthenticated && (
          <div className={s.userMenu}>
            <span className={s.userName}>Username</span>
            <button type="button" className={s.logOutBtn} onClick={logout}>
              {/* <LogOut fill={'red'} /> */}
              <span className={s.txtBtn}>Log out</span>
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
