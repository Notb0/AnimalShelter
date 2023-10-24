import React from "react";
import styled from "styled-components";

const Container = styled.div`
`

const Item = styled.div`
`


function BlockStaffMobile({StaffList}) {
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

export default BlockStaffMobile