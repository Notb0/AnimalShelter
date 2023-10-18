import React from "react";
import {useMediaQuery} from "react-responsive";

function Contacts() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
        </div>
    )   
}

export default Contacts