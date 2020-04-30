import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FollowBadges extends React.Component {

  render() {   
      return (
        <>
          <div className="col-6 col-md-6 row followb">
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item border-0">
                <span className="badge badge-pill numsize">
                    {this.props.developer.followers.length}
                  </span>
                  <br/>
                  <strong>Followers</strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item border-0">
                <span className="badge badge-pill numsize">
                    {this.props.developer.following.length}
                  </span>
                  <br/>
                  <strong>Following</strong>
                 
                </li>
              </ul>
            </div>


            <div className="col-md-12 decrdev">
          <div className="info-header mb-5">
            <h4 className="pb-3">Description:</h4>
            <p className="lead pb-3">{this.props.developer.description}</p>
          </div>
        </div>
           
          </div>
        </>
      );
    }  
  
}

export default FollowBadges;
