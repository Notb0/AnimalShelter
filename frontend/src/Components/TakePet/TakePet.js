import TakePetDesktop from "./TakePetDesktop";
import TakePetMobile from "./TakePetMobile";
import { useMediaQuery } from 'react-responsive'


function TakePet() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <TakePetMobile/> : <TakePetDesktop/>;
}

export default TakePet