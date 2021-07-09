import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { sprintsSelectors } from '../../redux/sprints';
import currentDate from '../../helpers/currentDate';
import s from './TaskPagination.module.scss';

const TaskPagination = ({ sprintId, pagDate, pagIndex }) => {
  const sprints = useSelector(sprintsSelectors.getSprints);

  const sprint = sprints?.find(el => el._id === sprintId);

  const arr = sprint?.listOfDates;

  const [day, setDay] = useState(1);
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    if (arr) {
      const currDateIndex = arr.indexOf(currentDate);
      if (currDateIndex >= 0) setDay(arr.indexOf(currentDate) + 1);
      else setDay(1);
    }
  }, [setDay, arr]);

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
    const currDateIndex = arr.indexOf(currentDate);
    if (currDateIndex >= 0) pagIndex(arr?.indexOf(date));
    else pagIndex(0);
  }, [day, date, pagDate, pagIndex, arr]);

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
