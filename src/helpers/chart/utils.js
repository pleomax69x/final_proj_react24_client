import chartOptions from './chart-options';
import dataOptions from './data-options';

const getHoursSumm = tasksHours => {
  return tasksHours.reduce((accumulator, item) => accumulator + item);
};
const createPerfectChartData = (tasks, sprintDuration) => {
  const sprintHours = getHoursSumm(tasks.map(item => item.scheduledHours));
  const result = [];
  for (let i = 0; i <= sprintDuration; i++) {
    result.push(sprintHours - i * (sprintHours / sprintDuration));
  }
  return result;
};

const createActualChartData = (tasks, sprintDuration) => {
  let sprintHours = getHoursSumm(tasks.map(item => item.scheduledHours));
  const result = [sprintHours];
  for (let i = 0; i < sprintDuration; i++) {
    const hourPerDaySumm = tasks
      .map(task => task.hoursPerDay[i].hours)
      .reduce((acc, item) => acc + item);
    sprintHours -= hourPerDaySumm;
    result.push(sprintHours);
  }
  return result;
};

const formateDate = date => {
  const parseDate = date.split('-');
  parseDate[1] -= 1;
  const newdate = new Date(...parseDate);
  const options = {
    month: 'short',
    day: 'numeric',
  };
  const resDate = new Intl.DateTimeFormat('en-US', options).format(newdate);
  return resDate;
};
const createXAxisLabels = task => {
  return ['Planning', ...task.hoursPerDay.map(item => formateDate(item.date))];
};

export const getChartOptions = sprintName => {
  const options = chartOptions;
  options.plugins.title.text = `${sprintName} Burndown Chart (Calendar Team)`;

  return options;
};

export const getChartData = (tasks, sprintDuration) => {
  console.log('getChartData', tasks);
  const data = dataOptions;
  data.labels = createXAxisLabels(tasks[0]);
  data.datasets[0].data = createPerfectChartData(tasks, sprintDuration);
  data.datasets[1].data = createActualChartData(tasks, sprintDuration);
  console.log(data);
  return data;
};
