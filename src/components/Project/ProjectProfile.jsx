import React, { Component } from "react";
import ChooseButton from "./ChooseButton";
import axios from "axios";
import CommentProject from "./CommentProject";
import CategoriesProject from "./CategoriesProject";
import TechCard from "../DeveloperProfile/TechsCard";
import ProfliePic from "../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png";
import ReactLoading from 'react-loading';
import TeamProject from "./TeamProject"
import {Link} from 'react-router-dom'

class ProjectProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading:true      
    };
    this.changeComment = this.changeComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    axios
      .get(`https://localhost:44353/api/projects/projectprofile/?ID=`+this.props.match.params.projectId+
      "&developerID="+localStorage.getItem("devId"))
      .then((res) => {        
        this.setState({ ProjectProfile: res.data,loading:false });
      });
  }

  handleClick() {
    this.setState((prevState) => {
      return {};
    });
  }
  changeComment(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if(this.state.loading===false){
      return (
        <div className="d-flex align-items-stretch container mt-3">
          <div id="content" className="col-md-12">
            <div className="comlabel">
              <div className='row'>  
                <div className='col-10'>
                <h1 className="mb-4 text-center">
                  {this.state.ProjectProfile.project.title}
                </h1>
                </div>  
                <div className='col-2 mt-2'>
                <ChooseButton action={this.state.ProjectProfile.project.id}/>
                </div>
              </div>
            </div>  
            <CategoriesProject
             categories={this.state.ProjectProfile.project.projectCategories}
               />
            <hr class="line" />  
            <div className="card-group">
            {/* <Link to={"/DeveloperProfile/"+this.state.ProjectProfile.project.admin.id}> */}
              <div className="card mb-3 ownproj cardsizead">
                <div className="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={ProfliePic}
                      alt="picture"
                      className="rounded-circle photoadmca mt-3 ml-2"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{this.state.ProjectProfile.project.admin.user.fullName}</h5>
                      <p class="card-text"> 
                      </p>
                      <p class="card-text">
                        <small>Admin</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            
           
            </div>  
            <TeamProject team={this.state.ProjectProfile.project.team}/>          

            <hr class="line" />  
            <div className="row">
              <div className="col-5">
                <h4 className="techtitle pb-3">
                  <strong>Description</strong>
                </h4>
                <p className='comlabel'>{this.state.ProjectProfile.project.description}</p>
              </div>  
              <div className="col-1 vl"></div>  
              <TechCard
                programmingLanguages={this.state.ProjectProfile.project.programmingLanguages}
              />
            </div>
            <hr class="line" />           
            <CommentProject
              comments={this.state.ProjectProfile.project.comments}
            />
          </div>
        </div>
      );
    }
    else
    {
      return  <ReactLoading  height={'20%'} width={'20%'} />
    }
  
  }
}

export default ProjectProfile;
