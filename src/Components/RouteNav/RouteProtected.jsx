//import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const RouteProtected = ({ children, allowedRoles }) => {

    const token = localStorage.getItem("token");
    
    if (!token){
        return <Navigate to="/"/>
    }
    
    const decodedToken = jwtDecode(token);
    const role = decodedToken
    if (!allowedRoles.includes(role)){

        return <Navigate to="/"/>
    }
    return children;
};

export default RouteProtected;
