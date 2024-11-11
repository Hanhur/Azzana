// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/img/search.svg":[function(require,module,exports) {
module.exports = "/search.dca1606c.svg";
},{}],"src/img/cosh.svg":[function(require,module,exports) {
module.exports = "/cosh.9c55a7ab.svg";
},{}],"src/img/logo.png":[function(require,module,exports) {
module.exports = "/logo.a0487e91.png";
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/page/pageHeader/pageHeader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageHeader/pageHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageHeader = getPageHeader;
var _search = _interopRequireDefault(require("../../img/search.svg"));
var _cosh = _interopRequireDefault(require("../../img/cosh.svg"));
var _logo = _interopRequireDefault(require("../../img/logo.png"));
require("./pageHeader.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var headreArray_1 = ["Home ", "Necklaces", "Braceltes", "Rings"];
var headreArray_2 = ["Earrings", "Ankle Bracelets", "All", "Track My Oreder"];
function getPageHeader() {
  var header = document.createElement("header");
  header.className = "page-header";
  var headerDiv = document.createElement("div");
  headerDiv.className = "header-div";
  headerDiv.innerHTML = "\n        <p class=\"header-div-text\">CHRISTMAS SALE: 2 JEWELERY PURCHASED, THE 3rd FREE! / FREE DELIVERY FR</p>\n        <img class=\"header-div-img\" src=\"".concat(_search.default, "\">\n        <p class=\"header-div_text\">SEARCH</p>\n        <img class=\"header-div_img\" src=\"").concat(_cosh.default, "\">\n    ");
  var container = document.createElement("div");
  container.className = "container";
  var headerBlock = document.createElement("div");
  headerBlock.className = "header-block";
  var headerList_1 = document.createElement("ul");
  headerList_1.className = "header-list";
  headreArray_1.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "header-items";
    var link = document.createElement("a");
    link.className = "header-link";
    link.href = "#";
    headerList_1.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var headerList_2 = document.createElement("ul");
  headerList_2.className = "header-list";
  headreArray_2.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "header-items";
    var link = document.createElement("a");
    link.className = "header-link";
    link.href = "#";
    headerList_2.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var headerImg = document.createElement("img");
  headerImg.className = "header-img";
  headerImg.src = _logo.default;
  headerImg.alt = "Azzana";
  header.append(headerDiv);
  header.append(container);
  container.append(headerBlock);
  headerBlock.append(headerList_1, headerImg, headerList_2);
  return header;
}
},{"../../img/search.svg":"src/img/search.svg","../../img/cosh.svg":"src/img/cosh.svg","../../img/logo.png":"src/img/logo.png","./pageHeader.css":"src/page/pageHeader/pageHeader.css"}],"src/components/main/sectionMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/main-bg.png":[["main-bg.13403173.png","src/img/main-bg.png"],"src/img/main-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/main/sectionMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionMain = getSectionMain;
require("./sectionMain.css");
function getSectionMain() {
  var section = document.createElement("section");
  section.className = "section-main";
  var container = document.createElement("div");
  container.className = "container";
  var sectionBlock = document.createElement("div");
  sectionBlock.className = "section-block";
  sectionBlock.innerHTML = "\n        <h1 class=\"section-block-title\">Black Friday</h1>\n        <p class=\"section-block-text\">2 Bijoux Achetes le 3eme Offert !</p>\n        <button class=\"section-block-btn\">Discover the Jewelry</button>\n    ";
  section.append(container);
  container.append(sectionBlock);
  return section;
}
},{"./sectionMain.css":"src/components/main/sectionMain.css"}],"src/img/bestsellers/images1.png":[function(require,module,exports) {
module.exports = "/images1.776f9379.png";
},{}],"src/img/bestsellers/images2.png":[function(require,module,exports) {
module.exports = "/images2.76cff5c1.png";
},{}],"src/img/bestsellers/images3.png":[function(require,module,exports) {
module.exports = "/images3.4e18b362.png";
},{}],"src/img/bestsellers/images4.png":[function(require,module,exports) {
module.exports = "/images4.5e4777da.png";
},{}],"src/img/bestsellers/images5.png":[function(require,module,exports) {
module.exports = "/images5.100013ee.png";
},{}],"src/img/bestsellers/images6.png":[function(require,module,exports) {
module.exports = "/images6.1f249f4d.png";
},{}],"src/img/bestsellers/images7.png":[function(require,module,exports) {
module.exports = "/images7.16711f54.png";
},{}],"src/img/bestsellers/images8.png":[function(require,module,exports) {
module.exports = "/images8.23444c22.png";
},{}],"src/img/bestsellers/images9.svg":[function(require,module,exports) {
module.exports = "/images9.f4feb621.svg";
},{}],"src/img/bestsellers/images10.svg":[function(require,module,exports) {
module.exports = "/images10.e4af1e8b.svg";
},{}],"src/img/bestsellers/ellipse.png":[function(require,module,exports) {
module.exports = "/ellipse.8d1232e1.png";
},{}],"src/components/bestsellers/bestsellers.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/bestsellers/heading_left.png":[["heading_left.217fc3d7.png","src/img/bestsellers/heading_left.png"],"src/img/bestsellers/heading_left.png"],"./../../img/bestsellers/heading_right.png":[["heading_right.7072f3d3.png","src/img/bestsellers/heading_right.png"],"src/img/bestsellers/heading_right.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/bestsellers/bestsellers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBestsellers = getBestsellers;
var _images = _interopRequireDefault(require("../../img/bestsellers/images1.png"));
var _images2 = _interopRequireDefault(require("../../img/bestsellers/images2.png"));
var _images3 = _interopRequireDefault(require("../../img/bestsellers/images3.png"));
var _images4 = _interopRequireDefault(require("../../img/bestsellers/images4.png"));
var _images5 = _interopRequireDefault(require("../../img/bestsellers/images5.png"));
var _images6 = _interopRequireDefault(require("../../img/bestsellers/images6.png"));
var _images7 = _interopRequireDefault(require("../../img/bestsellers/images7.png"));
var _images8 = _interopRequireDefault(require("../../img/bestsellers/images8.png"));
var _images9 = _interopRequireDefault(require("../../img/bestsellers/images9.svg"));
var _images10 = _interopRequireDefault(require("../../img/bestsellers/images10.svg"));
var _ellipse = _interopRequireDefault(require("../../img/bestsellers/ellipse.png"));
require("./bestsellers.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var bestsellersArray = [_images.default, _images2.default, _images3.default, _images4.default, _images5.default, _images6.default, _images7.default, _images8.default];
function getBestsellers() {
  var section = document.createElement("section");
  section.className = "section-bestsellers";
  var container = document.createElement("div");
  container.className = "container";
  var shippingBlock = document.createElement("div");
  shippingBlock.className = "shipping-block";
  shippingBlock.innerHTML = "\n        <p class=\"shipping-text\">FREE SHIPPING FR</p>\n        <h2 class=\"shipping-title\">The Bestsellers</h2>\n    ";
  var bestsellersBlock = document.createElement("div");
  bestsellersBlock.className = "bestsellers-block";
  var listItems = bestsellersArray.map(function (imageSrc) {
    return "\n       <ul class=\"bestsellers-list\">\n            <li class=\"bestsellers-item\">\n                <img class=\"bestsellers-ellipse\" src=\"".concat(_ellipse.default, "\">\n                <img class=\"bestsellers-img\" src=\"").concat(imageSrc, "\" alt=\"Person Image\">\n                <div class=\"bestsellers-box\">\n                    <h3 class=\"bestsellers-title\">NECKLACE \"MURATO\"</h3>\n                    <div class=\"bestsellers_box\">\n                        <span class=\"bestsellers-span\">$ 19.99</span>\n                        <span class=\"bestsellers_span\">$ 23.00</span>\n                    </div>\n                    <div class=\"bestsellers-box_img\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images10.default, "\">\n                    </div>\n                </div>\n            </li>\n       </ul>\n    ");
  }).join("");
  var bestsellersButton = document.createElement("button");
  bestsellersButton.className = "bestsellers-btn";
  bestsellersButton.textContent = "See All Jewelery";
  bestsellersBlock.innerHTML = listItems;
  section.append(container);
  container.append(shippingBlock, bestsellersBlock, bestsellersButton);
  return section;
}
},{"../../img/bestsellers/images1.png":"src/img/bestsellers/images1.png","../../img/bestsellers/images2.png":"src/img/bestsellers/images2.png","../../img/bestsellers/images3.png":"src/img/bestsellers/images3.png","../../img/bestsellers/images4.png":"src/img/bestsellers/images4.png","../../img/bestsellers/images5.png":"src/img/bestsellers/images5.png","../../img/bestsellers/images6.png":"src/img/bestsellers/images6.png","../../img/bestsellers/images7.png":"src/img/bestsellers/images7.png","../../img/bestsellers/images8.png":"src/img/bestsellers/images8.png","../../img/bestsellers/images9.svg":"src/img/bestsellers/images9.svg","../../img/bestsellers/images10.svg":"src/img/bestsellers/images10.svg","../../img/bestsellers/ellipse.png":"src/img/bestsellers/ellipse.png","./bestsellers.css":"src/components/bestsellers/bestsellers.css"}],"src/page/pageMain/pageMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageMain/pageMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageMain = getPageMain;
var _sectionMain = require("../../components/main/sectionMain");
var _bestsellers = require("../../components/bestsellers/bestsellers");
require("./pageMain.css");
function getPageMain() {
  var main = document.createElement("main");
  main.className = "main";
  var sectionMain = (0, _sectionMain.getSectionMain)();
  var bestsellers = (0, _bestsellers.getBestsellers)();
  main.append(sectionMain, bestsellers);
  return main;
}
},{"../../components/main/sectionMain":"src/components/main/sectionMain.js","../../components/bestsellers/bestsellers":"src/components/bestsellers/bestsellers.js","./pageMain.css":"src/page/pageMain/pageMain.css"}],"index.js":[function(require,module,exports) {
"use strict";

var _pageHeader = require("./src/page/pageHeader/pageHeader");
var _pageMain = require("./src/page/pageMain/pageMain");
var app = document.querySelector("#app");
var header = (0, _pageHeader.getPageHeader)();
var main = (0, _pageMain.getPageMain)();
app.append(header, main);
},{"./src/page/pageHeader/pageHeader":"src/page/pageHeader/pageHeader.js","./src/page/pageMain/pageMain":"src/page/pageMain/pageMain.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46363" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Azzana.e31bb0bc.js.map