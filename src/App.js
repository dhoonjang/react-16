import React, { Component, Fragment } from 'react';
import {createPortal} from 'react-dom';

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

class ReturnTypes extends Component {
  render() {
    return "Hello React 16";
  }
}

const Message = () => {
  return "Touch!";
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <Portals />
      </Fragment>
    );
  }
}

export default App;
