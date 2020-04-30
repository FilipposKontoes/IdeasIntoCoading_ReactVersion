import React,{Component} from "react";
import { Button } from "reactstrap";
//import "./RegisterForm.css";


class RegisterForm extends Component{
    constructor(){
        super()
        this.state={
            id:"",
            fullName:"Dom hel",
            birthday:"",
            github:"",
            linkedin:""
        }
    }


    render(){
        return(
            <div className="container">


                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <form className="form-example " action="" method="post">
                        <h1 className="text-center">Welcome {this.state.fullName}</h1>

                        <div className="form-group">
                        <label for="password">Date of Birth:</label>
                        <input className="form-group"  name="birthdate"type="date"  id="date" placeholder={this.state.birthday}/>
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                        </div>

                        <div className="form-group">
                        <label for="password">GitHub:</label>
                        <input className="form-group" type="text" name="github" id="github" placeholder={this.state.github}/>
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                        </div>

                        <div className="form-group">
                        <label for="password">Linkedin:</label>
                        <input className="form-group" type="text" name="linkedin" id="linkedin" placeholder={this.state.linkedin}/>
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                        </div>
                        {/* @*<div class="form-group">
                        <label for="password">Picture:</label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="validatedCustomFile">
                            <label class="custom-file-label" for="validatedCustomFile"></label>
                        </div>
                        </div>*@ */}
                        <button type="submit" className="btn btn-primary btn-customized">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default RegisterForm