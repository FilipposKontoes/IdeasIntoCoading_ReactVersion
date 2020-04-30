import React,{Component} from "react";
//import "./ProgrammingLanguagesForm.css"

class ProgrammingLanguagesForm extends Component{
    constructor(){
        super()
        this.state={
            title:"",
            description:""

        }
        
    }



 render(){
    return(

    <section class="grid">
        <div class="container">
            <h1>Choose Technologies</h1>
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center">Choose Technologies:</h4>
                        </div>
                        <div class="card-body">
                            <div class="add-task">
                                <form id="task-form">
                                    <label for="input"></label>
                                    <input type="text" name="input" id="input-box"/>
                                    <input type="submit" value="Add" class="add-task-btn"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center">Technologies you prefer:</h4>
                        </div>
                        <div class="card-body">
                            <div class="tasks">
                                <ul class="task-list"></ul>
                                <a href="#" class="clear-tasks-btn">Save</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    )}
}

export default ProgrammingLanguagesForm