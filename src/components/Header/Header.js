import { Link } from 'react-router-dom';

// import { ReactComponent as LogOut } from '../../img/LogOut1.svg';
import logo from '../../img/Logo.svg';
import s from './Header.module.scss';

const Header = () => {
  let isAuthenticated = true;

  return (
    <div className={s.header}>
      <Link to="/">
        <img src={logo} className={s.logo} alt="logo GoIT" />
      </Link>
      {isAuthenticated && (
        <div className={s.userMenu}>
          <span className={s.userName}>Username</span>
          <button
            type="button"
            className={s.logOutBtn}
            onClick={() => console.log('Click')}
          >
            {/* <LogOut fill={'red'} /> */}
            <span className={s.txtBtn}>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
