/* jshint node: true */
'use strict';
var debug = require('broccoli-stew').debug;
var RTLRewrite = require('./broccoli-rtl-filter');
var BroccoliMergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-rtlcss',
  isDevelopingAddon: function() {
    return true;
  },
  initializeOptions: function() {
    this.options = {
      enabled: true //this.app.env === 'production',
    };
  },

  postprocessTree: function (type, inputNodes) {
    if (type === 'css' ) {
      //console.info('ember-cli-rtlcss:postprocessTree', type);
      var rtlNodes = new RTLRewrite(inputNodes);
      var merged = new BroccoliMergeTrees([inputNodes, rtlNodes], {overwrite:true});
      return merged;
      //return debug(merged, {name:'css-tree'});
    }else{
      return inputNodes;
    }
  },

  included: function (app) {
    this.app = app;
    this.initializeOptions();
  },
};
