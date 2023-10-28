import React from "react";
import styled from "styled-components";
import Ftr from "../../Images/Groupftr.svg"
import Logo from "../../Images/logo.svg"
import WTSP from "../../Images/wtsp.svg"
import TLG from "../../Images/telegrm.svg"
import MAIL from "../../Images/mail.svg"

const Footer = styled.div`

`

const Rectangle = styled.div`
    width: auto;
    height: 90vh;
`

const P = styled.p`
    margin-top: 2vw;
    font-family: SansationR;
    width: 22vw;
    line-height: 144.914%;
    font-size: 1vw;
    color: var(--White)
`


function FooterDesktop() {
    return(
        <Footer>
            <Rectangle style={{backgroundImage: `url(${Ftr})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",}}>
            <div className="container" style={{display: "flex", justifyContent: "center"}} >
                <div style={{display: "flex", justifyContent: "center", marginTop:"30vh", flexDirection:"column" }}>
                        <div style={{}}>
                            <img src={Logo} alt="" style={{height: "4vw", width: "auto", }}></img>
                        </div>
                         <div style={{display:"flex", flexDirection:"row"  }}>
                        
                         <div>
                            <P> <pink style={{color:"var(--Azalea)"}}>Приют We care</pink> - это больше, чем просто приют. Это ответственное отношение к животным. 
                            Это любовь. Это забота. Это защита. Это тепло. Это про осознанное отношение человека к выбору питомца.</P>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <a href="https://t.me/Katerina10yo"><img src={TLG} alt="" style={{marginRight:"2vw"}} ></img></a>
                                <a href="https://api.whatsapp.com/send?phone=79036878312"><img src={WTSP} alt="" style={{marginRight:"2vw"}} ></img></a>
                                <a href="https://katerinakd666@gmail.com"><img src={MAIL} alt="" style={{marginRight:"2vw"}} ></img></a>
                            </div>
                        </div>
                        <div id="Footer" style={{marginLeft:"5vw"}}>
                            <P>Директор: +7 (999) 999-99-99</P>
                            <P>Приём животных в приют: <br/>+7 (921) 666-66-66 
                            <br/>(звонки с 18:00 до 20:00 ежедневно) </P>
                            <P>Для попечителей: +7 (921) 966-66-66</P>
                            <P>E-mail: we.care.msc@gmail.com</P>
                            <P>Адрес: Россия, Москва, ул. Котов, д. 66</P>
                        </div>
                    </div>
                </div>
           
            </div>
            </Rectangle>
        </Footer>
    )
}

export default FooterDesktop