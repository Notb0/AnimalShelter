import { useEffect, useState } from "react";
import BlockSponsorsDesktop from "./BlockSponsorsDesktop";
import BlockSponsorsMobile from "./BlockSponsorsMobile";
import { useMediaQuery } from 'react-responsive'


function BlockSponsors() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const [SponsorsList, setSponsorsList] = useState([]);

    useEffect(() => {
        fetch("/Sponsors", {method: "GET"})
        .then(resp => resp.json())
        .then(res => {
            setSponsorsList(res);
        })
    }, [])

    return isMobile === true? 
    <BlockSponsorsMobile
        SponsorsList={SponsorsList}
    /> 
    : 
    <BlockSponsorsDesktop
        SponsorsList={SponsorsList}
    />;
}

export default BlockSponsors