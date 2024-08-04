import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function MeowfactsForm() {
    const dispatch = useDispatch()
    const meowFact = useSelector((store) => store.meowfact[0])
    const cataas = useSelector((store) => store.cataas._id)
    console.log("cataas:", cataas);
    const getMeowFact = () => {
        dispatch({type:'FETCH_MEOWFACT'})
        dispatch({type:'FETCH_CATAAS'})
    }
    return(
        <div>
            <h2>Here is a fact from MeowFacts: <button onClick={getMeowFact}>Meow</button></h2>
            <p> {meowFact}</p>
            <img src='https://cataas.com/cat' />
        </div>
    )
}