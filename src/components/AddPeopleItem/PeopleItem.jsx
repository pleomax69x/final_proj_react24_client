import s from '../../sass/utils/register.module.scss';

const AddPeople = ({ toggleModal }) => {
  return (
    <div>
      <h2>Add people</h2>
      <button
        type="button"
        className={s.addPeopleBtn}
        onClick={toggleModal}
      ></button>
    </div>
  );
};

export default AddPeople;
