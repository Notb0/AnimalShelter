import React, { useEffect, useState } from "react";
import {useMediaQuery} from "react-responsive";
import BlockPets from "../Components/BlockPets/BlockPets";
import styled from "styled-components";

const FilterEl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const FilterButton = styled.p`
    text-decoration: underline;
    font-size: 32px;
    margin: 0px;
    font-family: SansationR;
    &:hover{
        cursor: pointer;
    }
`

function Adopt() {
    const [Filter, setFilter] = useState({breed: null, gender: null});
    const [isUpdate, Update] = useState(false);
    const [isOpenFilter, OpenFilter] = useState(false);
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
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <div className="container" style={{display: "flex", flexDirection: "column"}}>
                <p style={{fontSize: 64, fontFamily: "LifeHack", padding: 0, margin: 0, marginRight: "auto"}}>Наши питомцы</p>
                <FilterEl className="container">
                    <FilterButton onClick={() => OpenFilter(!isOpenFilter)}>Фильтры 🡣</FilterButton>
                    {isOpenFilter && 
                        <div style={{display: "flex", alignItems: "center", gap: 20}}>
                            <div style={{display: "flex", alignItems: "center", gap: 2}}>
                                <p style={{fontFamily: "SansationR", fontSize: 20}}>Порода:</p>
                                <select style={{fontFamily: "SansationR", fontSize: 18}} onChange={(e) => {
                                    let newFilter = Filter;
                                    newFilter.breed = e.target.value;
                                    if(e.target.value.length !== 0){
                                        setFilter(newFilter);
                                        Update(true);
                                    }
                                }}>
                                    <option value={null}>Все</option>
                                    {BreedList?.map((el, key) => {
                                        return <option key={key} value={el}>{el}</option>
                                    })}
                                </select>
                            </div>
                            <div style={{display: "flex", alignItems: "center", gap: 2}}>
                                <p style={{fontFamily: "SansationR", fontSize: 20}}>Пол:</p>
                                <select style={{fontFamily: "SansationR", fontSize: 18}} onChange={(e) => {
                                    let newFilter = Filter;
                                    newFilter.gender = e.target.value;
                                    setFilter(newFilter);
                                    Update(true);
                                }}>
                                    <option value={null}>Все</option>
                                    <option value={"Ж"}>Ж</option>
                                    <option value={"М"}>М</option>
                                </select>
                            </div>
                        </div>
                    }
                </FilterEl>
            </div>
            <BlockPets filter={Filter} update={Update} isUpdate={isUpdate}/>
        </div>
    )   
}

export default Adopt