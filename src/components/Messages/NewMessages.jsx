import React,{Component} from "react";
import axios from "axios";

class NewMessages extends Component{
    constructor(props){
        super(props)
            this.state={
                NewMessages:{

                }
            }
          
        
    }

    
    // componentWillMount() {
       
    //     axios.get(`https://localhost:44353/api/messages/sendMessage/`+localStorage.getItem("devId"))
    //     .then(res => {
    //       console.log(res.data)
    //       this.setState({NewMessages:res.data})
    //     });
       
    //   };

    // submit=event=>{
    //     event.preventDefault();
    //     console.log("pop");
    //      axios({
    //      url: "https://localhost:44353/api/messages/sendMessage/",
    //      method: 'POST',
    //      data: ({senderID:1,receiverID:2,subject:"ujk",text:"fghjjj"}),
    //      headers: {
    //          Accept: 'application/json',
   
    //      }
    //      })
    //    .then(res => {
    //      console.log(res)
         
   
    //    });
      
    //  }

    render(){
        return(
            <>
              <form onSubmit={this.submit}>
                    <div className="card-header messageinputs">
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInputGroup"></label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="">Send to:</div>
                                </div>
                                <input type="text" className="form-control inputs" id="inlineFormInputGroup"   placeholder=""/>
                            </div>
                        </div>
                    </div>
                        
                    <div className="card-header messageinputs">
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInputGroup"></label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                
                                    <div className="">Title:
                                        
                                    </div>
                                    
                                </div>
                                <input type="text" className="form-control inputs" id="inlineFormInputGroup" placeholder=""/>
                                
                            </div>

                        </div>

                    </div>
                    <div className="card-body">
                        <div className="input-group">
                            
                            <textarea className="form-control" rows="10" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <div className="card-footer float-right messageinputs">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                   
                </form>
              
            </>
        )
    }
}
export default NewMessages