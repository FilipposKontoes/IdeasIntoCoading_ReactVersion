import React,{Component} from "react";
import {Link} from 'react-router-dom';


class ProjectOwned extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        console.log(this.props.projectsOwned)
        return(
        <>
        <h4 className='techtitle pb-3'><strong>Projects Owned</strong></h4>
        <div className="container">
          <div className='row'>
          
            <div className="">
              <div className="card-group">
              
                {this.props.projectsOwned.map(owned => (
                  <Link to={"/ProjectProfile/"+owned.id}>
                  <div className="card ownproj mr-3" key={owned.id}>
                    <div className="card-header">
                      {" "}
                      <h4>{owned.title}</h4>{" "}
                    </div>
                    <div className="card-body">                      
                      <p>{owned.description}</p>
                      <div className="d-flex justify-content-center"></div>
                    </div>
                  </div>
                  </Link>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </>
        )

    }
}
export default ProjectOwned