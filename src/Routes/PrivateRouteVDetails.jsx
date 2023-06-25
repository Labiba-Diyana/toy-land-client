import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";



const PrivateRouteVDetails = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner text-neutral"></span>
    }

    if (user?.email) {
        return children;
    }

    else{
        Swal.fire({
            icon: 'info',
            title: 'Sorry!',
            text: 'You have to log in first to view details',
          })
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

};

export default PrivateRouteVDetails;