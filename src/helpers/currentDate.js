const currentDate =
  new Date().getFullYear() +
  '-' +
  ('0' + (new Date().getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + new Date().getDate()).slice(-2);

export default currentDate;
