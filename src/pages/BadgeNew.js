import React from "react";

import './styles/BadgeNew.css'
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";

import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div>
          <div>
            <div>
              <Badge
                name='Carlos Alberto'
                lastName='Ortiz Losada'
                jobTitle='Frontend Developer'
                photo="https://www.gravatar.com/avatar/7b083bcd16a7e6f6b262fd7b6ca4eeac?d=identicon"
                twitter='CarlosOrtizL' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;