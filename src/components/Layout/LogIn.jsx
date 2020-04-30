import React from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from "react-router";

const changeLocalStorage=(devId,gitHub)=>
{
  localStorage.setItem("devId",devId);
 localStorage.setItem("gitHub",gitHub);


}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {       
    };
  }

  toggleModal = () => {
    this.setState({
       modal: ! this.state.modal
    })
 };

  handleChange = (event) => {
    event.preventDefault(); 
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state)   
  };


  handleSubmit=(event)=>{
    event.preventDefault();
           axios({
         url: "https://localhost:44353/api/accounts/login/",
         method: 'POST',
         data: ({email:this.state.email, rememberMe:this.state.rememberMe, password:this.state.password}),
         headers: {
             Accept: 'application/json',
         }
         })
       .then(res => {
         console.log(res.data)        
         changeLocalStorage(res.data.id,res.data.gitHub)
         this.props.history.push({ pathname: "/newsfeed/"});
         window.location.reload()
       });

  }
  

  render() {
   
    return (
      <>
      <Button onClick={this.toggleModal} className='btnprof mr-3'>Log In</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Create Profile</h2>
          <form onSubmit={this.handleSubmit} noValidate className='regform'>
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
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                onChange={this.handleChange}
                noValidate
                className='regforminput'
              />
            </div>
            <div className="rememberMe">
              <label htmlFor="rememberMe">Remember Me</label>
              <input
                type="checkbox" 
                name="rememberMe"              
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
export default withRouter(LogIn);
