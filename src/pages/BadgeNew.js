import React, { useState } from "react";

import './styles/BadgeNew.css'
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

const BadgeNew = () => {
  //HOOK
  const [form, setValues] = useState({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  });

  const handleChange = e => {
    console.log(e)
    setValues({
      form: {
        ...form ,
        props: { [e.target.name]: e.target.value }
      },
    });
  }

  return (
    <div>
      <Navbar />

      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">

          <div className="col-6">
            <div>X:{form.form.firstName}</div>

            <Badge
              name={form.form.firstName}
              lastName='Ortiz Losada'
              jobTitle='Frontend Developer'
              photo="https://www.gravatar.com/avatar/7b083bcd16a7e6f6b262fd7b6ca4eeac?d=identicon"
              twitter='CarlosOrtizL' />
          </div>

          <div className="col-6">
            {console.log(form)}
            <BadgeForm onChange={handleChange} formValues={form} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default BadgeNew;