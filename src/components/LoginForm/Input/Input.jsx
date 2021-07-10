import { Field } from 'formik';
import styles from './input.module.scss';

const Input = ({
  name,
  type,
  placeholder,
  fieldStyle,
  descrStyle,
  value,
  error,
}) => {
  return (
    <label className={styles.label}>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={fieldStyle}
      />
      <p className={descrStyle}>{value}</p>
      {error}
    </label>
  );
};

export default Input;
