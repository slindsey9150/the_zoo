import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCataas(action) {
    try {
        const response = yield axios.get('/api/cataas')
        console.log("cataas:", response.data);
        yield put({type:"HERE_CATAAS", payload:response.data})
    }
    catch (error){
        console.log("failed getting a cataas");

    }
}

function* cataasSaga() {
    yield takeLatest('FETCH_CATAAS', fetchCataas);
  }
  
  export default cataasSaga;