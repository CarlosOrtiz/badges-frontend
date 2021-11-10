import React from "react";

import './styles/BadgeNew.css'
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

const BadgeNew = () => {
  return (
    <div>
      <Navbar />

      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">

          <div className="col">
            <Badge
              name='Carlos Alberto'
              lastName='Ortiz Losada'
              jobTitle='Frontend Developer'
              photo="https://www.gravatar.com/avatar/7b083bcd16a7e6f6b262fd7b6ca4eeac?d=identicon"
              twitter='CarlosOrtizL' />
          </div>

          <div className="col">
            <BadgeForm />
          </div>

        </div>
      </div>
    </div>
  );
}

export default BadgeNew;