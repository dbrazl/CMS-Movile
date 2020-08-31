import { all, takeLatest, race, put, call } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { sessionOperationFail, createSessionSuccess } from './actions';

import errorHandler from '../utils/errorHandler';
import timer from '../utils/timer';

function* createSession({ payload }) {
  try {
    const { body } = payload;

    const { response } = yield race({
      response: call(api.post, `/session`, body),
      timeout: call(timer),
    });

    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(createSessionSuccess(response.data));
    history.push('/sells');
  } catch (error) {
    yield errorHandler(error, sessionOperationFail);
  }
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function closeSession() {
  api.defaults.headers.Authorization = null;
  history.push('/');
}

export default all([
  takeLatest('@auth/CREATE_SESSION_REQUEST', createSession),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/CLOSE_SESSION', closeSession),
]);
