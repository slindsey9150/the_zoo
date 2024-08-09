import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MyPetsForm() {
    const dispatch = useDispatch()
    const [myPet, setMyPet] = useState('')

    const submitPet = () => {
        console.log("Submitting pet", myPet);
        dispatch({type:"PUT_MYPET", payload:myPet})
        
    }
    return(
        <div>
            <form onSubmit={submitPet}>
                <input
                 value={myPet} 
                 type="text" 
                 name="" 
                 id="" 
                 onChange={(event) => setMyPet(event.target.value)}/>
                <button>Submit </button>
            </form>
        </div>
    )
}