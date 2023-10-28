import React from "react";
import {useMediaQuery} from "react-responsive";
import styled from "styled-components";
// import BlockSponsor from "../Components/BlockSponsors/BlockSponsors";
import Donation from "../Components/Donation/Donation"
import Footer from "../Components/Footer/Footer";


const H1 = styled.h1`
    font-family: LifeHack;
    font-size: 3vw;
    font-weight: 100;
`

const P = styled.p`
    font-family: SansationR;
    font-size: 1.2vw;
    margin-bottom: 2vw;
`

function Help() {
    return(
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            {/* <BlockSponsor/> */}
            <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <H1 style={{margin: "auto", marginLeft: "0", marginBottom: "0.5vw", marginTop:"2vw"}}>Нужды приюта</H1>
            <P>Наш приют существует исключительно на частные благотворительные пожертвования. Работа приюта <green style={{color:"var(--Viridian_Green)"}}>не финансируется государством</green>. Все ресурсы используются сегодня и сейчас. 
                Помимо этого приюту всегда нужны: <green style={{color:"var(--Viridian_Green)"}}>корм, лекарства, хозяйственные товары в большом количестве, древесный наполнитель, 
                всякие нужности для организации работы приюта и сотрудников</green>.</P></div>
            <Donation/>
            <Footer/>
        </div>
    )   
}

export default Help