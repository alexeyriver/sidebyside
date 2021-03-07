import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_DOG, SAGA_DOG_TAKE_EVERY } from './types';

export function* sagaWatcher() {
  yield takeEvery(SAGA_DOG_TAKE_EVERY, sagaWorker);
}

function* sagaWorker() {
  const payload = yield call(fetchDog);
  yield put({ type: FETCH_DOG, payload });
}

async function fetchDog() {
  const response = await fetch('https://random.dog/woof.json');
  return await response.json();
}
