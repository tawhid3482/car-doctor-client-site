import { Navigate, useLocation } from "react-router-dom";
import UseHook from "../../ProviderHook/UseHook";

const PrivateRoutes = ({children}) => {
    const {user,loading}=UseHook()
    const location = useLocation()
    if(loading){
        return <div className="text-center">
            <progress className="progress progress-error w-56"></progress>
        </div>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoutes;