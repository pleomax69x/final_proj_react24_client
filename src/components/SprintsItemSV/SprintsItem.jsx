import s from './SprintsItem.module.scss';
import { Link } from 'react-router-dom';

const SprintItem = () => {
  return (
    <div>
      <li className={s.sprintItem}>
        <Link className={s.projectLink}>
          <div className={s.date}>
            <h3 className={s.cardTitle}>Title</h3>
            <p className={s.cardDateContainer}>
              Start date <span className={s.cardDate}>start</span>
            </p>
            <p className={s.cardDateContainer}>
              End date <span className={s.cardDate}>end</span>
            </p>
            <p className={s.cardDateContainer}>
              Duration <span className={s.cardDate}>duration</span>
            </p>
          </div>
        </Link>
        <button type="button" className={s.buttonDelete} onClick={'deleteItem'}>
          X
        </button>
      </li>
    </div>
  );
};

export default SprintItem;
