import React, { Component, PropTypes } from 'react';
import Box from '../BoxShadow/index.js';
import BoxShowGenCode from '../ShowGenCode/index.js';


class Range extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          minValue: -200,
          maxValue: 200,
          minValueZ: 0,
          maxValueZ: 300,
          offsetX: 0,
          offsetY: 0,
          blurRadius: 0,
          spreadRadius: 0,
          checked: true,
          inset: '',
          outset: ''
      };
      this.handleChange = ::this.handleChange;
      this.switchToggle = ::this.switchToggle;
  }
  
  handleChange(name, event) {

      if(name === 'offsetX') {
         this.setState({
          offsetX: event.target.value
         });
      } else if (name === 'offsetY') {
        this.setState({
          offsetY: event.target.value
         });
      } else if (name === 'blurRadius') {
        this.setState({
          blurRadius: event.target.value
         });
      }  else if (name === 'spreadRadius') {
        this.setState({
          spreadRadius: event.target.value
         });
      } else {
        console.log('ss');
      }
  }

  switchToggle() {
    this.setState({
      checked: !this.state.checked
    })
    if (this.state.checked) {
      this.setState({
        inset: 'inset',
        outset: ''
      })
    } else {
      this.setState({
        inset: '',
        outset: 'outset'
       
      })
    }
  }
  
  render(){
      return (
          <div>
             <BoxShowGenCode
                className='box-show-gen-code'
                offsetX={this.state.offsetX}
                offsetY={this.state.offsetY}
                blurRadius={this.state.blurRadius}
                spreadRadius={this.state.spreadRadius}
                inset = {this.state.inset}
                outset = {this.state.outset}
              />
              <section className='range-slider'>
             {/* offset-x */}
                <div className='offset-x give-pram' >
                  <div> Offset-x </div>
                  <input
                  type='range'
                  value={this.state.offsetX} 
                  min={this.state.minValue} 
                  max={this.state.maxValue} 
                  step={this.state.step}  
                  onChange={this.handleChange.bind(this, 'offsetX')}/>
                  <span className='show-val'>{this.state.offsetX}</span>
                </div>
                {/* offset-y */}
                <div className='offset-y give-pram'>
                <div> Offset-y </div>
                  <input
                  type='range' 
                  value={this.state.offsetY} 
                  min={this.state.minValue} 
                  max={this.state.maxValue} 
                  step={this.state.step} 
                  onChange={this.handleChange.bind(this, 'offsetY')}/>
                  <span className='show-val'>{this.state.offsetY}</span>
                </div>
                {/* blur-radius */}
                <div className='blur-radius give-pram'>
                <div> Blur Radius </div>
                  <input
                  type='range' 
                  value={this.state.blurRadius} 
                  min={this.state.minValueZ} 
                  max={this.state.maxValueZ} 
                  step={this.state.step} 
                  onChange={this.handleChange.bind(this, 'blurRadius')}/>
                  <span className='show-val'>{this.state.blurRadius}</span>
                </div>
                {/* spread-radius */}
                <div className='spread-radius give-pram'>
                <div> Spread Radius </div>
                  <input
                  type='range' 
                  value={this.state.spreadRadius} 
                  min={this.state.minValue} 
                  max={this.state.maxValue} 
                  step={this.state.step} 
                  onChange={this.handleChange.bind(this, 'spreadRadius')}/>
                  <span className='show-val'>{this.state.spreadRadius}</span>
                </div>
                 {/* Inset */}
                 <div className='inset-outset give-pram'>
                  <div
                  onClick={this.switchToggle}
                  className="container">
                      <div className="switch white">
                        <input 
                        type="radio" 
                        name="switch" 
                        id="switch-off" 
                        checked={this.state.checked} />
                        <input 
                        type="radio" 
                        name="switch" 
                        id="switch-on"
                        checked={!this.state.checked}
                         />
                        <label for="switch-off">Outset</label>
                        <label for="switch-on">Inset</label>
                        <span className="toggle"></span>
                    </div>
                  </div>
                </div>
              </section>
              <Box 
                offsetX={this.state.offsetX}
                offsetY={this.state.offsetY}
                blurRadius={this.state.blurRadius}
                spreadRadius={this.state.spreadRadius}
                inset = {this.state.inset}
                outset = {this.state.outset}
              />
          </div>
      );
    }
  }

 export default Range;