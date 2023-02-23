import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  yield delay(2000);

  console.log('Incrementing');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Counter Saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
