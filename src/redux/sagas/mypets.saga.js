import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* putMyPet(action) {
    let mypet = action.payload
    try {
        axios.post('/api/mypets', mypet)
        yield put ({type:"HERE_MYPET", payload:mypet})
    }
    catch (error){
        console.log("failed placing mypet");

    }
}
function* getMyPets(action) {
    const response = yield axios.get('/api/mypets')
    yield put ({type:"ALL_MYPETS", payload:response.data})
}

function* mypetsSaga() {
    yield takeLatest('PUT_MYPET', putMyPet);
    yield takeLatest('GET_MYPETS', getMyPets);
  }

  
  export default mypetsSaga;