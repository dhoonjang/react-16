import React, { Component, Fragment } from 'react';

class ReturnTypes extends Component {
  render() {
    return "Hello React 16";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
      </Fragment>
    );
  }
}

export default App;
