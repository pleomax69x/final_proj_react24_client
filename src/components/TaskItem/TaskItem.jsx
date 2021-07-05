import s from './TaskItem.module.scss';

const TaskItem = ({ ...props }) => {
  const { title, scheduledHours, hoursPerDay, totalHours, onClick } = props;
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
          <input className={s.input} type="number" placeholder={hoursPerDay} />
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
