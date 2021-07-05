const sprintData = (data, number) => {
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
      //Date.getDay() gives weekday starting from 0(Sunday) to 6(Saturday)
      count++;
    }
  }
  // console.log(d, arrData);
  return arrData;
};

export default sprintData;
