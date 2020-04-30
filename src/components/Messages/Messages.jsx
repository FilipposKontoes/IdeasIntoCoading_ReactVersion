import React,{Component} from "react";
import axios from "axios";
import ReceivedMessages from "./ReceivedMessages";
import SendMessages from "./SendMessages";
import NewMessages from "./NewMessages";

class Messages extends Component{
    constructor(){
        super()
        this.state={
            message:"Inbox"
        }
        this.showMessages = this.showMessages.bind(this);
        this.methodOnClick = this.methodOnClick.bind(this);
        this. methodSecondOnClick=this.methodSecondOnClick.bind(this);
        this. methodThirdOnClick=this.methodThirdOnClick.bind(this);
        this. showNew=this.showNew.bind(this);
    }

  methodOnClick(event){
      event.preventDefault();
      this.setState({message:"Inbox"});
  }

  methodSecondOnClick(event){
    event.preventDefault();
    this.setState({message:"Sent"});
  }

  methodThirdOnClick(event){
    event.preventDefault();
    this.setState({message:"New"}) 
  }

  showNew(){
    if (this.state.message=="New") {
        return(
            <NewMessages/>
        )  
      }
  }
    showMessages(){
        if (this.state.message=="Inbox") {
          return(
            <ReceivedMessages />
          )  
        }
        else if(this.state.message=="Sent")
        {
           return(
            <SendMessages/>   
           )
        }
        
      }

    render(){
        return(
            <div className="container">
            <div className="row">
    
                <div className="card col-lg-4 mainbody messagebody">
                    
                    <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item col">
                            <a className="nav-link" href="#" onClick={this.methodThirdOnClick}>New</a>
                        </li>
                        <li className="nav-item col" >
                            <a className="nav-link" href="#" onClick={this.methodOnClick}>Inbox</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link" href="#" onClick={this.methodSecondOnClick}>Sent</a>
                        </li>
                    </ul>
                    </div>

                    <div className="card-body Content ">
                    <div className="card mb-3 ">
                   
                        <div className="card-body messagecard">
                            {this.showMessages()}
                        
                     
                        </div>
                        
                    
                    </div>

                    </div>
                </div>
            
                <div className="card col-lg-8 mainbody">
                    {this.showNew()}
                </div>
            
            </div>
            </div>
        )
    
    
            
        
    }

}
export default Messages