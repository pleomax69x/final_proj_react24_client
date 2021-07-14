const endSprintData = (data, number) => {
  let startDate = data;
  startDate = new Date(startDate.replace(/-/g, '/'));

  let endDate = '',
    noOfDaysToAdd = number,
    count = 0;
  let d = '';
  let arrData = [];

  while (count < noOfDaysToAdd) {
    endDate = new Date(startDate.setDate(startDate.getDate() + 1));

    if (endDate.getDay() !== 0 && endDate.getDay() !== 1) {
      d = new Date(startDate.setDate(startDate.getDate()))
        .toISOString()
        .slice(0, 10);

      arrData.push(d);

      count++;
    }
  }
  return d;
};

export default endSprintData;
