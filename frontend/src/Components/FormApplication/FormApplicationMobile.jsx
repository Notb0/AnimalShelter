import React from "react";
import styled from "styled-components";

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
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: ${props => props.isMobile? "80%" : "50%"};
    border-radius: 20px; 
`

function TasksMobile({full_name, dateBirth,phone,address, petsId, petsList, Changefull_name, ChangedateBirth,Changephone,Changeaddress, ChangepetsId, func, setShow, Show}) {
    return(
        <Modal show={Show}> 
            <ModalContent>
                <p>Полное имя</p>
                <input type="text" value={full_name} onChange={(e) => Changefull_name(e.target.value)}/>
                <p>Дата рождения</p>
                <input type="date" value={dateBirth} onChange={(e) => ChangedateBirth(e.target.value)}/>
                <p>Номер телефона</p>
                <input type="text" value={phone} onChange={(e) => Changephone(e.target.value)}/>
                <p>Адресс</p>
                <input type="text" value={address} onChange={(e) => Changeaddress(e.target.value)}/>
                <p>Питомец</p>
                <select name="pets_id" id="pets_id" value={petsId} onChange={(e) => ChangepetsId(e.target.value)}>
                    {petsList?.map((el, i) => {
                        return <>
                        <option value={el.id}>{el.name}</option>
                        <option disabled>&nbsp;&nbsp;Порода: {el.breed}</option> 
                        <option disabled>&nbsp;&nbsp;Возвраст: {el.age}</option> 
                        <option disabled>&nbsp;&nbsp;Пол: {el.gender}</option> 
                        </>
                    })} 
                </select>
                <div>
                    <button onClick={() => {func(); setShow(false)}}>Отравить</button>
                    <button onClick={() => {setShow(false)}}>Закрыть</button>
                </div>
            </ModalContent>
        </Modal>
    )

}

export default TasksMobile