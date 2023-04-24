import { useContext } from "react"
import { UserStatus } from "../App"

export default function SubPage() {

    const [signedIn, setSignedIn] = useContext(UserStatus)
    return(
        <>
            <h2>SubPage</h2>
            <button onClick={() => setSignedIn(!signedIn)}>
                {signedIn? "Sign out" : "Sign In"}
            </button>
        </>
    )
}