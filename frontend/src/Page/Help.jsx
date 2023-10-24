import React from "react";
import {useMediaQuery} from "react-responsive";
import BlockSponsor from "../Components/BlockSponsors/BlockSponsors";

function Help() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BlockSponsor/>
        </div>
    )   
}

export default Help