import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

import { JSONTree } from 'react-json-tree';

const JSONFold = ({ value, fileName, className, downloadable, getConfigs, canCopy, language }) => {
  const canJSON = JSON.parse(value) !== null;
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

  return (
    <div className="highlight-code">
      {canJSON
        ? <JSONTree data={JSON.parse(value)} theme={theme} invertTheme={false} />
        : <pre className={cx(className, "microlight")}>{value}</pre>
      }

    </div>
  )
}

JSONFold.propTypes = {
  value: PropTypes.string.isRequired,
  getConfigs: PropTypes.func.isRequired,
  className: PropTypes.string,
  downloadable: PropTypes.bool,
  fileName: PropTypes.string,
  language: PropTypes.string,
  canCopy: PropTypes.bool
}


export default JSONFold