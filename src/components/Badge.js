import React from "react"

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg';

import { Typography } from 'antd';
const { Title } = Typography;

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className="Badge__header">
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.photo} alt='Avatar' />
          <Title code>{this.props.name} <br /> {this.props.lastName}</Title>
        </div>

        <div className="Badge__section-info">
          <Title level={3}>{this.props.jobTitle}</Title>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    )
  }
}

export default Badge;
