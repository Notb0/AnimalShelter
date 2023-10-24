import React from "react";
import {useMediaQuery} from "react-responsive";
import BlockStaff from "../Components/BlockStaff/BlockStaff";

function Contacts() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <h1>Наша команда</h1>
            <BlockStaff/>
        </div>
    )   
}

export default Contacts