import React,{Component} from "react";
import axios from "axios";
import Developers from "./Developers";
import Projects from "./Projects";
import ReactLoading from 'react-loading';


class SearchResults extends Component{
  constructor(){
        super()
        this.state={loading:true}        
      }

    componentWillMount() {
      
        axios
          .get(`https://localhost:44353/api/developers/data/`+this.props.match.params.searchString)
          .then((res) => {           
            this.setState({ SearchBar: res.data,loading:false});
            
          });
      }
      componentWillReceiveProps(nextProps) {
        axios
          .get(`https://localhost:44353/api/developers/data/`+nextProps.match.params.searchString)
          .then((res) => {           
            this.setState({ SearchBar: res.data,loading:false});
            
          });
      }

    render(){
      if(this.state.loading===false)
      {
        return(
          <>
            <div className="container text-center mt-5">
              <h4 className='techtitle pb-3'><strong>Search Results</strong></h4>
              <div className="row">               
                <div className="w-100 mb-3 mt-3"></div>
                <Developers 
                developers={this.state.SearchBar.developers} 
                />    
                <div className="w-100 mb-5 mt-5"></div>
                <hr />
                <div className="w-100 mb-3 mt-3"></div>    
                <Projects 
                projects={this.state.SearchBar.projects}
                />    
                <div className="w-100 mb-5 mt-5"></div>
              </div>
            </div>
          </>
        )
      }
      else
      {
        return <ReactLoading  height={'20%'} width={'20%'} />

      }       
    }
}

export default SearchResults