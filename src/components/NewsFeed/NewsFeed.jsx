import React from "react";
import axios from "axios";
import CommentNewsFeed from './CommentNewsFeed';
import FollowNewsFeed from './FollowNewsFeed';
import NewProjectNewsFeed from './NewProjectNewsFeed';


class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true
    }
    }

  componentWillMount() {    
    axios
      .get(
        `https://localhost:44353/api/developers/newsfeed/` +
       localStorage.getItem("devId")
      )
      .then((res) => {        
        this.setState({newsfeed:res.data, loading:false}) 
        
      });

    
     
  }

  showsfeed(){
    if(this.state.loading===false)
    {
      return(
        this.state.newsfeed.map(nf=>
          {
              console.log(nf.hasOwnProperty('title'))
              if (nf.hasOwnProperty('title')) {
                console.log(nf)
              return(             
                    <NewProjectNewsFeed
                    project={nf} 
                    />
              )
            }
            else if(nf.hasOwnProperty('followeeID'))
            {
              return(
                <FollowNewsFeed 
                follow={nf}
                />
              )
            }
            else
            {
              return(
                <CommentNewsFeed
                comment={nf}
                />
              )
            }
          }  
        )
      )
    }
  }

  render() {
    console.log(this.state.newsfeed)
    return (
       
            <div class="container ">
              <div class="row">
                  <div class="col-md-8 col-xl-9">
                      <div class="card newsfeedback">
                          <div class="card-header">                              
                              <h5 class="card-title mb-0">Activities</h5>
                          </div>
                          <div class="card-body h-100" id="newsfeed">
                          {this.showsfeed()}
                          </div>
                      </div>
                  </div>
              </div>
            </div> 
    );
  }
}


export default NewsFeed