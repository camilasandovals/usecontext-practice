import { useContext } from "react"
import { UserStatus } from "../App"
import Button from "./Button"

export default function SubPage() {

    const [signedIn, setSignedIn] = useContext(UserStatus)
    return(
        <>
            <h2>SubPage</h2>
            <Button />
        </>
    )
}