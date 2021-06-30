import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprintsOperations from '../../redux/sprints/sprints-operations';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import projectsSelectors from '../../redux/projects/projects-selectors';
import s from './СreatingSprint.module.scss';

const СreatingSprint = ({ onSave }) => {
  const [spName, setspName] = useState('');
  const setSpName = e => {
    setspName(e.target.value);
  };

  const [number, setNumber] = useState('');
  const updateNumber = e => {
    setNumber(e.target.value);
  };

  const [data, setDate] = useState('2021-06-01');
  const updateDate = e => {
    setDate(e.target.value);
  };

  // Current date
  useEffect(() => {
    var today =
      new Date().getFullYear() +
      '-' +
      ('0' + (new Date().getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + new Date().getDate()).slice(-2);
    setDate(today);
  }, []);

  const projects = useSelector(projectsSelectors.getProjects);
  const sprints = useSelector(sprintsSelectors.getSprints);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    // if (sprints.some(sprint => sprint.name === spName)) {
    //   return alert(
    //     `Name "${spName}" already exists, please enter another name.`,
    //   );
    // } else
    dispatch(sprintsOperations.addSprint(spName, data, number));

    console.log(projects, sprints);
    console.log(spName, data, number);
    onSave();

    setspName('');
    setNumber('');
    setDate('');
  };

  return (
    <form className={s.sprint_form} onSubmit={handleSubmit}>
      <h2 className={s.form_title}>Creating a sprint</h2>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="name"
          placeholder=" "
          value={spName}
          onChange={setSpName}
        />
        <label className={s.form_lable}>The name of the sprint</label>
      </div>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="date"
          name="date"
          placeholder=" "
          value={data}
          onChange={updateDate}
        />
        <label className={s.form_lable}>Start date</label>
      </div>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="duration"
          placeholder=" "
          value={number}
          onChange={updateNumber}
        />
        <label className={s.form_lable}>Duration</label>
      </div>
      <button className={s.btn_submit}>Ready</button>
    </form>
  );
};

export default СreatingSprint;
