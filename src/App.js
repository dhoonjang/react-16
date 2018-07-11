import React, { Component, Fragment } from 'react';
import {createPortal} from 'react-dom';

const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };

    componentDidCatch = (error, info) => {
      this.setState({
        hasError: true
      })
      console.log('catched '+ error + ' the info I have is ' + info );
    };

    render(){
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallBack />;
      } else {
        return <ProtectedComponent />;
      }
    }
  }

class ErrorMaker extends Component {
  state = {
    friends: ["gyuhwan", "jungho", "junsu", "myunggyu"]
  };

  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({
        friends: undefined
      })
    }, 2000)
  }

  render() {
    const { friends } = this.state;

    return friends.map((friend,index) => <Friend name={friend} key={index}/>);
  }
}

const Friend = ({name}) => {
  return ' ' + name + ' ';
}

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

const Message = () => 'Touch!!!'

const ErrorFallBack = () => ' sorry something went wrong ㅠㅠ'

const Pportals = BoundaryHOC(Portals);
const PerrorMaker = BoundaryHOC(ErrorMaker);

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <Pportals />
        <PerrorMaker />
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
