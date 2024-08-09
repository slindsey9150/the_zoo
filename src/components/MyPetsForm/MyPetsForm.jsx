import { useState } from "react";

export default function MyPetsForm() {
    const [myPet, setMyPet] = useState('')

    const submitPet = () => {
        console.log("Submitting pet", myPet);
        
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