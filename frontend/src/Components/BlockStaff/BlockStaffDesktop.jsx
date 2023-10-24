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

function BlockStaffDesktop({StaffList}) {
    return(
        <Container> 
            {StaffList?.map((el, key) => {
                return (
                    <Item key={key}>
                        <p>Имя: {el.full_name}</p>
                        <p>Дата рождения: {el.date_of_birth}</p>
                        <p>Номер телефона: {el.phone_number}</p>
                        <p>Должность: {el.Name}</p>
                    </Item>
                )
            })}
        </Container>
    )
    
}

export default BlockStaffDesktop