import s from './peopleList.module.scss';
const PeopleList = ({ teammates, del, idTeammate }) => {
  console.log('idProjectTeammate', idTeammate);
  const teammateArray = teammates.flat();
  return (
    <div>
      <ul className={s.memberList}>
        {teammates &&
          teammateArray.map(email => (
            <li className={s.member} key={email.id}>
              <p>{email.email}</p>
              <button
                type="button"
                onClick={() => del(email.id)}
                className={s.buttonDelete}
              ></button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PeopleList;
