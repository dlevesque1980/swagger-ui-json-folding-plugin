
# swagger-ui-json-folding-plugin
Plugin for swagger-ui  add json folding 

This plugin replace the component highlightCode with a new component that 
make the response folding. 

To do that I created an external plugin for swagger-ui that you can include in your project. 

In the demo folder you can see how I modified index.html to make this work. 

You include the script 
```
<script src="./swagger-ui-json-folding-plugin.js" charset="UTF-8"></script>
```
in swagger-initializer.js, add SwaggerJsonFoldingPlugins in the plugins: 
```javascript
SwaggerUIStandalonePreset.unshift(jsonFoldingPlugin.default);
```
