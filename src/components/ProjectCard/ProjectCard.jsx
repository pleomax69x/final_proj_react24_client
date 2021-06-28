import styles from './ProjectCard.module.scss';
import { Link } from 'react-router-dom';
const ProjectCard = ({ ...props }) => {
  const { title, descr } = props;
  return (
    <li className={styles.card}>
      <Link to="/projects" className={styles.link}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.descr}>{descr}</p>
      </Link>
      <button className={styles.cart}></button>
    </li>
  );
};

export default ProjectCard;
