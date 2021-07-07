import s from './TaskItem.module.scss';
import TaskInput from '../TaskInput';
import { useEffect } from 'react';
import { tasksOperations } from '../../redux/tasks';
import { useDispatch } from 'react-redux';

const TaskItem = ({ ...props }) => {
  const {
    id,
    title,
    scheduledHours,
    hoursPerDay,
    totalHours,
    currDate,
    onClick,
  } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (totalHours > scheduledHours)
      dispatch(tasksOperations.editScheduledTaskHours(id, totalHours));
  }, [totalHours, dispatch, id, scheduledHours]);

  return (
    <div className={s.card}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.itemName}>Scheduled hours</span>
          <span className={s.itemRezult}>{scheduledHours}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemName}>Spent hour/day</span>
          <TaskInput id={id} hoursPerDay={hoursPerDay} currDate={currDate} />
        </li>
        <li className={s.item}>
          <span className={s.itemName}>Hours spent</span>
          <span className={s.itemRezult}>{totalHours}</span>
        </li>
        <li className={s.item}>
          <button onClick={onClick} className={s.button} type="button"></button>
        </li>
      </ul>
    </div>
  );
};

export default TaskItem;
