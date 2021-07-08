import s from './SprintsItem.module.scss';

const SprintItem = ({ sprints, to, del }) => {
  // const listOfDates = sprints.map(el => el.listOfDates);
  // const EndDates = listOfDates.map(el => el[el.length - 1]);
  // console.log(EndDates);

  return (
    <ul className={s.sprintItem_list}>
      {sprints?.map(sprint => (
        <li className={s.sprintItem} key={sprint._id}>
          <div onClick={() => to(sprint._id)} className={s.projectLink}>
            <div className={s.date}>
              <h3 className={s.cardTitle}>{sprint.title}</h3>
              <p className={s.cardDateContainer}>
                Start date <span className={s.cardDate}>{sprint.date}</span>
              </p>
              <p className={s.cardDateContainer}>
                End date <span className={s.cardDate}>endData</span>
              </p>
              <p className={s.cardDateContainer}>
                Duration <span className={s.cardDate}>{sprint.duration}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => del(sprint._id)}
            className={s.buttonDelete}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default SprintItem;
