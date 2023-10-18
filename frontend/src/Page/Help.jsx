import React from "react";
import {useMediaQuery} from "react-responsive";

function Help() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
        </div>
    )   
}

export default Help