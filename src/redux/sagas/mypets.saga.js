import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* putMyPet(action) {
    let mypet = action.payload
    try {
        yield put ({type:"HERE_MYPET", payload:mypet})
        axios.post('/api/mypets', mypet)
    }
    catch (error){
        console.log("failed placing mypet");

    }
}

function* mypetsSaga() {
    yield takeLatest('PUT_MYPET', putMyPet);
  }
  
  export default mypetsSaga;