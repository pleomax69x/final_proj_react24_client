import { NavLink, Link } from 'react-router-dom';
import styles from './SidebarSprints.module.scss';

const Sidebar = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/projects" className={styles.linkProjects}>
        Show projects
      </Link>
      <ul className={styles.list}>
        {data.map(item => (
          <li key={item._id} className={styles.listItem}>
            <NavLink
              to={`/projects/${item._id}`}
              className={styles.itemLink}
              activeClassName={styles.linkProjectsActive}
            >
              <h2>{item.name}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.btnWrapper}>
        <button type="button" className={styles.btn}></button>
        <p className={styles.text}>Create a project</p>
      </div>
    </div>
  );
};

export default Sidebar;
