import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormAddPets from "./FormAddPets";

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ItemHeader = styled.div`
    border-Bottom: solid 1px var(--Azalea);
    display: grid;
    grid-template-columns: 0.3fr 0.5fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
    align-items: center;
    justify-items: center;
    text-align: center;
    font-family: "SansationB";
    color: var(--Gray);
`
const Item = styled.div`
    border-Bottom: solid 1px var(--Azalea);
    display: grid;
    grid-template-columns: 0.3fr 0.5fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
    align-items: center;
    justify-items: center;
    text-align: center;
    font-family: "SansationB";
`

const Img = styled.img`
    min-width: 40px;
    max-width: 40px;
    height: 80%;
    background-color: #D9D9D9;
    object-fit: cover;
`

function PetsList(){
    const [ApplicationList, setApplicationList] = useState([]);
    const [Show, setShow] = useState(false);

    useEffect(() => {updateApplication()}, [])

    const updateApplication = async () =>{
        await fetch("/Application", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            setApplicationList(res);
        })
    }

    const DeleteApplication = async (id) => {
        fetch(`/Application/${id}`, {method: "Delete"})
        .then(resp => resp.json())
        .then(async () => await updateApplication())
        .finally(await updateApplication())
        await updateApplication();
    }

    const convertDate = (date) => {
        let NewDate = new Date(date);
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC'
        };
        return NewDate.toLocaleString("ru", options);
    }

    return(
        <List>
            <ItemHeader>
                <p>id</p>
                <p>Попичитель</p>
                <p>Номер телефона</p>
                <p>Питомец</p>
                <p>Дата заявления</p>
            </ItemHeader>
            {ApplicationList.map((el, key) => {
                return(
                    <Item key={key}>
                        <p>{el.id}</p>
                        <p>{el.user}</p>
                        <p>{el.phone_number}</p>
                        <p>{el.pets}</p>
                        <p>{convertDate(el.date)}</p>
                        <button 
                            onClick={() => DeleteApplication(el.id)}
                            style={{borderRadius: 20, border: "none", minHeight: "30px", minWidth: "100px", fontFamily: "SansationB", backgroundColor: "var(--Azalea)"}}
                        >
                            Удалить
                        </button>
                    </Item>
                )
            })}
        </List>
    )
}

export default PetsList