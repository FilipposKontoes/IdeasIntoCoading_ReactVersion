import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="col-md-5">
          <table className="table table-borderless contactinf">
            <tbody>
            <tr>
                <th scope="row">
                <FontAwesomeIcon icon={faEnvelopeOpen} className='mr-3'/>
                  E-mail:
                </th>
                <td>{this.props.developer.user.email}</td>
              </tr>
            <tr>
                <th scope="col">
                 <FontAwesomeIcon icon={faGithub} className='mr-3'/> 
                   GitHub:
                </th>
                <td scope="col">
                <a href={this.props.developer.gitHub} id="github">
                {this.props.developer.gitHub}
              </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                <FontAwesomeIcon icon={faLinkedin} className='mr-3'/> 
                  Linkedin:
                </th>
                <td scope="col">
                  {this.props.developer.linkedin}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ContactInfo;
