import React, { Component, Fragment } from 'react';
import {createPortal} from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ["gyuhwan", "jungho", "junsu", "myunggyu"]
  };

  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({
        friends: undefined
      })
    }, 5000)
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

class App extends Component {
  state = {
    errorExist: false
  }

  componentDidCatch = (error, info) => {
    this.setState({
      errorExist: true
    })

    console.log('catched '+ error + ' the info I have is ' + info )
  }

  render() {
    const {errorExist} = this.state;
    return (
      <Fragment>
        <ReturnTypes />
        <Portals />
        {errorExist ? <ErrorFallBack />:<ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
