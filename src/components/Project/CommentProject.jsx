import React, { Component } from "react";

class CommentProject extends Component {
  

  render() {
    return (
      <>
        <section class="py-5 comments">
          <div>
            <div class="container">
              <div class="row" id="comments">
                <div class="col-12 pb-3">
                  <h2 className='comlabel'>
                    <strong>Comment Section</strong>
                  </h2>
                </div>
                <div class="col-10">
                  <form class="comment-form" method="post" action="">
                    <textarea
                      id="commentText"
                      class="comment-area col-md-12"
                      name="user_comment"
                      placeholder="Write your comment here"
                    ></textarea>
                  </form>
                </div>
                <div class="col-2 mt-2">
                  <button
                    data-project-id="5"
                    data-developer-id="Che Domi"
                    id="submitComment"
                    type="submit"
                    class="btn  postbtn"
                  >
                    Post
                  </button>
                </div>
                {this.props.comments.map(comment => {
                  return(
                <div class="row mt-5 commnetborder">
                  <div class="col-1 mt-4">
                    <img
                      src="https://image.ibb.co/jw55Ex/def_face.jpg"
                      class="img img-rounded img-fluid"
                      alt="developerimg"
                    />
                  </div>
                  <div class="col-11">
                  <strong>{comment.developer.user.fullName}</strong>
                    <p>
                      {comment.text}
                    </p>
                    <small class=" text-center">
                     {comment.timeStamp}
                    </small>
                  </div>
                </div>
                )
            })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default CommentProject;
