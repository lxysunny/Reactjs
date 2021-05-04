import "./styles.css";

import { Button } from "react-bootstrap";
import * as React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ name: "xxx" }, this.props.name);
  }
  render() {
    return (
      <Child name={this.state.name}>
        <Button>Default</Button>
      </Child>
    );
  }
}

class Child extends React.Component {
  render() {
    return <h3> Hello, I am {this.props.name} </h3>;
  }
}

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("con" + props.name2);
  }
  handleOnClick = (data) => {
    console.log("I am in MyButton");
    if (this.props.onMyClick) {
      this.props.onMyClick(data);
    } else {
      console.log("onMyClick is not set");
    }
  };
  render() {
    return (
      <Button name="abcd" onClick={() => this.handleOnClick(this.props.myProp)}>
        ssaas
      </Button>
    );
  }
}

function handleOnMyClick(data) {
  console.log("name " + data.name);
  console.log("msg " + data.msg);
  console.log("count: " + count++);
}

var count = 0;

export default function App() {
  const myPropObj = { name: "myProp", msg: "This is my property from app" };
  return (
    <div className="App">
      data={"ss"}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyButton myProp={myPropObj} onMyClick={(data) => handleOnMyClick(data)}>
        ssaas
      </MyButton>
    </div>
  );
}
