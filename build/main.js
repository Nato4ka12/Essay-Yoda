!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var o,i,r={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),a=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),c=null,d=0,l=[],f=t(0);function h(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(b(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(b(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function p(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):t.push(o[s]={id:s,parts:[a]})}return t}function u(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,i)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function _(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),w(e,n.attrs),u(n,e),e}function w(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var s=d++;t=c||(c=_(e)),o=x.bind(null,t,s,!1),i=x.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",w(e,n.attrs),u(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=f(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,e),i=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=_(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){g(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return h(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var s=t[i];(a=r[s.id]).refs--,o.push(a)}n&&h(p(n,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var m,y=(m=[],function(n,e){return m[n]=e,m.filter(Boolean).join("\n")});function x(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(r,s[e]):n.appendChild(r)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(r).concat([i]).join("\n")}var s;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var s=n[i];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"html,\nbody,\ndiv,\nheader,\nsection,\nfooter,\nul,\nli,\na,\np,\nspan,\nselect,\ninput,\nlabel {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\nheader,\nsection,\nfooter {\n  display: block; }\n\n.header {\n  width: 100%;\n  background-color: #363636;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.48);\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.48);\n  padding: 15px 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  left: 0; }\n  .header .header__logo {\n    display: flex;\n    width: 25%;\n    justify-content: flex-start;\n    align-items: center; }\n    .header .header__logo .logo {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-color: #fff; }\n  .header .header__menu {\n    display: flex;\n    width: 50%;\n    align-items: center; }\n    .header .header__menu .header-menu__content {\n      display: flex;\n      flex-flow: row nowrap;\n      width: 80%;\n      margin: 0 auto;\n      align-items: center;\n      justify-content: space-around; }\n      .header .header__menu .header-menu__content li {\n        list-style: none; }\n        .header .header__menu .header-menu__content li a {\n          color: #fff;\n          text-decoration: none; }\n  .header .header__buttons {\n    display: flex;\n    flex-flow: row nowrap;\n    width: 25%;\n    align-items: center;\n    justify-content: flex-end; }\n    .header .header__buttons .button, .header .header__buttons .button2 {\n      display: inline-block;\n      color: #fff;\n      text-decoration: none;\n      margin: 0 8px;\n      padding: 10px 0px;\n      border-radius: 5px;\n      text-align: center; }\n    .header .header__buttons .button {\n      background-color: #fff;\n      color: #6e34e9;\n      width: 90px; }\n    .header .header__buttons .button2 {\n      background-color: #6e34e9;\n      width: 126px; }\n\n.section_write-me-form {\n  padding-top: 80px;\n  height: 1050px;\n  position: relative; }\n  .section_write-me-form .section__background {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    height: 539px;\n    background: -moz-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%);\n    background: -webkit-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%);\n    background: -ms-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%); }\n    .section_write-me-form .section__background .write-me-form_background {\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat; }\n      .section_write-me-form .section__background .write-me-form_background .color_fill {\n        width: 100%;\n        height: 100%;\n        background-color: #363636;\n        opacity: 0.549; }\n      .section_write-me-form .section__background .write-me-form_background .color_fill_copy {\n        display: flex;\n        justify-content: flex-start;\n        width: 100%;\n        height: 100%;\n        background-color: #363636;\n        opacity: 0.549; }\n  .section_write-me-form .content {\n    height: 860px;\n    z-index: 2;\n    position: relative;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: flex-start; }\n    .section_write-me-form .content .section_heading {\n      width: 100%;\n      height: 390px; }\n      .section_write-me-form .content .section_heading .heading_content {\n        width: 60%;\n        height: 100%;\n        display: flex;\n        flex-flow: column nowrap;\n        justify-content: center;\n        line-height: 1.375; }\n        .section_write-me-form .content .section_heading .heading_content .text_container {\n          width: 100%; }\n          .section_write-me-form .content .section_heading .heading_content .text_container span {\n            font-size: 36px;\n            font-weight: bold;\n            line-height: 1.361;\n            word-spacing: 7px; }\n        .section_write-me-form .content .section_heading .heading_content .form_container {\n          margin-top: 40px;\n          width: 100%; }\n          .section_write-me-form .content .section_heading .heading_content .form_container .order_form {\n            width: 100%;\n            display: flex;\n            flex-flow: row nowrap;\n            align-items: center;\n            justify-content: space-between; }\n            .section_write-me-form .content .section_heading .heading_content .form_container .order_form .part {\n              width: 30%;\n              height: 42px;\n              font-size: 14px;\n              border-radius: 5px;\n              overflow: hidden; }\n              .section_write-me-form .content .section_heading .heading_content .form_container .order_form .part input[type=text], .section_write-me-form .content .section_heading .heading_content .form_container .order_form .part input[type=submit] {\n                width: 100%;\n                height: 100%;\n                padding: 10px 10px;\n                border: none; }\n              .section_write-me-form .content .section_heading .heading_content .form_container .order_form .part .header-order-email {\n                font: inherit; }\n              .section_write-me-form .content .section_heading .heading_content .form_container .order_form .part .button {\n                font-size: 16px;\n                font-weight: bold;\n                line-height: 1.125;\n                letter-spacing: 0.5px;\n                color: #fff;\n                background-color: #6e34e9;\n                box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16);\n                cursor: pointer; }\n            .section_write-me-form .content .section_heading .heading_content .form_container .order_form .styled-select select {\n              background: #fff;\n              width: 100%;\n              padding: 10px 10px;\n              border-radius: 5px;\n              height: 100%;\n              color: #333333;\n              line-height: 1;\n              border: none; }\n    .section_write-me-form .content .section_essay-writers {\n      width: 100%;\n      height: 470px;\n      background: #fff; }\n\n.section_how-it-works {\n  width: 100%;\n  min-height: 620px;\n  height: auto;\n  position: relative;\n  overflow: hidden; }\n  .section_how-it-works .section__background {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background: -moz-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%);\n    background: -webkit-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%);\n    background: -ms-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%); }\n    .section_how-it-works .section__background .how-it-works_background {\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat; }\n      .section_how-it-works .section__background .how-it-works_background .color_fill {\n        width: 100%;\n        height: 100%;\n        background-color: #363636;\n        opacity: 0.549; }\n  .section_how-it-works .content {\n    height: 100%;\n    z-index: 2;\n    position: relative;\n    flex-flow: row nowrap; }\n    .section_how-it-works .content .section_heading {\n      width: 33%;\n      height: 100%;\n      align-items: center;\n      justify-content: flex-start; }\n      .section_how-it-works .content .section_heading .text_container {\n        width: 100%;\n        position: relative;\n        padding-top: 120px; }\n        .section_how-it-works .content .section_heading .text_container span {\n          font-size: 36px;\n          font-weight: bold;\n          line-height: 1.361;\n          word-spacing: 7px; }\n      .section_how-it-works .content .section_heading .text_container:after {\n        content: '';\n        position: absolute;\n        width: 100px;\n        height: 2px;\n        background: #f2994a;\n        left: 13%;\n        bottom: -10px;\n        transform: translateX(-50%); }\n    .section_how-it-works .content .section_content {\n      position: relative;\n      display: flex;\n      width: 67%;\n      height: 100%;\n      align-items: center;\n      justify-content: space-between; }\n      .section_how-it-works .content .section_content .how-it-works_content {\n        display: flex;\n        flex-flow: column;\n        width: 100%;\n        height: 480px; }\n        .section_how-it-works .content .section_content .how-it-works_content .content_items {\n          display: flex;\n          flex-flow: row;\n          width: 100%;\n          height: 50%; }\n          .section_how-it-works .content .section_content .how-it-works_content .content_items .item {\n            position: relative;\n            display: flex;\n            flex-flow: row;\n            width: 50%;\n            height: 100%; }\n            .section_how-it-works .content .section_content .how-it-works_content .content_items .item .item_number {\n              display: flex;\n              align-items: flex-start;\n              justify-content: flex-end;\n              width: 25%;\n              height: 100%;\n              font-size: 96px;\n              color: rgba(255, 255, 255, 0.302);\n              font-weight: bold;\n              line-height: 1.2;\n              padding-right: 10px; }\n            .section_how-it-works .content .section_content .how-it-works_content .content_items .item .item_text {\n              width: 75%;\n              height: 100%;\n              line-height: 1.2;\n              padding-right: 30px; }\n\n.section_why-us {\n  width: 100%;\n  min-height: 910px;\n  height: auto;\n  color: #363636;\n  font-size: 18px;\n  overflow: hidden; }\n  .section_why-us .content_wrapper {\n    width: 100%;\n    height: 910px;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: space-between; }\n    .section_why-us .content_wrapper .section_heading {\n      width: 100%;\n      height: 30%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-flow: column nowrap; }\n      .section_why-us .content_wrapper .section_heading span {\n        position: relative;\n        font-size: 36px;\n        font-weight: bold;\n        line-height: 2.5;\n        word-spacing: 7px; }\n      .section_why-us .content_wrapper .section_heading span:after {\n        content: '';\n        position: absolute;\n        width: 100px;\n        height: 2px;\n        background: #6e34e9;\n        left: 50%;\n        bottom: -10px;\n        transform: translateX(-50%); }\n    .section_why-us .content_wrapper .section_content {\n      width: 100%;\n      height: 70%;\n      display: flex;\n      flex-flow: column nowrap;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .section_why-us .content_wrapper .section_content .content_circles {\n        width: 100%;\n        height: 25%;\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-between;\n        align-items: center; }\n        .section_why-us .content_wrapper .section_content .content_circles .circles_item {\n          width: 25%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 10px 0; }\n          .section_why-us .content_wrapper .section_content .content_circles .circles_item .item {\n            width: 119px;\n            height: 119px;\n            border-radius: 50%;\n            background-color: #9442e1; }\n      .section_why-us .content_wrapper .section_content .content_text {\n        width: 100%;\n        height: 45%;\n        min-height: 500px;\n        display: flex;\n        flex-flow: row nowrap; }\n        .section_why-us .content_wrapper .section_content .content_text .text_item {\n          width: 25%;\n          display: flex;\n          justify-content: flex-start;\n          align-items: flex-start; }\n          .section_why-us .content_wrapper .section_content .content_text .text_item .item {\n            width: 90%;\n            display: flex;\n            flex-flow: column nowrap;\n            justify-content: flex-start;\n            align-items: center;\n            text-align: center;\n            padding: 0 5%; }\n            .section_why-us .content_wrapper .section_content .content_text .text_item .item span {\n              line-height: 2; }\n    .section_why-us .content_wrapper .heading_text {\n      font-weight: bold;\n      line-height: 1.2;\n      text-align: center; }\n\n.section_buy-essay {\n  height: 740px;\n  position: relative;\n  color: #363636;\n  font-size: 14px;\n  overflow: hidden; }\n  .section_buy-essay .section__background {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    height: 460px;\n    background: -moz-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%);\n    background: -webkit-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%);\n    background: -ms-linear-gradient(180deg, #f2994a 0%, #6e34e9 100%); }\n    .section_buy-essay .section__background .buy-essay_background {\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat; }\n      .section_buy-essay .section__background .buy-essay_background .color_fill {\n        width: 100%;\n        height: 100%;\n        background-color: #363636;\n        opacity: 0.549; }\n  .section_buy-essay .content {\n    height: 100%;\n    position: relative;\n    z-index: 2; }\n    .section_buy-essay .content .buy_essay {\n      width: 100%;\n      height: 480px;\n      background-color: #fff;\n      display: flex;\n      flex-flow: column nowrap;\n      align-content: center;\n      justify-content: center; }\n      .section_buy-essay .content .buy_essay .section_heading {\n        width: 100%;\n        height: 20%;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n        .section_buy-essay .content .buy_essay .section_heading span {\n          position: relative;\n          font-size: 36px;\n          font-weight: bold;\n          line-height: 2.5;\n          word-spacing: 7px; }\n        .section_buy-essay .content .buy_essay .section_heading span:after {\n          content: '';\n          position: absolute;\n          width: 100px;\n          height: 2px;\n          background: #6e34e9;\n          left: 50%;\n          bottom: -10px;\n          transform: translateX(-50%); }\n      .section_buy-essay .content .buy_essay .section_form-container {\n        width: 100%;\n        height: 70%;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n        .section_buy-essay .content .buy_essay .section_form-container .container {\n          width: 50%;\n          height: 100%;\n          display: flex;\n          align-items: center;\n          justify-content: space-around;\n          flex-flow: column nowrap; }\n          .section_buy-essay .content .buy_essay .section_form-container .container .part_items {\n            width: 100%;\n            height: 23%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-flow: row nowrap; }\n            .section_buy-essay .content .buy_essay .section_form-container .container .part_items .part {\n              width: 48%;\n              height: 100%; }\n              .section_buy-essay .content .buy_essay .section_form-container .container .part_items .part .order_form {\n                width: 95%;\n                height: 100%;\n                padding-left: 5%;\n                display: flex;\n                align-items: flex-start;\n                justify-content: space-around;\n                flex-flow: column nowrap; }\n                .section_buy-essay .content .buy_essay .section_form-container .container .part_items .part .order_form label {\n                  font-weight: bold; }\n                .section_buy-essay .content .buy_essay .section_form-container .container .part_items .part .order_form .styled-select {\n                  width: 100%;\n                  height: 39px;\n                  overflow: hidden;\n                  border-radius: 5px;\n                  border: none;\n                  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15); }\n                .section_buy-essay .content .buy_essay .section_form-container .container .part_items .part .order_form .styled-select select {\n                  background: #fff;\n                  width: 100%;\n                  border-radius: 5px;\n                  height: 100%;\n                  color: #939393;\n                  line-height: 1;\n                  border: none; }\n            .section_buy-essay .content .buy_essay .section_form-container .container .part_items input[type=submit] {\n              width: 277px;\n              height: 42px;\n              border: none;\n              border-radius: 5px; }\n            .section_buy-essay .content .buy_essay .section_form-container .container .part_items .button {\n              font-size: 16px;\n              font-weight: bold;\n              line-height: 1.125;\n              letter-spacing: 0.5px;\n              color: #fff;\n              background-color: #6e34e9;\n              box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16);\n              cursor: pointer; }\n            .section_buy-essay .content .buy_essay .section_form-container .container .part_items img {\n              padding: 0 5px; }\n\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  color: #fff;\n  overflow-x: hidden; }\n\n.wrapper {\n  min-width: 320px;\n  width: 100%;\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #e5e5e5; }\n\n.section {\n  width: 100%; }\n\n.row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  width: 1170px;\n  max-width: 94%;\n  position: relative; }\n",""])},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){"use strict";t.r(e);t(4)}]);