import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksOperations, tasksSelectors } from '../../redux/tasks';
import { errorSelectors } from '../../redux/tasks';
import s from './СreatingTask.module.scss';

const СreatingTask = ({ onSave }) => {
  const [taskName, setTaskName] = useState('');
  const handleTaskName = e => {
    setTaskName(e.target.value);
  };

  const [hours, setHours] = useState('');
  const handleHours = e => {
    setHours(e.target.value);
  };

  const tasks = useSelector(tasksSelectors.getTasks);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    // if (tasks.some(tasks => tasks.name === taskName)) {
    //   return alert(
    //     `Name "${taskName}" already exists, please enter another name.`,
    //   );
    // } else
    dispatch(tasksOperations.addTasks(taskName, hours));

    console.log(tasks);
    console.log(taskName, hours);
    onSave();

    setTaskName('');
    setHours('');
  };

  return (
    <form className={s.tasks_form} onSubmit={handleSubmit}>
      <h2 className={s.form_title}>Сreating a task</h2>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="name"
          placeholder=" "
          value={taskName}
          onChange={handleTaskName}
        />
        <label className={s.form_lable}>Tasks name</label>
      </div>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="hours"
          placeholder=" "
          value={hours}
          onChange={handleHours}
        />
        <label className={s.form_lable}>Scheduled hours</label>
      </div>
      <button className={s.btn_submit}>Ready</button>
    </form>
  );
};

export default СreatingTask;
