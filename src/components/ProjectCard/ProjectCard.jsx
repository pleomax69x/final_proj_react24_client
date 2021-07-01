import styles from './ProjectCard.module.scss';
const ProjectCard = ({ ...props }) => {
  const { title, descr, to } = props;
  return (
    <li className={styles.card}>
      <div onClick={to} className={styles.link}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.descr}>{descr}</p>
      </div>
      <button className={styles.cart}></button>
    </li>
  );
};

export default ProjectCard;
