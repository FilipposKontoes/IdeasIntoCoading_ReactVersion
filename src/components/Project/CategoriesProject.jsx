import React, { Component } from "react";

class CategoriesProject extends Component { 
  
  render() {
    return (
      <div className="col-12">
        <div className="techs">
          <div className="row">
            {this.props.categories.map((category) => (
              <span className="list-group-item border-2 mr-3 techs">
                {category.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default CategoriesProject;
