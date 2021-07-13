import { useEffect, useState } from 'react';
import s from './ContainerProjects.module.scss';
import Container from '../../Container';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import { projectsActions } from '../../../redux/projects';

export default function ContainerProjects({ onClick, children }) {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const userId = useSelector(authSelectors.getUserId);

  const handleFilterChange = e => {
    console.log('handleFilterChange', e.target.dataset);
    setFilter(e.target.dataset.value);
  };

  useEffect(() => {
    console.log('filter', filter);
    dispatch(projectsActions.changeFilter(filter));
  }, [filter, dispatch]);

  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.headWrapper}>
          <h2>Projects</h2>
          <div className={s.filterWrapper}>
            <button
              data-value=""
              onClick={handleFilterChange}
              className={
                filter === '' ? [s.filterBtn, s.current].join(' ') : s.filterBtn
              }
            >
              All
            </button>
            <button
              data-value={userId}
              onClick={handleFilterChange}
              className={
                filter !== '' ? [s.filterBtn, s.current].join(' ') : s.filterBtn
              }
            >
              My Projects
            </button>
          </div>
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
