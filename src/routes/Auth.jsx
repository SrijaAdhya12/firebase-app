import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Auth = ({ component }) => {
    const { currentUser } = useAuth()
    return currentUser ? <Navigate to="/profile" /> : component
}

export default Auth