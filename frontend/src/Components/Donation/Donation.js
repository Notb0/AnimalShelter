import DonationDesktop from "./DonationDesktop";
import DonationMobile from "./DonationMobile";
import { useMediaQuery } from 'react-responsive'


function Donation() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <DonationMobile/> : <DonationDesktop/>;
}

export default Donation