import React from 'react';
import s from './Message.module.scss';

const getMessage = type => {
  switch (type) {
    case 'projects':
      return 'Your projects collection is empty, use the "Create project" button';
    case 'sprints':
      return 'Your project has no sprints, use the "Create Sprint" button';
    case 'tasks':
      return 'Your sprint has no tasks, use the "Create Task" button. You need to add at least 3 tasks to see analytics';
    default:
      return '';
  }
};

const Message = ({ type }) => {
  const message = getMessage(type);
  return <h2 className={s.messageContainer}>{message}</h2>;
};

export default Message;
