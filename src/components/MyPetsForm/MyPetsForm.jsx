import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MyPetsForm() {
    const dispatch = useDispatch()
    const [myPet, setMyPet] = useState('')
    const [myPetNotes, setMyPetNotes] = useState('')

    const submitPet = () => {
        console.log("Submitting pet", myPet);
        dispatch({type:"PUT_MYPET", payload:{
            pet:myPet,
            notes:myPetNotes}})
        
    }
    return(
        <div>
            <form onSubmit={submitPet}>
                Pet Name:
                <input
                placeholder="PET NAME"
                 value={myPet} 
                 type="text" 
                 name="" 
                 id="" 
                 onChange={(event) => setMyPet(event.target.value)}/>
                 Pet Notes:
                 <input 
                 placeholder="PET NOTES"
                 value={myPetNotes}
                 type="text" 
                 name="" 
                 id="" 
                 onChange={(event) => setMyPetNotes(event.target.value)}
                 />
                <button>Submit </button>
            </form>
        </div>
    )
}