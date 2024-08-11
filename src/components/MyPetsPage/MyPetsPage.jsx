import MyPetsForm from "../MyPetsForm/MyPetsForm"
import MyPetsTable from "../MyPetsTable/MyPetsTable"

export default function MyPetsPage() {
    return(
        <div>
            <h1>This is where I'll have a list of my pets</h1>
            <MyPetsForm/>
            <MyPetsTable/>
        </div>
    )
}