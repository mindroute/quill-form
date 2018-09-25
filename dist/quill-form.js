!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("quill")):"function"==typeof define&&define.amd?define(["quill"],t):"object"==typeof exports?exports.QuillForm=t(require("quill")):e.QuillForm=t(e.Quill)}(window,function(n){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),u=n.n(r);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=u.a.import("core/module"),i=function(e){function i(e,t){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),n=this,r=f(i).call(this,e,t),(o=!r||"object"!==l(r)&&"function"!=typeof r?d(n):r).htmlField=s(t.htmlField,e),o.deltaField=s(t.deltaField,e),o.textField=s(t.textField,e),o.form=o.htmlField?o.htmlField.form:o.deltaField?o.deltaField.form:!!o.textField&&o.textField.form,o.form&&(o.form.addEventListener("submit",o.update.bind(d(d(o))),!0),o.options.submitKey&&o.quill.keyboard.addBinding(o.options.submitKey,o.submit.bind(d(d(o))))),o.options.updateOnBlur&&(o.quill.on(u.a.events.SELECTION_CHANGE,function(e,t,n){e||o.update.call(d(d(o)))}),o.form&&o.form.addEventListener("click",o.update.bind(d(d(o))),!0)),o.options.updateOnChange&&o.quill.on(u.a.events.EDITOR_CHANGE,function(e,t,n,r){e===u.a.events.TEXT_CHANGE&&o.update.call(d(d(o)))}),o.update(),o}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,c),t=i,(n=[{key:"update",value:function(){this.deltaField&&(this.deltaField.value=JSON.stringify(this.quill.getContents())),this.htmlField&&(this.htmlField.value=this.quill.root.innerHTML),this.textField&&(this.textField.value=this.quill.root.innerText)}},{key:"submit",value:function(){return this.update.call(this),this.form&&this.form.submit(),!1}}])&&o(t.prototype,n),r&&o(t,r),i}();function s(e,t){if(e instanceof HTMLInputElement)return e;if("string"==typeof e){var n=document.createElement("input");return n.type="hidden",n.name=e,n.classList.add("ql-form-input"),n.classList.add("ql-form-"+e),t.addContainer(n),n}if(!1===e)return!1;throw new TypeError("Expected HTMLInputElement or string: "+e)}i.DEFAULTS={htmlField:"html",deltaField:"delta",textField:"text",submitKey:{key:"S",shortKey:!0},updateOnBlur:!0,updateOnChange:!1},u.a.register("modules/form",i)}])});