import s from './ContainerProjects.module.scss';
import Container from '../Container';

export default function ContainerProjects({ onClick, children }) {
  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.headWrapper}>
          <h2>Projects</h2>
          <label className={s.btnWrapper}>
            <button className={s.btn} onClick={onClick}></button>
            <p className={s.text}>Create a project</p>
          </label>
        </div>
        {children}
      </div>
    </Container>
  );
}
