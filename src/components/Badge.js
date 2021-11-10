import React from "react"

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg';

import { Typography } from 'antd';
const { Title } = Typography;

const Badge = (props) => {
  return (
    <div className='Badge'>
      <div className="Badge__header">
        <img src={confLogo} alt='Logo de la conferencia' />
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" src={props.photo} alt='Avatar' />
        <Title>{props.name} <br /> {props.lastName}</Title>
      </div>

      <div className="Badge__section-info">
        <Title level={3}>{props.jobTitle}</Title>
        <div>@{props.twitter}</div>
      </div>

      <div className="Badge__footer">#platziconf</div>
    </div>
  )
}

export default Badge;
