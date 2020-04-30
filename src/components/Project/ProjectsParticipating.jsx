import React,{Component} from "react";
import {Link} from 'react-router-dom'

class ProjectsParticipating extends Component{
    render(){
        console.log(this.props.participates)
    return(
        <>
        <h4 className='techtitle pb-3'><strong>Project participating</strong></h4>
        <div className="container">
          <div className='row'>
          
            <div className="">
              <div className="card-group">
                {this.props.participates.map(participate => (
                  <Link to={"/ProjectProfile/"+participate.project.id}>
                  <div className="card ownproj mr-3" key={participate.project.id}>
                    <div className="card-header">
                      {" "}
                      <h4>{participate.project.title}</h4>{" "}
                    </div>
                    <div className="card-body">                      
                      <p>{participate.project.description}</p>
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
      
    //     <div className="row">
    //     <div className="col-md-12">
    //         <div className="panel">
    //         <div className="panel-heading"><h4>Project participating</h4></div>
    //         <div className="panel-body">
    //             {this.props.participates.map(participate => {
    //             return (
    //                 <>
    //             {/* // <a href="project Profile"> */}
    //             <div className="col-md-1 column">
    //             {/* <img className="rounded-circle" src={owned.randomImg} style="width: 50px;"/> */}
    //             <p key={participate.project.id}>{participate.project.title}</p>
    //             </div>
    //             {/* // </a> */}
    //             <div className="col-md-1 column">
    //                 <p>{participate.project.description}</p>
    //                     </div>
    //             </>
    //             )}
    //             )}    
    //         </div>

    //         </div>
    //     </div>
    // </div>


    )}
}
export default ProjectsParticipating