import React from "react";
import {useMediaQuery} from "react-responsive";
import ST from "../Images/st.svg"
import Footer from "../Components/Footer/Footer";

function Statistic() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 780px)' })? "" : "Container"} style={{marginTop:"3vw"}}>
            <img src={ST} style={{width: "100vw", height: "30vw"}}></img>
            <Footer/>
        </div>
    )   
}

export default Statistic