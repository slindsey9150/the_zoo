import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMeowFact(action) {
    try {
        const response = yield axios.get('/api/meowfacts')
        console.log("meowfact:", response.data.data);
        yield put({type:"HERE_MEOWFACT", payload:response.data.data})
    }
    catch (error){
        console.log("failed getting a meowfact");

    }
}

function* meowfactsSaga() {
    yield takeLatest('FETCH_MEOWFACT', fetchMeowFact);
  }
  
  export default meowfactsSaga;