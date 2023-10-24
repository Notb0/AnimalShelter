import React from "react";
import {useMediaQuery} from "react-responsive";
import BlockSponsor from "../Components/BlockSponsors/BlockSponsors";
import Donation from "../Components/Donation/Donation"
import Footer from "../Components/Footer/Footer";



function Help() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            {/* <BlockSponsor/> */}
            <Donation/>
            <Footer/>
        </div>
    )   
}

export default Help