import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import ProfliePic from '../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png';
import axios from "axios";
import {Link} from 'react-router-dom'

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            
        connectedDeveloperAlreadyFollowsProfileDeveloper:this.props.connectedDeveloperAlreadyFollowsProfileDeveloper
      }
  }

  followrequest=e=>{
  
    if (!this.state.connectedDeveloperAlreadyFollowsProfileDeveloper) {
      axios({
          url: "https://localhost:44353/api/followings/Follow/",
          method: 'POST',
          data:  {FolloweeID:this.props.devId,
            FollowerID:localStorage.getItem("devId")}
              ,
          headers: {
              Accept: 'application/json',
    
          }
          })
        .then(res => {

          
          this.setState({connectedDeveloperAlreadyFollowsProfileDeveloper:!this.state.connectedDeveloperAlreadyFollowsProfileDeveloper})
          console.log(this.state.connectedDeveloperAlreadyFollowsProfileDeveloper)
    
        });
        
    }
    else
    {
      axios({
        url: "https://localhost:44353/api/followings/unfollow/",
        method: 'POST',
        data:  {FolloweeID:this.props.devId,
          FollowerID:localStorage.getItem("devId")}
            ,
        headers: {
            Accept: 'application/json',
  
        }
        })
      .then(res => {
        
        this.setState({connectedDeveloperAlreadyFollowsProfileDeveloper:!this.state.connectedDeveloperAlreadyFollowsProfileDeveloper})          
  
      });

    }
}


  render() {
    return (
        <>
        

                <div className="col-md-6 ">
    
                    <div className="card profpic">
    
                        <div className="card-body">
                            <img src={ProfliePic} alt="profilePic" className="img-fluid rounded-circle w-60 mb-3 imgpic" />
    
                               <h3 className='devname'>{this.props.DevelopersName}</h3>   
    
                            <div className="d-flex justify-content-center">
                                <div className="p-4">
    
                                    <button  type="button" onClick={this.followrequest} className="btn js-toggle-follow btnprof">
                                             <FontAwesomeIcon icon={faUserPlus} className='mr-3' />
                                             {this.state.connectedDeveloperAlreadyFollowsProfileDeveloper ? (
                                          "Unfollow"
                                            ) : "Follow"}
                                    </button>
    
                                </div>
                                <div className="p-4">
                                <Link to={"/Messages/"+localStorage.getItem("devId")}>
                                    <button type="button" className="btn btnprof">
                                    <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                                       
                                        Message
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




    </>
    );
  }
}

export default ProfilePic;
