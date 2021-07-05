// eslint-disable-next-line import/no-anonymous-default-export
export default {
  datasets: [
    {
      label: 'Planned Remaining Work',
      fill: false,
      borderColor: 'rgb(255, 36, 36)',
      tension: 0.1,
      backgroundColor: 'rgb(255, 36, 36)',
    },
    {
      label: 'Actual remaining work in hours',
      cubicInterpolationMode: 'monotone',
      fill: false,
      borderColor: 'rgb(36, 94, 255)',
      tension: 0.1,
      backgroundColor: 'rgb(36, 94, 255)',
    },
  ],
};
