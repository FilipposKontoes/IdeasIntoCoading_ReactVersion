import React from "react";
import ProfilePic from "./ProfilePic";
import FollowBadges from "./FollowBadges";
import ContactInfo from "./ContactInfo";
import TechsCard from "./TechsCard";
import OwnProjects from "./OwnProjects";
import axios from "axios";
import ReactLoading from 'react-loading';


class DeveloperProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true      
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://localhost:44353/api/developers/developerprofile/?ID=`+this.props.match.params.devId+"&currentUserID="
        +localStorage.getItem("devId")
      )
      .then((res) => {    
        console.log(res.data)     
        this.setState({          
          developerProfile:res.data.developerOfProfile,
          connectedDeveloperAlreadyFollowsProfileDeveloper:res.data.connectedDeveloperAlreadyFollowsProfileDeveloper,
          showActionButtons:res.data.showActionButtons,
          loading:false
         });       
      });
  }

  render() {
    if(this.state.loading==false){
      return (
        <>
          <div className="container text-center mt-5">
            <div className="row">
              <ProfilePic 
              DevelopersName={this.state.developerProfile.user.fullName}
              devId={this.props.match.params.devId}
              connectedDeveloperAlreadyFollowsProfileDeveloper={this.state.connectedDeveloperAlreadyFollowsProfileDeveloper}
              />  
              <FollowBadges
                ShowActionButtons={this.state.showActionButtons}
                developer={this.state.developerProfile}
              />  
              <hr class="line" />  
              <div className="w-100 mb-1 mt-1"></div>  
              <ContactInfo 
              developer={this.state.developerProfile} 
              />  
              <div className="col-1 vl"></div>  
              <TechsCard
                programmingLanguages={this.state.developerProfile.programmingLanguages
                }
              />  
              <hr class="line" />  
              <div className="w-100 mb-3 mt-3"></div>  
              <OwnProjects
               projects={this.state.developerProfile.projectsOwned} 
               />  
              <div className="w-100 mb-5 mt-5"></div>
            </div>
          </div>
        </>
      );

    }
    else
    {
      return  <ReactLoading  height={'20%'} width={'20%'} />
    }
    
  }
}

export default DeveloperProfile;
