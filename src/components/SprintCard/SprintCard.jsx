import s from './SprintCard.module.scss';

const SprintCard = ({ title, date, duration, to, onClick }) => {
  return (
    <li className={s.card}>
      <div onClick={to} className={s.link}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.descr}>{date}</p>
        <p className={s.descr}>{duration}</p>
      </div>
      <button type="button" onClick={onClick} className={s.cart}></button>
    </li>
  );
};

export default SprintCard;
