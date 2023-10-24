import React from "react";
import styled from "styled-components";
import '../../App.css';

const Container = styled.div`
    display: flex;
    gap: 20px;
`

const Item = styled.div`
    border: 2px solid black;
    border-radius: 20px;
    padd    ing: 20px;
`

function BlockSponsorDesktop({SponsorsList}) {
    return(
        <Container> 
            {SponsorsList?.map((el, key) => {
                return (
                    <Item key={key}>
                        <p>Имя: {el.full_name}</p>
                        <p>Тип помощи: {el.name}</p>
                        <p>Дата помощь: {el.date}</p>
                    </Item>
                )
            })}
        </Container>
    )
    
}

export default BlockSponsorDesktop