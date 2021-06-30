import { useState } from 'react';
import React from 'react';
import styles from './PageOneProject.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Pageoneproject = () => {
  const [newSprint, setNewSprint] = useState([
    {
      name: 'Sprint Burndown Chart 1',
      dataOpen: '10 Jul',
      dataClose: '22 Jul',
      number: '226',
    },
    {
      name: 'Sprint Burndown Chart 2',
      dataOpen: '10 Jul',
      dataClose: '22 Jul',
      number: '226',
    },
    {
      name: 'Sprint Burndown Chart 3',
      dataOpen: '10 Jul',
      dataClose: '22 Jul',
      number: '226',
    },
    {
      name: 'Sprint Burndown Chart 4',
      dataOpen: '10 Jul',
      dataClose: '22 Jul',
      number: '226',
    },
  ]);

  const [newProject, setnewProject] = useState([
    {
      name: 'Project 1',
    },

    {
      name: 'Very long project name',
    },
    {
      name: 'Project 3',
    },
  ]);

  return (
    <>
      <div className={styles.container_projectSprint}>
        <div className={styles.projectSprint_item}>
          <label className={styles.btnWrapper_BackProject}>
            <button type="button" className={styles.btnBackProject}></button>
            <p>Show projects</p>
          </label>

          <div className={styles.projectgroup}>
            <ul className={styles.project_list}>
              {newProject.map(({ name }) => (
                <li className={styles.project_list_item} key={uuidv4()}>
                  {name}
                </li>
              ))}
            </ul>
            <label className={styles.btnWrapper_project}>
              <button className={styles.btn_project}></button>
              <p className={styles.text_project}>Create a project</p>
            </label>
          </div>
        </div>

        <div className={styles.sprints}>
          <div className={styles.sprints_btn}>
            <h2 className={styles.project_tittle}>Project 1</h2>
            <button className={styles.project_create}></button>

            <label className={styles.btnWrapper}>
              <button className={styles.btn}></button>
              <p className={styles.text}>Create a sprint</p>
            </label>

            <label className={styles.btnWrapper_add}>
              <button className={styles.addpeople}></button>
              <p className={styles.text_add}>Add people</p>
            </label>
          </div>

          <ul className={styles.sprint_list}>
            {newSprint.map(({ name, dataOpen, dataClose, number }) => (
              <>
                <li className={styles.sprint_list_item} key={uuidv4()}>
                  <h3 className={styles.sprint_tittle}> {name}</h3>
                  <div className={styles.sprint_box}>
                    <p className={styles.sprint_list_item_tittle}>Start date</p>
                    <p className={styles.sprint_list_item_tittle}>{dataOpen}</p>
                  </div>
                  <div className={styles.sprint_box}>
                    <p className={styles.sprint_list_item_tittle}>End date</p>
                    <p className={styles.sprint_list_item_tittle}>
                      {dataClose}
                    </p>
                  </div>
                  <div className={styles.sprint_box}>
                    <p className={styles.sprint_list_item_tittle}>Duration</p>
                    <p className={styles.sprint_list_item_tittle}>{number}</p>
                  </div>
                  <button
                    onClick=""
                    type="button"
                    className={styles.btndel}
                  ></button>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pageoneproject;
