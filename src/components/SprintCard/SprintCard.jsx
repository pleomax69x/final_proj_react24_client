import s from './SprintCard.module.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ ...props }) => {
  const { title, descr } = props;
  return (
    <li className={s.card}>
      <Link to="/projects" className={s.link}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.descr}>{descr}</p>
      </Link>
      <button className={s.cart}></button>
    </li>
  );
};

export default ProjectCard;
