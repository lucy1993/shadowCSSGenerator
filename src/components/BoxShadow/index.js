import React, { Component, PropTypes } from 'react';


class Box extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const  {offsetX, offsetY, blurRadius, spreadRadius, inset, outset} = this.props;
    const style = {
      boxShadow: ` ${inset} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000`
    }
    return (
         <div 
         style ={style}
         className="shadow-box"> 
         </div>
    );
  }
}

export default Box;