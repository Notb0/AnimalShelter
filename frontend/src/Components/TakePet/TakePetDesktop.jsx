import React, { useState } from "react";
import styled from "styled-components";
import TakeGroup from "../../Images/TakeGroup.svg"
import ONE from "../../Images/one.svg"
import TWO from "../../Images/two.svg"
import THREE from "../../Images/three.svg"
import {ReactComponent as  ARROW} from "../../Images/arrow.svg"
import Form from "../FormApplication/FormApplication"

const TakePet = styled.div`

`

const Div = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;
`

const H1 = styled.h1`
    font-family: LifeHack;
    font-size: 3vw;
    font-weight: 100;
`

const P = styled.p`
    font-family: SansationR;
    text-decoration: underline;
    font-size: 2vh;
    &:hover {
        cursor: pointer;
    }
`

const Button = styled.button`
    border-radius: 20px;
    width: 19vw;
    height: 2vw;
    background-color: rgba(0, 0, 0, 0);
    color: var(--Viridian_Green);
    border: 1px solid var(--Viridian_Green);
    font-family: LifeHack;
    font-size: 1.5vw;
    &:hover {
        background-color: rgba(1, 1, 1, 0.2);
    }
`

const LeftArrow = styled(ARROW)`
    transform: rotate(180deg);
    display: ${props => props.isShow?"flex": "none"};
`
const RightArrow = styled(ARROW)`
    display: ${props => props.isShow?"flex": "none"};
`

const PageContent = [
    {id:1, text:<p style={{fontFamily:"SansationR", fontSize:"1.1vw"}}>Первое, что необходимо – это выяснить, все ли ваши домочадцы готовы принять в семью нового члена. Помните, что питомец – не игрушка, или сувенир в подарок. Это новый член семьи, который проживет с вами долгую счастливую жизнь.<br/>
    Приехать в приют, или выбрать питомца в каталоге на сайте приюта это еще не все. Обязательно свяжитесь с администратором приюта, задайте вопросы, выскажите свои пожелания по подбору питомца.<br/>
    У приютов строгие требования к будущим владельцам. Пройдите собеседование и выясните, что требуется от вас. Готовы ли вы подойти к усыновлению с полной ответственностью.<br/>
    Заполните анкету кандидата усыновителя. На ее рассмотрение потребуется несколько дней. А для вас это время – еще раз хорошенько все взвесить и подумать.</p>, image: ONE},
    {id:2, text:<p style={{fontFamily:"SansationR", fontSize:"1.1vw"}}>Вы заполнили анкету и ожидаете решения администрации приюта. Будьте готовы к тому, что к вам придут сотрудники приюта, чтобы убедиться, что животное будет передано в семью, где его ждут, и будут любить со всей ответственностью.<br/>
    Сотрудник приюта выезжает по месту жительства для проверкии подтверждения предоставленной информации в заполненной вами анкете.<br/>
    Наши требования и что необходимо сделать в этот период вам?<br/>
    Жилье должно находиться в собственности. Мы не отдаем животныхна съемные квартиры. Если у вас на руках договор о долгосрочной аренде жилья, к нему обязательно нужно письменное согласие собственникана проживание в квартире животного.<br/>
    Подготовить место для сна, еды, игр животного.</p>, image: TWO},
    {id:3, text:<p style={{fontFamily:"SansationR", fontSize:"1.1vw"}}>Ваша анкета одобрена. И вы можете забрать своего избранника. Убедитесь, что вы полностью готовы к тому, что прямо сегодня ваша семья станет больше на одного члена. Все ли готово к этой встрече?<br/>
    Корм, наполнитель, лоток, мисочки (лучше керамические, под воду надо большую), когтеточка – это то, что вам понадобится в первый же день.<br/>
    Как происходит передача животного:<br/>
    В назначенный день мы встречаемся и заполняем двусторонний договоро передаче.<br/>
    При себе необходимо иметь паспорт и переноску (лучше пластиковую с надежными защелками) Пожалуйста, учитывайте, что без переноски мы животных не отдаем!</p>, image: THREE},
]

function TakePetDesktop() {
    const [isOpen, Open] = useState(true)
    const [nowPage, setPage] = useState(0)
    const [isShowModal, ShowModal] = useState(false)

    return(
        isOpen ? 
            <TakePet style={{marginTop:"3vw"}}>
                <Div style={{display: "flex", flexDirection: "row", alignItems: "center" , justifyContent:"space-between"}}>
                    <H1>Как взять питомца<br/>из приюта</H1>
                    <P onClick={() => Open(false)}>Узнать подробнее 🡥</P>
                </Div>
                <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{display:"flex"}}>
                        <img src={TakeGroup} alt="" style={{height:"20vw", width:"65vw"}}></img>
                    </div>
                    
                </div>
            </TakePet>
            :
            <div className="container" style={{marginTop:"3vw"}}>
                            <LeftArrow onClick={()=> setPage(nowPage - 1)}isShow = {nowPage !== 0} style={{width:"4vw", padding: "3vw"}}></LeftArrow>
                            <img src={PageContent[nowPage].image} style={{marginRight:"2vw", width:"15vw"}}></img>
                            <div style={{display:"flex", flexDirection:"column"}}>
                            <p style={{whiteSpace:"nowrap", fontSize:"1.5vw", fontFamily:"SansationR", color:"var(--Viridian_Green)"}}>Шаг {PageContent[nowPage].id} </p>
                            {PageContent[nowPage].text}
                            <Form show={isShowModal} setShow={ShowModal}/>
                            <Button onClick={() => ShowModal(true)}>Заполнить анкету</Button>
                            </div>
                            <RightArrow onClick={()=> setPage(nowPage + 1)}isShow = {nowPage !== 2} style={{width:"4vw", padding: "3vw"}}></RightArrow>
            </div>
        
    )
}

export default TakePetDesktop