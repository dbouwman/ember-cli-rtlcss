/* jshint node: true */
'use strict';
var Filter = require('broccoli-filter');
var rtlcss = require('rtlcss');

function RTLRewrite(inputNode, options){
  options = options || {};
  Filter.call(this, inputNode, options);
}

RTLRewrite.prototype = Object.create(Filter.prototype);
RTLRewrite.prototype.constructor = RTLRewrite;
RTLRewrite.prototype.extensions = ['css'];
RTLRewrite.prototype.targetExtension = 'rtl.css';
RTLRewrite.prototype.processString = function(content, relativePath) {
  //don't process the map files
  if(relativePath.indexOf('map') === -1){
    return rtlcss.process(content);
  }else{
    return content;
  }
};

module.exports = RTLRewrite;
