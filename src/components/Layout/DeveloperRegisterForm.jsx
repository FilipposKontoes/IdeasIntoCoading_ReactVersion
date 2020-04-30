import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import { withRouter } from "react-router";

const changeLocalStorage=(devId,gitHub)=>
{
  localStorage.setItem("devId",devId);
 localStorage.setItem("gitHub",gitHub);


}

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class DeveloperRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      errors: {
            name: '',
            lastName: '',
            birthDate: '',
            gitHub: '',
            linkedIn: '',
          }
    };
  }

  toggleModal = () => {
    this.setState({
       modal: ! this.state.modal
    })
 };

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
    if (validateForm(this.state.errors)) {
      axios({
        url: "https://localhost:44353/api/accounts/register/",
        method: 'POST',
        data: ({lastName:this.state.lastName,Name:this.state.name,password:this.state.password,confirmPassword:this.state.confirmPassword,email:this.state.email}),
        headers: {
            Accept: 'application/json',
        }
        })
      .then(res => {
        console.log(res.data)        
        changeLocalStorage(res.data.id,res.data.gitHub)
        this.props.history.push({ pathname: "/developerprofile/"+res.data.id});
        window.location.reload()
      });
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <>
      <Button onClick={this.toggleModal} className='btnprof mr-3'>Register</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Create Profile</h2>
          <form onSubmit={this.handleSubmit} noValidate className='regform'>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />
              {errors.lastName.length > 0 && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">E-Mail</label>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />             
            </div>
            <div className="name">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />
              {errors.name.length > 0 && (
                <span className="error">{errors.name}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />
            </div>
            <div className="confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />
            </div>

            <div className="birthDate">
              <label htmlFor="birthDate">Date of Birth</label>
              <input
                type="date"
                name="birthDate"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />
            </div>
          
            <div className="submit">
              <button className='regbtn'>Create</button>
            </div>
          </form>
        </div>
      </div>     
      </Modal>
      </>
    );
  }
}

export default  withRouter(DeveloperRegisterForm);