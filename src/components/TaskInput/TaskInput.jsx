import { useState, useEffect } from 'react';
import { tasksOperations } from '../../redux/tasks';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import s from './TaskInput.module.scss';
import { useDispatch } from 'react-redux';

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
    '& .MuiInputBase-input.MuiInput-input': {
      textAlign: 'end',
    },
    '& .MuiInputBase-root.Mui-error': {
      marginBottom: '0px',
      color: ' red',
    },
    '& label.Mui-focused': {
      color: '#181c2799',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#181c2799',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginBottom: '0px',
      fontFamily: 'Montserrat',
      color: 'red',
      fontSize: '10px',
      position: 'absolute',
      textAlign: 'right',
      top: '-18px',
      right: '-10px',
      width: '140px',
    },
    '& > *': {
      width: ' 100%',
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      outline: 'none',
    },
    '@media screen and (min-width: 768px)': {
      '& .MuiFormHelperText-root.Mui-error': {},
      '& .MuiInputBase-input.MuiInput-input': {
        fontSize: '18px',
        lineHeight: '22px',
      },
    },
    '@media screen and (min-width: 1200px)': {
      '& .MuiFormHelperText-root.Mui-error': {
        textAlign: 'center',
        right: '-15px',
      },
      '& .MuiInputBase-input.MuiInput-input': {
        textAlign: 'left',
      },
    },
  },
})(TextField);

const TaskInput = ({ id, hoursPerDay, currDate }) => {
  const dispatch = useDispatch();

  const [noValid, setNoValid] = useState('');
  const [inputValue, setInputValue] = useState(hoursPerDay);

  useEffect(() => setInputValue(hoursPerDay), [hoursPerDay]);

  const validation = value => {
    const num = Number(value);
    if (value.length > 1 && value[0] === '0') {
      setNoValid('number greater than 0');
      return false;
    }

    if (num <= 0) {
      setNoValid('number greater than 0');
      return false;
    }
    if (isNaN(num)) {
      setNoValid('enter the number');
      return false;
    }

    if (num > 24) {
      setNoValid('are you serious? 😠');
      return false;
    }
    setNoValid('');
    return true;
  };

  const handleOnChange = ({ target: { value } }) => {
    setInputValue(value);
    const isValid = validation(value);
    if (isValid) {
      dispatch(tasksOperations.editTaskHours(id, currDate, Number(value)));
    }
  };
  return (
    <HoursWasted
      id={id}
      value={inputValue}
      onChange={handleOnChange}
      error={noValid ? true : false}
      helperText={noValid}
      margin="none"
      className={s.input}
      autoComplete="off"
      defaultValue=" "
    />
  );
};

export default TaskInput;
