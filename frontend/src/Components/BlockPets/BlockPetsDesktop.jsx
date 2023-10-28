import React from "react";
import styled from "styled-components";
import '../../App.css';

const Container = styled.div`
    display: flex;
    gap: 20px;
`

const Item = styled.div`
    border: solid 2px transparent;
    padding: 10px;
    margin: 0px;
    &:hover{
        border: solid 2px var(--Azalea);
        cursor: pointer;    
        border-radius: 20px;
    }
`

const Img = styled.img`
    min-width: 250px;
    max-width: 250px;
    width: 100%;
    min-height: 150px;
    max-height: 150px;
    height: 100%;
    border-radius: 20px;
    background-color: #D9D9D9;
    object-fit: cover;
`

const BigP = styled.p`
    font-size: 24px;
    text-decoration: underline;
    margin: 0px;
    font-family: SansationR;
`
const MediumP = styled.p`
    font-size: 18px;
    color: var(--Azalea);
    margin: 0px;
    font-family: SansationR;
`
const SmallP = styled.p`
    font-size: 16px;
    margin: 0px;
    font-family: SansationR;
`

function BlockPetsDesktop({PetsList, open}) {
    return(
    <div className="container" style={{display:"flex", justifyContent:"space-around"}}>
        <Container style={{marginTop:"3vw"}}> 
            {PetsList?.map((el, key) => {
                return (
                    
                    <Item key={key} onClick={() => open(el.id)}>
                        <Img src={`/img/${el.name}.jpg`} alt=""/>
                        <BigP>{el.name}</BigP>
                        <MediumP>Возвраст: {el.age}</MediumP>
                        <SmallP>Порода: {el.breed}</SmallP>
                        <SmallP>Пол: {el.gender}</SmallP>
                    </Item>
                    
                )
            })}
        </Container>
        </div>
    )
    
}

export default BlockPetsDesktop