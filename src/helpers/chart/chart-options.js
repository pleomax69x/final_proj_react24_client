// eslint-disable-next-line import/no-anonymous-default-export
export default {
  responsive: false,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'round',
        boxWidth: 10,
        boxHeight: 10,
        font: {
          size: 14,
        },
      },
    },
    title: {
      font: {
        size: 18,
      },
      padding: 5,
      display: true,
      text: 'Burndown Chart (Calendar Team)',
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        padding: 20,
        z: -1,
        drawTicks: false,
      },
      ticks: {
        textStrokeWidth: 0,
        backdropPadding: 10,
        backdropColor: 'rgb(220,0,0)',
        z: -1,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Man hours',
      },
      min: 0,
    },
  },
};
