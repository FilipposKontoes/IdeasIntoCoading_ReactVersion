import React,{Component} from "react";
import axios from "axios";

class ProjectProfile extends Component{
    constructor(props){
        super(props)       
        this.state={
            title:"",
            description:""

        }
       
    }
    componentWillMount() {
      console.log(this.props.match.params.projectId)
      if(this.props.match.params.projectId>0) 
      {  

        axios
        .get(
          `https://localhost:44353/api/projects/edit/?ID=`+this.props.match.params.projectId
        )
        .then((res) => {    
          console.log(res.data)     
          this.setState(res.data);       
        });

      }
      else
      {
        axios
        .get(
          `https://localhost:44353/api/projects/new/`+localStorage.getItem("devId")
        )
        .then((res) => {    
          console.log(res.data)     
          this.setState(res.data);       
        });
        

      }

      console.log(this.state)
     
    }
   
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state)   
      if (this.props.match.params.projectId==null) {
       
        axios({
          url: ("https://localhost:44353/api/projects/save/"),
          method: 'POST',
          data: (this.state),
          headers: {
              Accept: 'application/json',
          }
          })
        .then(res => {
          console.log(res.data)
          this.props.history.push({ pathname: "/projectprofile/"+res.data.id});
          window.location.reload()
        });
      } else {
        console.log("not null")   
        console.log(this.state)     
        axios({
          url: "https://localhost:44353/api/projects/save/",
          method: 'POST',
          data: (this.state),
          headers: {
              Accept: 'application/json',
          }
          })
        .then(res => {
          console.log(res.data)
          this.props.history.push({ pathname: "/projectprofile/"+res.data.id});
          window.location.reload()
      });
    };

    };

    handleChange = (event) => {
        event.preventDefault(); 
        this.setState({[event.target.name]: event.target.value});         
      };

    render(){
        return(

            <div className="wrapper">
            <div className="form-wrapper">
              <h2>Create New Project</h2>
              <form onSubmit={this.handleSubmit} noValidate className='regform'>
                <div className="title">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    noValidate
                    className='regforminput'
                  />             
                </div>
                <div className="description">
                  <label htmlFor="description">Description</label>
                  <input
                    type="textbox"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    noValidate
                    className='regforminput'
                  />
                </div>                
                <div className="submit">
                  <button className='regbtn'>Create</button>
                </div>
              </form>
            </div>
          </div>
        )
    }

}



export default ProjectProfile