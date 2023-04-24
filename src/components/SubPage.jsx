import { useContext } from "react"
import { UserText } from "../App"

export default function SubPage() {
    const userString = useContext(UserText);
    return(
        <>
            <h2>SubPage</h2>
            {userString}
        </>
    )
}