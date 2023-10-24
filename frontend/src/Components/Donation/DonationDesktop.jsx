import React from "react";
import styled from "styled-components";
import DNT from "../../Images/GroupDonation.svg"
import Ghelp from "../../Images/GroupHelp.svg"

const Donation = styled.div`

`

const Rectangle = styled.div`
    max-width: 100vw;
    height: 25vw;
    margin-bottom: 2vw;
`

const BTNnum = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5vw;
`

const Button = styled.button`
    border-radius: 20px;
    width: 15vw;
    height: 3vw;
    background-color: rgba(0, 0, 0, 0);
    color: var(--White);
    border: 1px solid var(--White);
    font-family: LifeHack;
    font-size: 1.3vw;
    &:hover {
        background-color: rgba(1, 1, 1, 0.3)
    }
`

const INP = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3vw;
`

const Input = styled.input`
    border-radius: 20px;
    width: 15vw;
    height: 3vw;
    background-color: rgba(0, 0, 0, 0);
    color: var(--White);
    border: 1px solid var(--White);
    font-family: LifeHack;
    font-size: 1.3vw;
    &::placeholder {
        text-align: center;
        color: var(--White);
    }
`

const H1 = styled.h1`
    font-family: LifeHack;
    font-size: 3vw;
    font-weight: 100;
`

function DonationDesktop() {
    return(
        <Donation>
            <Rectangle style={{backgroundImage: `url(${DNT})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",}}>
                <BTNnum>
                    <Button style={{marginRight: "20px"}}>300</Button>
                    <Button style={{marginRight: "20px"}}>500</Button>
                    <Button style={{marginRight: "20px"}}>1000</Button>
                    <Button>Другая сумма</Button>
                </BTNnum>
                <INP>
                    <Input type="user" placeholder="Имя" style={{marginRight: "20px"}}></Input>
                    <Input type="user" placeholder="Фамилия" style={{marginRight: "20px"}}></Input>
                    <Input type="user" placeholder="Email"></Input>
                </INP>
                <div style={{display:"flex", justifyContent: "flex-end", paddingTop: "1.5vw"}}>
                <Button style={{marginRight: "10vw"}}> Отправить</Button>
                </div>
            </Rectangle>
                <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <H1 style={{margin: "auto", marginLeft: "0", marginBottom: "2vw"}}>Нужды приюта</H1>
                <div style={{backgroundImage: `url(${Ghelp})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width:"65vw", height: "20vw"}}>

                </div>
                </div>
        </Donation>
    )
}

export default DonationDesktop