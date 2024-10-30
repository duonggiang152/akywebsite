(()=>{"use strict";var n={984:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".content-brief {\n    display: flex;\n}\n.content-brief > :last-child {\n    margin-left: 20px;\n}\n.content-brief > :first-child {\n    width: 150px;\n    height: 150px;\n}\n.blog-brief {\n    margin: 10px;\n    padding: 10px;\n    background-color:  rgb(236, 236, 236);\n    transition: background-color 0.2s ease;\n}\n.blog-brief:hover {\n    background-color: rgb(196, 196, 196);\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 750px) {\n    .content-brief {\n        display: block;\n    }\n\n    .content-brief > :first-child {\n        float: left;\n    }\n}",""]);const s=o},124:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"#footer {\n    width: 1000px;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    font-size: 14px;\n    margin: 0px auto 0px auto;\n    \n    padding: 20px 10px;\n    margin-top: 20px;\n}\n#footer > article {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: start;\n    background-color: rgb(238, 238, 238);\n}\n#footer > article > div {\n    border-right: 1px solid grey;\n    padding: 0px 50px 0px 10px;\n}\n#footer > article > div > * {\n    margin-top: 10px;\n}\n#footer > article > div > div > ul > li {\n    margin-top: 10px;\n}\n#footer > article > div > :first-child {\n    color: #005baa;\n    font-size: 20px;\n    font-weight: 900;\n}\n#footer > #right {\n    padding: 4px;\n    width: 100vw;\n    color: white;\n    background-color: #005baa;\n}\n@media only screen and (max-width: 1000px) {\n   \n    #footer {\n        width: 100vw;\n        padding: 0px;\n    }\n    #footer > article {\n        width: 100vw;\n    }\n    #footer > article > div {\n        width: 100%;\n    }\n    #footer > article {\n        width: 100%;\n        display: block;\n     \n    }\n}\n\n",""]);const s=o},970:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"body{\n  \n    box-sizing: border-box;\n    margin: 0px;\n    overflow-x: hidden;\n}\n.main-content{\n    min-height: 60vh;   \n    max-width: 1000px;\n    margin: 0px auto;\n    padding: 10px;\n}\n\n\n@media only screen and (max-width: 1000px) {\n    .main-content {\n        width: 100vw;\n    }\n}\n",""]);const s=o},760:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"/* --- starting style greeting */\n#greeting {\n    width: 1000px;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    font-size: 14px;\n    overflow: hidden;\n    margin: 7px auto 0px auto;\n}\n#greeting > :first-child {\n    font-size: 14px;\n    width: 300px;\n    padding-left: 20px;\n    flex-shrink: 0;\n}\n#greeting > :last-child {\n    font-size: 14px;\n    width: 300px;\n    flex-shrink: 0;\n    text-align: end;\n    position: relative;\n    right: 20px;\n}\n@media only screen and (max-width: 1000px) {\n    #greeting {\n        width: 100vw;\n    }\n}\n@media only screen and (max-width: 550px) {\n    #greeting > :first-child {\n        width: 100vw;\n    }\n    #greeting > :last-child {\n        width: 100vw;\n    }\n}\n/* ---- end style greating ---- */\n",""]);const s=o},740:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"#navigation-bar {\n    width: 1000px;\n    margin: 0px auto;\n}\n#navigation-bar > ul {\n    display: flex;\n    width: calc(100%-2px);\n    list-style: none;\n    justify-content: start;\n    align-items: center;\n    border: 1px solid #ccc;\n    flex-wrap: wrap;\n    flex-shrink: 1;\n    padding-inline-start: 0px;\n}\n#navigation-bar > ul > li {\n    margin: 20px 0px 20px 20px;\n    padding-right: 7px;\n    border-right: 1px solid #949494;\n\n}\n#navigation-bar > ul > li:hover {\n    cursor: pointer;\n    color: #337ab7;\n}\n@media only screen and (max-width: 1000px) {\n    #navigation-bar {\n        width: 100vw;\n        margin: 0px 0px 0px 0px;\n    }\n}",""]);const s=o},389:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"#brand-div {\n    width: 1000px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0px auto 0px auto;\n}\n.search-container {\n    display: flex;\n    width: 500px;\n    padding: 5px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.search-container input {\n    width: 80%;\n    border: none;\n    outline: none;\n    padding: 10px;\n    flex: 1;\n    font-size: 14px;\n\n}\n\n.search-container input::placeholder {\n    font-style: italic;\n}\n\n.search-container button {\n    background-color: #FFB400; \n    border: none;\n    border-radius: 0 20px 20px 0;\n    padding: 5px 10px;\n    cursor: pointer;\n}\n.input-box {\n    align-items: center;\n    border: 1px solid #ccc;\n    width: 500px;\n    padding: 5px;\n\n}\n.search-container button .search-icon {\n    font-size: 16px;\n}\n#search-icon {\n    height: 20px;\n}\n@media only screen and (max-width: 1000px) {\n    #brand-div {\n        display: block;\n        width: 100vw;\n    }\n    .search-container {\n        position: static;\n\n        width: 80vw;\n        margin: 0px auto 0px auto;\n        transform: none;\n    }\n    #brand-icon > img{\n        position: relative;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    #brand-div {\n        display: block;\n    }\n  }\n\n",""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var l=n[s],d=r.base?l[0]+r.base:l[0],c=a[d]||0,p="".concat(d," ").concat(c);a[d]=c+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var x=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:x,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var l=r(n,i),d=0;d<a.length;d++){var c=t(a[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;const r=document.getElementById("search-box"),i=document.getElementById("search-button");var a=t(72),o=t.n(a),s=t(825),l=t.n(s),d=t(659),c=t.n(d),p=t(56),u=t.n(p),f=t(540),x=t.n(f),h=t(113),g=t.n(h),m=t(970),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=x(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;var b=t(760),y={};y.styleTagTransform=g(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=x(),o()(b.A,y),b.A&&b.A.locals&&b.A.locals;var w=t(389),A={};A.styleTagTransform=g(),A.setAttributes=u(),A.insert=c().bind(null,"head"),A.domAPI=l(),A.insertStyleElement=x(),o()(w.A,A),w.A&&w.A.locals&&w.A.locals;var T=t(740),E={};E.styleTagTransform=g(),E.setAttributes=u(),E.insert=c().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=x(),o()(T.A,E),T.A&&T.A.locals&&T.A.locals;var k=t(124),I={};I.styleTagTransform=g(),I.setAttributes=u(),I.insert=c().bind(null,"head"),I.domAPI=l(),I.insertStyleElement=x(),o()(k.A,I),k.A&&k.A.locals&&k.A.locals;var S=t(984),j={};j.styleTagTransform=g(),j.setAttributes=u(),j.insert=c().bind(null,"head"),j.domAPI=l(),j.insertStyleElement=x(),o()(S.A,j),S.A&&S.A.locals&&S.A.locals,document.getElementById("greeting").getElementsByClassName("hotline")[0].innerHTML="Hotline: 0865.987.345",r.addEventListener("keydown",(function(n){if(console.log("event"),"Enter"===n.key){let e=r.value;n.preventDefault(),location.href=`./services.html?name=${e}`}})),i.addEventListener("click",(()=>{let n=r.value;event.preventDefault(),location.href=`./services.html?name=${n}`}))})();