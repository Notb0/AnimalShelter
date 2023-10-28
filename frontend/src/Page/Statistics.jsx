import React from "react";
import {useMediaQuery} from "react-responsive";
import ST from "../Images/st.svg"
import Footer from "../Components/Footer/Footer";

function Statistic() {
    return(
    <>
        <div className={useMediaQuery({ query: '(max-width: 780px)' })? "" : "Container"} style={{marginTop:"3vw", display:"flex", justifyContent:"center"}}>
            <img src={ST} alt="" style={{width: "145vw", height: "45vw"}}></img>
            
        </div>
        <Footer/>
    </>
    )   
}

export default Statistic