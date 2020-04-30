import React,{Component} from "react";
import {Link} from 'react-router-dom'



class Projects extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        console.log(this.props.projects)
        return(
          <>
          <h4 className='techtitle pb-3'><strong>Projects</strong></h4>
          <div className="container">
            <div className='row'>            
              <div className="">
                <div className="card-group">
                  {this.props.projects.map(project => (
                    <Link to={"/ProjectProfile/"+project.id} key={project.id}>
                    <div className="card ownproj mr-3" key={project.id}>
                      <div className="card-header">
                        {" "}
                        <h4>{project.title}</h4>{" "}
                      </div>
                      <div className="card-body">                      
                        <p>{project.description}</p>
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
export default Projects