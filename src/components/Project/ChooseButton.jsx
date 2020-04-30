import React,{Component} from "react";
import { Button } from "reactstrap";


class ChooseButton extends Component{
    constructor(props){
        super(props);        
    }
    
    render(){
        return(
            <>
            <Button   className="btn js-toggle-join choosebtn" >Joined</Button>            
            </>
        )
    }
}
export default ChooseButton
