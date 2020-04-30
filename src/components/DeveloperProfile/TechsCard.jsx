import React from "react";

class TechsCard extends React.Component {
 
  programmingLanguages() {
    return (
      <ul>
        {this.props.programmingLanguages.map((p) => (
          <li className="list-group-item border-0">{p.name}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <div className="col-md-6">          
            <div className='techs'>
              <h4 className='techtitle pb-3'><strong>Technologies</strong></h4>
              <div className='row'>
              {this.props.programmingLanguages.map((p) => (
                      <span className="list-group-item border-2 mr-3 techs mt-2" key={p.id}>
                        {p.name}
                      </span>
                    ))}
                </div>            
            </div>
          </div>        
      </>
    );
  }
}

export default TechsCard;
