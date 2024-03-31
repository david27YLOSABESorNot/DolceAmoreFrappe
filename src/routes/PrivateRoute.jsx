import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Navigate } from "react-router-dom";



export const PrivateRoute = ({children}) => {

    const {logged} = useContext(UserContext);

    return (logged )
    ? children : (
        <Navigate to="/login"/>
    )
}


