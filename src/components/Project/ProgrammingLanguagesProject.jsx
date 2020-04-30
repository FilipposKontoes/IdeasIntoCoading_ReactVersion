import React,{Component} from "react";

class ProgrammingLanguagesProject extends Component{

    constructor(props){
        super(props);
       
        
    }

    render(){
        return(
            <div className="col-md-6">
            <div className="panel">
            <div className="panel-heading"><h4>Programming Languages</h4></div>
            <div className="panel-body">
                {this.props.languages.map(language => {
                    return(<a href="#" className="list-group-item text-danger" key={language.id} id="language">{language.name}<br/></a>)
                })}
            </div>

            </div>
        </div>
           
        )
    }


}
export default ProgrammingLanguagesProject
