import { useEffect, useState } from "react";
import BlockPetsDesktop from "./BlockPetsDesktop";
import BlockPetsMobile from "./BlockPetsMobile";
import FormApplication from "../FormApplication/FormApplication"
import { useMediaQuery } from 'react-responsive'

function BlockPets(props) {
    const {filter, update, isUpdate} = props;
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const [PetsList, setPetsList] = useState([]);
    const [Filter, setFilter] = useState(filter);
    const [isOpen, Open] = useState(false);
    const [petsId, setPetsId] = useState(false);
    useEffect(() => {
        console.log(filter)
        update(false);
        fetch("/Pets", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            if(filter.breed === null && filter.gender === null){
                setPetsList(res);
            } else{
                let newArray = [];

                res.map(el => {
                    let isSuccess = true;
                    if(filter.breed !== null){
                        if(el.breed !== filter.breed && filter.breed !== "Все"){
                            isSuccess = false;
                        }
                    }

                    if(filter.gender !== null){
                        if(el.gender !== filter.gender && filter.gender !== "Все"){
                            isSuccess = false;
                        }
                    }

                    if(isSuccess) newArray.push(el);
                })
                setPetsList(newArray);
            }
        })
    }, [props])
    const OpenModal = (petsIdNow) => {
        setPetsId(petsIdNow);
        Open(true);
    }

    return isMobile === true? 
    <>
        <BlockPetsMobile
            PetsList={PetsList}
            open={OpenModal}
        /> 
        {isOpen && <FormApplication show={isOpen} setShow={Open} petsIdNow={petsId}/>}
    </>
    :
    <div className="container" style={{display: "flex", flexDirection: "column"}}>
        <BlockPetsDesktop
            PetsList={PetsList}
            open={OpenModal}
        />
        {isOpen && <FormApplication show={isOpen} setShow={Open} petsIdNow={petsId}/>}
    </div> 
}

export default BlockPets