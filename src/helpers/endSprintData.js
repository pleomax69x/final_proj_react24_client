const endSprintData = sprints => {
  const endSprint = sprints[sprints.length - 1].listOfDates;
  console.log('endSprint>>', endSprint);
  const endData = endSprint[endSprint.length - 1];
  console.log('endData>>', endData);
  return endData;
};

export default endSprintData;
