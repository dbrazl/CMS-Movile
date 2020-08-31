import { all, takeLatest, race, put, call, select } from 'redux-saga/effects';
import api from '~/services/api';

import {
  orderOperationFail,
  resetPage,
  indexOrderSuccess,
  indexOrderRequest,
  indexOneOrderSuccess,
} from './actions';

import errorHandler from '../utils/errorHandler';
import timer from '../utils/timer';

function* indexOrders() {
  try {
    const page = yield select(state => state.orders.page);

    const { response } = yield race({
      response: call(api.get, `/requests?page=${page}`),
      timeout: call(timer),
    });

    yield put(indexOrderSuccess(response.data));
    yield put(indexOrderRequest());
  } catch (error) {
    yield put(resetPage());
    yield errorHandler(error, orderOperationFail);
  }
}

function* indexOne({ payload }) {
  try {
    const { id } = payload.params;

    const { response } = yield race({
      response: call(api.get, `/requests/one/${id}`),
      timeout: call(timer),
    });

    yield put(indexOneOrderSuccess(response.data));
  } catch (error) {
    yield errorHandler(error, orderOperationFail);
  }
}

export default all([
  takeLatest('@order/INDEX_ORDERS_REQUEST', indexOrders),
  takeLatest('@order/INDEX_ONE_ORDER_REQUEST', indexOne),
]);
