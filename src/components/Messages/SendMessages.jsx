import React,{Component} from "react";
import axios from "axios";

class SendMessages extends Component{
    constructor(){
        super()
        this.state={
           Send:[{
               datePosted:"",
               id:0,
               receiver:{id:0,user:{fullName:""}},
                sender:{id:0,user:{fullName:""}},
                subject:"",
                text:""
           }]
        }
        
    }

    
    componentWillMount() {
        axios
          .get(`https://localhost:44353/api/messages/getSendMessages/`+localStorage.getItem("devId"))
          .then((res) => {
            console.log(res.data.messages);
            this.setState( {Send: res.data.messages });
        });
    }

    render(){
        return(
            <>
            {this.state.Send.map(message=>(
                <>



                <h6 class="card-title" key={message.sender.id}> From: <strong>{message.sender.user.fullName}</strong> </h6>

                <h6 class="card-title" key={message.receiver.id}>To: <strong>{message.receiver.user.fullName}</strong></h6>
            
                
               
            
        
                <small>Title:<strong>{message.subject}</strong></small>
                <small class="float-right">{message.datePosted}</small>

                <hr/>

                <p class="card-text mt-3">{message.text}</p>
                <hr class="line"/>
            </>
            ))}
            </>
        )
    }
}
export default SendMessages