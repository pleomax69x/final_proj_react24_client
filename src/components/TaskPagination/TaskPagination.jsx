import React, { useState, useEffect } from 'react';
import currentDate from '../../helpers/currentDate';
import s from './TaskPagination.module.scss';

const TaskPagination = ({ sprint, pagDate, pagIndex }) => {
  const arr = sprint?.listOfDates;

  const [day, setDay] = useState(1);
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
    try {
      pagDate(date);
      // pagIndex(arr?.indexOf(date));
    } catch (e) {
      console.log(e);
      // pagIndex(0);
    }

    console.log(day, date);
  }, [day, date, pagDate]);

  return (
    <div>
      <div className={s.current_date_wrapper}>
        <div className={s.days_wrapper}>
          {day > 1 ? (
            <button
              className={s.back_button}
              type="button"
              onClick={handlePrevDay}
            ></button>
          ) : null}
          <p className={s.сurrent_day}>
            {day}
            <span className={s.slash_days}>/</span>
            <span className={s.duration_days}>{arr?.length}</span>
          </p>
          {day < arr?.length ? (
            <button
              className={s.forward_button}
              onClick={handleNextDay}
            ></button>
          ) : null}
        </div>
        <p className={s.date}>{date}</p>
      </div>
    </div>
  );
};

export default TaskPagination;
