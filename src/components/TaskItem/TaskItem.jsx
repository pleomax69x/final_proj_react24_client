import s from './TaskItem.module.scss';

const TaskItem = () => {
  return (
    <div className={s.card}>
      <h2 className={s.title}>Title</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.itemName}>Scheduled hours</span>
          <span className={s.itemRezult}>Hours planned</span>
        </li>
        <li className={s.item}>
          <span className={s.itemName}>Spent hour/day</span>
          <input className={s.input} type="number" />
        </li>
        <li className={s.item}>
          <span className={s.itemName}>Hours spent</span>
          <span className={s.itemRezult}>Hours wasted</span>
        </li>
        <li className={s.item}>
          <button onClick={'deleteItem'} className={s.button} type="button">
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TaskItem;
