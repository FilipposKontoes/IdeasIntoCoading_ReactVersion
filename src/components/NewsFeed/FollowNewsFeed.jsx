import React from "react";
import ProfliePic from '../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FollowNewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

  render() {
    var follow=this.props.follow;
    return (
      <div  className="card mb-5 mt-5 cardborder cardbgcol">
        <div  className="media card-body">
            <div  className="media-body">
                <small  className="float-right text-navy text-muted">{follow.TimeStamp}</small>
                <img src={ProfliePic} width="36" height="36"  className="rounded-circle mr-4"
                    alt="Tsap Teo"/>
                <strong>{follow.follower.user.fullName}</strong> started following <strong>{follow.followee.user.fullName}</strong>
                <span  className="badge badge-pill badge-primary followicon">
                <FontAwesomeIcon icon={faUserPlus} />
                </span>
            </div>
        </div>
     </div>
    );
  }
}
export default FollowNewsFeed