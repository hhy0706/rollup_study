(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bundleName = {}));
})(this, (function (exports) { 'use strict';

  // const g = new Greeter();
  // g.greet();
  // const arr  = concat([1,2,3],4,[5])
  function hello(msg) {
    console.log("Hello " + msg);
  }
  // sayHello('hello from Rollup and lodash');

  exports.hello = hello;

}));
