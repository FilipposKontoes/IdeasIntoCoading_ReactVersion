import React from "react";
import { render } from "react-dom";
// import "./DeveloperRegisterForm.css";



const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class DeveloperRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      birthDate: '',
      gitHub: '',
      linkedIn: '',
      errors: {
            name: '',
            lastName: '',
            birthDate: '',
            gitHub: '',
            linkedIn: '',
          }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(name);

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
        case "lastName":
        errors.lastName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    
    // if (validateForm(this.state.errors)) {
    //   console.info("Valid Form");
    // } else {
    //   console.error("Invalid Form");
    // }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Create Profile</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.lastName.length > 0 && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="name">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                noValidate
              />
              {errors.name.length > 0 && (
                <span className="error">{errors.name}</span>
              )}
            </div>
            <div className="birthDate">
              <label htmlFor="birthDate">Date of Birth</label>
              <input
                type="date"
                name="birthDate"
                onChange={this.handleChange}
                noValidate
              />
            </div>

            <div className="gitHub">
              <label htmlFor="gitHub">GitHub</label>
              <input
                type="text"
                name="gitHub"
                onChange={this.handleChange}
                noValidate
              />
            </div>

            <div className="linkedIn">
              <label htmlFor="linkedIn">LinkedIn</label>
              <input
                type="text"
                name="linkedIn"
                onChange={this.handleChange}
                noValidate
              />
            </div>
            
            <div className="submit">
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DeveloperRegisterForm;
