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
RTLRewrite.prototype.processString = function(content /*, relativePath*/) {
  return rtlcss.process(content);
};

// RTLRewrite.prototype.getDestFilePath = function(relativePath){
//   console.log('RTLRewrite:getDestFilePath ' + relativePath);
//   var outPath = relativePath.replace('.css', '.rtl.css');
//   return outPath;
// };



module.exports = RTLRewrite;
