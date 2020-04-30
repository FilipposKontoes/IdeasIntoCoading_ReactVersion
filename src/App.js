import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/LandingPage/LandingPage';
import NavBar from './components/Layout/NavBar';
import SideNavBar from './components/Layout/SideNavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DeveloperProfile from "./components/DeveloperProfile/DeveloperProfile";
import ProjectProfile from "./components/Project/ProjectProfile";
import ProjectForm from "./components/Project/ProjectForm";
import DeveloperRegistrationForm from "./components/DeveloperRegisterForm/DeveloperRegisterForm";
import MyProject from "./components/Project/MyProject";
import SearchResults from "./components/SearchResults";
import './App.css';
import NewsFeed from './components/NewsFeed/NewsFeed';
import About from './components/Pages/About';
import Messages from "./components/Messages/Messages"


function App() {
 

  return (
    <>
    <Router>
      <NavBar/>
     <div className="row col-12 mainclassbody">
     {localStorage.getItem("devId")!= null &&
       <SideNavBar/>
      }
              
       
       <div className={
        localStorage.getItem("devId")!= null ? 'col-10 landingmain' : 'col-12 landingmain'
      } >
      <Switch>
          <Route exact path="/">
             <Index/>
          </Route>
          <Route path={`/DeveloperProfile/:devId`} component={DeveloperProfile}/>
          <Route path={`/ProjectProfile/:projectId`} component={ProjectProfile}/>
          <Route path={`/ProjectForm/:projectId`} component={ProjectForm}/>
          <Route path={`/DeveloperRegisterForm/`} component={DeveloperRegistrationForm}/> 
          <Route path={`/MyProjects`} component={MyProject}/>
          <Route path={`/SearchResults/:searchString`} component={SearchResults}/> 
          <Route path={`/NewsFeed`} component={NewsFeed}/>
          <Route path={`/AboutUs`} component={About}/>
          <Route exact path={`/ProjectForm/`} component={ProjectForm}/>
          <Route path={"/Messages/:devId"} component={Messages}/>
          
        </Switch>
        </div>
       </div> 
    </Router>
    </>
  );
}

export default App;