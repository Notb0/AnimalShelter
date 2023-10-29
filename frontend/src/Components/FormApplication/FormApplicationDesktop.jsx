import React, { useEffect } from "react";
import styled from "styled-components";
import '../../App.css';

const Modal = styled.div`
    display: ${props => props.show ? "block" : "none"}; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--Concrete);
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: ${props => props.isMobile? "80%" : "50%"};
    border-radius: 20px; 
`
const P = styled.p`
    font-family: SansationR;
    font-weight: 100;
`

const Button = styled.button`
    background-color: rgba(0,0,0,0);
    border: 1px solid var(--Viridian_Green);
    border-radius: 10px;
    color: var(--Viridian_Green);
    font-size: 0.6vw;
    width: 7vw;
    height: 1.2vw;
    &:hover{
        background-color: rgba(1, 1, 1, 0.2);
    }
`

const Input = styled.input`
    border: 1px solid var(--Viridian_Green);
    border-radius: 10px;
    color: var(--Viridian_Green);
    font-size: 0.7vw;
    height: 1vw;
`

const Select = styled.select`
    border: 1px solid var(--Viridian_Green);
    border-radius: 10px;
    color: var(--Viridian_Green);
    font-size: 0.7vw;
    height: 1vw;
`

function TasksDesktop({full_name, dateBirth,phone,address, petsId, petsList, Changefull_name, ChangedateBirth,Changephone,Changeaddress, ChangepetsId, func, setShow, Show}) {
    useEffect(() => {
        if(localStorage.getItem("NameUser")){
            fetch("/UserByFullName/" + localStorage.getItem("NameUser"), {method: "GET"})
            .then(resp => resp.json())
            .then(res => {
                Changefull_name(res[0].full_name);
                let NewDate = new Date(res[0].date_of_birth);
                NewDate.setDate(NewDate.getDate() + 1);
                ChangedateBirth(NewDate.toISOString().split('T')[0]);
                Changephone(res[0].phone_number);
                Changeaddress(res[0].address)
            })
        }
    }, [])
    return(
        <Modal show={Show}> 
            <ModalContent>
                <P>Полное имя</P>
                <Input type="text" value={full_name} onChange={(e) => Changefull_name(e.target.value)}/>
                <P>Дата рождения</P>
                <Input type="date" value={dateBirth} onChange={(e) => ChangedateBirth(e.target.value)}/>
                <P>Номер телефона</P>
                <Input type="text" value={phone} onChange={(e) => Changephone(e.target.value)}/>
                <P>Адресс</P>
                <Input type="text" value={address} onChange={(e) => Changeaddress(e.target.value)}/>
                <P>Питомец</P>
                <Select name="pets_id" id="pets_id" value={petsId} onChange={(e) => ChangepetsId(e.target.value)}>
                    {petsList?.map((el, i) => {
                        return <>
                        <option value={el.id}>{el.name}</option>
                        <option disabled>&nbsp;&nbsp;Порода: {el.breed}</option> 
                        <option disabled>&nbsp;&nbsp;Возвраст: {el.age}</option> 
                        <option disabled>&nbsp;&nbsp;Пол: {el.gender}</option> 
                        </>
                    })} 
                </Select>
                <div style={{marginTop:"0.8vw"}}>
                    <Button style={{marginRight:"0.5vw"}} onClick={() => {func(); setShow(false)}}>Отравить</Button>
                    <Button onClick={() => {setShow(false)}}>Закрыть</Button>
                </div>
            </ModalContent>
        </Modal>
    )
    
}

export default TasksDesktop