import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { getChartOptions, getChartData } from '../../../helpers/chart/utils';

// var ctx = document.getElementById('myChart');

const SprintChart = ({ onClose, tasks, sprintDuration, sprintTitle }) => {
  var chart = null;
  useEffect(() => {
    const ctx = document.getElementById('BurndownChart');
    const data = getChartData(tasks, sprintDuration); // eslint-disable-next-line
    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: getChartOptions(sprintTitle),
    });

    chart.canvas.parentNode.style.height = '100vh';
    chart.canvas.parentNode.style.width = '100vw';
  }, []);
  return <div>{chart}</div>;
};

export default SprintChart;
