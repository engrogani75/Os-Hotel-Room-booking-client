import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <h1 className="text-2xl font-bold text-orange-600">This pafge is loading...........................</h1> 
     }

     if (user?.email) {
        return children 
     }
     return <Navigate to='/login' replace></Navigate>
};

export default PrivateRouter;