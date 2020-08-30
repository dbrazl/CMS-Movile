import { put } from 'redux-saga/effects';

export default function* errorHandler(error, callback) {
  let message = null;
  let reasons = null;

  treat: {
    if (error.message === 'Network Error') {
      message = 'Não foi possível fazer a requisição.';
      reasons = ['Servidor está offline.'];
      break treat;
    }

    if (error.message === 'Timeout') {
      message = 'Não foi possível fazer a requisição.';
      reasons = ['A requisição excedeu o tempo limite.'];
      break treat;
    }

    if (error.message === 'No data on restore') {
      message = 'Não foi possível recuperar o usuário.';
      reasons = ['O usuário não foi informado.'];
      break treat;
    }

    const response = error.response.data;
    message = response.errorMessage;
    reasons = response.reasons;
  }

  yield put(callback(message, reasons));
}
