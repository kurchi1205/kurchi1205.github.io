import React, { Component } from "react";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src="../../assets/images/blogging_38kl.svg"
        alt="Your SVG Image"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
}
