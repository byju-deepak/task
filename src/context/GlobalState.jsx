import { useState } from "react"
import GlobalContext from "./GlobalContext"

export const GlobalState = (props)=>{
    const [student, setStudent] = useState({})
    return (
        <GlobalContext.Provider value={{student, setStudent}}>
            {props.children}
        </GlobalContext.Provider>
    )
}