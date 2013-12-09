/**
 * Copyright (c) 2013, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
(function(t,n){function e(t,n){return new r(t,n||null)}function r(t,n){function e(){p=h;do var e=t.call(n,f);while(e===u);return p=f.done?s:c,{value:e,done:f.done}}function r(){if(p===h)throw new Error("Generator is already running");if(p===s)throw new Error("Generator has already finished")}function i(t,n){var e=f.delegate;if(e){try{var r=e.generator[t](n)}catch(o){return f.delegate=null,l.throw(o)}if(r){if(!r.done)return r;f[e.resultName]=r.value,f.next=e.nextLoc}f.delegate=null}}var l=this,f=new o,p=a;l.next=function(t){r();var n=i("next",t);if(n)return n;for(p===c&&(f.sent=t);;)try{return e()}catch(o){f.dispatchException(o)}},l.throw=function(t){r();var n=i("throw",t);if(n)return n;if(p===a)throw p=s,t;for(;;){f.dispatchException(t);try{return e()}catch(o){t=o}}}}function o(){this.reset()}var i=Object.prototype.hasOwnProperty;if(!t.wrapGenerator){t.wrapGenerator=e,"undefined"!=typeof exports&&(exports.wrapGenerator=e);var a="suspendedStart",c="suspendedYield",h="executing",s="completed",u={};e.mark=function(t){return t.constructor=n,t},"GeneratorFunction"!==n.name&&(n.name="GeneratorFunction"),e.isGeneratorFunction=function(t){var e=t&&t.constructor;return e?n.name===e.name:!1},r.prototype.toString=function(){return"[object Generator]"},o.prototype={constructor:o,reset:function(){this.next=0,this.sent=void 0,this.tryStack=[],this.done=!1,this.delegate=null;for(var t,n=0;i.call(this,t="t"+n)||20>n;++n)this[t]=null},stop:function(){if(this.done=!0,i.call(this,"thrown")){var t=this.thrown;throw delete this.thrown,t}return this.rval},keys:function(t){return Object.keys(t).reverse()},pushTry:function(t,n,e){n&&this.tryStack.push({finallyLoc:n,finallyTempVar:e}),t&&this.tryStack.push({catchLoc:t})},popCatch:function(t){var n=this.tryStack.length-1,e=this.tryStack[n];e&&e.catchLoc===t&&(this.tryStack.length=n)},popFinally:function(t){var n=this.tryStack.length-1,e=this.tryStack[n];e&&i.call(e,"finallyLoc")||(e=this.tryStack[--n]),e&&e.finallyLoc===t&&(this.tryStack.length=n)},dispatchException:function(t){var n=[],e=!1;if(this.done)throw t;this.thrown=t,this.next="end";for(var r=this.tryStack.length-1;r>=0;--r){var o=this.tryStack[r];if(o.catchLoc){this.next=o.catchLoc,e=!0;break}o.finallyLoc&&(n.push(o),e=!0)}for(;o=n.pop();)this[o.finallyTempVar]=this.next,this.next=o.finallyLoc},delegateYield:function(t,n,e){var r=t.next(this.sent);return r.done?(this.delegate=null,this[n]=r.value,this.next=e,u):(this.delegate={generator:t,resultName:n,nextLoc:e},r.value)}}}}).apply(this,Function("return [this, function GeneratorFunction(){}]")());