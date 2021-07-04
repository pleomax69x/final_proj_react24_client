import styles from './ProjectCard.module.scss';
const ProjectCard = ({ projects, to, del }) => {
  return (
    <ul className={styles.list}>
      {projects?.map(project => (
        <li className={styles.card} key={project._id}>
          <div onClick={() => to(project._id)} className={styles.link}>
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.descr}>{project.description}</p>
          </div>
          <button
            type="button"
            onClick={() => del(project._id)}
            className={styles.cart}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectCard;
