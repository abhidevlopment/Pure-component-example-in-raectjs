import React, { Component } from "react";
import Reg from "./RegComp";
import Pure from "./PureComp";
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
        <RegComp name={this.props.name} />
        <PureComp name={this.props.name} />
      </div>
    );
  }
}

export default ParentComp;
