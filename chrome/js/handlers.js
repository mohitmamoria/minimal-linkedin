(()=>{var e,n={404:()=>{var e;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,a,t){return(a=function(e){var a=function(e,a){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,a||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"===n(a)?a:String(a)}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var t=function(e,n,a){e.style.setProperty(n,a,"important")},o=function(e,n){e.style.removeProperty(n)},i=function(e,n,a){e&&n&&a&&document.querySelectorAll(e).forEach((function(e){t(e,n,a)}))},l=function(e,n){e&&n&&document.querySelectorAll(e).forEach((function(e){o(e,n)}))},r=function(e){var n=document.createElement("header");return n.innerHTML=e,function(e){e.getElementsByClassName("__ML-logo")[0].src=chrome.runtime.getURL("images/icon.svg")}(n),function(e){["home","network","jobs","messages","notifications"].forEach((function(n){e.getElementsByClassName("__ML-nav-".concat(n))[0].getElementsByTagName("img")[0].src=chrome.runtime.getURL("images/nav-".concat(n,".svg"))}))}(n),function(e){var n=window.location.pathname;[["/feed/","home"],["/mynetwork/","network"],["/jobs/","jobs"],["/messaging/","messages"],["/notifications/","notifications"]].forEach((function(a){n.startsWith(a[0])&&e.getElementsByClassName("__ML-nav-".concat(a[1]))[0].classList.add("__ML-nav-active")}))}(n),function(e){[["Home","home"],["My Network","network"],["Jobs","jobs"],["Messaging","messages"],["Notifications","notifications"]].forEach((function(n){document.querySelector('span.global-nav__primary-link-text[title="'.concat(n[0],'"]')).previousElementSibling.getElementsByClassName("notification-badge--show").length>0&&e.getElementsByClassName("__ML-nav-".concat(n[1]))[0].classList.add("__ML-nav-haspending")}))}(n),n},s=function(){document.querySelectorAll("header:has(> .__ML-nav)").length>0||fetch(chrome.runtime.getURL("partials/nav.html")).then((function(e){return e.text()})).then((function(e){var n=r(e),a=document.getElementById("global-nav");a.parentNode.insertBefore(n,a)}))},c=function(e){var n="li.__ML-nav-".concat(e);return function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?i(n,"display","none"):l(n,"display")}},d=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l("#msg-overlay","display"):i("#msg-overlay","display","flex")};window.handlers=(a(e={"nav:simplify":function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?(s(),l(".__ML-nav","display"),l(".global-nav__a11y-menu","display"),l(".global-nav","display"),i(".search-global-typeahead","margin","0 auto"),i(".search-global-typeahead","max-width","640px"),l(".global-nav nav li","display")):(i(".global-nav__a11y-menu","display","flex"),i(".global-nav","display","block"),i(".__ML-nav","display","none"),i(".search-global-typeahead","max-width","280px"),l(".search-global-typeahead","margin"),i(".global-nav nav li","display","block"))},"nav:labels:hide":function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l("span.__ML-nav-label","display"):i("span.__ML-nav-label","display","block")},"nav:home:hide":c("home"),"nav:my_network:hide":c("network"),"nav:jobs:hide":c("jobs"),"nav:messaging:hide":c("messages"),"nav:notifications:hide":c("notifications"),"floating_messaging:hide":d},"floating_messaging:hide",d),a(e,"left_pane:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l(".scaffold-layout__sidebar","display"):i(".scaffold-layout__sidebar","display","block")})),a(e,"left_pane:profile:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l(".feed-identity-module","display"):i(".feed-identity-module","display","block")})),a(e,"left_pane:pages:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l(".org-organization-admin-pages-entrypoint-card__card","display"):i(".org-organization-admin-pages-entrypoint-card__card","display","block")})),a(e,"left_pane:extras:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l(".community-panel","display"):i(".community-panel","display","block")})),a(e,"right_pane:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l("aside.scaffold-layout__aside","display"):i("aside.scaffold-layout__aside","display","block")})),a(e,"right_pane:news:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l("section:has(.news-module)","display"):i("section:has(.news-module)","display","block")})),a(e,"right_pane:ads:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l(".ad-banner-container","display"):i(".ad-banner-container","display","block")})),a(e,"footer:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?l(".global-footer-compact","display"):i(".global-footer-compact","display","block")})),a(e,"feed:ads:hide",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=document.querySelectorAll(".update-components-actor");n.forEach((function(n){n.textContent.includes("Promoted")&&(e?t(n.parentElement,"display","none"):o(n.parentElement,"display"))}))})),a(e,"feed:post_context:hide",(function(e){e?l(".update-components-header","display"):i(".update-components-header","display","block")})),a(e,"feed:post_author:simplify",(function(e){e?(l(".update-components-actor__meta","display"),l(".update-components-actor__description","display"),l(".update-components-actor__sub-description","display")):(i(".update-components-actor__meta","display","block"),i(".update-components-actor__description","display","block"),i(".update-components-actor__sub-description","display","block"))})),e)},141:()=>{},514:()=>{}},a={};function t(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=(n,a,o,i)=>{if(!a){var l=1/0;for(d=0;d<e.length;d++){for(var[a,o,i]=e[d],r=!0,s=0;s<a.length;s++)(!1&i||l>=i)&&Object.keys(t.O).every((e=>t.O[e](a[s])))?a.splice(s--,1):(r=!1,i<l&&(l=i));if(r){e.splice(d--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={941:0,815:0,727:0};t.O.j=n=>0===e[n];var n=(n,a)=>{var o,i,[l,r,s]=a,c=0;if(l.some((n=>0!==e[n]))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(s)var d=s(t)}for(n&&n(a);c<l.length;c++)i=l[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})(),t.O(void 0,[815,727],(()=>t(404))),t.O(void 0,[815,727],(()=>t(141)));var o=t.O(void 0,[815,727],(()=>t(514)));o=t.O(o)})();