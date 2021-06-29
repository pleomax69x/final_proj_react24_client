import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { projectsReducer } from './projects';
import { sprintsReducer } from './sprints';
import { tasksReducer } from './tasks';
import loadingReducer from './loading-reducer';
import errorReducer from './error-reducer';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    sprints: sprintsReducer,
    tasks: tasksReducer,
    error: errorReducer,
    loading: loadingReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
