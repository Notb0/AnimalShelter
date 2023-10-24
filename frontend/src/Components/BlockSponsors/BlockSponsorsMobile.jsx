import React from "react";
import styled from "styled-components";

const Container = styled.div`
`

const Item = styled.div`
`


function BlockSponsorsMobile({SponsorsList}) {
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

export default BlockSponsorsMobile