import NameInputEdit from '../../sprints/NameInputEdit/NameInputEdit';
import s from './TaskHeader.module.scss';
import { useState } from 'react';

const TaskHeader = ({
  currSprint,
  toggleModal,
  filter,
  onChange,
  editName,
  tasks,
  owner,
}) => {
  const [displayInput, setDisplay] = useState(null);

  const handleInput = () => {
    if (displayInput === null) {
      setDisplay({ display: 'block' });
    } else if (displayInput !== null) {
      setDisplay(null);
    }
  };

  return (
    <div className={s.wrapper_all}>
      <div className={s.wrapper_wr}>
        <NameInputEdit
          currItemName={currSprint?.title}
          editName={editName}
          owner={owner}
        />
        <div className={s.wrap_tasks}>
          <button onClick={toggleModal} className={s.add_task_button}></button>
          <p className={s.task_name}>Create a task</p>
        </div>
      </div>
      <div className={s.table_list_wrapper}>
        <ul className={s.table_list}>
          <li className={s.table_item}>
            <p className={s.table_title}>Task</p>
          </li>
          <li className={s.table_item}>
            <p className={s.table_title}>Scheduled hours</p>
          </li>
          <li className={s.table_item}>
            <p className={s.table_title}>Spent hour / day</p>
          </li>
          <li className={s.table_item}>
            <p className={s.table_title}>Hours spent</p>
          </li>
        </ul>
        {tasks.length >= 5 || filter.length > 0 ? (
          <form className={s.search_form}>
            <input
              className={s.search_form_input}
              style={displayInput}
              type="text"
              name="filter"
              placeholder=""
              value={filter}
              onChange={onChange}
            />
            <button
              type="button"
              onClick={handleInput}
              className={s.search_form_button}
            ></button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default TaskHeader;
