import React, { Component, PropTypes } from 'react';
import Range from "./Range/index.js"
import "./Layout.scss"

let pageNum = 1;
export default class Layout extends React.Component {

  // static defaultProps = {
  //   dataSource: []
  // };

  // static propTypes = {
  //   dataSource: PropTypes.arrayOf(PropTypes.object),
  //   value: PropTypes.arrayOf(PropTypes.object),
  // };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="shadow-wrap">
        <div className="title"> GENERATE YOUR SHADOW </div>
        <div className="content-wrap">
          <Range/>
        </div>
      </div>
    );
  }
}
