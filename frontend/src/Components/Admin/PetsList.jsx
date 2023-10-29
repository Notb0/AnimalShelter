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
    grid-template-columns: 0.3fr 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
    grid-template-columns: 0.3fr 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
    const [PetsList, setPetsList] = useState([]);
    const [Show, setShow] = useState(false);

    useEffect(() => {updatePets()}, [])

    const updatePets = async () =>{
        await fetch("/PetsAll", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            setPetsList(res);
        })
    }

    const DeletePets = async (id) => {
        fetch(`/Pets/${id}`, {method: "Delete"})
        .then(resp => resp.json())
        .then(async () => await updatePets())
        .finally(await updatePets())
        await updatePets();
    }

    const AddPets = async (Name, Breed, Gender, Age, Img) => {
        console.log(Gender);
        const formData = new FormData();
        let ImgNew = new File([Img?.data], `${Name}.jpg`);
        formData.append("file", ImgNew);
        formData.append("name", Name);
        formData.append("breed", Breed);
        formData.append("gender", Gender);
        formData.append("age", Age);

        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch('/Pets', requestOptions)
        .then(async () => await updatePets())
        .finally(await updatePets())
        await updatePets();
    }

    return(
        <>
            {Show && 
               <FormAddPets AddPets={AddPets} Show={Show} setShow={setShow}/>
            }
            <List>
                <ItemHeader>
                    <p>id</p>
                    <p>Фото</p>
                    <p>Имя</p>
                    <p>Порода</p>
                    <p>Пол</p>
                    <p>Возвраст</p>
                    <p>Усыновлён</p>
                    <button 
                        onClick={() => setShow(true)}
                        style={{borderRadius: 20, border: "none", minHeight: "30px", minWidth: "100px", fontFamily: "SansationB", backgroundColor: "var(--Azalea)"}}
                    >
                        Добавить
                    </button>
                </ItemHeader>
                {PetsList.map((el, key) => {
                    return(
                        <Item key={key}>
                            <p>{el.id}</p>
                            <Img height={"80%"} src={`/img/${el.name}.jpg`} alt=""/>
                            <p>{el.name}</p>
                            <p>{el.breed}</p>
                            <p>{el.gender}</p>
                            <p>{el.age}</p>
                            <p>{!el.avaliable? "Да" : "Нет"}</p>
                            <button 
                                onClick={() => DeletePets(el.id)}
                                style={{borderRadius: 20, border: "none", minHeight: "30px", minWidth: "100px", fontFamily: "SansationB", backgroundColor: "var(--Azalea)"}}
                            >
                                Удалить
                            </button>
                        </Item>
                    )
                })}
            </List>
        </>
    )
}

export default PetsList