import React,{Component} from "react";
//import "./CategoriesForm.css"

class CategoriesForm extends Component{
    constructor(){
        super()
        this.state={
            
        }
        
    }



 render(){
    return(

    <section class="grid">
        <div class="container">
            <h1>Choose Categories</h1>
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center">Choose Categories:</h4>
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
                            <h4 class="card-title text-center">Categories you prefer:</h4>
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

export default CategoriesForm