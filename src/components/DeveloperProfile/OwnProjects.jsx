import React from "react";
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class OwnProjects extends React.Component { 

  render() {
    return (
      <>
        <div className="container">
          <div className='row'>
            <div className="">
              <div className="card-group">
                {this.props.projects.map((p) => (
                  <>
                  <Link to={"/ProjectProfile/"+p.id}>
                  <div className="card ownproj mr-3" key={p.id}>
                    <div className="card-header">                     
                      <h4>{p.title}</h4>{" "}
                    </div>
                    <div className="card-body">                     
                      <p>{p.description}</p>
                      <div className="d-flex justify-content-center"></div>
                    </div>
                  </div>
                  </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OwnProjects;
