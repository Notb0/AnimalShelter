import React from "react";
import {useMediaQuery} from "react-responsive";
import PetsList from "../Components/Admin/PetsList";
import ApplicationList from "../Components/Admin/ApplicationList";

function AdminPets() {
    return(
        <div className="container" style={{display: "flex", flexDirection: "column"}}>
            <h1 style={{fontFamily: "LifeHack"}}>Животные</h1>
            <PetsList/>
            <h1 style={{fontFamily: "LifeHack"}}>Заявления на усыновления</h1>
            <ApplicationList/>
        </div>
    )   
}

export default AdminPets