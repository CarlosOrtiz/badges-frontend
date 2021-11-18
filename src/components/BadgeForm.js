import React, { useState } from "react"
const log = console.log;

const BadgeForm = (props) => {

  const [form, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  });

  const handleChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleClick = () => {
    log('Buttooooooo')
  }

  const handleSubmit = e => {
    e.preventDefault();
    log('Form was submitted');
    log(form);
  }

  return (
    <div>
      <h1>New Attendant</h1>

      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label>First Name {form.firstName} {props.firstName}</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="firstName"
            value={props.firstName}
          />
        </div>

        <div className='form-group'>
          <label>Last Name</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="lastName"
            value={props.lastName}
          />
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="email"
            name="email"
            value={props.email}
          />
        </div>

        <div className='form-group'>
          <label>Job</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={props.jobTitle}
          />
        </div>

        <div className='form-group'>
          <label>Twitter</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="twitter"
            value={props.twitter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );

}

export default BadgeForm;