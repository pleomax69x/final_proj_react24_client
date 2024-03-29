import { lazy } from 'react';

const pathes = {
  homePage: '/',
  loginPage: '/login',
  registerPage: '/register',
  project: '/projects',
  sprints: '/projects/:projectId',
  tasks: '/projects/:projectId/:sprintId',
};

const ProjectsPage = lazy(() =>
  import('./pages/projectsPage.js' /* webpackChunkName: "project-view"*/),
);
const SprintsPage = lazy(() =>
  import('./pages/sprintsPage.js' /* webpackChunkName: "sprints-view"*/),
);
const TasksPage = lazy(() =>
  import('./pages/tasksPage.js' /* webpackChunkName: "tasks-view"*/),
);
const LogInPage = lazy(() =>
  import('./pages/loginPage.js' /* webpackChunkName: "logIn-view"*/),
);
const RegisterPage = lazy(() =>
  import('./pages/registerPage.js' /* webpackChunkName: "register-view"*/),
);

const routes = [
  {
    name: 'HomePage',
    path: pathes.homePage,
    exact: true,
    component: ProjectsPage,
    private: true,
    restricted: false,
    redirectTo: pathes.registerPage,
  },
  {
    name: 'ProjectsPage',
    path: pathes.project,
    exact: true,
    component: ProjectsPage,
    private: true,
    restricted: false,
    redirectTo: pathes.registerPage,
  },
  {
    name: 'SprintsPage',
    path: pathes.sprints,
    exact: true,
    component: SprintsPage,
    private: true,
    restricted: false,
    redirectTo: pathes.registerPage,
  },
  {
    name: 'TasksPage',
    path: pathes.tasks,
    exact: true,
    component: TasksPage,
    private: true,
    restricted: false,
    redirectTo: pathes.registerPage,
  },
  {
    name: 'Registration',
    path: pathes.registerPage,
    exact: true,
    showInMenu: true,
    component: RegisterPage,
    private: false,
    restricted: true,
    redirectTo: pathes.project,
  },
  {
    name: 'LogIn',
    path: pathes.loginPage,
    exact: true,
    component: LogInPage,
    private: false,
    restricted: true,
    redirectTo: pathes.project,
  },
];

const routing = { pathes, routes };

export default routing;
