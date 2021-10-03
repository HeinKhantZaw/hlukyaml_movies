import React, { Component } from "react";
import Base from "../base";

export default class GenresView extends Component {
  state = {
    link:
      "https://hlukyamel.pythonanywhere.com/api/movieSearch/?search=" +
      this.props.match.params.genre_name,
    title: this.props.match.params.genre_name + " movies",
  };
  render() {
    console.log( this.props.match.params.genre_name)
    return (
      <Base
        linkFromParent={this.state.link}
        titleFromParent={this.state.title}
      />
    );
  }
}
