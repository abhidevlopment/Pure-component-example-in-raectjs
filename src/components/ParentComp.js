import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhi"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abhi"
      });
    }, 2000);
  }

  render() {
    console.log("***Parent Component****");
    return (
      <div>
        Parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
