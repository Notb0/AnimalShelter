import React from "react";
import styled from "styled-components";
import GroupHello from '../../Images/GroupHello.svg'

const BlockHello = styled.div`

`

const Btn = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 15vw;
    margin-right: 45vw;
`

const Button = styled.button`
    margin-bottom: 20px;
    font-family: LifeHack;
    font-size: 3vh;
    height: 7vh;
    width: 20vw;
    background-color: var(--Tonys_Pink);
    color: var(--White);
    border: 0px;
    &:Hover{background-color:var(--Azalea)};
`



function BlockHelloDesktop() {
    return(
        <BlockHello>
            <container style={{display: "flex", justifyContent: "center"}}>
                <img src={GroupHello} style={{width:"80%"}} />
                <Btn>
                    <Button onClick={() => window.location.pathname = "Help"}>Помочь приюту</Button>
                    <Button onClick={() => window.location = "#Footer"}>О нас</Button>
                </Btn>
            </container>
        </BlockHello>
    )
    
}

export default BlockHelloDesktop