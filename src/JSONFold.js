import React, { Component } from "react"
import PropTypes from "prop-types"
import JSONTree from 'react-json-tree'

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
    } catch (e) {
      data = null;
    }


    if (data) {
      const theme = {
        scheme: 'hopscotch',
        author: 'jan t. sott',
        base00: '#322931',
        base01: '#433b42',
        base02: '#5c545b',
        base03: '#797379',
        base04: '#989498',
        base05: '#b9b5b8',
        base06: '#d5d3d5',
        base07: '#ffffff',
        base08: '#dd464c',
        base09: '#fd8b19',
        base0A: '#fdcc59',
        base0B: '#8fc13e',
        base0C: '#149b93',
        base0D: '#1290bf',
        base0E: '#c85e7c',
        base0F: '#b33508',
        tree: {
          fontSize: '16px'
        },
        label: {
          fontSize: '16px'
        }

      };

      return <JSONTree data={data} theme={theme} invertTheme={false} />
    }

    return <pre ref={this.initializeComponent} className={className + " microlight"}>{value}</pre>
  }
}

JSONFold.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}