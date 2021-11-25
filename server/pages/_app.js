module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0wdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return increaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return decreaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateCartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearCartTotally; });
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  CLEAR_CART_TOTALLY: 'CLEAR_CART_TOTALLY',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}
function clearCartTotally() {
  return {
    type: actionTypes.CLEAR_CART_TOTALLY
  };
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "11Xn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPDomain; });
/* unused harmony export ck_username */
/* unused harmony export cs_password */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return oathInfo; });
/* unused harmony export customHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WPRepository; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const WPDomain = 'https://virem.learnmur.com.ng';
const ck_username = 'ck_c668c1163da91eb89e1259706dd1946c453fcfe6';
const cs_password = 'cs_bf89ac8ae81243d599f93324c4ad517990e6d02f';
const oathInfo = {
  consumer_key: ck_username,
  consumer_secret: cs_password
};
const customHeaders = {
  Accept: '*/*'
};
const WPRepository = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: customHeaders
});

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "689t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCollectionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCategoriesSuccess; });
/* unused harmony export getCollection */
/* unused harmony export getCollectionSuccess */
const actionTypes = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',
  GET_COLLECTION: 'GET_COLLECTION',
  GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS'
};
function getCollections(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionsSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}
function getCategories(payload) {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload
  };
}
function getCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload
  };
}
function getCollection(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AmNh":
/***/ (function(module, exports) {



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Crg1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pU5j");


class CollectionRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getCollections(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/collections?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getCategoriesBySlug(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/product-categories?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsBySlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/collections/slug?=${slug}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new CollectionRepository());

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Gska":
/***/ (function(module, exports) {



/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "OqP1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getColletionBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getItemBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertSlugsQueryString; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}
function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find(item => item.slug === slug.toString());

    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
/*Work only with Strapi API*/

function convertSlugsQueryString(payload) {
  let query = '';

  if (payload.length > 0) {
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }

  return query;
}

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SqlY":
/***/ (function(module, exports) {



/***/ }),

/***/ "T/WE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getWishlistList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWishlistListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItemToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeWishlistItem; });
/* unused harmony export clearWishlist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateWishlistListSuccess; });
const actionTypes = {
  GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
  GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
  GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',
  ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
  REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',
  UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
  UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
  UPDATE_WISHLISH_LIST_ERROR: 'UPDATE_WISHLISH_LIST_ERROR',
  CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST'
};
function getWishlistList() {
  return {
    type: actionTypes.GET_WISHLIST_LIST
  };
}
function getWishlistListSuccess(data) {
  return {
    type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
    data
  };
}
function addItemToWishlist(product) {
  return {
    type: actionTypes.ADD_ITEM_WISHLISH,
    product
  };
}
function removeWishlistItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_WISHLISH,
    product
  };
}
function clearWishlist() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateWishlistListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "T98Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("11Xn");
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pU5j");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * WPReact
 * Developed by: diaryforlife
 * */



class WPProductRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getProducts(payload) {
    let enpoint;

    if (payload) {
      enpoint = `wp-json/wc/v3/products?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread(_objectSpread({}, payload), _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    } else {
      enpoint = 'wp-json/wc/v3/products';
    }

    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      if (response.data && response.data.length > 0) {
        const data = {
          items: response.data,
          totalItems: response.headers['x-wp-total'],
          totalPages: response.headers['x-wp-totalpages']
        };
        return data;
      } else return null;
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductAttributes() {
    const enpoint = `/wp-json/wc/v3/products/attributes?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread({}, _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBrands() {
    const enpoint = `wp-json/wc/v3/products/attributes/10/terms?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread({}, _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    return await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      return response.data;
    }).catch(() => {
      return null;
    });
  }

  async getProductCategories(payload) {
    let enpoint;

    if (payload) {
      enpoint = `wp-json/wc/v3/products/categories?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread(_objectSpread({}, payload), _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    } else {
      enpoint = 'wp-json/wc/v3/products/categories';
    }

    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      if (response.data && response.data.length > 0) {
        const data = {
          items: response.data,
          totalItems: response.headers['x-wp-total'],
          totalPages: response.headers['x-wp-totalpages']
        };
        return data;
      } else return null;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductByID(payload) {
    const enpoint = `wp-json/wc/v3/products/${payload}?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread({}, _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error.message));
      return null;
    });
    return reponse;
  }

  async getProductVariantsByID(payload) {
    const enpoint = `wp-json/wc/v3/products/${payload}/variations?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread({}, _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error.message));
      return null;
    });
    return reponse;
  }

  async getRelatedProductByID(payload) {
    const enpoint = `wp-json/wc/v2/products/?include=${payload}?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread({}, _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      console.log(response);
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getCategoryByID(payload) {
    const enpoint = `wp-json/wc/v3/products/categories/${payload}?${Object(_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* serializeQuery */ "c"])(_objectSpread({}, _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* oathInfo */ "c"]))}`;
    const reponse = await _repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPRepository */ "b"].get(`${_repositories_WP_WPRepository__WEBPACK_IMPORTED_MODULE_0__[/* WPDomain */ "a"]}/${enpoint}`).then(response => {
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error.message));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new WPProductRepository());

/***/ }),

/***/ "VCEH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPGetProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WPGetProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WPToggleProductLoading; });
const actionTypes = {
  WP_GET_PRODUCTS: 'WP_GET_PRODUCTS',
  WP_GET_PRODUCTS_SUCCESS: 'WP_GET_PRODUCTS_SUCCESS',
  WP_TOGGLE_LOADING: 'WP_TOGGLE_LOADING'
};
function WPGetProducts(payload) {
  return {
    type: actionTypes.WP_GET_PRODUCTS,
    payload
  };
}
function WPGetProductsSuccess(payload) {
  return {
    type: actionTypes.WP_GET_PRODUCTS_SUCCESS,
    payload
  };
}
function WPToggleProductLoading(payload) {
  return {
    type: actionTypes.WP_TOGGLE_LOADING,
    payload
  };
}

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "W80I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logOutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registeredSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginNotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registeredNotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logoutNotify; });
const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTERED_SUCCESS: 'REGISTERED_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGIN_NOTIFY: 'LOGIN_NOTIFY',
  REGSITERED_NOTIFY: 'REGISTERED_NOTIFY',
  LOGOUT_NOTIFY: 'LOGOUT_NOTIFY'
};
function loginSuccess(user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user: user
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}
function registeredSuccess(user) {
  return {
    type: actionTypes.REGISTERED_SUCCESS,
    user: user
  };
}
function loginNotify() {
  return {
    type: actionTypes.LOGIN_NOTIFY
  };
}
function registeredNotify() {
  return {
    type: actionTypes.REGISTERED_NOTIFY
  };
}
function logoutNotify() {
  return {
    type: actionTypes.LOGOUT_NOTIFY
  };
}

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// CONCATENATED MODULE: ./store/post/action.js
const actionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  GET_FEATURED_POST: 'GET_FEATURED_POST',
  GET_FEATURED_POST_SUCCESS: 'GET_FEATURED_POST_SUCCESS',
  GET_FEATURED_POST_ERROR: 'GET_FEATURED_POST_ERROR',
  GET_RECENT_POSTS: 'GET_RECENT_POSTS',
  GET_RECENT_POSTS_SUCCESS: 'GET_RECENT_POSTS_SUCCESS',
  GET_RECENT_POSTS_ERROR: 'GET_RECENT_POSTS_ERROR',
  GET_POST_CATEGORIES: 'GET_POST_CATEGORIES',
  GET_POST_CATEGORIES_SUCCESS: 'GET_POST_CATEGORIES_SUCCESS',
  GET_POST_CATEGORIES_ERROR: 'GET_POST_CATEGORIES_ERROR',
  // WP
  "WP_GET_POST_META_DATA": "WP_GET_POST_META_DATA",
  "WP_GET_POST_META_DATA_SUCCESS": "WP_GET_POST_META_DATA_SUCCESS"
};
function getPosts() {
  return {
    type: actionTypes.GET_POSTS
  };
}
function getPostsMetaData() {
  return {
    type: actionTypes.GET_POSTS
  };
}
function getPostsSuccess(data) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    data
  };
}
function getPostsError(error) {
  return {
    type: actionTypes.GET_POSTS_ERROR,
    error
  };
}
function getFeaturedPost() {
  return {
    type: actionTypes.GET_FEATURED_POST
  };
}
function getFeaturedPostSuccess(data) {
  return {
    type: actionTypes.GET_FEATURED_POST_SUCCESS,
    data
  };
}
function getFeaturedPostError(error) {
  return {
    type: actionTypes.GET_FEATURED_POST_ERROR,
    error
  };
}
function getRecentPosts() {
  return {
    type: actionTypes.GET_RECENT_POSTS
  };
}
function getRecentPostsSuccess(data) {
  return {
    type: actionTypes.GET_RECENT_POSTS_SUCCESS,
    data
  };
}
function getRecentPostsError(error) {
  return {
    type: actionTypes.GET_RECENT_POSTS_ERROR,
    error
  };
}
function getPostCategories() {
  return {
    type: actionTypes.GET_POST_CATEGORIES
  };
}
function getPostCategoriesSuccess(data) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_SUCCESS,
    data
  };
}
function getPostCategoriesError(error) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_ERROR,
    error
  };
}
// CONCATENATED MODULE: ./store/post/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initialState = {
  posts: [],
  featuredPost: null,
  recentPost: [],
  categories: [],
  error: false
};

function reducer(state = reducer_initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        posts: action.data
      });

    case actionTypes.GET_FEATURED_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        featuredPost: action.data
      });

    case actionTypes.GET_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        recentPost: action.data
      });

    case actionTypes.GET_POST_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        categories: action.data
      });

    case actionTypes.GET_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_FEATURED_POST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_RECENT_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_POST_CATEGORIES_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var post_reducer = (reducer);
// EXTERNAL MODULE: ./store/product/action.js
var product_action = __webpack_require__("ypqY");

// CONCATENATED MODULE: ./store/product/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const product_reducer_initialState = {
  allProducts: null,
  singleProduct: null,
  error: false,
  totalProducts: 0,
  categories: null,
  brands: [],
  productsLoading: true,
  productLoading: true,
  searchResults: null
};

function reducer_reducer(state = product_reducer_initialState, action) {
  switch (action.type) {
    case product_action["a" /* actionTypes */].GET_PRODUCTS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        allProducts: action.data,
        productsLoading: false
      });

    case product_action["a" /* actionTypes */].GET_TOTAL_OF_PRODUCTS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        totalProducts: action.payload
      });

    case product_action["a" /* actionTypes */].GET_BRANDS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        brands: action.payload
      });

    case product_action["a" /* actionTypes */].GET_PRODUCT_CATEGORIES_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        categories: action.payload
      });

    case product_action["a" /* actionTypes */].GET_PRODUCT_BY_ID_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        singleProduct: action.data,
        productLoading: false
      });

    case product_action["a" /* actionTypes */].GET_PRODUCTS_BY_KEYWORD_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        searchResults: action.payload
      });

    case product_action["a" /* actionTypes */].GET_PRODUCTS_ERROR:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var product_reducer = (reducer_reducer);
// EXTERNAL MODULE: ./store/setting/action.js
var setting_action = __webpack_require__("ZzbE");

// CONCATENATED MODULE: ./store/setting/reducer.js
function setting_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function setting_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { setting_reducer_ownKeys(Object(source), true).forEach(function (key) { setting_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { setting_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function setting_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const setting_reducer_initialState = {
  currency: {
    symbol: '$',
    text: 'USD'
  }
};

function setting_reducer_reducer(state = setting_reducer_initialState, action) {
  switch (action.type) {
    case setting_action["a" /* actionTypes */].CHANGE_CURRENCY_SUCCESS:
      return setting_reducer_objectSpread(setting_reducer_objectSpread({}, state), {
        currency: action.currency
      });

    default:
      return state;
  }
}

/* harmony default export */ var setting_reducer = (setting_reducer_reducer);
// EXTERNAL MODULE: ./store/cart/action.js
var cart_action = __webpack_require__("0wdU");

// CONCATENATED MODULE: ./store/cart/reducer.js
function cart_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function cart_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_reducer_ownKeys(Object(source), true).forEach(function (key) { cart_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  cartItems: [],
  amount: 0,
  cartTotal: 0
};

function cart_reducer_reducer(state = initCart, action) {
  switch (action.type) {
    case cart_action["a" /* actionTypes */].GET_CART_SUCCESS:
      return cart_reducer_objectSpread({}, state);

    case cart_action["a" /* actionTypes */].UPDATE_CART_SUCCESS:
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case cart_action["a" /* actionTypes */].CLEAR_CART_SUCCESS:
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case cart_action["a" /* actionTypes */].CLEAR_CART_TOTALLY:
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: []
      }), {
        amount: 0
      }), {
        cartTotal: 0
      });

    case cart_action["a" /* actionTypes */].GET_CART_ERROR:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        error: action.error
      });

    case cart_action["a" /* actionTypes */].UPDATE_CART_ERROR:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var cart_reducer = (cart_reducer_reducer);
// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__("q8Yi");

// CONCATENATED MODULE: ./store/compare/reducer.js
function compare_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function compare_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { compare_reducer_ownKeys(Object(source), true).forEach(function (key) { compare_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { compare_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function compare_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initCart = {
  compareItems: [],
  compareTotal: 0
};

function compare_reducer_reducer(state = reducer_initCart, action) {
  switch (action.type) {
    case compare_action["a" /* actionTypes */].GET_COMPARE_LIST_SUCCESS:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        cart: action.data
      });

    case compare_action["a" /* actionTypes */].UPDATE_COMPARE_LIST_SUCCESS:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        compareItems: action.payload.compareItems,
        compareTotal: action.payload.compareTotal
      });

    case compare_action["a" /* actionTypes */].GET_COMPARE_LIST_ERROR:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var compare_reducer = (compare_reducer_reducer);
// EXTERNAL MODULE: ./store/auth/action.js
var auth_action = __webpack_require__("W80I");

// CONCATENATED MODULE: ./store/auth/reducer.js
function auth_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function auth_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_reducer_ownKeys(Object(source), true).forEach(function (key) { auth_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false,
  user_id: '',
  username: '',
  email: ''
};

function auth_reducer_reducer(state = initState, action) {
  switch (action.type) {
    case auth_action["a" /* actionTypes */].REGISTERED_SUCCESS:
      // console.log(action)
      return auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: true
      }), {
        user_id: action.user.user_id
      }), {
        username: action.user.username
      }), {
        email: action.user.email
      });

    case auth_action["a" /* actionTypes */].LOGIN_SUCCESS:
      // console.log(action)
      return auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: true
      }), {
        user_id: action.user.user_id
      }), {
        username: action.user.username
      }), {
        email: action.user.email
      });

    case auth_action["a" /* actionTypes */].LOGOUT_SUCCESS:
      // console.log(action)
      return auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: false
      }), {
        user_id: ''
      }), {
        username: ''
      }), {
        email: ''
      });

    default:
      return state;
  }
}

/* harmony default export */ var auth_reducer = (auth_reducer_reducer);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__("T/WE");

// CONCATENATED MODULE: ./store/wishlist/reducer.js
function wishlist_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function wishlist_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wishlist_reducer_ownKeys(Object(source), true).forEach(function (key) { wishlist_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wishlist_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wishlist_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initState = {
  wishlistItems: [],
  wishlistTotal: 0
};

function wishlist_reducer_reducer(state = reducer_initState, action) {
  switch (action.type) {
    case wishlist_action["a" /* actionTypes */].GET_WISHLIST_LIST_SUCCESS:
      return wishlist_reducer_objectSpread({}, state);

    case wishlist_action["a" /* actionTypes */].UPDATE_WISHLISH_LIST_SUCCESS:
      return wishlist_reducer_objectSpread(wishlist_reducer_objectSpread({}, state), {
        wishlistItems: action.payload.wishlistItems,
        wishlistTotal: action.payload.wishlistTotal
      });

    case wishlist_action["a" /* actionTypes */].GET_WISHLIST_LIST_ERROR:
      return wishlist_reducer_objectSpread(wishlist_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var wishlist_reducer = (wishlist_reducer_reducer);
// EXTERNAL MODULE: ./store/collection/action.js
var collection_action = __webpack_require__("689t");

// CONCATENATED MODULE: ./store/collection/reducer.js
function collection_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function collection_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { collection_reducer_ownKeys(Object(source), true).forEach(function (key) { collection_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { collection_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function collection_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const collection_reducer_initialState = {
  collections: [],
  categories: [],
  collection: {}
};

function collection_reducer_reducer(state = collection_reducer_initialState, action) {
  switch (action.type) {
    case collection_action["a" /* actionTypes */].GET_COLLECTIONS_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        collections: action.payload
      });

    case collection_action["a" /* actionTypes */].GET_COLLECTION_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        collection: action.payload
      });

    case collection_action["a" /* actionTypes */].GET_CATEGORIES_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        categories: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var collection_reducer = (collection_reducer_reducer);
// CONCATENATED MODULE: ./store/media/action.js
const action_actionTypes = {
  GET_BANNERS: 'GET_BANNERS',
  GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',
  GET_PROMOTIONS: 'GET_PROMOTIONS',
  GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS'
};
function getBannersBySlugs(payload) {
  return {
    type: action_actionTypes.GET_BANNERS,
    payload
  };
}
function getBannersSuccess(payload) {
  return {
    type: action_actionTypes.GET_BANNERS_SUCCESS,
    payload
  };
}
function getPromotionsBySlugs(payload) {
  return {
    type: action_actionTypes.GET_PROMOTIONS,
    payload
  };
}
function getPromotionsSuccess(payload) {
  return {
    type: action_actionTypes.GET_PROMOTIONS_SUCCESS,
    payload
  };
}
// CONCATENATED MODULE: ./store/media/reducer.js
function media_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function media_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_reducer_ownKeys(Object(source), true).forEach(function (key) { media_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function media_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const media_reducer_initialState = {
  banners: [],
  promotions: []
};

function media_reducer_reducer(state = media_reducer_initialState, action) {
  switch (action.type) {
    case action_actionTypes.GET_BANNERS_SUCCESS:
      return media_reducer_objectSpread(media_reducer_objectSpread({}, state), {
        banners: action.payload
      });

    case action_actionTypes.GET_PROMOTIONS_SUCCESS:
      return media_reducer_objectSpread(media_reducer_objectSpread({}, state), {
        promotions: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var media_reducer = (media_reducer_reducer);
// EXTERNAL MODULE: ./store/app/action.js
var app_action = __webpack_require__("xWis");

// CONCATENATED MODULE: ./store/app/reducer.js
function app_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function app_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { app_reducer_ownKeys(Object(source), true).forEach(function (key) { app_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { app_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function app_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const app_reducer_initState = {
  isShowDemoPanel: false
};

function app_reducer_reducer(state = app_reducer_initState, action) {
  switch (action.type) {
    case app_action["a" /* actionTypes */].SWITCH_DEMO_PANEL_SUCCESS:
      return app_reducer_objectSpread(app_reducer_objectSpread({}, state), {
        isShowDemoPanel: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var app_reducer = (app_reducer_reducer);
// EXTERNAL MODULE: ./store/wp/action.js
var wp_action = __webpack_require__("VCEH");

// CONCATENATED MODULE: ./store/wp/reducer.js
function wp_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function wp_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wp_reducer_ownKeys(Object(source), true).forEach(function (key) { wp_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wp_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wp_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const wp_reducer_initialState = {
  WPProducts: [],
  WPCategories: [],
  WPLoading: true
};

function wp_reducer_reducer(state = wp_reducer_initialState, action) {
  switch (action.type) {
    case wp_action["d" /* actionTypes */].WP_GET_PRODUCTS_SUCCESS:
      return wp_reducer_objectSpread(wp_reducer_objectSpread({}, state), {}, {
        WPProducts: action.payload,
        WPLoading: false
      });

    case wp_action["d" /* actionTypes */].WP_TOGGLE_LOADING:
      return wp_reducer_objectSpread(wp_reducer_objectSpread({}, state), {}, {
        WPLoading: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var wp_reducer = (wp_reducer_reducer);
// CONCATENATED MODULE: ./store/rootReducer.js












/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])({
  auth: auth_reducer,
  post: post_reducer,
  product: product_reducer,
  setting: setting_reducer,
  cart: cart_reducer,
  compare: compare_reducer,
  wishlist: wishlist_reducer,
  collection: collection_reducer,
  media: media_reducer,
  app: app_reducer,
  wp: wp_reducer
}));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "es6-promise"
var external_es6_promise_ = __webpack_require__("pv/X");

// EXTERNAL MODULE: ./public/static/data/blog-grid.json
var blog_grid = __webpack_require__("fg/j");

// CONCATENATED MODULE: ./store/post/saga.js




Object(external_es6_promise_["polyfill"])();

function* getPostsSaga() {
  try {
    const data = blog_grid.posts;
    yield Object(effects_["put"])(getPostsSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getPostsError(err));
  }
}

function* getFeaturedPostSaga() {
  try {
    const data = blog_grid.postFeatures;
    yield Object(effects_["put"])(getFeaturedPostSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getFeaturedPostError(err));
  }
}

function* getRecentPostSaga() {
  try {
    const data = blog_grid.recentPosts;
    yield Object(effects_["put"])(getRecentPostsSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getRecentPostsError(err));
  }
}

function* saga_getPostCategories() {
  try {
    const data = blog_grid.blogCategories;
    yield Object(effects_["put"])(getPostCategoriesSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getPostCategoriesError(err));
  }
}

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(actionTypes.GET_POSTS, getPostsSaga), Object(effects_["takeEvery"])(actionTypes.GET_FEATURED_POST, getFeaturedPostSaga), Object(effects_["takeEvery"])(actionTypes.GET_RECENT_POSTS, getRecentPostSaga), Object(effects_["takeEvery"])(actionTypes.GET_POST_CATEGORIES, saga_getPostCategories)]);
}
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__("pU5j");

// CONCATENATED MODULE: ./repositories/ProductRepository.js


class ProductRepository_ProductRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getRecords(params) {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/products?${Object(Repository["c" /* serializeQuery */])(params)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBrands() {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/brands`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getTotalRecords() {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/products/count`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCategory(payload) {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/product-categories?slug=${payload}`).then(response => {
      return response.data[0].products;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/products?${Object(Repository["c" /* serializeQuery */])(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductWP(payload) {
    const enpoint = 'wp-json';
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/${enpoint}`).then(response => {
      console.log(response);
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ var repositories_ProductRepository = (new ProductRepository_ProductRepository());
// CONCATENATED MODULE: ./store/product/saga.js




Object(external_es6_promise_["polyfill"])();

function* getProducts({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(repositories_ProductRepository.getProductWP, payload);
    yield Object(effects_["put"])(Object(product_action["h" /* getProductsSuccess */])(data));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsError */])(err));
  }
}

function* getTotalOfProducts() {
  try {
    const result = yield Object(effects_["call"])(repositories_ProductRepository.getTotalRecords);
    yield Object(effects_["put"])(Object(product_action["j" /* getTotalProductsSuccess */])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getBrands() {
  try {
    const result = yield Object(effects_["call"])(repositories_ProductRepository.getBrands);
    yield Object(effects_["put"])(Object(product_action["b" /* getBrandsSuccess */])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductCategories() {
  try {
    const result = yield Object(effects_["call"])(repositories_ProductRepository.getProductCategories);
    yield Object(effects_["put"])(Object(product_action["d" /* getProductCategoriesSuccess */])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductById({
  id
}) {
  try {
    const product = yield Object(effects_["call"])(repositories_ProductRepository.getProductsById, id);
    yield Object(effects_["put"])(Object(product_action["i" /* getSingleProductsSuccess */])(product));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsError */])(err));
  }
}

function* getProductByCategory({
  category
}) {
  try {
    const result = yield Object(effects_["call"])(repositories_ProductRepository.getProductsByCategory, category);
    yield Object(effects_["put"])(Object(product_action["h" /* getProductsSuccess */])(result));
    yield Object(effects_["put"])(Object(product_action["j" /* getTotalProductsSuccess */])(result.length));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsError */])(err));
  }
}

function* getProductByPriceRange({
  payload
}) {
  try {
    const products = yield Object(effects_["call"])(repositories_ProductRepository.getProductsByPriceRange, payload);
    yield Object(effects_["put"])(Object(product_action["h" /* getProductsSuccess */])(products));
    yield Object(effects_["put"])(Object(product_action["j" /* getTotalProductsSuccess */])(products.length));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsError */])(err));
  }
}

function* getProductByBrand({
  payload
}) {
  try {
    const brands = yield Object(effects_["call"])(repositories_ProductRepository.getProductsByBrands, payload);
    const products = [];
    brands.forEach(brand => {
      brand.products.forEach(product => {
        products.push(product);
      });
    });
    yield Object(effects_["put"])(Object(product_action["h" /* getProductsSuccess */])(products));
    yield Object(effects_["put"])(Object(product_action["j" /* getTotalProductsSuccess */])(products.length));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsError */])(err));
  }
}

function* getProductByKeyword({
  keyword
}) {
  try {
    const searchParams = {
      title_contains: keyword
    };
    const result = yield Object(effects_["call"])(repositories_ProductRepository.getRecords, searchParams);
    yield Object(effects_["put"])(Object(product_action["c" /* getProductByKeywordsSuccess */])(result));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsError */])(err));
  }
}

function* saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS, getProducts)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_TOTAL_OF_PRODUCTS, getTotalOfProducts)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_BRANDS, getBrands)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCT_CATEGORIES, getProductCategories)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_CATEGORY, getProductByCategory)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_PRICE_RANGE, getProductByPriceRange)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_BRAND, getProductByBrand)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_KEYWORD, getProductByKeyword)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCT_BY_ID, getProductById)]);
}
// CONCATENATED MODULE: ./store/setting/saga.js



function* changeCurrencySaga({
  currency
}) {
  try {
    yield Object(effects_["put"])(Object(setting_action["c" /* changeCurrencySuccess */])(currency));
  } catch (err) {
    console.error(err);
  }
}

function* setting_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(setting_action["a" /* actionTypes */].CHANGE_CURRENCY, changeCurrencySaga)]);
}
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./store/cart/saga.js




const modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Success',
    description: 'This product has been added to your cart!',
    duration: 1
  });
};

const modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Remove A Item',
    description: 'This product has been removed from your cart!',
    duration: 1
  });
};

const calculateAmount = obj => Object.values(obj).reduce((acc, {
  quantity,
  price
}) => acc + quantity * price, 0).toFixed(2);

function* getCartSaga() {
  try {
    yield Object(effects_["put"])(Object(cart_action["g" /* getCartSuccess */])());
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["f" /* getCartError */])(err));
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    let currentCart = JSON.parse(localCart);
    let existItem = currentCart.cartItems.find(item => item.id === product.id);

    if (existItem) {
      existItem.quantity += product.quantity;
    } else {
      if (!product.quantity) {
        product.quantity = 1;
      }

      currentCart.cartItems.push(product);
    }

    currentCart.amount = calculateAmount(currentCart.cartItems);
    currentCart.cartTotal++;
    yield Object(effects_["put"])(Object(cart_action["k" /* updateCartSuccess */])(currentCart));
    modalSuccess('success');
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["f" /* getCartError */])(err));
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let index = localCart.cartItems.findIndex(item => item.id === product.id);
    localCart.cartTotal = localCart.cartTotal - product.quantity;
    localCart.cartItems.splice(index, 1);
    localCart.amount = calculateAmount(localCart.cartItems);

    if (localCart.cartItems.length === 0) {
      localCart.cartItems = [];
      localCart.amount = 0;
      localCart.cartTotal = 0;
    }

    yield Object(effects_["put"])(Object(cart_action["k" /* updateCartSuccess */])(localCart));
    modalWarning('warning');
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["f" /* getCartError */])(err));
  }
}

function* increaseQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity++;
      localCart.cartTotal++;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield Object(effects_["put"])(Object(cart_action["k" /* updateCartSuccess */])(localCart));
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["f" /* getCartError */])(err));
  }
}

function* decreaseItemQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity--;
      localCart.cartTotal--;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield Object(effects_["put"])(Object(cart_action["k" /* updateCartSuccess */])(localCart));
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["f" /* getCartError */])(err));
  }
}

function* clearCartSaga() {
  try {
    const emptyCart = {
      cartItems: [],
      amount: 0,
      cartTotal: 0
    };
    yield Object(effects_["put"])(Object(cart_action["k" /* updateCartSuccess */])(emptyCart));
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["j" /* updateCartError */])(err));
  }
}

function* cart_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].GET_CART, getCartSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].ADD_ITEM, addItemSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].REMOVE_ITEM, removeItemSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].INCREASE_QTY, increaseQtySaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].DECREASE_QTY, decreaseItemQtySaga)]);
}
// CONCATENATED MODULE: ./store/auth/saga.js




const saga_modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Welcome back',
    description: 'You are login successful!'
  });
};

const modalRegSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Welcome to Virem',
    description: 'Your account has been created successfully!'
  });
};

const saga_modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

function* loginSaga() {
  try {
    yield Object(effects_["put"])(Object(auth_action["c" /* loginNotify */])());
    saga_modalSuccess('success');
  } catch (err) {
    console.log(err);
  }
}

function* registerSaga() {
  try {
    yield Object(effects_["put"])(Object(auth_action["f" /* registeredNotify */])());
    modalRegSuccess('success');
  } catch (err) {
    console.log(err);
  }
}

function* logOutSaga() {
  try {
    yield Object(effects_["put"])(Object(auth_action["e" /* logoutNotify */])());
    saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* auth_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].LOGIN_NOTIFY, loginSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].REGSITERED_NOTIFY, registerSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].LOGOUT_NOTIFY, logOutSaga)]);
}
// CONCATENATED MODULE: ./store/compare/saga.js




const compare_saga_modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Added to compare list!',
    description: 'This product has been added to compare list!'
  });
};

const compare_saga_modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Removed from compare list',
    description: 'This product has been removed from compare list!'
  });
};

function* getCompareListSaga() {
  try {
    const localCompareList = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    yield Object(effects_["put"])(Object(compare_action["c" /* getCompareListSuccess */])(localCompareList));
  } catch (err) {
    console.log(err);
  }
}

function* saga_addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let existItem = localCompare.compareItems.find(item => item.id === product.id);

    if (!existItem) {
      product.quantity = 1;
      localCompare.compareItems.push(product);
      localCompare.compareTotal++;
      yield Object(effects_["put"])(Object(compare_action["e" /* updateCompareListSuccess */])(localCompare));
    }
  } catch (err) {
    console.log(err);
  }
}

function* saga_removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let index = localCompare.compareItems.indexOf(product);
    localCompare.compareTotal = localCompare.compareTotal - 1;
    localCompare.compareItems.splice(index, 1);
    yield Object(effects_["put"])(Object(compare_action["e" /* updateCompareListSuccess */])(localCompare));
    compare_saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearCompareListSaga() {
  try {
    const emptyCart = {
      compareItems: [],
      compareTotal: 0
    };
    yield Object(effects_["put"])(Object(compare_action["e" /* updateCompareListSuccess */])(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* compare_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(compare_action["a" /* actionTypes */].GET_COMPARE_LIST, getCompareListSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(compare_action["a" /* actionTypes */].ADD_ITEM_COMPARE, saga_addItemSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(compare_action["a" /* actionTypes */].REMOVE_ITEM_COMPARE, saga_removeItemSaga)]);
}
// CONCATENATED MODULE: ./store/wishlist/saga.js




const wishlist_saga_modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Added to wishlisht!',
    description: 'This product has been added to wishlist!'
  });
};

const wishlist_saga_modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Removed from wishlist',
    description: 'This product has been removed from wishlist!'
  });
};

function* getWishlistListSaga() {
  try {
    const localWishlistList = JSON.parse(localStorage.getItem('persist:martfury')).wishlist;
    yield Object(effects_["put"])(Object(wishlist_action["c" /* getWishlistListSuccess */])(localWishlistList));
  } catch (err) {
    console.log(err);
  }
}

function* addItemToWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let existItem = localWishlist.wishlistItems.find(item => item.id === product.id);

    if (!existItem) {
      localWishlist.wishlistItems.push(product);
      localWishlist.wishlistTotal++;
      yield Object(effects_["put"])(Object(wishlist_action["e" /* updateWishlistListSuccess */])(localWishlist));
      wishlist_saga_modalSuccess('success');
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeItemWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let index = localWishlist.wishlistItems.indexOf(product);
    localWishlist.wishlistTotal = localWishlist.wishlistTotal - 1;
    localWishlist.wishlistItems.splice(index, 1);
    yield Object(effects_["put"])(Object(wishlist_action["e" /* updateWishlistListSuccess */])(localWishlist));
    wishlist_saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearWishlistListSaga() {
  try {
    const emptyCart = {
      wishlistItems: [],
      wishlistTotal: 0
    };
    yield Object(effects_["put"])(Object(wishlist_action["e" /* updateWishlistListSuccess */])(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* wishlist_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wishlist_action["a" /* actionTypes */].GET_WISHLIST_LIST, getWishlistListSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wishlist_action["a" /* actionTypes */].ADD_ITEM_WISHLISH, addItemToWishlistSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wishlist_action["a" /* actionTypes */].REMOVE_ITEM_WISHLISH, removeItemWishlistSaga)]);
}
// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__("Crg1");

// CONCATENATED MODULE: ./store/collection/saga.js




Object(external_es6_promise_["polyfill"])();

function* getCollections({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(CollectionRepository["a" /* default */].getCollections, payload);
    yield Object(effects_["put"])(Object(collection_action["e" /* getCollectionsSuccess */])(data));
  } catch (err) {
    console.log(err);
  }
}

function* getCollectionByCategories({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(CollectionRepository["a" /* default */].getCategoriesBySlug, payload);
    yield Object(effects_["put"])(Object(collection_action["c" /* getCategoriesSuccess */])(data));
  } catch (err) {
    console.log(err);
  }
}

function* collection_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(collection_action["a" /* actionTypes */].GET_COLLECTIONS, getCollections)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(collection_action["a" /* actionTypes */].GET_CATEGORIES, getCollectionByCategories)]);
}
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__("OqP1");

// CONCATENATED MODULE: ./repositories/MediaRepository.js



class MediaRepository_MediaRespository {
  constructor(callback) {
    this.callback = callback;
  }

  async getBannersBySlugs(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/banners?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPromotionsBySlugs(payload) {
    const query = Object(product_helper["a" /* convertSlugsQueryString */])(payload);
    const reponse = await Repository["b" /* default */].get(`${Repository["a" /* baseUrl */]}/promotions?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ var MediaRepository = (new MediaRepository_MediaRespository());
// EXTERNAL MODULE: ./repositories/WP/WPProductRepository.js
var WPProductRepository = __webpack_require__("T98Y");

// CONCATENATED MODULE: ./store/media/saga.js





Object(external_es6_promise_["polyfill"])();

function* saga_getBannersBySlugs({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(MediaRepository.getBannersBySlugs, payload);
    yield Object(effects_["put"])(getBannersSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* saga_getPromotionsBySlugs({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(MediaRepository.getPromotionsBySlugs, payload);
    yield Object(effects_["put"])(getPromotionsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* media_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(action_actionTypes.GET_BANNERS, saga_getBannersBySlugs)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(action_actionTypes.GET_PROMOTIONS, saga_getPromotionsBySlugs)]);
}
// CONCATENATED MODULE: ./store/app/saga.js



function* switchDemoPanel({
  payload
}) {
  try {
    console.log(payload.payload);
    yield Object(effects_["put"])(Object(app_action["c" /* switchDemoPanelSuccess */])(payload));
  } catch (err) {
    console.log(err);
  }
}

function* app_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(app_action["a" /* actionTypes */].SWITCH_DEMO_PANEL, switchDemoPanel)]);
}
// CONCATENATED MODULE: ./store/wp/saga.js




Object(external_es6_promise_["polyfill"])();

function* WPGetProductsSaga({
  payload
}) {
  try {
    yield Object(effects_["put"])(Object(wp_action["c" /* WPToggleProductLoading */])(true));
    const data = yield Object(effects_["call"])(WPProductRepository["a" /* default */].getProducts, payload);
    yield Object(effects_["put"])(Object(wp_action["b" /* WPGetProductsSuccess */])(data));
    yield Object(effects_["put"])(Object(wp_action["c" /* WPToggleProductLoading */])(false));
  } catch (err) {
    console.log(err);
  }
}

function* wp_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wp_action["d" /* actionTypes */].WP_GET_PRODUCTS, WPGetProductsSaga)]);
}
// CONCATENATED MODULE: ./store/rootSaga.js












function* rootSaga_rootSaga() {
  yield Object(effects_["all"])([rootSaga(), saga_rootSaga(), setting_saga_rootSaga(), cart_saga_rootSaga(), auth_saga_rootSaga(), compare_saga_rootSaga(), wishlist_saga_rootSaga(), collection_saga_rootSaga(), media_saga_rootSaga(), app_saga_rootSaga(), wp_saga_rootSaga()]);
}
// CONCATENATED MODULE: ./store/store.js







const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const persistConfig = {
  key: 'martfury',
  storage: storage_default.a,
  whitelist: ['cart', 'compare', 'auth', 'wishlist']
};
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, rootReducer);

function configureStore(initialState) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(persistedReducer, // rootReducer,
  initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga_rootSaga);
  return store;
}

/* harmony default export */ var store_store = (configureStore);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/modules/Head.jsx
var __jsx = external_react_default.a.createElement;



const StyleSheets = () => __jsx(head_default.a, null, __jsx("title", null, "Virem - More than shopping"), __jsx("link", {
  rel: "shortcut icon",
  href: "/static/img/favi.png"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "IE=edge"
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;subset=latin-ext",
  rel: "stylesheet"
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/fonts/Linearicons/Font/demo-files/demo.css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/fonts/font-awesome/css/font-awesome.min.css"
}));

/* harmony default export */ var Head = (StyleSheets);
// CONCATENATED MODULE: ./components/layouts/DefaultLayout.jsx
var DefaultLayout_jsx = external_react_default.a.createElement;




const DefaultLayout = ({
  children
}) => DefaultLayout_jsx("div", {
  className: "layout--default"
}, DefaultLayout_jsx(Head, null), children, DefaultLayout_jsx("div", {
  id: "loader-wrapper"
}, DefaultLayout_jsx("div", {
  className: "loader-section section-left"
}), DefaultLayout_jsx("div", {
  className: "loader-section section-right"
})), DefaultLayout_jsx(external_antd_["BackTop"], null, DefaultLayout_jsx("button", {
  className: "ps-btn--backtop"
}, DefaultLayout_jsx("i", {
  className: "icon-arrow-up"
}))));

/* harmony default export */ var layouts_DefaultLayout = (DefaultLayout);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./scss/style.scss
var style = __webpack_require__("AmNh");

// EXTERNAL MODULE: ./scss/home-default.scss
var home_default = __webpack_require__("SqlY");

// EXTERNAL MODULE: ./scss/market-place-1.scss
var market_place_1 = __webpack_require__("Gska");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./public/static/css/custom.css
var custom = __webpack_require__("jj0o");

// CONCATENATED MODULE: ./pages/_app.jsx
var _app_jsx = external_react_default.a.createElement;















/*import '../scss/electronic.scss';
import '../scss/furniture.scss';
import '../scss/organic.scss';
import '../scss/technology.scss';
import '../scss/autopart.scss';
import '../scss/electronic.scss';*/

class _app_MyApp extends app_default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(external_redux_persist_["persistStore"])(props.store);
  }

  componentDidMount() {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
    this.setState({
      open: true
    });
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;

    const getLayout = Component.getLayout || (page => _app_jsx(layouts_DefaultLayout, null, page));

    return getLayout(_app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(react_["PersistGate"], {
      loading: _app_jsx(Component, pageProps),
      persistor: this.persistor
    }, _app_jsx(Component, pageProps))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(store_store)(external_next_redux_saga_default()(_app_MyApp)));

/***/ }),

/***/ "ZzbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeCurrencySuccess; });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fg/j":
/***/ (function(module) {

module.exports = JSON.parse("{\"blogCategories\":[{\"id\":\"1\",\"text\":\"Business\"},{\"id\":\"2\",\"text\":\"Entertaiment\"},{\"id\":\"3\",\"text\":\"Fashion\"},{\"id\":\"4\",\"text\":\"Life style\"},{\"id\":\"5\",\"text\":\"Others\"},{\"id\":\"6\",\"text\":\"Technology\"},{\"id\":\"7\",\"text\":\"Others\"}],\"postFeatures\":{\"id\":\"1\",\"title\":\"Harman Kadon Onyx Studio Mini, Reviews & Experiences\",\"thumbnail\":\"/static/img/blog/grid/large.jpg\",\"type\":\"large\",\"categories\":[\"Technology\"]},\"posts\":[{\"id\":\"2\",\"title\":\"Experience Great Sound With Beats’s Headphone\",\"thumbnail\":\"/static/img/blog/grid/1.jpg\",\"type\":\"normal\",\"badge\":\"icon-volume-high\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"},{\"id\":\"6\",\"text\":\"Technology\"}]},{\"id\":\"3\",\"title\":\"Products Necessery For Mom\",\"thumbnail\":\"/static/img/blog/grid/2.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"4\",\"title\":\"Home Interior: Modern Style 2017\",\"thumbnail\":\"/static/img/blog/grid/3.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"5\",\"title\":\"DeerCo – A New Look About Startup In Product Manufacture Field7\",\"thumbnail\":\"/static/img/blog/grid/4.jpg\",\"type\":\"normal\",\"badge\":\"icon-picture\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"}]},{\"id\":\"6\",\"title\":\"B&O Play – Best Headphone For You\",\"thumbnail\":\"/static/img/blog/grid/5.jpg\",\"type\":\"normal\",\"badge\":\"icon-camera-play\",\"categories\":[{\"id\":\"6\",\"text\":\"Technology\"}]},{\"id\":\"7\",\"title\":\"Unique Products For Your Kitchen From IKEA Design\",\"thumbnail\":\"/static/img/blog/grid/6.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"1\",\"text\":\"Business\"},{\"id\":\"6\",\"text\":\"Technology\"}]}],\"recentPosts\":[{\"id\":\"3\",\"title\":\"Products Necessery For Mom\",\"thumbnail\":\"/static/img/blog/grid/2.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"4\",\"title\":\"Home Interior: Modern Style 2017\",\"thumbnail\":\"/static/img/blog/grid/3.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"5\",\"title\":\"DeerCo – A New Look About Startup In Product Manufacture Field7\",\"thumbnail\":\"/static/img/blog/grid/4.jpg\",\"type\":\"normal\",\"badge\":\"icon-picture\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"}]},{\"id\":\"6\",\"title\":\"B&O Play – Best Headphone For You\",\"thumbnail\":\"/static/img/blog/grid/5.jpg\",\"type\":\"normal\",\"badge\":\"icon-camera-play\",\"categories\":[{\"id\":\"6\",\"text\":\"Technology\"}]}]}");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jj0o":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pU5j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wp */
/* unused harmony export customHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return serializeQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = 'https://virem.learnmur.com.ng';
const wp = 'https://virem.learnmur.com.ng';
const authorization_prefix = 'Bearer ';
const customHeaders = {
  "Accept": 'application/json',
  "Access-Control-Allow-Origin": "*"
  /* Authorization: authorization_prefix + token || undefined*/

  /*auth: {
      "username": "ck_dc45d73b9a8b2931930de4a5eb2b2d520c8ba566",
      "password": "cs_e3c6ca23aca7a6350b490e5969cdfa9b11703a42"
  }*/

};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["b"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ "pv/X":
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "q8Yi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getCompareList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCompareListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItemToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeCompareItem; });
/* unused harmony export clearCompare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateCompareListSuccess; });
const actionTypes = {
  GET_COMPARE_LIST: 'GET_COMPARE_LIST',
  GET_COMPARE_LIST_SUCCESS: 'GET_COMPARE_LIST_SUCCESS',
  GET_COMPARE_LIST_ERROR: 'GET_COMPARE_LIST_ERROR',
  ADD_ITEM_COMPARE: 'ADD_ITEM_COMPARE',
  REMOVE_ITEM_COMPARE: 'REMOVE_ITEM_COMPARE',
  UPDATE_COMPARE_LIST: 'UPDATE_COMPARE_LIST',
  UPDATE_COMPARE_LIST_SUCCESS: 'UPDATE_COMPARE_LIST_SUCCESS',
  UPDATE_COMPARE_LIST_ERROR: 'UPDATE_COMPARE_LIST_ERROR',
  CLEAR_COMPARE_LIST: 'CLEAR_COMPARE_LIST'
};
function getCompareList() {
  return {
    type: actionTypes.GET_COMPARE_LIST
  };
}
function getCompareListSuccess(data) {
  return {
    type: actionTypes.GET_COMPARE_LIST_SUCCESS,
    data
  };
}
function addItemToCompare(product) {
  return {
    type: actionTypes.ADD_ITEM_COMPARE,
    product
  };
}
function removeCompareItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_COMPARE,
    product
  };
}
function clearCompare() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateCompareListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_COMPARE_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "xWis":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return switchDemoPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return switchDemoPanelSuccess; });
const actionTypes = {
  SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
  SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS'
};
function switchDemoPanel(payload) {
  return {
    type: actionTypes.SWITCH_DEMO_PANEL,
    payload
  };
}
function switchDemoPanelSuccess(payload) {
  return {
    type: actionTypes.SWITCH_DEMO_PANEL_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ypqY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getProducts */
/* unused harmony export getTotalProducts */
/* unused harmony export getBrands */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBrandsSuccess; });
/* unused harmony export getProductCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getTotalProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductByKeywordsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSingleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProductsByCategory; });
/* unused harmony export getProductsByBrand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProductsByKeyword; });
/* unused harmony export getProductsById */
/* unused harmony export getProductsByPrice */
const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
  GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
  GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
  GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
  GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
  GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
  GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS'
};
function getProducts(payload) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload
  };
}
function getTotalProducts() {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS
  };
}
function getBrands() {
  return {
    type: actionTypes.GET_BRANDS
  };
}
function getBrandsSuccess(payload) {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    payload
  };
}
function getProductCategories() {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES
  };
}
function getProductCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
    payload
  };
}
function getTotalProductsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
    payload
  };
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
  };
}
function getProductByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
    payload
  };
}
function getSingleProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    data
  };
}
function getProductsError(error) {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error
  };
}
function getProductsByCategory(category) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
    category
  };
}
function getProductsByBrand(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_BRAND,
    payload
  };
}
function getProductsByKeyword(keyword) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
    keyword
  };
}
function getProductsById(id) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    id
  };
}
function getProductsByPrice(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
    payload
  };
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });