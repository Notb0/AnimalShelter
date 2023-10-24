import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import { useMediaQuery } from 'react-responsive'


function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <FooterMobile/> : <FooterDesktop/>;
}

export default Footer