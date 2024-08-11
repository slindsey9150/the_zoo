import { useSelector } from "react-redux"

export default function MyPetsTable () {
    const petsList = useSelector((store) => store.mypets.mypetReducer)
    console.log("petsList:", petsList);
    
    return (
        <div>
            <h1>Here are my pets</h1>
            <table>
                <thead>
                    <tr>
                        <td>Pet</td>
                        <td>Notes</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {petsList.map((row, i) => {return (
                        <tr>
                            <td>{row.pet}</td>
                            <td>{row.notes}</td>
                            <td><button>❌</button></td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}