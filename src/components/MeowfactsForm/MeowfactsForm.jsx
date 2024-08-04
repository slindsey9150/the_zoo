import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function MeowfactsForm() {
    const dispatch = useDispatch()
    const meowFact = useSelector((store) => store.meowfact)
    const getMeowFact = () => {
        dispatch({type:'FETCH_MEOWFACT'})
    }
    return(
        <div>
            <h2>Here is a fact from MeowFacts: <button onClick={getMeowFact}>Meow</button></h2>
            <p> {meowFact}</p>
        </div>
    )
}