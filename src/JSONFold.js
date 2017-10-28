import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactJson from 'react-json-view'

export default class JSONFold extends Component {

  initializeComponent = (c) => {
    this.el = c
  }

  render() {
    let { value, className } = this.props
    className = className || ""
    let data = null;  
    try {
      data = JSON.parse(value);
    } catch(e) {
      data = null;
    }
    if (data) {
      return <ReactJson src={data} theme="monokai" name={false} />
    }

    return <pre ref={this.initializeComponent} className={className + " microlight"}>{value}</pre>
  }
}

JSONFold.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}