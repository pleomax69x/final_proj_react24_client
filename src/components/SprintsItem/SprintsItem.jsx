import s from './SprintsItem.module.scss';
// import { Link } from 'react-router-dom';

const SprintItem = ({ title, date, duration, to, onClick }) => {
  return (
    <div>
      <li className={s.sprintItem}>
        <div onClick={to} className={s.projectLink}>
          <div className={s.date}>
            <h3 className={s.cardTitle}>{title}</h3>
            <p className={s.cardDateContainer}>
              Start date <span className={s.cardDate}>{date}</span>
            </p>
            <p className={s.cardDateContainer}>
              End date <span className={s.cardDate}>end</span>
            </p>
            <p className={s.cardDateContainer}>
              Duration <span className={s.cardDate}>{duration}</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClick}
          className={s.buttonDelete}
          // onClick={deleteItem}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default SprintItem;
