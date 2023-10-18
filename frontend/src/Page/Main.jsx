import React from "react";
import {useMediaQuery} from "react-responsive";
import BlockHello from "../Components/BlockHello/BlockHello";

function Main() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BlockHello/>
        </div>
    )   
}

export default Main