import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputImage from "./InputImage";
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

function FormAddPets({AddPets, Show, setShow}) {
    const [Name, setName] = useState(); 
    const [Breed, setBreed] = useState(); 
    const [Gender, setGender] = useState("Ж");
    const [Age, setAge] = useState(); 
    const [Img, setImg] = useState();

    const [isNewBreed, setNewBreed] = useState(false);

    const [BreedList, setBreedList] = useState([]);

    useEffect(() => {
        fetch("/Pets", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            let newArray = [];
            res.map(el => {
                if(!newArray.includes(el.breed)) newArray.push(el.breed)
            }) 
            setBreedList(newArray)
        })
    }, [])

    return(
        <Modal show={Show}> 
            <ModalContent>
                <P>Имя</P>
                <Input type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
                <P>Порода</P>
                {isNewBreed? 
                    <Input type="text" value={Breed} onChange={(e) => setBreed(e.target.value)}/> 
                    :
                    <Select value={Breed} onChange={(e) => {e.target.value === "new" ? setNewBreed(true) : setBreed(e.target.value)}}>
                        {BreedList.map((el, key) => {
                            return <option selected value={el} key={key}>{el}</option> 
                        })}
                        <option value={"new"} style={{fontWeight: 'bold', color: "var(--Azalea)"}}>Новая порода</option> 
                    </Select>
                }
                <P>Пол</P>
                <Select value={Gender} onChange={(e) => setGender(e.target.value)}>
                    <option value={"Ж"}>Ж</option> 
                    <option value={"М"}>М</option> 
                </Select>
                <P>Возвраст</P>
                <Input type="number" value={Age} onChange={(e) => setAge(e.target.value)}/>
                <P>Фото</P>
                <InputImage name="img" type="file" accept=".png,.jpg,.jpeg,.gif" src={Img} onChange={setImg}  Img={Img} alt={"img"}/>
                <div style={{marginTop:"0.8vw"}}>
                    <Button 
                        style={{marginRight:"0.5vw"}} 
                        onClick={() => {AddPets(Name, Breed, Gender, Age, Img); setShow(false)}}
                    >
                        Создать
                    </Button>
                    <Button 
                        onClick={() => {setShow(false)}}
                    >
                        Закрыть
                    </Button>
                </div>
            </ModalContent>
        </Modal>
    )
    
}

export default FormAddPets