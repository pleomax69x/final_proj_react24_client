import s from '../sprints.module.scss';
const AddPeople = ({ toggleModal }) => {
  return (
    <label className={s.btnWrapper_add}>
      <button
        className={s.addpeople}
        type="button"
        onClick={toggleModal}
      ></button>
      <p className={s.text_add}>Add people</p>
    </label>
  );
};

export default AddPeople;
