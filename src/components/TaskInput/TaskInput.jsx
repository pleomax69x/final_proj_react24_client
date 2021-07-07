import { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import s from './TaskInput.module.scss';

const HoursWasted = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: ' #181c27',
      // paddingTop: '2px',
      // paddingBottom: '2px',
    },
    '&.MuiInputBase-input': {
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    '& .MuiInputBase-root.Mui-error': {
      marginBottom: '0px',
      color: ' red',
    },
    //xz
    '& label.Mui-focused': {
      color: '#181c2799',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#181c2799',
    },
    // позиція помилки
    '& .MuiFormHelperText-root.Mui-error': {
      marginBottom: '0px',
      fontFamily: 'Montserrat',
      color: 'red',
      fontSize: '10px',
      position: 'absolute',
      top: '-18px',
      right: '-24px',
      width: '140px',
    },
    // число інпута
    '& > *': {
      width: ' 100%',
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      outline: 'none',
    },
    '@media screen and (max-width: 768px)': {
      '& .MuiFormHelperText-root.Mui-error': {},
      '&.MuiInputBase-input': {
        fontSize: '18px',
        lineHeight: '22px',
      },
    },
    '@media screen and (max-width: 1200px)': {
      '& .MuiFormHelperText-root.Mui-error': {
        textAlign: 'right',
      },
    },
  },
})(TextField);

const TaskInput = () => {
  const [noValid, setNoValid] = useState('');
  const [inputValue, setInputValue] = useState(0);

  const validation = value => {
    const num = Number(value);

    if (value.length > 1 && value[0] === '0') {
      setNoValid('number greater than 0');
      return false;
    }

    if (num < 0) {
      setNoValid('number greater than 0');
      return false;
    }
    if (isNaN(num)) {
      setNoValid('enter the number');
      return false;
    }

    if (num.toString().length > 2) {
      setNoValid('are you serious? 😠');
      return false;
    }
    setNoValid('');
    return true;
  };

  const handleOnChange = ({ target: { value } }) => {
    const isValid = validation(value);
    setInputValue(value);
  };
  return (
    <HoursWasted
      id="standard-error"
      // defaultValue=" "
      // value={inputValue}
      onChange={handleOnChange}
      error={noValid ? true : undefined}
      helperText={noValid}
      margin="none"
      className={s.input}
    />
  );
};

export default TaskInput;
