import style from './Input.module.scss';
import Error from '../../pages/Error';

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  inputStyle,
  labelStyle,
  labelValue,
  touched,
  message,
}) => {
  return (
    <div className={style.formField}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={inputStyle}
      />
      <label className={labelStyle}>{labelValue}</label>
      <Error touched={touched} message={message} />
    </div>
  );
};

export default Input;
