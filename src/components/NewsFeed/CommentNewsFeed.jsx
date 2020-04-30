import React from "react";
import ProfliePic from '../Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommentNewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

  render() {
      var comment=this.props.comment;
    return (

      <div class="card mb-5 mt-5 cardborder cardbgcol">
        <div class="media card-body">
            <img src={ProfliePic} width="36" height="36" class="rounded-circle mr-4" alt="Tsap Teo"/>
            <div class="media-body">
                <small class="float-right text-navy text-muted">30m ago</small>
                <strong>{comment.developer.user.fullName}</strong> commented at <strong>{comment.project.title}</strong>
                <br/>
                <span class="badge badge-pill badge-primary commenticon">
                <FontAwesomeIcon icon={faComments} />
                </span>
                <hr class="line" />
                <div class="text-sm p-2 mt-1">
                    <p>{comment.project.description}
                    <button class="btn btn-secondary btn-sm float-right">See all comments</button>
                    </p>
                </div>
            </div>
        </div>
      </div> 
    );
  }
}


export default CommentNewsFeed