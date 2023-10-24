import { useEffect, useState } from "react";
import BlockSponsorsDesktop from "./BlockStaffDesktop";
import BlockStaffMobile from "./BlockStaffMobile";
import { useMediaQuery } from 'react-responsive'


function BlockStaff(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const [StaffList, setStaffList] = useState([]);

    useEffect(() => {
        fetch("/Staff", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            setStaffList(res);
        })
    }, [])

    return isMobile === true? 
    <BlockStaffMobile
        StaffList={StaffList}
    /> 
    : 
    <BlockSponsorsDesktop
        StaffList={StaffList}
    />;
}

export default BlockStaff