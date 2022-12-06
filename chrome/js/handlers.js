/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/***/ (() => {

var _window$handlers;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// HELPERS
var addStyle = function addStyle(node, property, value) {
  node.style.setProperty(property, value, "important");
};
var removeStyle = function removeStyle(node, property) {
  node.style.removeProperty(property);
};
var addStyleByQuery = function addStyleByQuery(query, property, value) {
  if (!query || !property || !value) return;
  var nodes = document.querySelectorAll(query);
  nodes.forEach(function (node) {
    addStyle(node, property, value);
  });
};
var removeStyleByQuery = function removeStyleByQuery(query, property) {
  if (!query || !property) return;
  var nodes = document.querySelectorAll(query);
  nodes.forEach(function (node) {
    removeStyle(node, property);
  });
};

// END HELPERS

// NAVIGATION
var addLogoToNavbar = function addLogoToNavbar(nav) {
  var logo = nav.getElementsByClassName("__ML-logo")[0];
  logo.src = chrome.runtime.getURL("images/icon.svg");
};
var addIconsToNavMenu = function addIconsToNavMenu(nav) {
  var items = ["home", "network", "jobs", "messages", "notifications"];
  items.forEach(function (item) {
    var link = nav.getElementsByClassName("__ML-nav-".concat(item))[0];
    var icon = link.getElementsByTagName("img")[0];
    icon.src = chrome.runtime.getURL("images/nav-".concat(item, ".svg"));
  });
};
var setActiveNavItem = function setActiveNavItem(nav) {
  var pathname = window.location.pathname;
  var pathToNav = [["/feed/", "home"], ["/mynetwork/", "network"], ["/jobs/", "jobs"], ["/messaging/", "messages"], ["/notifications/", "notifications"]];
  pathToNav.forEach(function (path) {
    if (!pathname.startsWith(path[0])) return;
    var link = nav.getElementsByClassName("__ML-nav-".concat(path[1]))[0];
    link.classList.add("__ML-nav-active");
  });
};
var setPendingDotToNavItems = function setPendingDotToNavItems(nav) {
  var labelToNav = [["Home", "home"], ["My Network", "network"], ["Jobs", "jobs"], ["Messaging", "messages"], ["Notifications", "notifications"]];
  labelToNav.forEach(function (label) {
    var original = document.querySelector("span.global-nav__primary-link-text[title=\"".concat(label[0], "\"]"));
    if (original.previousElementSibling.getElementsByClassName("notification-badge--show").length > 0) {
      var link = nav.getElementsByClassName("__ML-nav-".concat(label[1]))[0];
      link.classList.add("__ML-nav-haspending");
    }
  });
};
var addSearchbarToNav = function addSearchbarToNav(nav) {
  var theirs = document.getElementById("global-nav-search");
  if (!theirs) {
    return;
  }
  var ours = nav.getElementsByClassName("__ML-nav-search")[0];
  ours.insertBefore(theirs, null);
};
var addUserMenutoNavbar = function addUserMenutoNavbar(nav) {
  var originalUserMenu = document.getElementsByClassName("global-nav__me")[0];
  if (!originalUserMenu) {
    return;
  }

  //   const originalUserMenuCloned = originalUserMenu.cloneNode(true);
  //   originalUserMenuCloned.addEventListener('click', originalUserMenu.onclick)

  var originalUserMenuLabel = originalUserMenu.getElementsByClassName("global-nav__primary-link-text")[0];
  if (!originalUserMenuLabel) {
    return;
  }

  // Remove the text "Me"
  var menuLabelChild = originalUserMenuLabel.firstChild;
  while (menuLabelChild) {
    var nextChild = menuLabelChild.nextSibling;
    if (menuLabelChild.nodeType == 3) {
      originalUserMenuLabel.removeChild(menuLabelChild);
    }
    menuLabelChild = nextChild;
  }
  var newUserMenuContainer = nav.getElementsByClassName("__ML-nav-user")[0];
  newUserMenuContainer.insertBefore(originalUserMenu, null);
};
var prepareNavbar = function prepareNavbar(html) {
  var nav = document.createElement("header");
  nav.innerHTML = html;
  addLogoToNavbar(nav);
  addIconsToNavMenu(nav);
  setActiveNavItem(nav);
  setPendingDotToNavItems(nav);
  // addSearchbarToNav(nav);
  // addUserMenutoNavbar(nav);

  return nav;
};
var addSimpleNavbar = function addSimpleNavbar() {
  //   already exists
  if (document.querySelectorAll("header:has(> .__ML-nav)").length > 0) return;
  fetch(chrome.runtime.getURL("partials/nav.html")).then(function (response) {
    return response.text();
  }).then(function (html) {
    var preparedNav = prepareNavbar(html);
    var nav = document.getElementById("global-nav");
    // nav.parentNode.replaceChild(preparedNav, nav);
    nav.parentNode.insertBefore(preparedNav, nav);
  });
};
var simplifyNavbar = function simplifyNavbar() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".global-nav__a11y-menu", "display", "flex");
    addStyleByQuery(".global-nav", "display", "block");
    addStyleByQuery(".__ML-nav", "display", "none");
    addStyleByQuery(".search-global-typeahead", "max-width", "280px");
    removeStyleByQuery(".search-global-typeahead", "margin");
    addStyleByQuery(".global-nav nav li", "display", "block");
  } else {
    addSimpleNavbar();
    removeStyleByQuery(".__ML-nav", "display");
    removeStyleByQuery(".global-nav__a11y-menu", "display");
    removeStyleByQuery(".global-nav", "display");
    addStyleByQuery(".search-global-typeahead", "margin", "0 auto");
    addStyleByQuery(".search-global-typeahead", "max-width", "640px");
    removeStyleByQuery(".global-nav nav li", "display");
  }
};
var hideNavLabels = function hideNavLabels() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery("span.__ML-nav-label", "display", "block");
  } else {
    removeStyleByQuery("span.__ML-nav-label", "display");
  }
};
var hideNavLink = function hideNavLink(link) {
  var query = "li.__ML-nav-".concat(link);
  return function () {
    var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (!toApply) {
      removeStyleByQuery(query, "display");
    } else {
      addStyleByQuery(query, "display", "none");
    }
  };
};
// END NAVIGATION

