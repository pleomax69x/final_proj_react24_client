import { Link } from 'react-router-dom';

import logo from '../../img/Logo.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <Link to="/">
        <img src={logo} className={s.logo} alt="logo GoIT" />
      </Link>

      <div className={s.userMenu}>
        <>
          <span className={s.userName}>Username</span>
          <button
            type="button"
            className={s.logOutBtn}
            onClick={() => console.log('Click')}
          >
            Log out
          </button>
        </>
      </div>
    </div>
  );
};

export default Header;
