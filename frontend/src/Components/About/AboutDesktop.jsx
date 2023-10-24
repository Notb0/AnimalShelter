import React from "react";
import styled from "styled-components";
import AboutCat from "../../Images/GroupCat.svg"

const About = styled.div`

`

const Cat = styled.div`
    width: 100%;
    height: 35vw;

`

function AboutDesktop() {
    return(
        <About>
            <div className="container">
                <Cat style={{backgroundImage: `url(${AboutCat})`, backgroundSize: "contain", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>

                </Cat>
            </div>
        </About>
    )
}

export default AboutDesktop