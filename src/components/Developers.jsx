import React,{Component} from "react";
import ProfliePic from '../components/Images/1075605a-6f18-4f8c-bdc0-ff6620554bb1DeathNote.png';
import {Link} from 'react-router-dom';

class Developers extends Component{
    constructor(props){
        super(props);
      
    }
    
    render(){
        console.log(this.props.developers)
        return(
          <>
          <h4 className='techtitle pb-3'><strong>Developers</strong></h4>
          <div className="container" >
             
              <div className="">
           {this.props.developers.map(developer => (
               <Link to={"/DeveloperProfile/"+developer.id} key={developer.id}>
          <div className="card-group" >
          <div className="card mb-3 ownproj cardsizead" >
            <div className="row no-gutters" >
              <div class="col-md-4" >
                <img
                  src={ProfliePic}
                  alt="picture"
                  className="rounded-circle photoadmca mt-3 ml-2"                    
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">                  
                  <h5 className="card-title">{developer.user.fullName}</h5>
                  <p className="card-text"> 
                  </p>                    
                  <p className="card-text">                     
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
          ))}
          </div>
          
          </div>
          </>

        )

    }
}
export default Developers