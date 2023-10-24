import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";
import { useMediaQuery } from 'react-responsive'


function About() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <AboutMobile/> : <AboutDesktop/>;
}

export default About