import BlockHelloDesktop from "./BlockHelloDesktop";
import BlockHelloMobile from "./BlockHelloMobile";
import { useMediaQuery } from 'react-responsive'


function BlockHello() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <BlockHelloMobile/> : <BlockHelloDesktop/>;
}

export default BlockHello