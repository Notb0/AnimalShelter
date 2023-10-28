import { useEffect, useState } from "react";
import FormApplicationDesktop from "./FormApplicationDesktop";
import FormApplicationMobile from "./FormApplicationMobile";
import { useMediaQuery } from 'react-responsive'


function FormApplication({show, setShow, petsIdNow}) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const [FullName, setFullName] = useState(); 
    const [DateBirth, setDateBirth] = useState(); 
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState(); 
    const [petsId, setPetsId] = useState(1);
    const [PetsList, setPetsList] = useState([]);
    useEffect(() => {setPetsId(petsIdNow); console.log(petsIdNow)}, [petsIdNow])

    useEffect(() => {
        fetch("/pets", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            setPetsList(res);
        })
    }, [])

    const SendFormApplication = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({full_name: FullName, dateBirth: DateBirth, phone: phone,address: address, petsId:petsId})
        };
        fetch("/application/",requestOptions);
    }

    return isMobile === true? 
    <FormApplicationMobile 
        full_name={FullName}
        address={address}
        dateBirth={DateBirth}
        petsId={petsId}
        petsList={PetsList}
        phone={phone} 
        Changeaddress={setAddress}
        ChangedateBirth={setDateBirth}
        Changefull_name={setFullName}
        ChangepetsId={setPetsId}
        Changephone={setPhone}
        func={() => SendFormApplication()}
        Show={show}
        setShow={setShow}
    /> 
    : 
    <FormApplicationDesktop 
        full_name={FullName}
        address={address}
        dateBirth={DateBirth}
        petsId={petsId}
        petsList={PetsList}
        phone={phone} 
        Changeaddress={setAddress}
        ChangedateBirth={setDateBirth}
        Changefull_name={setFullName}
        ChangepetsId={setPetsId}
        Changephone={setPhone}
        func={() => SendFormApplication()}
        Show={show}
        setShow={setShow}
    />;
}

export default FormApplication