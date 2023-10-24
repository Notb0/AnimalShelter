import React from "react";
import styled from "styled-components";
import '../../App.css';
import One from '../../Images/Group1.svg'
import Two from '../../Images/Group2.svg'
import Three from '../../Images/Group3.svg'
import Four from '../../Images/Group4.svg'


const Tasks = styled.div`
    
`

const RCTL = styled.div`
    display: flex;
`

const Rectangle = styled.div`
    width: 28vw;
    height: 27vh;
    border-radius: 9px;
    margin-bottom: 4vh;
`

const H1 = styled.h1`
    font-family: LifeHack;
    font-size: 6vh;
`

function TasksDesktop() {

    return(
        <Tasks> 
            <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <H1 style={{margin: "auto", marginLeft: "0", marginBottom: "4vh"}}>Цели и задачи приюта</H1>
                <RCTL>
                    <Rectangle style={{backgroundImage: `url(${One})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", marginRight: "3vw"}}>
                        
                    </Rectangle>
                    <Rectangle style={{backgroundImage: `url(${Two})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", marginRight: "3vw"}}>
                        
                    </Rectangle>
                    </RCTL>
                    <RCTL>
                        <Rectangle style={{backgroundImage: `url(${Three})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", marginRight: "3vw"}}>
                        
                    </Rectangle>
                    <Rectangle style={{backgroundImage: `url(${Four})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", marginRight: "3vw"}}>
                        
                    </Rectangle>
                    </RCTL>
            </div>
        </Tasks>
    )
    
}

export default TasksDesktop