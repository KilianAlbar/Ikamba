import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function UserDashboard(){

    const {currentUser} = useAuth();

    console.log(currentUser._delegate.displayName);

    return(
        <div>
            <h1>Dashboard</h1>
            <h3>My Contact Info</h3>
            <h6>My e-mail contact</h6>
            <p>{currentUser._delegate.email}</p>
            <h6>Contact Name</h6>
            <p>{currentUser._delegate.displayName}</p>
        </div>
    )
}