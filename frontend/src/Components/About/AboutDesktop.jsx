import React from "react";
import styled from "styled-components";
import AboutCat from "../../Images/GroupCat.svg"

const About = styled.div`

`

const Cat = styled.div`
    width: 85vw;
    height: 90vh;
`

function AboutDesktop() {
    return(
        <About>
            <div className="container">
                <Cat style={{backgroundImage: `url(${AboutCat})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", marginRight: "3vw"}}>

                </Cat>
            </div>
        </About>
    )
}

export default AboutDesktop