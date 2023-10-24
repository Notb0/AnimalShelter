import React, { useState } from "react";
import {useMediaQuery} from "react-responsive";
import BlockHello from "../Components/BlockHello/BlockHello";
import FormApplication from "../Components/FormApplication/FormApplication";
import Tasks from "../Components/Tasks/Tasks";
import About from "../Components/About/About";
import Donation from "../Components/Donation/Donation";
import Footer from "../Components/Footer/Footer";
import TakePet from "../Components/TakePet/TakePet";

function Main() {
    const [show, setShow] = useState(false);
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BlockHello/>
            <Tasks/>
            <About/>
            <Donation/>
            <TakePet/>
            <Footer/>
        </div>
    )   
}

export default Main