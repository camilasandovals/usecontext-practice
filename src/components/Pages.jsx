import { useContext } from "react"
import { UserText } from "../App"
import SubPage from "./SubPage"

export default function Pages() {
    const userString = useContext(UserText)
    return(
        <>
        <h2>Page</h2>
        {userString}
        <SubPage />
        </>
    )
}