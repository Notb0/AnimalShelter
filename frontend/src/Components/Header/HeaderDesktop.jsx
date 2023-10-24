import React from "react";
import styled from "styled-components";
import {ReactComponent as Logo} from "../../Images/logoh.svg";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    top: 0px;
`

const Container = styled.div`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

const Link = styled.a`
    font-family: SansationR;
    font-size: var(--Font-small);
    text-align: cente0r;
    text-decoration: none;
    color: var(--black);
    &:hover{
        color: var(--Gray);
    }
    color: ${props => props.here? "var(--Viridian_Green)" : "none"};
`

function HeaderDesktop() {
    return(
        <Header>
        <Container>
            <Link href="/"><Logo style={{height: "100px"}}/></Link>
            <Link here={window.location.pathname === "/"? true : false} href="/">О приюте</Link>
            <Link here={window.location.pathname === "/Adopt"? true : false} href="/Adopt">Взять в семью</Link>
            <Link here={window.location.pathname === "/Help"? true : false} href="/Help">Помочь приюту</Link>
            <Link here={window.location.pathname === "/Statistics"? true : false} href="/Statistics">Статистика</Link>
         </Container>
    </Header>
    )
}

export default HeaderDesktop