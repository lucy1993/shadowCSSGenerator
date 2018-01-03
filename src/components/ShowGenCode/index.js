import React, { Component, PropTypes } from 'react';


class BoxShowGenCode extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      copySuccess: ''
    }
  }

  copyToClipboard = (e) => {
    const  {offsetX, offsetY, blurRadius, spreadRadius} = this.props;
    const copy = (
    `-webkit-box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000
    -moz-box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000
    box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000`
    )
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
    setTimeout(() => {
      this.setState({ copySuccess: '' });
    }, 1000)
   
  };

  render() {
    const  {offsetX, offsetY, blurRadius, spreadRadius, inset, outset} = this.props;
    const copy = (
      `      -webkit-box-shadow: ${inset} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000;
      -moz-box-shadow: ${inset} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000; 
      box-shadow: ${inset} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #000;`
      )
    return (
      <div className="shadow-code">
        {
         document.queryCommandSupported('copy') &&
          <div>
            <button
            className="copy-to-clipboard"
            onClick={this.copyToClipboard}>
            Copy
            </button> 
            <div className="success">
             {this.state.copySuccess}
            </div>
          </div>
        }
        <form>
          <textarea
            className="shadow-textarea"
            ref={(textarea) => this.textArea = textarea}
            value={copy}
          />
        </form>
      </div>
    );
  }
}

export default BoxShowGenCode;