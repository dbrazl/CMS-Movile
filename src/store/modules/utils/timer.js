import { delay } from 'redux-saga/effects';

export default function* timer(time = 30000) {
  yield delay(time);
  throw new Error('TIMEOUT');
}
