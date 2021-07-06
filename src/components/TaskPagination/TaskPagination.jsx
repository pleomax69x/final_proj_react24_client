import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import currentDate from '../../helpers/currentDate';
import s from './TaskPagination.module.scss';

const TaskPagination = ({ sprintId, pagDate }) => {
  const sprints = useSelector(sprintsSelectors.getSprints);
  const sprint = sprints?.find(el => el._id === sprintId);
  const arr = sprint.listOfDates;

  // const data = task1.hoursPerDay.find(el => el.date === "22-12-2021")

  const [day, setDay] = useState(arr.indexOf(currentDate) + 1);
  const [date, setDate] = useState(currentDate);

  const handlePrevDay = e => {
    if (day > 1) {
      setDay(day - 1);
      setDate(arr[day - 2]);
    }
  };

  const handleNextDay = e => {
    if (day < arr.length) {
      setDay(day + 1);
      setDate(arr[day]);
    }
  };

  useEffect(() => {
    pagDate(date);
    console.log(day, date);
  }, [day, date]);

  return (
    <div>
      <div className={s.current_date_wrapper}>
        <div className={s.days_wrapper}>
          <button
            className={s.back_button}
            type="button"
            onClick={handlePrevDay}
          ></button>
          <p className={s.сurrent_day}>
            {day}
            <span className={s.slash_days}>/</span>
            <span className={s.duration_days}>{arr.length}</span>
            {/* sprint.arr */}
          </p>
          <button className={s.forward_button} onClick={handleNextDay}></button>
        </div>
        <p className={s.date}>{date}</p>
      </div>
    </div>
  );
};

export default TaskPagination;
