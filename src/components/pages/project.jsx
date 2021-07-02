import Sidebar from '../Sidebar/Sidebar';
import styles from './project.module.scss';

const Project = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <h1>Project</h1>
    </div>
  );
};

export default Project;
