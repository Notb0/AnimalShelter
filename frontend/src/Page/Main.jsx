import React, { useState } from "react";
import {useMediaQuery} from "react-responsive";
import BlockHello from "../Components/BlockHello/BlockHello";
import FormApplication from "../Components/FormApplication/FormApplication";
import Tasks from "../Components/Tasks/Tasks";
import About from "../Components/About/About";
import Donation from "../Components/Donation/Donation";

function Main() {
    const [show, setShow] = useState(false);
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BlockHello/>
            <Tasks/>
            <About/>
            <Donation/>
            <FormApplication setShow={setShow} show={show}/>
            <button onClick={() => setShow(true)}>Отправить заявления на питомца</button>
        </div>
    )   
}

export default Main