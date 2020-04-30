import React from 'react';
import {Link} from 'react-router-dom'
import {faUserCircle, faCommentDots,faSignOutAlt,  faPaperPlane,  faLightbulb,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProfliePic from '../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png';

const devId=localStorage.getItem("devId");
const dev=localStorage.getItem("dev");


class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  

  logOut= (event) => {
    localStorage.clear();
    window.location.reload()

   
  }

  render() {
    
    return (
    <nav className="col-2 sidebar">   
      <div className="card proPic" id="proPic">
          <div className="card-body" id="picture" name="pic">
              <img src={ProfliePic} alt="picture" className="img-fluid rounded-circle w-60"/>
              <div className="d-flex justify-content-center">
              </div>
          </div>
      </div>
      <ul className="list-unstyled components">
          <li className="active">
          <Link to={"/DeveloperProfile/"+localStorage.getItem("devId")}>
          <FontAwesomeIcon icon={faUserCircle} className='mr-3' />
                  My Profile
                   </Link>             
          </li>
          <li>
          <Link to={"/MyProjects/"+localStorage.getItem("devId")}>
          <FontAwesomeIcon icon={faLightbulb} className='mr-3'/>
                  My Project
                   </Link>   
          </li>
          <li>
          <Link to={"/Messages/"+localStorage.getItem("devId")}>
              <FontAwesomeIcon icon={faCommentDots} className='mr-3'/>
                  Message
              </Link>           
          </li>
          <li>
              <a href={localStorage.getItem("gitHub")} id="github">                  
                  <FontAwesomeIcon icon={faGithub} className='mr-3'/>
                  GitHub
              </a>
          </li>
          <li>
              <a href="">                  
                  <FontAwesomeIcon icon={faPaperPlane} className='mr-3'/>
                  About Us
              </a>
          </li>
          <li>
                  <a href="#" onClick={this.logOut}> 
                  <FontAwesomeIcon  icon={faSignOutAlt} className='mr-3'/>                      
                      Log Off
                  </a>
              

          </li>
      </ul>
  </nav>
     
    );
  }
}


export default SideNavBar