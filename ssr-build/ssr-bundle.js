module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s="QfWi")}({HteQ:function(t,n){t.exports=require("preact")},QfWi:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return P}));var o,r,i,_=e("HteQ"),c=0,u=[],s=_.options.__b,a=_.options.__r,f=_.options.diffed,l=_.options.__c,h=_.options.unmount;function p(t,n){_.options.__h&&_.options.__h(r,t,c||n),c=0;var e=r.__H||(r.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function d(t){return c=1,function(t,n,e){var i=p(o++,2);return i.t=t,i.__c||(i.__=[e?e(n):O(void 0,n),function(t){var n=i.t(i.__[0],t);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=r),i.__}(O,t)}function v(){u.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(b),t.__H.__h.forEach(y),t.__H.__h=[]}catch(n){t.__H.__h=[],_.options.__e(n,t.__v)}})),u=[]}_.options.__b=function(t){r=null,s&&s(t)},_.options.__r=function(t){a&&a(t),o=0;var n=(r=t.__c).__H;n&&(n.__h.forEach(b),n.__h.forEach(y),n.__h=[])},_.options.diffed=function(t){f&&f(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==u.push(n)&&i===_.options.requestAnimationFrame||((i=_.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(o),m&&cancelAnimationFrame(n),setTimeout(t)},o=setTimeout(e,100);m&&(n=requestAnimationFrame(e))})(v)),r=void 0},_.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(b),t.__h=t.__h.filter((function(t){return!t.__||y(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],_.options.__e(e,t.__v)}})),l&&l(t,n)},_.options.unmount=function(t){h&&h(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(b)}catch(t){_.options.__e(t,n.__v)}};var m="function"==typeof requestAnimationFrame;function b(t){var n=r;"function"==typeof t.__c&&t.__c(),r=n}function y(t){var n=r;t.__c=t.__(),r=n}function j(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function O(t,n){return"function"==typeof n?n(t):n}function g(t,n){return(g=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}_.Component;function H(t){var n=t.video;console.log("Video",n);for(var e=new Date(1e3*(n.length||0)).toISOString().substr(11,8);e.startsWith("0")||e.startsWith(":");)e=e.slice(1);var o="https://www.youtube.com/watch?v="+n.video_id,r="https://i.ytimg.com/vi/"+n.video_id+"/hqdefault.jpg";return Object(_.h)("li",{class:"row video"},Object(_.h)("a",{class:"puzzle_link",href:n.puzzle_link},Object(_.h)("h3",{class:"video_title"},n.video_title)),Object(_.h)("a",{class:"video_link",href:o},Object(_.h)("img",{class:"img-thumbnail video-thumbnail",src:r,width:"320",height:"180",style:"float: right;"})),Object(_.h)("p",{class:"puzzle_rules lead"},n.rules),Object(_.h)("ul",{class:"list-inline"},Object(_.h)("li",null,n.date),Object(_.h)("li",null,n.solver),Object(_.h)("li",null,e)))}function P(){var t,n,e,i=d([]),c=i[0],u=i[1];return t=function(){new Promise((function(t,n){var e;return Promise.resolve(fetch("assets/db.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}})).then((function(o){try{return e=o,Promise.resolve(e.json()).then((function(e){try{return u(e),t()}catch(t){return n(t)}}),n)}catch(t){return n(t)}}),n)}))},n=[],e=p(o++,3),!_.options.__s&&j(e.__H,n)&&(e.__=t,e.__H=n,r.__H.__h.push(e)),Object(_.h)("div",{class:"container",id:"video_list"},Object(_.h)("h1",{class:"text-muted"},"Cracking the Cryptic Concierge"),Object(_.h)("ul",{class:"list-unstyled"},c.map((function(t){return Object(_.h)(H,{key:t.video_id,video:t})}))))}}});
//# sourceMappingURL=ssr-bundle.js.map