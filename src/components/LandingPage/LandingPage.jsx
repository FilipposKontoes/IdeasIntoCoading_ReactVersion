import React from "react";
import Homepagev2 from "./Images/homepagev2.png";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <header className="home-section">
          <div className="dark-overlay">
            <div className="home-inner container">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block mainbox">
                  <h1 className="display-4">
                    Share your
                    <strong> coding idea</strong> and make it
                    <strong> REAL</strong>
                  </h1>
                  <div className="d-flex">
                    <div className="p-4 align-self-start">
                      <i className="fas fa-lightbulb fa-2x"></i>
                    </div>
                    <div className="p-4 align-self-end">Share your Idea</div>
                  </div>

                  <div className="d-flex">
                    <div className="p-4 align-self-start">
                      <i className="fas fa-users fa-2x"></i>
                    </div>
                    <div className="p-4 align-self-end">Find a team</div>
                  </div>

                  <div className="d-flex">
                    <div className="p-4 align-self-start">
                      <i className="fas fa-sitemap fa-2x"></i>
                    </div>
                    <div className="p-4 align-self-end">Organize your Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="explore-head-section">
          <div className="container">
            <div className="row">
              <div className="col text-center py-5">
                <h1 className="display-4"> WHAT THE APP DO</h1>
                <p className="lead">
                  {" "}
                  WHAT THE APP DO WHAT THE APP DO WHAT THE APP DO WHAT THE APP
                  DO WHAT THE APP DO WHAT THE APP DO
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 explore-main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={Homepagev2}
                  alt=""
                  className="img-fluid mb-3 rounded-circle profimg"
                />
              </div>
              <div className="col-md-6">
                <h3>WHAT THE APP DO PART 2 AND ABOUT US ????</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore reiciendis, voluptate at alias laborum odit aliquid
                  tempore perspiciatis repudiandae hic?
                </p>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi distinctio iusto, perspiciatis mollitia natus harum?
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi distinctio iusto, perspiciatis mollitia natus harum?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LandingPage;
