import React, { Component } from "react";
import axios from "axios";
import ProjectOwned from "./ProjectOwned";
import ProjectsParticipating from "./ProjectsParticipating";
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom'

class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {loading:true};
    this.createNewProject = this.createNewProject.bind(this);
  }
  createNewProject(event) {
    event.preventDefault();
    this.props.history.push({ pathname: "/ProjectForm/" });
  }

  componentWillMount() {
    axios
      .get(`https://localhost:44353/api/projects/myproject/`+localStorage.getItem("devId"))
      .then((res) => {       
        this.setState({projectsOwned:res.data.projectsOwned,teamParicipating:res.data.teamParicipating,loading:false}) 
        
      });
  }

  render() {
    if(this.state.loading)
    {
        return <ReactLoading  height={'20%'} width={'20%'} />
    }
    else
    {
      return (
        <>
          <div className="container text-center mt-5">
          <h4 className='techtitle pb-3'><strong>Your Projects</strong></h4>
            <div className="row">
             <div className="p-4">
             <Link to={"/ProjectForm/newproject"}>
                <button type="button" className="btn btnprof" onClick={this.createNewProject}>
                <FontAwesomeIcon icon={faLightbulb} />New Project
                </button>
                </Link>
            </div>
             
              <div className="w-100 mb-3 mt-3"></div>
              <ProjectOwned projectsOwned={this.state.projectsOwned} />
  
                <div className="w-100 mb-5 mt-5"></div>
                <hr />
              <div className="w-100 mb-3 mt-3"></div>
  
              <ProjectsParticipating participates={this.state.teamParicipating}/>
  
              <div className="w-100 mb-5 mt-5"></div>
            </div>
          </div>
        </>
      
      );

    }
    
  }
}

export default MyProject;
