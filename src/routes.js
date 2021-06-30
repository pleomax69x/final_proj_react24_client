const routes = {
  registration: '/registration',
  login: '/login',
  projects: '/projects',
  project: '/projects/:projectId',
  sprints: '/projects/:projectId/sprints',
  sprint: '/projects/:projectId/sprints/:sprintId',
  tasks: '/projects/:projectId/sprints/:sprintId/tasks',
  task: '/projects/:projectId/sprints/:sprintId/tasks/:taskId',
};

export default routes;
