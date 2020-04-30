import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHome } from "@fortawesome/free-solid-svg-icons";
import LogIn from "./LogIn";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import Register from "./DeveloperRegisterForm";
import {Link} from 'react-router-dom'







const dev=localStorage.getItem('devId');
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, searchString:"",hubConnection:""};
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.search = this.search.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  ShoLoginOrNotifications(){
    console.log(dev);
    if (dev!=null) {
      return(
        <div className='mt-2'> 
        <Link to={"/NewsFeed/"}>         
          <FontAwesomeIcon icon={faHome} /> <button  className=' pr-3 pl-2 btnprof mr-3'>Home</button>  
        </Link>  

          <FontAwesomeIcon icon={faGlobe} /> <button  className=' pr-3 pl-2 btnprof mr-3'>Notifications</button>
        </div> 
      )  
    }
    else
    {
       return(
        <div className="row">
           <LogIn/>
           <Register/> 
        </div>   
       )
     

    }
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  search(event) {
    event.preventDefault();
    this.props.history.push({ pathname: "/SearchResults/" + this.state.searchString });
  }

  render() {
    localStorage.setItem('blue', "blue");
    return (
      <nav className="navbar-expand-lg  mainnavbar">
        <div className="container-fluid">
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mr-auto pt-3 " href="#">
              <strong>Ideas into Coding</strong>
            </a>
            <div className="form-inline mr-auto my-2 my-lg-0 float-left pt-2">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                name="searchString"
                onChange={this.onChange}                
              />
              <button
                className="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
                onClick={this.search}
              > 
              <FontAwesomeIcon icon={faSearch} /> 
              </button>             
            </div>
            <div>
              {this.ShoLoginOrNotifications()}
            </div>           
          </div>
        </div>
      </nav>
    );
  }
}



export default withRouter(NavBar);


