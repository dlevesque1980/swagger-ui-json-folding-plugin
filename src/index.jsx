import React from 'react'
import '../packages/JsonViewer/dist/json-viewer'



  const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
  

// From: https://raw.githubusercontent.com/chilts/umd-template/master/template.js
; ((f) => {
  // module name and requires
  var name = 'SwaggerJsonFoldingPlugins';
  var requires = [];

  // CommonJS
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f.apply(null, requires.map(function (r) { return require(r); }));

    // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(requires, f);

    // <script>
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      // works providing we're not in "use strict";
      // needed for Java 8 Nashorn
      // see https://github.com/facebook/react/issues/3037
      g = this;
    }
    g[name] = f.apply(null, requires.map(function (r) { return g[r]; }));
  }

})(() => {
  // Module source
  return (/*system*/) => {
    return {
      wrapComponents: {
        HighlightCode:  (Original, system) => class WrappedHightlightCode extends React.Component {
          
          constructor(props) {
            super(props);
            this.id = uid();
          }

          shouldComponentUpdate(nextProps) {        
            const nextChildren = nextProps.children;
            const { children } = this.props 
            
            if (nextChildren !== children) {
              return true;
            } 
          }          
          
          render() {
            const { children } = this.props
            const canJSON = JSON.parse(children) !== null
            if (canJSON) {
              const elem_json = document.querySelector(`#${this.id}`);
              if (elem_json !== null) {
                elem_json.data = JSON.parse(children);
              }
              return (
                <div className="highlight-code">              
                  <json-viewer id={this.id}>{children}</json-viewer>
                </div>
              )
            }

              return <Original {...this.props} />
          }
        }
      }
    }
  };
});