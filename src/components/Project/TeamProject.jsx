import React,{Component} from "react";
import {Link} from 'react-router-dom'
import ProfliePic from "../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png";

class TeamProject extends Component{

    constructor(props){
        super(props);
       
        
    }

    render(){
      if(this.props.teamMemberst!=null)
      {
        return(
          <>
    
     
                  {this.props.team.teamMembers.map(member => {
                      return (
                        <Link to={"/DeveloperProfile/"+member.id}>
                          <div className="card mb-3 ownproj cardsizead">
                          <div className="row no-gutters">
                            <div class="col-md-4" key={member.user.id}>
                              <img
                                src={ProfliePic}
                                alt="picture"
                                className="rounded-circle photoadmca mt-3 ml-2"
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">{member.user.fullName}</h5>
                                <p class="card-text"> 
                                </p>
                                <p class="card-text">
                                  <small>Members</small>
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          
                        </div>
                        </Link>
                      )
                    
                  })}

              
      </>
      )

      }
      else
      {
        return <></>
      }
       
    }
}
export default TeamProject
