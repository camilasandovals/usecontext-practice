import { useContext } from "react"
import { UserStatus } from "../App"
import SubPage from "./SubPage"
import Button from "./Button.jsx"

export default function Pages() {
    const [signedIn, setSignedIn] = useContext(UserStatus)
    return(
        <>
        <h2>Page</h2>
        <Button />
        <SubPage />
        </>
    )
}