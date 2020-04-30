import React from "react";
import ProfliePic from '../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewProjectNewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

  render() {

      var project=this.props.project;
     

    return (
      <div class="card mb-5 mt-5 cardborder cardbgcol">
        <div class="media card-body">
            <img src={ProfliePic} width="36" height="36" class="rounded-circle mr-4" alt="Tsap Teo"/>
            <div class="media-body">
                <small class="float-right text-navy text-muted">{project.timeStamp}</small>
                <strong>{project.admin.user.fullName}</strong> created a new project <strong>{project.Title}</strong>
                <br/>
                <span class="badge badge-pill badge-primary createicon">
                <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <hr class="line" />
                <div class="text-sm p-2 mt-1 text-center">
                    <p>{ project.description}</p>
                </div>
                <button class="btn btn-danger btn-sm mt-1 float-right">Visit Project</button>
            </div>
        </div>
    </div>  
    );
  }
}


export default NewProjectNewsFeed