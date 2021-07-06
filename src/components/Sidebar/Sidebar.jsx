import { NavLink, Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const fakeData = [
    {
      title: '1-project',
      descr: 'It is my 1 project',
    },
    {
      title: '2-project',
      descr: 'It is my 2 project',
    },
    {
      title: '3-project',
      descr: 'It is my 3 project',
    },
    {
      title: '4-project',
      descr: 'It is my 1 project',
    },
    {
      title: '1-project',
      descr: 'It is my 1 project',
    },
    {
      title: '2-project',
      descr: 'It is my 2 project',
    },
    {
      title: '3-project',
      descr: 'It is my 3 project',
    },
    {
      title: '4-project',
      descr: 'It is my 1 project',
    },
    {
      title: '1-project',
      descr: 'It is my 1 project',
    },
    {
      title: '2-project',
      descr: 'It is my 2 project',
    },
    {
      title: '3-project',
      descr: 'It is my 3 project',
    },
    {
      title: '4-project',
      descr: 'It is my 1 project',
    },
    {
      title: '1-project',
      descr: 'It is my 1 project',
    },
    {
      title: '2-project',
      descr: 'It is my 2 project',
    },
    {
      title: '3-project',
      descr: 'It is my 3 project',
    },
    {
      title: '4-project',
      descr: 'It is my 1 project',
    },
    {
      title: '1-project',
      descr: 'It is my 1 project',
    },
    {
      title: '2-project',
      descr: 'It is my 2 project',
    },
    {
      title: '3-project',
      descr: 'It is my 3 project',
    },
    {
      title: '4-project',
      descr: 'It is my 1 project',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Link to="/projects" className={styles.linkProjects}>
        Show projects
      </Link>
      <ul className={styles.list}>
        {fakeData.map(item => (
          <li key={item.title} className={styles.listItem}>
            <NavLink
              to="/projects"
              className={styles.itemLink}
              activeClassName={styles.linkProjectsActive}
            >
              <h2>{item.title}</h2>
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
