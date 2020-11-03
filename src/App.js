import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Blog from './components/Blog';
import GetToKnowMe from './components/GetToKnowMe';
import Error from './components/Error';
import NavBar from './components/NavBar';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/get-to-know-me" component={GetToKnowMe} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