// LEFT PANE
var hideLeftPane = function hideLeftPane() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".scaffold-layout__sidebar", "display", "block");
  } else {
    removeStyleByQuery(".scaffold-layout__sidebar", "display");
  }
};
var hideLeftPaneProfile = function hideLeftPaneProfile() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".feed-identity-module", "display", "block");
  } else {
    removeStyleByQuery(".feed-identity-module", "display");
  }
};
var hideLeftPanePages = function hideLeftPanePages() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".org-organization-admin-pages-entrypoint-card__card", "display", "block");
  } else {
    removeStyleByQuery(".org-organization-admin-pages-entrypoint-card__card", "display");
  }
};
var hideLeftPaneExtras = function hideLeftPaneExtras() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".community-panel", "display", "block");
  } else {
    removeStyleByQuery(".community-panel", "display");
  }
};

// END LEFT PANE

// RIGHT PANE
var hideRightPane = function hideRightPane() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery("aside.scaffold-layout__aside", "display", "block");
  } else {
    removeStyleByQuery("aside.scaffold-layout__aside", "display");
  }
};
var hideRightPaneNews = function hideRightPaneNews() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery("section:has(.news-module)", "display", "block");
  } else {
    removeStyleByQuery("section:has(.news-module)", "display");
  }
};
var hideRightPaneAds = function hideRightPaneAds() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".ad-banner-container", "display", "block");
  } else {
    removeStyleByQuery(".ad-banner-container", "display");
  }
};
var hideFooter = function hideFooter() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery(".global-footer-compact", "display", "block");
  } else {
    removeStyleByQuery(".global-footer-compact", "display");
  }
};

// END RIGHT PANE

// MESSAGING OVERLAY
var hideFloatingMessaging = function hideFloatingMessaging() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!toApply) {
    addStyleByQuery("#msg-overlay", "display", "flex");
  } else {
    removeStyleByQuery("#msg-overlay", "display");
  }
};
// END MESSAGING OVERLAY

// FEED

var hideFeedAds = function hideFeedAds() {
  var toApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var nodes = document.querySelectorAll(".update-components-actor");
  nodes.forEach(function (node) {
    if (node.textContent.includes("Promoted")) {
      if (!toApply) {
        removeStyle(node.parentElement, "display");
      } else {
        addStyle(node.parentElement, "display", "none");
      }
    }
  });
};
var hideFeedPostContext = function hideFeedPostContext(toApply) {
  if (!toApply) {
    addStyleByQuery(".update-components-header", "display", "block");
  } else {
    removeStyleByQuery(".update-components-header", "display");
  }
};
var simplifyFeedPostAuthor = function simplifyFeedPostAuthor(toApply) {
  if (!toApply) {
    addStyleByQuery(".update-components-actor__meta", "display", "block");
    addStyleByQuery(".update-components-actor__description", "display", "block");
    addStyleByQuery(".update-components-actor__sub-description", "display", "block");
  } else {
    removeStyleByQuery(".update-components-actor__meta", "display");
    removeStyleByQuery(".update-components-actor__description", "display");
    removeStyleByQuery(".update-components-actor__sub-description", "display");
  }
};

// END FEED

window.handlers = (_window$handlers = {
  "nav:simplify": simplifyNavbar,
  "nav:labels:hide": hideNavLabels,
  "nav:home:hide": hideNavLink("home"),
  "nav:my_network:hide": hideNavLink("network"),
  "nav:jobs:hide": hideNavLink("jobs"),
  "nav:messaging:hide": hideNavLink("messages"),
  "nav:notifications:hide": hideNavLink("notifications"),
  "floating_messaging:hide": hideFloatingMessaging
}, _defineProperty(_window$handlers, "floating_messaging:hide", hideFloatingMessaging), _defineProperty(_window$handlers, "left_pane:hide", hideLeftPane), _defineProperty(_window$handlers, "left_pane:profile:hide", hideLeftPaneProfile), _defineProperty(_window$handlers, "left_pane:pages:hide", hideLeftPanePages), _defineProperty(_window$handlers, "left_pane:extras:hide", hideLeftPaneExtras), _defineProperty(_window$handlers, "right_pane:hide", hideRightPane), _defineProperty(_window$handlers, "right_pane:news:hide", hideRightPaneNews), _defineProperty(_window$handlers, "right_pane:ads:hide", hideRightPaneAds), _defineProperty(_window$handlers, "footer:hide", hideFooter), _defineProperty(_window$handlers, "feed:ads:hide", hideFeedAds), _defineProperty(_window$handlers, "feed:post_context:hide", hideFeedPostContext), _defineProperty(_window$handlers, "feed:post_author:simplify", simplifyFeedPostAuthor), _window$handlers);

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/minimal.css":
/*!*****************************!*\
  !*** ./src/css/minimal.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/chrome/js/handlers": 0,
/******/ 			"chrome/css/minimal": 0,
/******/ 			"chrome/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["chrome/css/minimal","chrome/css/app"], () => (__webpack_require__("./src/js/handlers.js")))
/******/ 	__webpack_require__.O(undefined, ["chrome/css/minimal","chrome/css/app"], () => (__webpack_require__("./src/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chrome/css/minimal","chrome/css/app"], () => (__webpack_require__("./src/css/minimal.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;