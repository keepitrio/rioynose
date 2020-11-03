import React, { Component } from 'react';
import rio from '../images/rio.JPG';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  init() {
  }

  render() {
    return (
      <div className="home-page">
        <div className="home-page-intro-container">
          <div className="rio-image-container">
            <img src={rio} alt="rio" className="rio-image" />
          </div>
          <div className="right-panel-container">
            <div className="right-panel">
              <div className="info">
                <div className="intro-container">
                  <div className="intro">
                    <h1>Hi, my name is Rio</h1>
                    <div className="headline">I'm a frontend engineer with experience in customer-focused solutions, untangling large codebases, and with relentlessness like no other</div>
                  </div>
                  <div className="contact-box">
                    <h3>Want to get in Contact?</h3>
                    <a href="rioynose@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/rionose/">LinkedIn</a>
                    <a href="https://github.com/keepitrio">GitHub</a>
                  </div>
                </div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
