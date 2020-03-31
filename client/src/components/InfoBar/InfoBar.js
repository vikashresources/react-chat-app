import React from 'react';
import './InfoBar.css';
import closeIcon from '../../Icons/closeIcon.png'
import onlineIcon from '../../Icons/onlineIcon.png'


const InfoBar = ({room})=>(
    <div className="infoBar">
       <div className="leftInnerContainer">
         <img className="onLineIcon" src={onlineIcon} alt="Online"/>
         <h3>{room} </h3>
       </div>
    <div className="rightInnerContainer">
        <a href="/"><img className="closeIcon" scr={closeIcon} alt="X"/></a>
    </div>
    </div>
)

export default InfoBar;