import { useContext } from "react"
import { UserStatus } from "../App"
import SubPage from "./SubPage"

export default function Pages() {
    const [signedIn, setSignedIn] = useContext(UserStatus)
    return(
        <>
        <h2>Page</h2>
        <button onClick={ () => setSignedIn(!signedIn)}>
            {signedIn ? "Sign Out" : "Sign In"}
        </button>
        <SubPage />
        </>
    )
}