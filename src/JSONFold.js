import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactJson from 'react-json-view'

export default class JSONFold extends Component {
  render() {
    let { value } = this.props
    const data = JSON.parse(value);
    return <ReactJson src={data} theme="monokai" name={false} />
  }
}

JSONFold.propTypes = {
  value: PropTypes.string.isRequired
}