module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+h+6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return convertToURLEncoded; });
/* unused harmony export WPGetProductImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPGetProductPrice; });
/* unused harmony export WPGetProductBadge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WPProductPriceView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WPProductThumbnailView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WPProductBadgeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WPProductDetailRatingView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WPProductDetailShortDescView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WPProductDetailBrandView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WPProductDetailCategoriesView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return WPProductDetailTagsView; });
/* unused harmony export WPProductDetailStoreView */
/* unused harmony export convertFormData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OqP1");
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iAvk");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * WPReact
 * Developed by: diaryforlife
 * */




function convertToURLEncoded(element, key, list) {
  var list = list || [];

  if (typeof element == 'object') {
    for (var idx in element) convertToURLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
  } else {
    list.push(key + '=' + encodeURIComponent(element));
  }

  return list.join('&');
}

function caculateDiscount(price, salePrice) {
  return (100 - price / salePrice * 100).toFixed(1);
}

function WPGetProductImage(product) {
  let image;

  if (product.images && product.images.length > 0) {
    image = __jsx("img", {
      src: product.images[0].src,
      alt: product.name
    });
  } else {
    image = __jsx("img", {
      src: "/static/img/undefined-product-thumbnail.jpg",
      alt: product.name
    });
  }

  return image;
}
function WPGetProductPrice(product) {
  let price;

  if (product.on_sale === true) {
    price = __jsx("p", {
      className: "ps-product__price sale d-flex flex-wrap"
    }, __jsx("span", null, " \u20A6", Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* formatCurrency */ "b"])(product.sale_price ? product.sale_price : product.regular_price)), __jsx("del", {
      className: "ms-2"
    }, "\u20A6", Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* formatCurrency */ "b"])(product.regular_price)));
  } else {
    price = __jsx("p", {
      className: "ps-product__price"
    }, "\u20A6", Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* formatCurrency */ "b"])(product.sale_price ? product.sale_price : product.regular_price));
  }

  return price;
}
function WPGetProductBadge(product) {
  let badge;

  if (product.on_sale === true) {
    badge = __jsx("div", {
      className: "ps-product__badge"
    }, caculateDiscount(product.regular_price, product.sale_price), "%");
  }

  return badge;
} // Product

function WPProductPriceView(product) {
  let view;

  if (product.on_sale === true) {
    view = __jsx("p", {
      className: "ps-product__price sale d-flex flex-wrap"
    }, __jsx("span", null, "\u20A6", Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* formatCurrency */ "b"])(product.sale_price ? product.sale_price : product.regular_price)), __jsx("del", {
      className: "ms-2"
    }, "\u20A6", Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* formatCurrency */ "b"])(product.regular_price)));
  } else {
    view = __jsx("p", {
      className: "ps-product__price"
    }, "\u20A6", Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* formatCurrency */ "b"])(product.sale_price ? product.sale_price : product.regular_price));
  }

  return view;
}
function WPProductThumbnailView(product) {
  let view;

  if (product.images && product.images.length > 0) {
    view = __jsx("img", {
      src: product.images[0].src,
      alt: product.name
    });
  } else {
    view = __jsx("img", {
      src: "/static/img/undefined-product-thumbnail.jpg",
      alt: product.name
    });
  }

  return view;
}
function WPProductBadgeView(product) {
  let view;

  if (product.stock_status !== 'outofstock') {
    if (product.on_sale === true) {
      view = __jsx("div", {
        className: "ps-product__badge"
      }, "Sale");
    } else {
      if (product.meta_data) {
        const WPCustomBadge = product.meta_data.find(item => item.key === 'custom_badges_text' && item.value !== '');

        if (WPCustomBadge) {
          view = __jsx("div", {
            className: "ps-product__badge hot"
          }, WPCustomBadge.value);
        }
      }
    }
  } else {
    view = __jsx("div", {
      className: "ps-product__badge out-stock"
    }, "Out of stock");
  }

  return view;
} //Product detail

function WPProductDetailRatingView(product) {
  let view;

  if (product.rating_count > 0) {
    view = __jsx("div", {
      className: "ps-product__rating"
    }, __jsx(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), __jsx("span", null, "(", product.rating_count, " review)"));
  } else {
    view = __jsx("div", {
      className: "ps-product__rating"
    }, __jsx("span", null, "0 Rating(s)"));
  }

  return view;
}
function WPProductDetailShortDescView(product) {
  let view;

  if (product.short_description) {
    view = __jsx("div", {
      className: "ps-document",
      dangerouslySetInnerHTML: {
        __html: `${product.short_description}`
      }
    });
  } else {
    view = __jsx("div", null, __jsx("p", null, __jsx("i", null, "This product hasn't short description.")));
  }

  return view;
}
function WPProductDetailBrandView(product) {
  let view;

  if (product.attributes && product.attributes.length > 0) {
    const brand = product.attributes.find(item => item.name === 'brand');

    if (brand) {
      view = __jsx("p", null, "Brand:", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/shop"
      }, __jsx("a", {
        className: "ml-2 text-capitalize"
      }, ' ', brand.options[0])));
    } else {
      view = __jsx("p", null, "Brand: No Brand");
    }
  }

  return view;
}
function WPProductDetailCategoriesView(product) {
  let view;

  if (product.categories) {
    view = product.categories.map(item => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shop",
      key: item.id
    }, __jsx("a", {
      className: "ps-document",
      dangerouslySetInnerHTML: {
        __html: `${item.name}`
      }
    })));
  } else {
    view = __jsx("i", null, "No Category");
  }

  return view;
}
function WPProductDetailTagsView(product) {
  let view;

  if (product.tags && product.tags.length > 0) {
    view = product.tags.map(item => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shop",
      key: item.id
    }, __jsx("a", {
      className: "ps-document",
      dangerouslySetInnerHTML: {
        __html: `${item.name}`
      }
    })));
  } else {
    view = __jsx("i", null, "No tag.");
  }

  return view;
}
function WPProductDetailStoreView(product) {
  let view;

  if (product.store) {
    view = __jsx("p", null, "Sold By:", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shop"
    }, __jsx("a", {
      className: "ml-2"
    }, __jsx("strong", null, " ", product.store.name))));
  } else {
    view = __jsx("p", null, "Sold By:", __jsx("strong", null, "Unknown Store"));
  }

  return view;
}
function convertFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("h18c");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3YpU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__("y2E8");

// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__("4lSd");

// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__("w957");

// EXTERNAL MODULE: ./components/elements/common/Logo.js
var Logo = __webpack_require__("MbC5");

// EXTERNAL MODULE: ./wp-components/shared/headers/WPSearchHeader.jsx + 1 modules
var WPSearchHeader = __webpack_require__("cdMP");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/shared/headers/modules/AccountQuickLinks.jsx
var AccountQuickLinks = __webpack_require__("MJbt");

// EXTERNAL MODULE: ./wp-components/shared/headers/WPMiniCart.jsx + 1 modules
var WPMiniCart = __webpack_require__("P2qF");

// CONCATENATED MODULE: ./wp-components/shared/headers/WPHeaderActions2.jsx
var __jsx = external_react_default.a.createElement;






class WPHeaderActions2_WPHeaderActions2 extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      compare,
      wishlist,
      auth
    } = this.props; // Views

    let accountView;

    if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
      accountView = __jsx(AccountQuickLinks["a" /* default */], {
        isLoggedIn: true
      });
    } else {
      accountView = __jsx(AccountQuickLinks["a" /* default */], {
        isLoggedIn: false
      });
    }

    return __jsx("div", {
      className: "header__actions"
    }, __jsx(link_default.a, {
      href: "/account/wishlist"
    }, __jsx("a", {
      className: "header__extra"
    }, __jsx("i", {
      className: "icon-heart"
    }), __jsx("span", null, __jsx("i", null, wishlist.wishlistTotal)))), __jsx(WPMiniCart["a" /* default */], null), accountView);
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ var headers_WPHeaderActions2 = (Object(external_react_redux_["connect"])(mapStateToProps)(WPHeaderActions2_WPHeaderActions2));
// EXTERNAL MODULE: ./components/shared/headers/modules/CurrencyDropdown.jsx
var CurrencyDropdown = __webpack_require__("s/7F");

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageSwicher.jsx
var LanguageSwicher = __webpack_require__("CLZ7");

// CONCATENATED MODULE: ./wp-components/shared/headers/WPHeaderMarketPlace.jsx
var WPHeaderMarketPlace_jsx = external_react_default.a.createElement;











const WPHeaderMarketPlace = () => {
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  return WPHeaderMarketPlace_jsx("header", {
    className: "header header--standard header--market-place-1",
    id: "headerSticky"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "header__top"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "container"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "header__left"
  }, WPHeaderMarketPlace_jsx("p", null, "Welcome to Martfury Online Shopping Store !")), WPHeaderMarketPlace_jsx("div", {
    className: "header__right"
  }, WPHeaderMarketPlace_jsx("ul", {
    className: "header__top-links"
  }, WPHeaderMarketPlace_jsx("li", null, WPHeaderMarketPlace_jsx(link_default.a, {
    href: "/vendor/store-list"
  }, WPHeaderMarketPlace_jsx("a", null, "Store Location"))), WPHeaderMarketPlace_jsx("li", null, WPHeaderMarketPlace_jsx(link_default.a, {
    href: "/page/blank"
  }, WPHeaderMarketPlace_jsx("a", null, "Track Your Order"))), WPHeaderMarketPlace_jsx("li", null, WPHeaderMarketPlace_jsx(CurrencyDropdown["a" /* default */], null)), WPHeaderMarketPlace_jsx("li", null, WPHeaderMarketPlace_jsx(LanguageSwicher["a" /* default */], null)))))), WPHeaderMarketPlace_jsx("div", {
    className: "header__content"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "container"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "header__content-left"
  }, WPHeaderMarketPlace_jsx(Logo["a" /* default */], {
    type: "dark"
  }), WPHeaderMarketPlace_jsx("div", {
    className: "menu--product-categories"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "menu__toggle"
  }, WPHeaderMarketPlace_jsx("i", {
    className: "icon-menu"
  }), WPHeaderMarketPlace_jsx("span", null, " Shop by Department")), WPHeaderMarketPlace_jsx("div", {
    className: "menu__content"
  }, WPHeaderMarketPlace_jsx(Menu["a" /* default */], {
    data: menu.product_categories,
    className: "menu--dropdown"
  })))), WPHeaderMarketPlace_jsx("div", {
    className: "header__content-center"
  }, WPHeaderMarketPlace_jsx(WPSearchHeader["a" /* default */], null)), WPHeaderMarketPlace_jsx("div", {
    className: "header__content-right"
  }, WPHeaderMarketPlace_jsx(headers_WPHeaderActions2, null)))), WPHeaderMarketPlace_jsx("nav", {
    className: "navigation"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "container"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "navigation__left"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "menu--product-categories"
  }, WPHeaderMarketPlace_jsx("div", {
    className: "menu__toggle"
  }, WPHeaderMarketPlace_jsx("i", {
    className: "icon-menu"
  }), WPHeaderMarketPlace_jsx("span", null, " Shop by Department")), WPHeaderMarketPlace_jsx("div", {
    className: "menu__content"
  }, WPHeaderMarketPlace_jsx(Menu["a" /* default */], {
    data: menu.product_categories,
    className: "menu--dropdown"
  })))), WPHeaderMarketPlace_jsx("div", {
    className: "navigation__right"
  }, WPHeaderMarketPlace_jsx(Menu["a" /* default */], {
    data: menu.WPMenu,
    className: "menu"
  }), WPHeaderMarketPlace_jsx("div", {
    className: "ps-block--header-hotline inline"
  }, WPHeaderMarketPlace_jsx("p", null, WPHeaderMarketPlace_jsx("i", {
    className: "icon-telephone"
  }), "Hotline:", WPHeaderMarketPlace_jsx("strong", null, " 1-800-234-5678")))))));
};

/* harmony default export */ var headers_WPHeaderMarketPlace = __webpack_exports__["a"] = (WPHeaderMarketPlace);

/***/ }),

/***/ "3o9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PrevArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return __jsx("button", {
    className: `slick-arrow slick-prev ${className}`,
    onClick: onClick
  }, icon ? __jsx("i", {
    className: icon
  }) : __jsx("i", {
    className: "icon-chevron-left"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (PrevArrow);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4lSd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stickyHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateTempArray; });
const stickyHeader = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('headerSticky');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};
const generateTempArray = maxItems => {
  let result = [];

  for (let i = 0; i < maxItems; i++) {
    result.push(i);
  }

  return result;
};

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8tnw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return carouselStandard; });
/* unused harmony export carouselInSidebar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carouselFullwidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return carouselSingle; });
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s5ri");
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3o9y");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const carouselStandard = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: __jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null),
  prevArrow: __jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const carouselInSidebar = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: __jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null),
  prevArrow: __jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const carouselFullwidth = {
  dots: false,
  infinite: true,
  speed: 750,
  slidesToShow: 7,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: __jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null),
  prevArrow: __jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null),
  lazyload: true,
  responsive: [{
    breakpoint: 1750,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 1366,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      dots: true,
      arrows: false
    }
  }]
};
const carouselSingle = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: __jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null),
  prevArrow: __jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)
};

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

/***/ "B8bZ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"whatsapp_chat": "whatsapp_whatsapp_chat__2MXFE",
	"chat": "whatsapp_chat__fNhtL",
	"chat_bubble": "whatsapp_chat_bubble__2842-",
	"chat_message_box": "whatsapp_chat_message_box__bE08t",
	"chat_name": "whatsapp_chat_name__piiyH",
	"whatsapp_floating_button": "whatsapp_whatsapp_floating_button__1EiYK",
	"form_chat_button": "whatsapp_form_chat_button__2S0pY"
};


/***/ }),

/***/ "BVei":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isStaticData; });
const isStaticData = false;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CHF/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/WcL");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_whatsapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Fke6");
/* harmony import */ var react_whatsapp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_whatsapp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("B8bZ");
/* harmony import */ var _public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WhatsappChat = () => {
  const {
    0: showbubble,
    1: setShowbubble
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const setWhatsappMessage = e => {
    setMessage(e.target.value);
  };

  const clearMessage = e => {
    // setMessage('')
    document.getElementById("whatsappinput").value = "";
  };

  return __jsx("div", {
    className: ` ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.whatsapp_chat}`
  }, showbubble && __jsx("div", {
    className: `py-3 bg-white shadow rounded ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.chat}`
  }, __jsx("div", {
    className: `bg-white ps-5 pt-1 pb-4 d-flex align-items-center ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form_header}`
  }, __jsx("img", {
    src: "/static/img/virem-logo-full.png",
    alt: "Virem Customer Service",
    className: "rounded-circle me-3",
    style: {
      width: "60px",
      height: "60px"
    }
  }), __jsx("div", null, __jsx("h5", {
    className: `mb-0 ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.chat_name}`
  }, "Customer Support"), __jsx("p", {
    className: "mb-0"
  }, "Typically replies instantly"))), __jsx("div", {
    className: ` p-4 position-relative ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form_body}`,
    style: {
      backgroundImage: `url("/static/img/whatsappchat.png")`
    }
  }, __jsx("div", {
    className: `p-4 bg-white rounded shadow-sm ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.chat_bubble}`
  }, __jsx("p", {
    className: "text-secondary fw-bold"
  }, "Virem"), __jsx("p", null, "Hey there \uD83D\uDC4B ", __jsx("br", null), "I'm here to help, so let me know what's up ", __jsx("br", null), "and I'll be happy to find a solution \uD83E\uDD13")), __jsx("input", {
    type: "text",
    className: `form-control form-control-sm mt-3 shadow-sm text-dark ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.chat_message_box}`,
    placeholder: "Enter your message here...",
    onChange: e => setWhatsappMessage(e),
    id: "whatsappinput"
  })), __jsx("div", {
    className: `bg-white d-grid py-3 px-5 ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form_chat}`
  }, __jsx(react_whatsapp__WEBPACK_IMPORTED_MODULE_2___default.a, {
    number: "+2348087614841",
    className: `mt-3 btn btn-lg d-flex justify-content-center align-items-center text-white ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form_chat_button}`,
    message: message,
    onClick: clearMessage
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineWhatsApp"], {
    className: "me-2"
  }), __jsx("span", {
    className: "fw-bold"
  }, "Start Chat")))), __jsx("button", {
    className: `btn btn-lg btn-dark shadow mt-4 d-flex justify-content-center align-items-center fs-5 fw-bold ${_public_static_css_whatsapp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.whatsapp_floating_button}`,
    onClick: () => setShowbubble(!showbubble)
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineWhatsApp"], {
    className: "me-2"
  }), __jsx("span", {
    className: "fw-bold"
  }, "Need Help?")));
};

/* harmony default export */ __webpack_exports__["a"] = (WhatsappChat);

/***/ }),

/***/ "CLZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class LanguageSwicher extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return __jsx("div", {
      className: "ps-dropdown language"
    }, __jsx("a", {
      href: "#",
      onClick: this.handleFeatureWillUpdate.bind(this)
    }, __jsx("img", {
      src: "/static/img/flag/en.png",
      alt: "martfury"
    }), "English"), __jsx("ul", {
      className: "ps-dropdown-menu"
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.handleFeatureWillUpdate.bind(this)
    }, __jsx("img", {
      src: "/static/img/flag/germany.png",
      alt: "martfury"
    }), "Germany")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.handleFeatureWillUpdate.bind(this)
    }, __jsx("img", {
      src: "/static/img/flag/fr.png",
      alt: "martfury"
    }), "France"))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (LanguageSwicher);

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Fke6":
/***/ (function(module, exports) {

module.exports = require("react-whatsapp");

/***/ }),

/***/ "JNwe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Newsletters = ({
  layout
}) => __jsx("section", {
  className: "ps-newsletter"
}, __jsx("div", {
  className: layout && layout === 'container' ? ' container' : 'ps-container'
}, __jsx("form", {
  className: "ps-form--newsletter",
  action: "do_action",
  method: "post"
}, __jsx("div", {
  className: "row"
}, __jsx("div", {
  className: "col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 "
}, __jsx("div", {
  className: "ps-form__left"
}, __jsx("h3", null, "Newsletter"), __jsx("p", null, "Subcribe to get information about products and coupons"))), __jsx("div", {
  className: "col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 "
}, __jsx("div", {
  className: "ps-form__right"
}, __jsx("div", {
  className: "form-group--nest"
}, __jsx("input", {
  className: "form-control",
  type: "email",
  placeholder: "Email address"
}), __jsx("button", {
  className: "ps-btn"
}, "Subscribe"))))))));

/* harmony default export */ __webpack_exports__["a"] = (Newsletters);

/***/ }),

/***/ "MJbt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("W80I");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RE4Q");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_5__["notification"][type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6___default.a();

class AccountQuickLinks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLogout", e => {
      e.preventDefault();
      this.props.dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_4__[/* logOutSuccess */ "b"])());
      modalWarning('warning');
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/account/login');
      cookies.remove('_virjt_', {
        path: '/',
        sameSite: 'strict'
      }); // console.log(this.props)
    });
  }

  render() {
    const accountLinks = [{
      text: 'Dashoard',
      url: '/account/dashboard'
    }, {
      text: 'Account Information',
      url: '/account/user-information'
    }, {
      text: 'Orders',
      url: '/account/orders'
    }, {
      text: 'Address',
      url: '/account/addresses'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist'
    }];
    const {
      isLoggedIn
    } = this.props;

    if (isLoggedIn === true) {
      return __jsx("div", {
        className: "ps-block--user-account"
      }, __jsx("i", {
        className: "icon-user"
      }), __jsx("div", {
        className: "ps-block__content"
      }, __jsx("ul", {
        className: "ps-list--arrow"
      }, accountLinks.map(link => __jsx("li", {
        key: link.text
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: link.url
      }, __jsx("a", null, link.text)))), __jsx("li", {
        className: "ps-block__footer"
      }, __jsx("a", {
        href: "#",
        onClick: this.handleLogout.bind(this)
      }, "Logout")))));
    } else {
      return __jsx("div", {
        className: "ps-block--user-header"
      }, __jsx("div", {
        className: "ps-block__left"
      }, __jsx("i", {
        className: "icon-user"
      })), __jsx("div", {
        className: "ps-block__right"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/account/login"
      }, __jsx("a", null, "Login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/account/register"
      }, __jsx("a", null, "Register"))));
    }
  }

}

const mapStateToProps = state => {
  return state.auth;
}; // const mapDispatchToProps = dispatch => {
//     return{
//         logoutUser: () => {dispatch({type: 'LOGOUT_SUCCESS'})}
//     }
// }


/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(AccountQuickLinks));

/***/ }),

/***/ "MbC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = () => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "ps-logo"
  }, __jsx("img", {
    src: '/static/img/logo.png',
    alt: ""
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OElF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/shared/headers/modules/CurrencyDropdown.jsx
var CurrencyDropdown = __webpack_require__("s/7F");

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageSwicher.jsx
var LanguageSwicher = __webpack_require__("CLZ7");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/shared/headers/modules/AccountQuickLinks.jsx
var modules_AccountQuickLinks = __webpack_require__("MJbt");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/auth/action.js
var action = __webpack_require__("W80I");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__("RE4Q");
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// CONCATENATED MODULE: ./components/shared/headers/modules/AccountQuickLinksMobile.jsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

const cookies = new external_universal_cookie_default.a();

class AccountQuickLinksMobile_AccountQuickLinks extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLogout", e => {
      e.preventDefault();
      this.props.dispatch(Object(action["b" /* logOutSuccess */])());
      modalWarning('warning');
      router_default.a.push('/account/login');
      cookies.remove('_virjt_', {
        path: '/',
        sameSite: 'strict'
      });
      console.log(this.props);
    });
  }

  render() {
    const accountLinks = [{
      text: 'Dashoard',
      url: '/account/dashboard'
    }, {
      text: 'Account Information',
      url: '/account/user-information'
    }, {
      text: 'Orders',
      url: '/account/orders'
    }, {
      text: 'Address',
      url: '/account/addresses'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist'
    }];

    const menu = __jsx(external_antd_["Menu"], null, accountLinks.map(link => __jsx(external_antd_["Menu"].Item, {
      key: link.url
    }, __jsx(link_default.a, {
      href: link.url
    }, __jsx("a", null, link.text)))), __jsx(external_antd_["Menu"].Item, null, __jsx("a", {
      href: "#",
      onClick: this.handleLogout.bind(this)
    }, "Logout")));

    return __jsx(external_antd_["Dropdown"], {
      overlay: menu,
      placement: "bottomLeft"
    }, __jsx("a", {
      href: "#",
      className: "header__extra ps-user--mobile"
    }, __jsx("i", {
      className: "icon-user"
    })));
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch({
        type: 'LOGOUT_SUCCESS'
      });
    }
  };
};

/* harmony default export */ var AccountQuickLinksMobile = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(AccountQuickLinksMobile_AccountQuickLinks));
// CONCATENATED MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx
var MobileHeaderActions_jsx = external_react_default.a.createElement;

function MobileHeaderActions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*import { Drawer } from 'antd';
import PanelCartMobile from '../../panel/PanelCartMobile';*/

class MobileHeaderActions_MobileHeaderActions extends external_react_["Component"] {
  constructor(props) {
    super(props);

    MobileHeaderActions_defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  render() {
    const {
      auth
    } = this.props;
    const {
      cartTotal
    } = this.props.cart;
    return MobileHeaderActions_jsx("div", {
      className: "navigation__right"
    }, MobileHeaderActions_jsx(link_default.a, {
      href: "/account/shopping-cart"
    }, MobileHeaderActions_jsx("a", {
      className: "header__extra",
      href: "#"
    }, MobileHeaderActions_jsx("i", {
      className: "icon-bag2"
    }), MobileHeaderActions_jsx("span", null, MobileHeaderActions_jsx("i", null, cartTotal ? cartTotal : 0)))), auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? MobileHeaderActions_jsx(AccountQuickLinksMobile, null) : MobileHeaderActions_jsx("div", {
      className: "header__extra"
    }, MobileHeaderActions_jsx(link_default.a, {
      href: "/account/login"
    }, MobileHeaderActions_jsx("i", {
      className: "icon-user"
    }))));
  }

}

const MobileHeaderActions_mapStateToProps = state => {
  return state;
};

/* harmony default export */ var modules_MobileHeaderActions = (Object(external_react_redux_["connect"])(MobileHeaderActions_mapStateToProps)(MobileHeaderActions_MobileHeaderActions));
// CONCATENATED MODULE: ./wp-components/shared/mobile/WPMobileHeaderActions.jsx
var WPMobileHeaderActions_jsx = external_react_default.a.createElement;





const WPMobileHeaderActions = props => {
  const {
    auth
  } = props;
  const {
    cartTotal
  } = props.cart;
  let quickLinksView;

  if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
    quickLinksView = WPMobileHeaderActions_jsx(AccountQuickLinksMobile, null);
  } else {
    quickLinksView = WPMobileHeaderActions_jsx("div", {
      className: "header__extra"
    }, WPMobileHeaderActions_jsx(link_default.a, {
      href: "/account/login"
    }, WPMobileHeaderActions_jsx("i", {
      className: "icon-user"
    })));
  }

  return WPMobileHeaderActions_jsx("div", {
    className: "navigation__right"
  }, WPMobileHeaderActions_jsx(link_default.a, {
    href: "/account/shopping-cart"
  }, WPMobileHeaderActions_jsx("a", {
    className: "header__extra"
  }, WPMobileHeaderActions_jsx("i", {
    className: "icon-bag2"
  }), WPMobileHeaderActions_jsx("span", null, WPMobileHeaderActions_jsx("i", null, cartTotal ? cartTotal : 0)))), quickLinksView);
};

/* harmony default export */ var mobile_WPMobileHeaderActions = (Object(external_react_redux_["connect"])(state => state)(WPMobileHeaderActions));
// CONCATENATED MODULE: ./wp-components/shared/mobile/WPHeaderMobile.jsx
var WPHeaderMobile_jsx = external_react_default.a.createElement;







const WPHeaderMobile = () => {
  return WPHeaderMobile_jsx("header", {
    className: "header header--mobile"
  }, WPHeaderMobile_jsx("div", {
    className: "navigation--mobile"
  }, WPHeaderMobile_jsx("div", {
    className: "navigation__left"
  }, WPHeaderMobile_jsx(link_default.a, {
    href: "/"
  }, WPHeaderMobile_jsx("a", {
    className: "ps-logo"
  }, WPHeaderMobile_jsx("img", {
    src: "/static/img/logo_light.png",
    alt: "martfury"
  })))), WPHeaderMobile_jsx(mobile_WPMobileHeaderActions, null)));
};

/* harmony default export */ var mobile_WPHeaderMobile = __webpack_exports__["a"] = (WPHeaderMobile);

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P2qF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__("0wdU");

// EXTERNAL MODULE: ./utilities/WPHelpers.jsx
var WPHelpers = __webpack_require__("+h+6");

// CONCATENATED MODULE: ./wp-components/elements/products/WPProductOnCart.jsx
var __jsx = external_react_default.a.createElement;






class WPProductOnCart_WPProductOnCart extends external_react_["Component"] {
  constructor() {
    super();
  }

  handleRemoveCartItem(product) {
    console.log(product);
    this.props.dispatch(Object(action["i" /* removeItem */])(product));
  }

  removeCartItem() {
    const {
      product
    } = this.props;
    this.props.dispatch(Object(action["i" /* removeItem */])(product));
  }

  render() {
    const {
      product
    } = this.props; // Views

    const thumbnailImage = Object(WPHelpers["i" /* WPProductThumbnailView */])(product);
    return __jsx("div", {
      className: "ps-product--cart-mobile"
    }, __jsx("div", {
      className: "ps-product__thumbnail"
    }, __jsx(link_default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`
    }, __jsx("a", null, thumbnailImage))), __jsx("div", {
      className: "ps-product__content"
    }, __jsx("a", {
      className: "ps-product__remove",
      onClick: e => this.removeCartItem()
    }, __jsx("i", {
      className: "icon-cross"
    })), __jsx(link_default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`
    }, __jsx("a", {
      className: "ps-product__title"
    }, product.name)), __jsx("p", null, __jsx("strong", null, "Sold by:"), ' ', product.store && product.store.name), __jsx("small", null, product.quantity, " x \u20A6", product.sale_price ? product.sale_price : product.regular_price)));
  }

}

/* harmony default export */ var products_WPProductOnCart = (Object(external_react_redux_["connect"])()(WPProductOnCart_WPProductOnCart));
// CONCATENATED MODULE: ./wp-components/shared/headers/WPMiniCart.jsx
var WPMiniCart_jsx = external_react_default.a.createElement;






class WPMiniCart_WPMiniCart extends external_react_["Component"] {
  constructor() {
    super();
  }

  handleRemoveCartItem(product) {
    this.props.dispatch(Object(action["i" /* removeItem */])(product));
  }

  componentDidMount() {
    this.props.dispatch(Object(action["e" /* getCart */])());
  }

  render() {
    const {
      amount,
      cartTotal,
      cartItems
    } = this.props; // views

    let cartItemsView;

    if (cartItems && cartItems.length > 0) {
      const productItems = cartItems.map(item => {
        return WPMiniCart_jsx(products_WPProductOnCart, {
          product: item,
          key: item.id
        });
      });
      cartItemsView = WPMiniCart_jsx("div", {
        className: "ps-cart__content"
      }, WPMiniCart_jsx("div", {
        className: "ps-cart__items"
      }, productItems), WPMiniCart_jsx("div", {
        className: "ps-cart__footer"
      }, WPMiniCart_jsx("h3", null, "Sub Total:", WPMiniCart_jsx("strong", null, "\u20A6", amount ? amount : 0)), WPMiniCart_jsx("figure", null, WPMiniCart_jsx(link_default.a, {
        href: "/account/shopping-cart"
      }, WPMiniCart_jsx("a", {
        className: "ps-btn"
      }, "View Cart")), WPMiniCart_jsx(link_default.a, {
        href: "/account/checkout"
      }, WPMiniCart_jsx("a", {
        className: "ps-btn"
      }, "Checkout")))));
    } else {
      cartItemsView = WPMiniCart_jsx("div", {
        className: "ps-cart__content"
      }, WPMiniCart_jsx("div", {
        className: "ps-cart__items"
      }, WPMiniCart_jsx("span", null, "No products in cart")));
    }

    return WPMiniCart_jsx("div", {
      className: "ps-cart--mini"
    }, WPMiniCart_jsx("a", {
      className: "header__extra",
      href: "#"
    }, WPMiniCart_jsx("i", {
      className: "icon-bag2"
    }), WPMiniCart_jsx("span", null, WPMiniCart_jsx("i", null, cartTotal ? cartTotal : 0))), cartItemsView);
  }

}

;
/* harmony default export */ var headers_WPMiniCart = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(state => state.cart)(WPMiniCart_WPMiniCart));

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "RwQk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pU5j");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ThumbnailImage = ({
  url
}) => __jsx("img", {
  src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_1__[/* baseUrl */ "a"]}${url}`,
  alt: "martfury-image"
});

/* harmony default export */ __webpack_exports__["a"] = (ThumbnailImage);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZVHM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CountDownSimple extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
      days: null
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const {
        timeTillDate,
        timeFormat
      } = this.props;
      const then = moment__WEBPACK_IMPORTED_MODULE_1___default()(timeTillDate, timeFormat);
      const now = moment__WEBPACK_IMPORTED_MODULE_1___default()();
      const countdown = moment__WEBPACK_IMPORTED_MODULE_1___default()(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    return __jsx("ul", {
      className: "ps-countdown"
    }, __jsx("li", null, __jsx("span", {
      className: "days mr-1"
    }, days)), __jsx("li", null, __jsx("span", {
      className: "hours ml-1 mr-1"
    }, hours)), __jsx("li", null, __jsx("span", {
      className: "minutes ml-1 mr-1"
    }, minutes)), __jsx("li", null, __jsx("span", {
      className: "seconds ml-1"
    }, seconds)));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (CountDownSimple);

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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cdMP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./utilities/WPHelpers.jsx
var WPHelpers = __webpack_require__("+h+6");

// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__("iAvk");

// CONCATENATED MODULE: ./wp-components/elements/products/WPProductSearchResult.jsx
var __jsx = external_react_default.a.createElement;





const WPProductSearchResult = ({
  product
}) => {
  // Views
  let productPriceView, productBadgeView;
  const thumbnailImage = Object(WPHelpers["i" /* WPProductThumbnailView */])(product);

  if (product) {
    productPriceView = Object(WPHelpers["a" /* WPGetProductPrice */])(product);
  }

  return __jsx("div", {
    className: "ps-product ps-product--wide ps-product--search-result"
  }, __jsx("div", {
    className: "ps-product__thumbnail"
  }, __jsx(link_default.a, {
    href: "/product/[pid]",
    as: `/product/${product.id}`
  }, __jsx("a", null, thumbnailImage))), __jsx("div", {
    className: "ps-product__content"
  }, __jsx(link_default.a, {
    href: "/product/[pid]",
    as: `/product/${product.id}`
  }, __jsx("a", {
    className: "ps-product__title"
  }, product.name)), __jsx("div", {
    className: "ps-product__rating"
  }, __jsx(Rating["a" /* default */], null)), productPriceView));
};

/* harmony default export */ var products_WPProductSearchResult = (WPProductSearchResult);
// EXTERNAL MODULE: ./repositories/WP/WPProductRepository.js
var WPProductRepository = __webpack_require__("T98Y");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./wp-components/shared/headers/WPSearchHeader.jsx
var WPSearchHeader_jsx = external_react_default.a.createElement;






const exampleCategories = ['All', 'Babies & Moms', 'Books & Office', 'Cars & Motocycles', 'Clothing & Apparel', ' Accessories', 'Bags', 'Kid’s Fashion', 'Mens', 'Shoes', 'Sunglasses', 'Womens', 'Computers & Technologies', 'Desktop PC', 'Laptop', 'Smartphones', 'Consumer Electrics', 'Air Conditioners', 'Accessories', 'Type Hanging Cell', 'Audios & Theaters', 'Headphone', 'Home Theater System', 'Speakers', 'Car Electronics', 'Audio & Video', 'Car Security', 'Radar Detector', 'Vehicle GPS', 'Office Electronics', 'Printers', 'Projectors', 'Scanners', 'Store & Business', 'Refrigerators', 'TV Televisions', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Washing Machines', 'Type Drying Clothes', 'Type Horizontal', 'Type Vertical', 'Garden & Kitchen', 'Cookware', 'Decoration', 'Furniture', 'Garden Tools', 'Home Improvement', 'Powers And Hand Tools', 'Utensil & Gadget', 'Health & Beauty', 'Equipments', 'Hair Care', 'Perfumer', 'Wine Cabinets'];

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(external_react_["useState"])(value);
  Object(external_react_["useEffect"])(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const WPSearchHeader = () => {
  const inputEl = Object(external_react_["useRef"])(null);
  const {
    0: isSearch,
    1: setIsSearch
  } = Object(external_react_["useState"])(false);
  const {
    0: keyword,
    1: setKeyword
  } = Object(external_react_["useState"])('');
  const {
    0: resultItems,
    1: setResultItems
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);

  function handleClearKeyword() {
    setKeyword('');
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router_default.a.push(`/search?keyword=${keyword}`);
  }

  Object(external_react_["useEffect"])(() => {
    if (debouncedSearchTerm) {
      setLoading(true);

      if (keyword) {
        const queries = {
          per_page: 5,
          search: keyword
        };
        const products = WPProductRepository["a" /* default */].getProducts(queries);
        products.then(result => {
          setLoading(false);
          setResultItems(result);
          setIsSearch(true);
        });
      } else {
        setIsSearch(false);
        setKeyword('');
      }

      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]); // Views

  let productItemsView, clearTextView, selectOptionView, loadingView, loadMoreView;

  if (!loading) {
    if (resultItems && resultItems.items.length > 0) {
      if (resultItems.items.length > 5) {
        loadMoreView = WPSearchHeader_jsx("div", {
          className: "ps-panel__footer text-center"
        }, WPSearchHeader_jsx(link_default.a, {
          href: "/search"
        }, WPSearchHeader_jsx("a", null, "See all results")));
      }

      productItemsView = resultItems.items.filter(searchitem => searchitem.name.toLowerCase().includes(keyword.toLowerCase())).map(product => WPSearchHeader_jsx(products_WPProductSearchResult, {
        product: product,
        key: product.id
      }));
    } else {
      productItemsView = WPSearchHeader_jsx("p", null, "No product found.");
    }

    if (keyword !== '') {
      clearTextView = WPSearchHeader_jsx("span", {
        className: "ps-form__action",
        onClick: handleClearKeyword
      }, WPSearchHeader_jsx("i", {
        className: "icon icon-cross2"
      }));
    }
  } else {
    loadingView = WPSearchHeader_jsx("span", {
      className: "ps-form__action"
    }, WPSearchHeader_jsx(external_antd_["Spin"], {
      size: "small"
    }));
  }

  selectOptionView = exampleCategories.map(option => WPSearchHeader_jsx("option", {
    value: option,
    key: option
  }, option));
  Object(external_react_["useEffect"])(() => {
    if (window !== undefined && isSearch === true) {
      const searchPanel = document.querySelector('.ps-panel--search-result'); // console.log(searchPanel)

      window.addEventListener('click', e => {
        if (e.target !== searchPanel) {
          // console.log("Clicked not on Search")
          setIsSearch(false);
        }
      });
    }
  });
  return WPSearchHeader_jsx("form", {
    className: "ps-form--quick-search",
    method: "get",
    action: "/",
    onSubmit: handleSubmit
  }, WPSearchHeader_jsx("div", {
    className: "ps-form__categories"
  }, WPSearchHeader_jsx("select", {
    className: "form-control"
  }, selectOptionView)), WPSearchHeader_jsx("div", {
    className: "ps-form__input"
  }, WPSearchHeader_jsx("input", {
    ref: inputEl,
    className: "form-control",
    type: "text",
    value: keyword,
    placeholder: "I'm shopping for...",
    onChange: e => setKeyword(e.target.value)
  }), clearTextView, loadingView), WPSearchHeader_jsx("button", {
    onClick: handleSubmit
  }, "Search"), WPSearchHeader_jsx("div", {
    className: `ps-panel--search-result${isSearch ? ' active ' : ''}`
  }, WPSearchHeader_jsx("div", {
    className: "ps-panel__content"
  }, productItemsView), loadMoreView));
};

/* harmony default export */ var headers_WPSearchHeader = __webpack_exports__["a"] = (WPSearchHeader);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h18c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__("0wdU");

// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__("q8Yi");

// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__("T/WE");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__("s5ri");

// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__("3o9y");

// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__("pU5j");

// EXTERNAL MODULE: ./components/elements/detail/modules/elements/ThumbnailImage.jsx
var ThumbnailImage = __webpack_require__("RwQk");

// CONCATENATED MODULE: ./components/elements/detail/modules/elements/StaticThumbnailImage.jsx
var __jsx = external_react_default.a.createElement;


const StaticThumbnailImage = ({
  url
}) => __jsx("img", {
  src: url,
  alt: "martfury-image"
});

/* harmony default export */ var elements_StaticThumbnailImage = (StaticThumbnailImage);
// CONCATENATED MODULE: ./components/elements/detail/modules/thumbnail/ThumbnailQuickView.jsx
var ThumbnailQuickView_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









class ThumbnailQuickView_ThumbnailQuickView extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      galleryCarousel: null,
      variantCarousel: null
    };
  }

  componentDidMount() {
    this.setState({
      galleryCarousel: this.slider1,
      variantCarousel: this.slider2
    });
  }

  render() {
    const gallerySetting = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: ThumbnailQuickView_jsx(NextArrow["a" /* default */], null),
      prevArrow: ThumbnailQuickView_jsx(PrevArrow["a" /* default */], null)
    };
    const {
      product
    } = this.props;
    return ThumbnailQuickView_jsx("div", {
      className: "ps-product__thumbnail",
      "data-vertical": "false"
    }, ThumbnailQuickView_jsx("figure", null, ThumbnailQuickView_jsx("div", {
      className: "ps-wrapper"
    }, ThumbnailQuickView_jsx(external_react_slick_default.a, _extends({}, gallerySetting, {
      className: "ps-product__gallery ps-carousel inside"
    }), product.images.map(variant => ThumbnailQuickView_jsx("div", {
      className: "item",
      key: variant.id
    }, ThumbnailQuickView_jsx("a", {
      href: variant.url
    }, ThumbnailQuickView_jsx(ThumbnailImage["a" /* default */], {
      url: variant.url
    }))))))));
  }

}

/* harmony default export */ var thumbnail_ThumbnailQuickView = (ThumbnailQuickView_ThumbnailQuickView);
// EXTERNAL MODULE: ./components/elements/detail/modules/information/InformationQuickView.jsx
var InformationQuickView = __webpack_require__("t0Be");

// CONCATENATED MODULE: ./components/elements/detail/ProductDetailQuickView.jsx
var ProductDetailQuickView_jsx = external_react_default.a.createElement;




const ProductDetailQuickView = ({
  product
}) => ProductDetailQuickView_jsx("div", {
  className: "ps-product--detail ps-product--quickview"
}, ProductDetailQuickView_jsx("div", {
  className: "ps-product__header"
}, ProductDetailQuickView_jsx(thumbnail_ThumbnailQuickView, {
  product: product
}), ProductDetailQuickView_jsx(InformationQuickView["a" /* default */], {
  product: product
})));

/* harmony default export */ var detail_ProductDetailQuickView = (ProductDetailQuickView);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__("iAvk");

// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__("OqP1");

// EXTERNAL MODULE: ./utilities/app-settings.js
var app_settings = __webpack_require__("BVei");

// CONCATENATED MODULE: ./components/elements/products/ProductSimple.jsx
var ProductSimple_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class ProductSimple_ProductSimple extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddItemToCart", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch(Object(action["b" /* addItem */])(product));
    });

    _defineProperty(this, "handleAddItemToCompare", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch(Object(compare_action["b" /* addItemToCompare */])(product));
    });

    _defineProperty(this, "handleAddItemToWishlist", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch(Object(wishlist_action["b" /* addItemToWishlist */])(product));
    });

    _defineProperty(this, "handleShowQuickView", e => {
      e.preventDefault();
      this.setState({
        isQuickView: true
      });
    });

    _defineProperty(this, "handleHideQuickView", e => {
      e.preventDefault();
      this.setState({
        isQuickView: false
      });
    });

    this.state = {
      isQuickView: false
    };
  }

  render() {
    const {
      product,
      currency
    } = this.props;
    let productBadge = null;

    if (product.badge && product.badge !== null) {
      product.badge.map(badge => {
        if (badge.type === 'sale') {
          return productBadge = ProductSimple_jsx("div", {
            className: "ps-product__badge"
          }, badge.value);
        } else if (badge.type === 'outStock') {
          return productBadge = ProductSimple_jsx("div", {
            className: "ps-product__badge out-stock"
          }, badge.value);
        } else {
          return productBadge = ProductSimple_jsx("div", {
            className: "ps-product__badge hot"
          }, badge.value);
        }
      });
    }

    let thumbnail;

    if (app_settings["a" /* isStaticData */] === false) {
      thumbnail = `${Repository["a" /* baseUrl */]}${product.thumbnail.url}`;
    } else {
      thumbnail = product.thumbnail.url;
    }

    return ProductSimple_jsx("div", {
      className: "ps-product ps-product--simple"
    }, ProductSimple_jsx("div", {
      className: "ps-product__thumbnail"
    }, ProductSimple_jsx(link_default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`
    }, ProductSimple_jsx("a", null, ProductSimple_jsx(ThumbnailImage["a" /* default */], {
      url: product.thumbnail.url
    }))), product.badge ? productBadge : '', ProductSimple_jsx("ul", {
      className: "ps-product__actions"
    }, ProductSimple_jsx("li", null, ProductSimple_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Read More",
      onClick: this.handleAddItemToCart.bind(this)
    }, ProductSimple_jsx("i", {
      className: "icon-bag2"
    }))), ProductSimple_jsx("li", null, ProductSimple_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Quick View",
      onClick: this.handleShowQuickView.bind(this)
    }, ProductSimple_jsx("i", {
      className: "icon-eye"
    }))), ProductSimple_jsx("li", null, ProductSimple_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Add to wishlist",
      onClick: this.handleAddItemToWishlist.bind(this)
    }, ProductSimple_jsx("i", {
      className: "icon-heart"
    }))), ProductSimple_jsx("li", null, ProductSimple_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Compare",
      onClick: this.handleAddItemToCompare.bind(this)
    }, ProductSimple_jsx("i", {
      className: "icon-chart-bars"
    }))))), ProductSimple_jsx("div", {
      className: "ps-product__container"
    }, ProductSimple_jsx("div", {
      className: "ps-product__content"
    }, ProductSimple_jsx(link_default.a, {
      href: "/product/[pid]"
    }, ProductSimple_jsx("a", {
      className: "ps-product__title"
    }, product.title)), ProductSimple_jsx("div", {
      className: "ps-product__rating"
    }, ProductSimple_jsx(Rating["a" /* default */], null), ProductSimple_jsx("span", null, product.ratingCount)), product.is_sale === true ? ProductSimple_jsx("p", {
      className: "ps-product__price sale"
    }, currency ? currency.symbol : '$', Object(product_helper["b" /* formatCurrency */])(product.price), ' ', ProductSimple_jsx("del", {
      className: "ml-1"
    }, currency ? currency.symbol : '$', Object(product_helper["b" /* formatCurrency */])(product.sale_price))) : ProductSimple_jsx("p", {
      className: "ps-product__price"
    }, currency ? currency.symbol : '$', Object(product_helper["b" /* formatCurrency */])(product.price)))), ProductSimple_jsx(external_antd_["Modal"], {
      title: product.title,
      centered: true,
      footer: null,
      width: 1024,
      onCancel: this.handleHideQuickView,
      visible: this.state.isQuickView
    }, ProductSimple_jsx(detail_ProductDetailQuickView, {
      product: product
    })));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var products_ProductSimple = (Object(external_react_redux_["connect"])(mapStateToProps)(ProductSimple_ProductSimple));
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__("8tnw");

// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketClothingsAndApparel.jsx
var MarketClothingsAndApparel_jsx = external_react_default.a.createElement;

function MarketClothingsAndApparel_extends() { MarketClothingsAndApparel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MarketClothingsAndApparel_extends.apply(this, arguments); }









class MarketClothingsAndApparel_MarketClothingsAndApparel extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      collectionSlug
    } = this.props;
    const products = Object(product_helper["c" /* getColletionBySlug */])(categories, collectionSlug);
    return MarketClothingsAndApparel_jsx("div", {
      className: "ps-block--products-of-category"
    }, MarketClothingsAndApparel_jsx("div", {
      className: "ps-block__categories"
    }, MarketClothingsAndApparel_jsx("h3", null, "Clothing & ", MarketClothingsAndApparel_jsx("br", null), " Apparel"), MarketClothingsAndApparel_jsx("ul", null, MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/best-seller"
    }, MarketClothingsAndApparel_jsx("a", null, "Best Seller"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/new-arrivals"
    }, MarketClothingsAndApparel_jsx("a", null, "New Arrivals"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/women"
    }, MarketClothingsAndApparel_jsx("a", null, "Women"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/men"
    }, MarketClothingsAndApparel_jsx("a", null, "Men"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/girls"
    }, MarketClothingsAndApparel_jsx("a", null, "Girls"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/boys"
    }, MarketClothingsAndApparel_jsx("a", null, "Boys"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/baby"
    }, MarketClothingsAndApparel_jsx("a", null, "Baby"))), MarketClothingsAndApparel_jsx("li", null, MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/sale-and-deal"
    }, MarketClothingsAndApparel_jsx("a", null, "Sales & Deals")))), MarketClothingsAndApparel_jsx(link_default.a, {
      href: "/shop"
    }, MarketClothingsAndApparel_jsx("a", {
      className: "ps-block__more-link"
    }, "View All"))), MarketClothingsAndApparel_jsx("div", {
      className: "ps-block__slider"
    }, MarketClothingsAndApparel_jsx(external_react_slick_default.a, MarketClothingsAndApparel_extends({}, carousel_helpers["b" /* carouselSingle */], {
      className: "ps-carousel"
    }), MarketClothingsAndApparel_jsx("a", null, MarketClothingsAndApparel_jsx("img", {
      src: "/static/img/slider/home-3/clothing-1.jpg",
      alt: "martfury"
    })), MarketClothingsAndApparel_jsx("a", null, MarketClothingsAndApparel_jsx("img", {
      src: "/static/img/slider/home-3/clothing-2.jpg",
      alt: "martfury"
    })), MarketClothingsAndApparel_jsx("a", null, MarketClothingsAndApparel_jsx("img", {
      src: "/static/img/slider/home-3/clothing-3.jpg",
      alt: "martfury"
    })))), MarketClothingsAndApparel_jsx("div", {
      className: "ps-block__product-box"
    }, products.map((product, index) => {
      if (index < 6) {
        return MarketClothingsAndApparel_jsx(products_ProductSimple, {
          product: product,
          key: product.id
        });
      }
    })));
  }

}

/* harmony default export */ var modules_MarketClothingsAndApparel = (Object(external_react_redux_["connect"])(state => state.collection)(MarketClothingsAndApparel_MarketClothingsAndApparel));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketComputerAndTechnology.jsx
var MarketComputerAndTechnology_jsx = external_react_default.a.createElement;

function MarketComputerAndTechnology_extends() { MarketComputerAndTechnology_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MarketComputerAndTechnology_extends.apply(this, arguments); }









class MarketComputerAndTechnology_MarketComputerAndTechnology extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      collectionSlug
    } = this.props;
    const products = Object(product_helper["c" /* getColletionBySlug */])(categories, collectionSlug);
    return MarketComputerAndTechnology_jsx("div", {
      className: "ps-block--products-of-category"
    }, MarketComputerAndTechnology_jsx("div", {
      className: "ps-block__categories"
    }, MarketComputerAndTechnology_jsx("h3", null, "Computer & Techologies"), MarketComputerAndTechnology_jsx("ul", null, MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/best-seller"
    }, MarketComputerAndTechnology_jsx("a", null, "Best Seller"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/new-arrivals"
    }, MarketComputerAndTechnology_jsx("a", null, "New Arrivals"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/women"
    }, MarketComputerAndTechnology_jsx("a", null, "Desktop PC"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/men"
    }, MarketComputerAndTechnology_jsx("a", null, "Laptop"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/smartphone"
    }, MarketComputerAndTechnology_jsx("a", null, "Smartphones"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/tablets"
    }, MarketComputerAndTechnology_jsx("a", null, "Tablets"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/storage-and-memory"
    }, MarketComputerAndTechnology_jsx("a", null, "Storage & Memory"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/pc-component"
    }, MarketComputerAndTechnology_jsx("a", null, "PC Component"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/game-accessories"
    }, MarketComputerAndTechnology_jsx("a", null, "Game Accessories"))), MarketComputerAndTechnology_jsx("li", null, MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/sale-and-deal"
    }, MarketComputerAndTechnology_jsx("a", null, "Sales & Deals")))), MarketComputerAndTechnology_jsx(link_default.a, {
      href: "/shop"
    }, MarketComputerAndTechnology_jsx("a", {
      className: "ps-block__more-link"
    }, "View All"))), MarketComputerAndTechnology_jsx("div", {
      className: "ps-block__slider"
    }, MarketComputerAndTechnology_jsx(external_react_slick_default.a, MarketComputerAndTechnology_extends({}, carousel_helpers["b" /* carouselSingle */], {
      className: "ps-carousel"
    }), MarketComputerAndTechnology_jsx("a", null, MarketComputerAndTechnology_jsx("img", {
      src: "/static/img/slider/home-3/technology-1.jpg",
      alt: "martfury"
    })), MarketComputerAndTechnology_jsx("a", null, MarketComputerAndTechnology_jsx("img", {
      src: "/static/img/slider/home-3/technology-2.jpg",
      alt: "martfury"
    })), MarketComputerAndTechnology_jsx("a", null, MarketComputerAndTechnology_jsx("img", {
      src: "/static/img/slider/home-3/technology-3.jpg",
      alt: "martfury"
    })))), MarketComputerAndTechnology_jsx("div", {
      className: "ps-block__product-box"
    }, products.map((product, index) => {
      if (index < 6) {
        return MarketComputerAndTechnology_jsx(products_ProductSimple, {
          product: product,
          key: product.id
        });
      }
    })));
  }

}

/* harmony default export */ var modules_MarketComputerAndTechnology = (Object(external_react_redux_["connect"])(state => state.collection)(MarketComputerAndTechnology_MarketComputerAndTechnology));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketConsumerElectronics.jsx
var MarketConsumerElectronics_jsx = external_react_default.a.createElement;

function MarketConsumerElectronics_extends() { MarketConsumerElectronics_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MarketConsumerElectronics_extends.apply(this, arguments); }









class MarketConsumerElectronics_MarketConsumerElectronics extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      collectionSlug
    } = this.props;
    const products = Object(product_helper["c" /* getColletionBySlug */])(categories, collectionSlug);
    return MarketConsumerElectronics_jsx("div", {
      className: "ps-block--products-of-category"
    }, MarketConsumerElectronics_jsx("div", {
      className: "ps-block__categories"
    }, MarketConsumerElectronics_jsx("h3", null, "Consumer Electronics"), MarketConsumerElectronics_jsx("ul", null, MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/best-seller"
    }, MarketConsumerElectronics_jsx("a", null, "Best Seller"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/new-arrivals"
    }, MarketConsumerElectronics_jsx("a", null, "New Arrivals"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/tv-television"
    }, MarketConsumerElectronics_jsx("a", null, "TV Television"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/air-conditions"
    }, MarketConsumerElectronics_jsx("a", null, "Air Condition"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/washing-machine"
    }, MarketConsumerElectronics_jsx("a", null, "Washing Machine"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/microware"
    }, MarketConsumerElectronics_jsx("a", null, "Microwave"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/refrigerator"
    }, MarketConsumerElectronics_jsx("a", null, "Refrigerator"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/office-electronic"
    }, MarketConsumerElectronics_jsx("a", null, "Office Electronic"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/car-electronic"
    }, MarketConsumerElectronics_jsx("a", null, "Car Electronic"))), MarketConsumerElectronics_jsx("li", null, MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/sale-and-deal"
    }, MarketConsumerElectronics_jsx("a", null, "Sales & Deals")))), MarketConsumerElectronics_jsx(link_default.a, {
      href: "/shop"
    }, MarketConsumerElectronics_jsx("a", {
      className: "ps-block__more-link"
    }, "View All"))), MarketConsumerElectronics_jsx("div", {
      className: "ps-block__slider"
    }, MarketConsumerElectronics_jsx(external_react_slick_default.a, MarketConsumerElectronics_extends({}, carousel_helpers["b" /* carouselSingle */], {
      className: "ps-carousel"
    }), MarketConsumerElectronics_jsx("a", null, MarketConsumerElectronics_jsx("img", {
      src: "/static/img/slider/home-3/electronic-1.jpg",
      alt: "martfury"
    })), MarketConsumerElectronics_jsx("a", null, MarketConsumerElectronics_jsx("img", {
      src: "/static/img/slider/home-3/electronic-2.jpg",
      alt: "martfury"
    })), MarketConsumerElectronics_jsx("a", null, MarketConsumerElectronics_jsx("img", {
      src: "/static/img/slider/home-3/electronic-3.jpg",
      alt: "martfury"
    })))), MarketConsumerElectronics_jsx("div", {
      className: "ps-block__product-box"
    }, products.map((product, index) => {
      if (index < 6) {
        return MarketConsumerElectronics_jsx(products_ProductSimple, {
          product: product,
          key: product.id
        });
      }
    })));
  }

}

/* harmony default export */ var modules_MarketConsumerElectronics = (Object(external_react_redux_["connect"])(state => state.collection)(MarketConsumerElectronics_MarketConsumerElectronics));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketGardenAndKitchen.jsx
var MarketGardenAndKitchen_jsx = external_react_default.a.createElement;

function MarketGardenAndKitchen_extends() { MarketGardenAndKitchen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MarketGardenAndKitchen_extends.apply(this, arguments); }









class MarketGardenAndKitchen_MarketGardenAndKitchen extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      collectionSlug
    } = this.props;
    const products = Object(product_helper["c" /* getColletionBySlug */])(categories, collectionSlug);
    return MarketGardenAndKitchen_jsx("div", {
      className: "ps-block--products-of-category"
    }, MarketGardenAndKitchen_jsx("div", {
      className: "ps-block__categories"
    }, MarketGardenAndKitchen_jsx("h3", null, "Home ", MarketGardenAndKitchen_jsx("br", null), " Garden  & Kitchen"), MarketGardenAndKitchen_jsx("ul", null, MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/best-seller"
    }, MarketGardenAndKitchen_jsx("a", null, "Best Seller"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/new-arrivals"
    }, MarketGardenAndKitchen_jsx("a", null, "New Arrivals"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/furniture"
    }, MarketGardenAndKitchen_jsx("a", null, "Furniture"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/home-decor"
    }, MarketGardenAndKitchen_jsx("a", null, "Home Decor"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/cookware"
    }, MarketGardenAndKitchen_jsx("a", null, "Cookware"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/utensils-and-gadget"
    }, MarketGardenAndKitchen_jsx("a", null, "Utensils & Gadget"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/garden-tools"
    }, MarketGardenAndKitchen_jsx("a", null, "Garden Tools"))), MarketGardenAndKitchen_jsx("li", null, MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/acessesories"
    }, MarketGardenAndKitchen_jsx("a", null, "Acessesories")))), MarketGardenAndKitchen_jsx(link_default.a, {
      href: "/shop"
    }, MarketGardenAndKitchen_jsx("a", {
      className: "ps-block__more-link"
    }, "View All"))), MarketGardenAndKitchen_jsx("div", {
      className: "ps-block__slider"
    }, MarketGardenAndKitchen_jsx(external_react_slick_default.a, MarketGardenAndKitchen_extends({}, carousel_helpers["b" /* carouselSingle */], {
      className: "ps-carousel"
    }), MarketGardenAndKitchen_jsx("a", null, MarketGardenAndKitchen_jsx("img", {
      src: "/static/img/slider/home-3/kitchen-1.jpg",
      alt: "martfury"
    })), MarketGardenAndKitchen_jsx("a", null, MarketGardenAndKitchen_jsx("img", {
      src: "/static/img/slider/home-3/kitchen-2.jpg",
      alt: "martfury"
    })), MarketGardenAndKitchen_jsx("a", null, MarketGardenAndKitchen_jsx("img", {
      src: "/static/img/slider/home-3/kitchen-3.jpg",
      alt: "martfury"
    })))), MarketGardenAndKitchen_jsx("div", {
      className: "ps-block__product-box"
    }, products.map((product, index) => {
      if (index < 6) {
        return MarketGardenAndKitchen_jsx(products_ProductSimple, {
          product: product,
          key: product.id
        });
      }
    })));
  }

}

/* harmony default export */ var modules_MarketGardenAndKitchen = (Object(external_react_redux_["connect"])(state => state.collection)(MarketGardenAndKitchen_MarketGardenAndKitchen));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketHeathyAndBeauty.jsx
var MarketHeathyAndBeauty_jsx = external_react_default.a.createElement;

function MarketHeathyAndBeauty_extends() { MarketHeathyAndBeauty_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MarketHeathyAndBeauty_extends.apply(this, arguments); }









class MarketHeathyAndBeauty_MarketHeathyAndBeauty extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      collectionSlug
    } = this.props;
    const products = Object(product_helper["c" /* getColletionBySlug */])(categories, collectionSlug);
    return MarketHeathyAndBeauty_jsx("div", {
      className: "ps-block--products-of-category"
    }, MarketHeathyAndBeauty_jsx("div", {
      className: "ps-block__categories"
    }, MarketHeathyAndBeauty_jsx("h3", null, "Health & ", MarketHeathyAndBeauty_jsx("br", null), " Beauty"), MarketHeathyAndBeauty_jsx("ul", null, MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/best-seller"
    }, MarketHeathyAndBeauty_jsx("a", null, "Best Seller"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/new-arrivals"
    }, MarketHeathyAndBeauty_jsx("a", null, "New Arrivals"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/women"
    }, MarketHeathyAndBeauty_jsx("a", null, "Women"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/men"
    }, MarketHeathyAndBeauty_jsx("a", null, "Men"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/girls"
    }, MarketHeathyAndBeauty_jsx("a", null, "Girls"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/boys"
    }, MarketHeathyAndBeauty_jsx("a", null, "Boys"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/baby"
    }, MarketHeathyAndBeauty_jsx("a", null, "Baby"))), MarketHeathyAndBeauty_jsx("li", null, MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop",
      as: "/shop/sale-and-deal"
    }, MarketHeathyAndBeauty_jsx("a", null, "Sales & Deals")))), MarketHeathyAndBeauty_jsx(link_default.a, {
      href: "/shop"
    }, MarketHeathyAndBeauty_jsx("a", {
      className: "ps-block__more-link"
    }, "View All"))), MarketHeathyAndBeauty_jsx("div", {
      className: "ps-block__slider"
    }, MarketHeathyAndBeauty_jsx(external_react_slick_default.a, MarketHeathyAndBeauty_extends({}, carousel_helpers["b" /* carouselSingle */], {
      className: "ps-carousel"
    }), MarketHeathyAndBeauty_jsx("a", null, MarketHeathyAndBeauty_jsx("img", {
      src: "/static/img/slider/home-3/healthy-1.jpg",
      alt: "martfury"
    })), MarketHeathyAndBeauty_jsx("a", null, MarketHeathyAndBeauty_jsx("img", {
      src: "/static/img/slider/home-3/healthy-2.jpg",
      alt: "martfury"
    })), MarketHeathyAndBeauty_jsx("a", null, MarketHeathyAndBeauty_jsx("img", {
      src: "/static/img/slider/home-3/healthy-3.jpg",
      alt: "martfury"
    })))), MarketHeathyAndBeauty_jsx("div", {
      className: "ps-block__product-box"
    }, products.map((product, index) => {
      if (index < 6) {
        return MarketHeathyAndBeauty_jsx(products_ProductSimple, {
          product: product,
          key: product.id
        });
      }
    })));
  }

}

/* harmony default export */ var modules_MarketHeathyAndBeauty = (Object(external_react_redux_["connect"])(state => state.collection)(MarketHeathyAndBeauty_MarketHeathyAndBeauty));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlaceProductBox.jsx
var MarketPlaceProductBox_jsx = external_react_default.a.createElement;







class MarketPlaceProductBox_MarketPlaceProductBox extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return MarketPlaceProductBox_jsx("div", {
      className: "ps-section--gray"
    }, MarketPlaceProductBox_jsx("div", {
      className: "container"
    }, MarketPlaceProductBox_jsx(modules_MarketClothingsAndApparel, {
      collectionSlug: "clothing-and-parel"
    }), MarketPlaceProductBox_jsx(modules_MarketConsumerElectronics, {
      collectionSlug: "consumer-electrics"
    }), MarketPlaceProductBox_jsx(modules_MarketComputerAndTechnology, {
      collectionSlug: "computers-and-technologies"
    }), MarketPlaceProductBox_jsx(modules_MarketGardenAndKitchen, {
      collectionSlug: "garden-and-kitchen"
    }), MarketPlaceProductBox_jsx(modules_MarketHeathyAndBeauty, {
      collectionSlug: "health-and-beauty"
    })));
  }

}

/* harmony default export */ var marketplace_MarketPlaceProductBox = (MarketPlaceProductBox_MarketPlaceProductBox);
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlacePromotions.jsx
var MarketPlacePromotions_jsx = external_react_default.a.createElement;


const MarketPlacePromotion = () => MarketPlacePromotions_jsx("div", {
  className: "ps-promotions"
}, MarketPlacePromotions_jsx("div", {
  className: "container"
}, MarketPlacePromotions_jsx("div", {
  className: "row"
}, MarketPlacePromotions_jsx("div", {
  className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "
}, MarketPlacePromotions_jsx("a", {
  className: "ps-collection",
  href: "#"
}, MarketPlacePromotions_jsx("img", {
  src: "/static/img/promotions/home-3-1.jpg",
  alt: "martfury"
}))), MarketPlacePromotions_jsx("div", {
  className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "
}, MarketPlacePromotions_jsx("a", {
  className: "ps-collection",
  href: "#"
}, MarketPlacePromotions_jsx("img", {
  src: "/static/img/promotions/home-3-2.jpg",
  alt: "martfury"
}))), MarketPlacePromotions_jsx("div", {
  className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "
}, MarketPlacePromotions_jsx("a", {
  className: "ps-collection",
  href: "#"
}, MarketPlacePromotions_jsx("img", {
  src: "/static/img/promotions/home-3-3.jpg",
  alt: "martfury"
}))))));

/* harmony default export */ var MarketPlacePromotions = (MarketPlacePromotion);
// EXTERNAL MODULE: ./components/elements/CountDownSimple.jsx
var CountDownSimple = __webpack_require__("ZVHM");

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// CONCATENATED MODULE: ./components/elements/products/Product.jsx
var Product_jsx = external_react_default.a.createElement;

function Product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class Product_Product extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Product_defineProperty(this, "handleAddItemToCart", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch(Object(action["b" /* addItem */])(product));
    });

    Product_defineProperty(this, "handleAddItemToCompare", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch(Object(compare_action["b" /* addItemToCompare */])(product));
    });

    Product_defineProperty(this, "handleAddItemToWishlist", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch(Object(wishlist_action["b" /* addItemToWishlist */])(product));
    });

    Product_defineProperty(this, "handleShowQuickView", e => {
      e.preventDefault();
      this.setState({
        isQuickView: true
      });
    });

    Product_defineProperty(this, "handleHideQuickView", e => {
      e.preventDefault();
      this.setState({
        isQuickView: false
      });
    });

    this.state = {
      isQuickView: false
    };
  }

  render() {
    const {
      product,
      currency
    } = this.props;
    let productBadge = null;

    if (product.badge && product.badge !== null) {
      product.badge.map(badge => {
        if (badge.type === 'sale') {
          return productBadge = Product_jsx("div", {
            className: "ps-product__badge"
          }, badge.value);
        } else if (badge.type === 'outStock') {
          return productBadge = Product_jsx("div", {
            className: "ps-product__badge out-stock"
          }, badge.value);
        } else {
          return productBadge = Product_jsx("div", {
            className: "ps-product__badge hot"
          }, badge.value);
        }
      });
    }

    return Product_jsx("div", {
      className: "ps-product"
    }, Product_jsx("div", {
      className: "ps-product__thumbnail"
    }, Product_jsx(link_default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`
    }, Product_jsx("a", null, Product_jsx(external_react_lazyload_default.a, null, Product_jsx("img", {
      src: app_settings["a" /* isStaticData */] === false ? `${Repository["a" /* baseUrl */]}${product.thumbnail.url}` : product.thumbnail.url,
      alt: product.title
    })))), product.badge ? productBadge : '', Product_jsx("ul", {
      className: "ps-product__actions"
    }, Product_jsx("li", null, Product_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Read More",
      onClick: this.handleAddItemToCart.bind(this)
    }, Product_jsx("i", {
      className: "icon-bag2"
    }))), Product_jsx("li", null, Product_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Quick View",
      onClick: this.handleShowQuickView.bind(this)
    }, Product_jsx("i", {
      className: "icon-eye"
    }))), Product_jsx("li", null, Product_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Add to wishlist",
      onClick: this.handleAddItemToWishlist.bind(this)
    }, Product_jsx("i", {
      className: "icon-heart"
    }))), Product_jsx("li", null, Product_jsx("a", {
      href: "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Compare",
      onClick: this.handleAddItemToCompare.bind(this)
    }, Product_jsx("i", {
      className: "icon-chart-bars"
    }))))), Product_jsx("div", {
      className: "ps-product__container"
    }, Product_jsx(link_default.a, {
      href: "/shop"
    }, Product_jsx("a", {
      className: "ps-product__vendor"
    }, "Young Shop")), Product_jsx("div", {
      className: "ps-product__content"
    }, Product_jsx(link_default.a, {
      href: "/product/[pid]",
      as: `/product/₦{product.id}`
    }, Product_jsx("a", {
      className: "ps-product__title"
    }, product.title)), Product_jsx("div", {
      className: "ps-product__rating"
    }, Product_jsx(Rating["a" /* default */], null), Product_jsx("span", null, product.ratingCount)), product.is_sale === true ? Product_jsx("p", {
      className: "ps-product__price sale"
    }, currency ? currency.symbol : '₦', Object(product_helper["b" /* formatCurrency */])(product.price), Product_jsx("del", {
      className: "ml-2"
    }, currency ? currency.symbol : '₦', Object(product_helper["b" /* formatCurrency */])(product.sale_price))) : Product_jsx("p", {
      className: "ps-product__price"
    }, currency ? currency.symbol : '₦', Object(product_helper["b" /* formatCurrency */])(product.price))), Product_jsx("div", {
      className: "ps-product__content hover"
    }, Product_jsx(link_default.a, {
      href: "/product/[pid]",
      as: `/product/₦{product.id}`
    }, Product_jsx("a", {
      className: "ps-product__title"
    }, product.title)), product.is_sale === true ? Product_jsx("p", {
      className: "ps-product__price sale"
    }, currency ? currency.symbol : '₦', Object(product_helper["b" /* formatCurrency */])(product.price), ' ', Product_jsx("del", {
      className: "ml-2"
    }, currency ? currency.symbol : '₦', product.sale_price)) : Product_jsx("p", {
      className: "ps-product__price"
    }, currency ? currency.symbol : '₦', Object(product_helper["b" /* formatCurrency */])(product.price)))), Product_jsx(external_antd_["Modal"], {
      title: product.title,
      centered: true,
      footer: null,
      width: 1024,
      onCancel: this.handleHideQuickView,
      visible: this.state.isQuickView
    }, Product_jsx(detail_ProductDetailQuickView, {
      product: product
    })));
  }

}

const Product_mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var products_Product = (Object(external_react_redux_["connect"])(Product_mapStateToProps)(Product_Product));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlaceDealOfDay.jsx
var MarketPlaceDealOfDay_jsx = external_react_default.a.createElement;

function MarketPlaceDealOfDay_extends() { MarketPlaceDealOfDay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MarketPlaceDealOfDay_extends.apply(this, arguments); }










class MarketPlaceDealOfDay_MarketPlaceDealOfDay extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      collections,
      collectionSlug
    } = this.props;
    const products = Object(product_helper["c" /* getColletionBySlug */])(collections, collectionSlug);
    return MarketPlaceDealOfDay_jsx("div", {
      className: "ps-deal-of-day"
    }, MarketPlaceDealOfDay_jsx("div", {
      className: "ps-container"
    }, MarketPlaceDealOfDay_jsx("div", {
      className: "ps-section__header"
    }, MarketPlaceDealOfDay_jsx("div", {
      className: "ps-block--countdown-deal"
    }, MarketPlaceDealOfDay_jsx("div", {
      className: "ps-block__left"
    }, MarketPlaceDealOfDay_jsx("h3", null, "Deal of the day")), MarketPlaceDealOfDay_jsx("div", {
      className: "ps-block__right"
    }, MarketPlaceDealOfDay_jsx("figure", null, MarketPlaceDealOfDay_jsx("figcaption", null, "End in:"), MarketPlaceDealOfDay_jsx(CountDownSimple["a" /* default */], {
      timeTillDate: "12 31 2020, 6:00 am",
      timeFormat: "MM DD YYYY, h:mm a"
    })))), MarketPlaceDealOfDay_jsx(link_default.a, {
      href: "/shop"
    }, MarketPlaceDealOfDay_jsx("a", null, "View all"))), MarketPlaceDealOfDay_jsx("div", {
      className: "ps-section__content"
    }, MarketPlaceDealOfDay_jsx(external_react_slick_default.a, MarketPlaceDealOfDay_extends({}, carousel_helpers["c" /* carouselStandard */], {
      className: "ps-carousel outside"
    }), products.map(product => MarketPlaceDealOfDay_jsx(products_Product, {
      product: product,
      key: product.id
    }))))));
  }

}

/* harmony default export */ var marketplace_MarketPlaceDealOfDay = (Object(external_react_redux_["connect"])(state => state.collection)(MarketPlaceDealOfDay_MarketPlaceDealOfDay));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlaceSiteFeatures.jsx
var MarketPlaceSiteFeatures_jsx = external_react_default.a.createElement;


const MarketPlaceSiteFeatures = () => MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-site-features"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "container"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block--site-features ps-block--site-features-2"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__item"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__left"
}, MarketPlaceSiteFeatures_jsx("i", {
  className: "icon-rocket"
})), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__right"
}, MarketPlaceSiteFeatures_jsx("h4", null, "Free Delivery"), MarketPlaceSiteFeatures_jsx("p", null, "For all oders over $99"))), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__item"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__left"
}, MarketPlaceSiteFeatures_jsx("i", {
  className: "icon-sync"
})), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__right"
}, MarketPlaceSiteFeatures_jsx("h4", null, "90 Days Return"), MarketPlaceSiteFeatures_jsx("p", null, "If goods have problems"))), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__item"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__left"
}, MarketPlaceSiteFeatures_jsx("i", {
  className: "icon-credit-card"
})), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__right"
}, MarketPlaceSiteFeatures_jsx("h4", null, "Secure Payment"), MarketPlaceSiteFeatures_jsx("p", null, "100% secure payment"))), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__item"
}, MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__left"
}, MarketPlaceSiteFeatures_jsx("i", {
  className: "icon-bubbles"
})), MarketPlaceSiteFeatures_jsx("div", {
  className: "ps-block__right"
}, MarketPlaceSiteFeatures_jsx("h4", null, "24/7 Support"), MarketPlaceSiteFeatures_jsx("p", null, "Dedicated support"))))));

/* harmony default export */ var marketplace_MarketPlaceSiteFeatures = (MarketPlaceSiteFeatures);
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MartketPlaceHomeBanner.jsx
var MartketPlaceHomeBanner_jsx = external_react_default.a.createElement;

function MartketPlaceHomeBanner_extends() { MartketPlaceHomeBanner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MartketPlaceHomeBanner_extends.apply(this, arguments); }






class MartketPlaceHomeBanner_MarketPlaceHomeBanner extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselSettings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: MartketPlaceHomeBanner_jsx(NextArrow["a" /* default */], null),
      prevArrow: MartketPlaceHomeBanner_jsx(PrevArrow["a" /* default */], null)
    };
    return MartketPlaceHomeBanner_jsx("section", {
      className: "ps-home-banner"
    }, MartketPlaceHomeBanner_jsx(external_react_slick_default.a, MartketPlaceHomeBanner_extends({}, carouselSettings, {
      className: "ps-carousel"
    }), MartketPlaceHomeBanner_jsx("div", {
      className: "ps-banner--market-1",
      style: {
        backgroundImage: `url(/static/img/slider/home-3/home-banner/1.jpg)`
      }
    }, MartketPlaceHomeBanner_jsx("img", {
      src: "/static/img/slider/home-3/home-banner/1.jpg",
      alt: "martfury"
    }), MartketPlaceHomeBanner_jsx("div", {
      className: "ps-banner__content"
    }, MartketPlaceHomeBanner_jsx("h5", null, "Mega Sale Nov 2019"), MartketPlaceHomeBanner_jsx("h3", null, "Double Combo With ", MartketPlaceHomeBanner_jsx("br", null), " The Body Shop"), MartketPlaceHomeBanner_jsx("p", null, "Sale up to ", MartketPlaceHomeBanner_jsx("strong", null, "50% Off ")), MartketPlaceHomeBanner_jsx("a", {
      className: "ps-btn",
      href: "#"
    }, "Shop Now"))), MartketPlaceHomeBanner_jsx("div", {
      className: "ps-banner--market-1",
      style: {
        backgroundImage: `url(/static/img/slider/home-3/home-banner/2.jpg)`
      }
    }, MartketPlaceHomeBanner_jsx("img", {
      src: "/static/img/slider/home-3/home-banner/2.jpg",
      alt: "martfury"
    }), MartketPlaceHomeBanner_jsx("div", {
      className: "ps-banner__content"
    }, MartketPlaceHomeBanner_jsx("h5", null, "Mega Sale Nov 2017"), MartketPlaceHomeBanner_jsx("h3", null, "IKEA Minimalist ", MartketPlaceHomeBanner_jsx("br", null), " Otoman"), MartketPlaceHomeBanner_jsx("p", null, "Discount ", MartketPlaceHomeBanner_jsx("strong", null, "50% Off ")), MartketPlaceHomeBanner_jsx("a", {
      className: "ps-btn",
      href: "#"
    }, "Shop Now")))));
  }

}

/* harmony default export */ var MartketPlaceHomeBanner = (MartketPlaceHomeBanner_MarketPlaceHomeBanner);
// EXTERNAL MODULE: ./store/collection/action.js
var collection_action = __webpack_require__("689t");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./wp-components/shared/mobile/WPHeaderMobile.jsx + 3 modules
var WPHeaderMobile = __webpack_require__("OElF");

// EXTERNAL MODULE: ./wp-components/shared/mobile/WPNavigationBottom.jsx + 4 modules
var WPNavigationBottom = __webpack_require__("lG4D");

// EXTERNAL MODULE: ./components/shared/footers/FooterFullwidth.jsx + 3 modules
var FooterFullwidth = __webpack_require__("lSLZ");

// EXTERNAL MODULE: ./wp-components/shared/WhatsappChat.jsx
var WhatsappChat = __webpack_require__("CHF/");

// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__("JNwe");

// EXTERNAL MODULE: ./wp-components/shared/headers/WPHeaderMarketPlace.jsx + 1 modules
var WPHeaderMarketPlace = __webpack_require__("3YpU");

// CONCATENATED MODULE: ./wp-components/layouts/WPLayoutHomeMarketPlace.jsx
var WPLayoutHomeMarketPlace_jsx = external_react_default.a.createElement;



 // import FooterDefault from '~/components/shared/footers/FooterDefault';






const WPLayoutHomeMarketPlace = ({
  children,
  title
}) => {
  let titleView;

  if (title !== undefined) {
    titleView = title + ' | ' + "Virem" + ' - ' + "Kwara Shop With Ease Online";
  } else {
    titleView = "Virem" + ' | ' + "Kwara Shop With Ease Online";
  }

  return WPLayoutHomeMarketPlace_jsx("div", {
    className: "virem"
  }, WPLayoutHomeMarketPlace_jsx(head_default.a, null, WPLayoutHomeMarketPlace_jsx("title", null, titleView)), WPLayoutHomeMarketPlace_jsx(WPHeaderMarketPlace["a" /* default */], null), WPLayoutHomeMarketPlace_jsx(WPHeaderMobile["a" /* default */], null), WPLayoutHomeMarketPlace_jsx(WPNavigationBottom["a" /* default */], null), children, WPLayoutHomeMarketPlace_jsx(Newletters["a" /* default */], {
    layout: "container"
  }), WPLayoutHomeMarketPlace_jsx(FooterFullwidth["a" /* default */], null), WPLayoutHomeMarketPlace_jsx(WhatsappChat["a" /* default */], null));
};

/* harmony default export */ var layouts_WPLayoutHomeMarketPlace = (WPLayoutHomeMarketPlace);
// CONCATENATED MODULE: ./pages/home/market-place.jsx
var market_place_jsx = external_react_default.a.createElement;










const HomeMarketPlacePage = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    const collectionsSlug = ['deal-of-the-day'];
    const categoriesSlug = ['clothing-and-parel', 'consumer-electrics', 'computers-and-technologies', 'garden-and-kitchen', 'health-and-beauty'];
    dispatch(Object(collection_action["d" /* getCollections */])(collectionsSlug));
    dispatch(Object(collection_action["b" /* getCategories */])(categoriesSlug));
  }, []);
  return market_place_jsx("div", {
    className: "site-content"
  }, market_place_jsx(layouts_WPLayoutHomeMarketPlace, {
    title: "Home Marketplace 1"
  }, market_place_jsx("main", {
    id: "homepage-3"
  }, market_place_jsx(MartketPlaceHomeBanner, null), market_place_jsx(marketplace_MarketPlaceSiteFeatures, null), market_place_jsx(MarketPlacePromotions, null), market_place_jsx(marketplace_MarketPlaceDealOfDay, {
    collectionSlug: "deal-of-the-day"
  }), market_place_jsx(marketplace_MarketPlaceProductBox, null))));
};

/* harmony default export */ var market_place = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(HomeMarketPlacePage));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iAvk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Rating = () => __jsx("span", {
  className: "ps-rating"
}, __jsx("i", {
  className: "fa fa-star"
}), __jsx("i", {
  className: "fa fa-star"
}), __jsx("i", {
  className: "fa fa-star"
}), __jsx("i", {
  className: "fa fa-star"
}), __jsx("i", {
  className: "fa fa-star-o"
}));

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),

/***/ "lG4D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__("y2E8");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/shared/panel/PanelMenu.jsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  SubMenu
} = external_antd_["Menu"];

class PanelMenu_PanelMenu extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    _defineProperty(this, "state", {
      openKeys: []
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return __jsx(external_antd_["Menu"], {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      className: "menu--mobile-2"
    }, menu["menuPrimary"].menu_1.map(item => {
      if (item.subMenu) {
        return __jsx(SubMenu, {
          key: item.text,
          title: __jsx(link_default.a, {
            href: item.url
          }, __jsx("a", null, item.text))
        }, item.subMenu.map(subItem => __jsx(external_antd_["Menu"].Item, {
          key: subItem.text
        }, __jsx(link_default.a, {
          href: subItem.url
        }, __jsx("a", null, subItem.text)))));
      } else if (item.megaContent) {
        return __jsx(SubMenu, {
          key: item.text,
          title: __jsx(link_default.a, {
            href: item.url
          }, __jsx("a", null, item.text))
        }, item.megaContent.map(megaItem => __jsx(SubMenu, {
          key: megaItem.heading,
          title: __jsx("span", null, megaItem.heading)
        }, megaItem.megaItems.map(megaSubItem => __jsx(external_antd_["Menu"].Item, {
          key: megaSubItem.text
        }, __jsx(link_default.a, {
          href: item.url
        }, __jsx("a", null, megaSubItem.text)))))));
      } else {
        return __jsx(external_antd_["Menu"].Item, {
          key: item.text
        }, item.type === 'dynamic' ? __jsx(link_default.a, {
          href: `${item.url}/[pid]`,
          as: `${item.url}/${item.endPoint}`
        }, "l", __jsx("a", null, item.text)) : __jsx(link_default.a, {
          href: item.url,
          as: item.alias
        }, __jsx("a", null, item.text)));
      }
    }));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var panel_PanelMenu = (Object(external_react_redux_["connect"])(mapStateToProps)(PanelMenu_PanelMenu));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/product/action.js
var action = __webpack_require__("ypqY");

// EXTERNAL MODULE: ./components/elements/products/ProductSearchResult.jsx
var ProductSearchResult = __webpack_require__("qQUb");

// EXTERNAL MODULE: ./repositories/WP/WPProductRepository.js
var WPProductRepository = __webpack_require__("T98Y");

// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__("iAvk");

// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__("OqP1");

// EXTERNAL MODULE: ./utilities/app-settings.js
var app_settings = __webpack_require__("BVei");

// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__("pU5j");

// CONCATENATED MODULE: ./components/elements/products/MobileProductSearch.jsx
var MobileProductSearch_jsx = external_react_default.a.createElement;









function MobileProductResult({
  product
}) {
  return MobileProductSearch_jsx("div", {
    className: "ps-product ps-product--wide ps-product--search-result"
  }, MobileProductSearch_jsx("div", {
    className: "ps-product__thumbnail"
  }, MobileProductSearch_jsx(link_default.a, {
    href: "/product/[pid]",
    as: `/product/${product.id}`
  }, MobileProductSearch_jsx("a", null, MobileProductSearch_jsx("img", {
    src: product.images.length > 1 ? `${product.images[1].src}` : `${product.images[0].src}`,
    alt: product.name
  })))), MobileProductSearch_jsx("div", {
    className: "ps-product__content"
  }, MobileProductSearch_jsx(link_default.a, {
    href: "/product/[pid]",
    as: `/product/${product.id}`
  }, MobileProductSearch_jsx("a", {
    className: "ps-product__title"
  }, product.name)), MobileProductSearch_jsx("div", {
    className: "ps-product__rating"
  }, MobileProductSearch_jsx(Rating["a" /* default */], null), MobileProductSearch_jsx("span", null, product.ratingCount)), product.is_sale === true ? MobileProductSearch_jsx("p", {
    className: "ps-product__price sale"
  }, '₦', Object(product_helper["b" /* formatCurrency */])(product.price), MobileProductSearch_jsx("del", {
    className: "ml-1"
  }, '₦', Object(product_helper["b" /* formatCurrency */])(product.sale_price))) : MobileProductSearch_jsx("p", {
    className: "ps-product__price"
  }, '₦', Object(product_helper["b" /* formatCurrency */])(product.price))));
}

/* harmony default export */ var MobileProductSearch = (MobileProductResult);
// CONCATENATED MODULE: ./components/shared/panel/PanelSearch.jsx
var PanelSearch_jsx = external_react_default.a.createElement;









function PanelSearch() {
  const {
    0: formLoad,
    1: setFormLoad
  } = Object(external_react_["useState"])(false);
  const {
    0: keyword,
    1: setKeyword
  } = Object(external_react_["useState"])('');
  const {
    0: productSearch,
    1: setProductSearch
  } = Object(external_react_["useState"])([]);

  const handleSubmit = e => {
    e.preventDefault();
    setFormLoad(true);

    if (keyword.trim() !== '') {
      router_default.a.push(`/search?keyword=${keyword}`);
    }
  };

  const handleSearch = e => {
    setKeyword(e.target.value);
    setFormLoad(true);

    if (e.target.value !== '') {
      const skeyword = e.target.value;
      const queries = {
        per_page: 5,
        search: skeyword
      };
      const products = WPProductRepository["a" /* default */].getProducts(queries);
      products.then(result => {
        console.log(result);
        setProductSearch(result.items);
        console.log(productSearch);
        setFormLoad(false);
      });
    } else {
      setFormLoad(false);
    }
  };

  return PanelSearch_jsx("div", {
    className: "ps-panel__search-results"
  }, PanelSearch_jsx("form", {
    className: "ps-form--search-mobile position-relative",
    action: "/",
    method: "get",
    onSubmit: e => handleSubmit(e)
  }, PanelSearch_jsx("div", {
    className: "form-group--nest"
  }, PanelSearch_jsx("input", {
    className: "form-control",
    type: "text",
    placeholder: "Search something...",
    onChange: e => handleSearch(e)
  }), formLoad && PanelSearch_jsx("span", {
    className: "mobile ps-form__action"
  }, PanelSearch_jsx(external_antd_["Spin"], {
    size: "medium"
  })), PanelSearch_jsx("button", null, PanelSearch_jsx("i", {
    className: "icon-magnifier"
  })))), productSearch.length >= 1 && productSearch.map(product => PanelSearch_jsx(MobileProductSearch, {
    product: product,
    key: product.id
  })));
}

/* harmony default export */ var panel_PanelSearch = (Object(external_react_redux_["connect"])(state => state.product)(PanelSearch));
// CONCATENATED MODULE: ./components/shared/panel/PanelCategories.jsx
var PanelCategories_jsx = external_react_default.a.createElement;


 // import categories from '../../../public/static/data/static-categories.json';

const {
  SubMenu: PanelCategories_SubMenu
} = external_antd_["Menu"];

const PanelCategories = props => {
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const {
    0: openKeys,
    1: setOpenkeys
  } = Object(external_react_["useState"])(['sub1']);

  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);

    if (undefined.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenkeys({
        openKeys
      });
    } else {
      setOpenkeys({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  return PanelCategories_jsx(external_antd_["Menu"], {
    mode: "inline",
    openKeys: openKeys,
    onOpenChange: onOpenChange
  }, props.categories.filter(cat => cat.parent == 0).map(category => PanelCategories_jsx(external_antd_["Menu"].Item, {
    key: category.id
  }, PanelCategories_jsx(link_default.a, {
    href: `/shop/category/${category.id}`
  }, PanelCategories_jsx("a", {
    onClick: props.handleDrawerClose
  }, category.name)))));
};

/* harmony default export */ var panel_PanelCategories = (PanelCategories);
// CONCATENATED MODULE: ./wp-components/shared/mobile/WPNavigationBottom.jsx
var WPNavigationBottom_jsx = external_react_default.a.createElement;








const DrawerMobile = ({
  closeEvent,
  visibleStatus,
  children
}) => {
  return WPNavigationBottom_jsx(external_antd_["Drawer"], {
    className: "ps-panel--mobile",
    placement: "right",
    closable: false,
    onClose: closeEvent,
    visible: visibleStatus
  }, children);
};

const WPNavigationBottom = () => {
  const {
    0: categories,
    1: setCategories
  } = Object(external_react_["useState"])([]);

  async function getCategoryItems() {
    let req1 = await fetch(`https://virem.learnmur.com.ng/wp-json/wc/v3/products/categories?consumer_key=ck_c668c1163da91eb89e1259706dd1946c453fcfe6&consumer_secret=cs_bf89ac8ae81243d599f93324c4ad517990e6d02f&per_page=100`);
    let req2 = await fetch(`https://virem.learnmur.com.ng/wp-json/wc/v3/products/categories?consumer_key=ck_c668c1163da91eb89e1259706dd1946c453fcfe6&consumer_secret=cs_bf89ac8ae81243d599f93324c4ad517990e6d02f&per_page=100&page=2`);
    let catreq1 = await req1.json();
    let catreq2 = await req2.json();
    const cat = catreq1.concat(catreq2); // console.log({cat})

    setCategories(cat); // console.log({categories})

    return cat;
  }

  Object(external_react_["useEffect"])(() => {
    getCategoryItems(); // console.log("M")
  }, []);
  const {
    0: activeDrawer,
    1: setActiveDrawer
  } = Object(external_react_["useState"])({
    menu: false,
    cart: false,
    search: false,
    categories: false
  });
  const {
    0: isDrawerShow,
    1: setIsDrawerShow
  } = Object(external_react_["useState"])(false);

  const handleDrawerClose = () => {
    setIsDrawerShow(false);
    setActiveDrawer({
      menu: false,
      cart: false,
      search: false,
      categories: false
    });
  };

  const handleShowMenuDrawer = () => {
    setIsDrawerShow(true);
    setActiveDrawer({
      menu: !activeDrawer.menu,
      cart: false,
      search: false,
      categories: false
    });
  };

  const handleShowSearchDrawer = () => {
    setActiveDrawer({
      menu: false,
      cart: false,
      search: !activeDrawer.search,
      categories: false
    });
    setIsDrawerShow(true);
  };

  const handleShowCategoriesDrawer = () => {
    setActiveDrawer({
      menu: false,
      cart: false,
      search: false,
      categories: !activeDrawer.categories
    });
    setIsDrawerShow(true);
  }; // Views


  const menuDrawerView = WPNavigationBottom_jsx("div", {
    className: "ps-panel--wrapper"
  }, WPNavigationBottom_jsx("div", {
    className: "ps-panel__header"
  }, WPNavigationBottom_jsx("h3", null, "Menu"), WPNavigationBottom_jsx("span", {
    className: "ps-panel__close",
    onClick: handleDrawerClose
  }, WPNavigationBottom_jsx("i", {
    className: "icon-cross"
  }))), WPNavigationBottom_jsx("div", {
    className: "ps-panel__content"
  }, WPNavigationBottom_jsx(panel_PanelMenu, null)));

  const categoriesDrawerView = WPNavigationBottom_jsx("div", {
    className: "ps-panel--wrapper"
  }, WPNavigationBottom_jsx("div", {
    className: "ps-panel__header"
  }, WPNavigationBottom_jsx("h3", null, "Categories"), WPNavigationBottom_jsx("span", {
    className: "ps-panel__close",
    onClick: handleDrawerClose
  }, WPNavigationBottom_jsx("i", {
    className: "icon-cross"
  }))), WPNavigationBottom_jsx("div", {
    className: "ps-panel__content"
  }, WPNavigationBottom_jsx(panel_PanelCategories, {
    handleDrawerClose: handleDrawerClose,
    categories: categories
  })));

  const searchDrawerView = WPNavigationBottom_jsx("div", {
    className: "ps-panel--wrapper"
  }, WPNavigationBottom_jsx("div", {
    className: "ps-panel__header"
  }, WPNavigationBottom_jsx("h3", null, "Search"), WPNavigationBottom_jsx("span", {
    className: "ps-panel__close",
    onClick: handleDrawerClose
  }, WPNavigationBottom_jsx("i", {
    className: "icon-cross"
  }))), WPNavigationBottom_jsx("div", {
    className: "ps-panel__content"
  }, WPNavigationBottom_jsx(panel_PanelSearch, null)));

  let drawerView;

  if (activeDrawer.menu === true) {
    drawerView = menuDrawerView;
  }

  if (activeDrawer.search === true) {
    drawerView = searchDrawerView;
  }

  if (activeDrawer.categories === true) {
    drawerView = categoriesDrawerView;
  }

  return WPNavigationBottom_jsx("div", {
    className: "navigation--list"
  }, WPNavigationBottom_jsx(DrawerMobile, {
    visibleStatus: isDrawerShow
  }, drawerView), WPNavigationBottom_jsx("div", {
    className: "navigation__content"
  }, WPNavigationBottom_jsx("a", {
    className: `navigation__item ${activeDrawer.menu === true && 'active'}`,
    onClick: handleShowMenuDrawer
  }, WPNavigationBottom_jsx("i", {
    className: "icon-menu"
  }), WPNavigationBottom_jsx("span", null, " Menu")), WPNavigationBottom_jsx("a", {
    className: `navigation__item ${activeDrawer.categories === true && 'active'}`,
    onClick: handleShowCategoriesDrawer
  }, WPNavigationBottom_jsx("i", {
    className: "icon-list4"
  }), WPNavigationBottom_jsx("span", null, " Categories")), WPNavigationBottom_jsx("a", {
    className: `navigation__item ${activeDrawer.search === true && 'active'}`,
    onClick: handleShowSearchDrawer
  }, WPNavigationBottom_jsx("i", {
    className: "icon-magnifier"
  }), WPNavigationBottom_jsx("span", null, " Search")), WPNavigationBottom_jsx(link_default.a, {
    href: "/account/shopping-cart"
  }, WPNavigationBottom_jsx("a", {
    className: "navigation__item"
  }, WPNavigationBottom_jsx("i", {
    className: "icon-bag2"
  }), WPNavigationBottom_jsx("span", null, " Cart")))));
};

/* harmony default export */ var mobile_WPNavigationBottom = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(state => state.setting)(WPNavigationBottom));

/***/ }),

/***/ "lSLZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterWidgets.jsx
var __jsx = external_react_default.a.createElement;



const FooterWidgets = () => __jsx("div", {
  className: "ps-footer__widgets"
}, __jsx("aside", {
  className: "widget widget_footer widget_contact-us"
}, __jsx("h4", {
  className: "widget-title"
}, "Contact us"), __jsx("div", {
  className: "widget_content"
}, __jsx("p", null, "Call us 24/7"), __jsx("h3", null, "+234807200976"), __jsx("p", null, "M.J Shopping Complex beside First Bank, Ajase Ipo road. Along Offa Garage. Ilorin Kwara State. ", __jsx("br", null), __jsx("a", {
  href: "mailto:contact@martfury.co"
}, "contact@virem.com.ng")), __jsx("ul", {
  className: "ps-list--social"
}, __jsx("li", null, __jsx("a", {
  className: "facebook",
  href: "#"
}, __jsx("i", {
  className: "fa fa-facebook"
}))), __jsx("li", null, __jsx("a", {
  className: "twitter",
  href: "#"
}, __jsx("i", {
  className: "fa fa-twitter"
}))), __jsx("li", null, __jsx("a", {
  className: "google-plus",
  href: "#"
}, __jsx("i", {
  className: "fa fa-google-plus"
}))), __jsx("li", null, __jsx("a", {
  className: "instagram",
  href: "#"
}, __jsx("i", {
  className: "fa fa-instagram"
})))))), __jsx("aside", {
  className: "widget widget_footer"
}, __jsx("h4", {
  className: "widget-title"
}, "About Virem"), __jsx("ul", {
  className: "ps-list--link"
}, __jsx("li", null, __jsx(link_default.a, {
  href: "/about-us"
}, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/contact-us"
}, __jsx("a", null, "Contact Us"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/faqs"
}, __jsx("a", null, "FAQs"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/terms-and-conditions"
}, __jsx("a", null, "Term & Conditions"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/privacy-policy"
}, __jsx("a", null, "Privacy Policy"))))), __jsx("aside", {
  className: "widget widget_footer"
}, __jsx("h4", {
  className: "widget-title"
}, "Account"), __jsx("ul", {
  className: "ps-list--link"
}, __jsx("li", null, __jsx(link_default.a, {
  href: "/account/dashboard"
}, __jsx("a", null, "My Dashboard"))), __jsx("li", null, __jsx("a", {
  href: "https://vendor.virem.com.ng",
  target: "_blank",
  rel: "noreferrer"
}, "Become a Vendor")), __jsx("li", null, __jsx(link_default.a, {
  href: "/account/order-tracking"
}, __jsx("a", null, "My Orders"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/page/contact-us"
}, __jsx("a", null, "Track My Orders"))))), __jsx("aside", {
  className: "widget widget_footer"
}, __jsx("h4", {
  className: "widget-title"
}, "Helpful Links"), __jsx("ul", {
  className: "ps-list--link"
}, __jsx("li", null, __jsx(link_default.a, {
  href: "/blog"
}, __jsx("a", null, "Our Blog"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/vendors"
}, __jsx("a", null, "Find Stores"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/shop"
}, __jsx("a", null, "All Products"))))), __jsx("aside", {
  className: "widget widget_footer"
}, __jsx("h4", {
  className: "widget-title"
}, "Shopping"), __jsx("ul", {
  className: "ps-list--link"
}, __jsx("li", null, __jsx(link_default.a, {
  href: "/shop"
}, __jsx("a", null, "Deals of the Day"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/shop/category/379"
}, __jsx("a", null, "Free Delivery"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/shop/category/236"
}, __jsx("a", null, "Foods"))), __jsx("li", null, __jsx(link_default.a, {
  href: "/shop/category/22"
}, __jsx("a", null, "Fashion"))))));

/* harmony default export */ var modules_FooterWidgets = (FooterWidgets);
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterLinks.jsx
var FooterLinks_jsx = external_react_default.a.createElement;


const Links = {
  consumerElectric: [{
    text: 'Air Conditioners',
    url: '/shop'
  }, {
    text: 'Audios & Theaters',
    url: '/shop'
  }, {
    text: 'Car Electronics',
    url: '/shop'
  }, {
    text: 'Office Electronics',
    url: '/shop'
  }, {
    text: 'TV Televisions',
    url: '/shop'
  }, {
    text: 'Washing Machines',
    url: '/shop'
  }],
  clothingAndApparel: [{
    text: 'Printers',
    url: '/shop'
  }, {
    text: 'Projectors',
    url: '/shop'
  }, {
    text: 'Scanners',
    url: '/shop'
  }, {
    text: 'Store &amp; Business',
    url: '/shop'
  }, {
    text: '4K Ultra HD TVs',
    url: '/shop'
  }, {
    text: 'LED TVs',
    url: '/shop'
  }, {
    text: 'OLED TVs',
    url: '/shop'
  }],
  gardenAndKitchen: [{
    text: 'Cookware',
    url: '/shop'
  }, {
    text: 'Decoration',
    url: '/shop'
  }, {
    text: 'Furniture',
    url: '/shop'
  }, {
    text: 'Garden Tools',
    url: '/shop'
  }, {
    text: 'Garden Equipments',
    url: '/shop'
  }, {
    text: 'Powers And Hand Tools',
    url: '/shop'
  }, {
    text: 'Utensil & Gadget',
    url: '/shop'
  }],
  healthAndBeauty: [{
    text: 'Hair Care',
    url: '/shop'
  }, {
    text: 'Decoration',
    url: '/shop'
  }, {
    text: 'Makeup',
    url: '/shop'
  }, {
    text: 'Body Shower',
    url: '/shop'
  }, {
    text: 'Skin Care',
    url: '/shop'
  }, {
    text: 'Cologine',
    url: '/shop'
  }, {
    text: 'Perfume',
    url: '/shop'
  }],
  jewelryAndWatch: [{
    text: 'Necklace',
    url: '/shop'
  }, {
    text: 'Pendant',
    url: '/shop'
  }, {
    text: 'Diamond Ring',
    url: '/shop'
  }, {
    text: 'Sliver Earing',
    url: '/shop'
  }, {
    text: 'Leather Watcher',
    url: '/shop'
  }, {
    text: 'Gucci',
    url: '/shop'
  }],
  computerAndTechnology: [{
    text: 'Desktop PC',
    url: '/shop'
  }, {
    text: 'Laptop',
    url: '/shop'
  }, {
    text: 'Smartphones',
    url: '/shop'
  }, {
    text: 'Tablet',
    url: '/shop'
  }, {
    text: 'Game Controller',
    url: '/shop'
  }, {
    text: 'Audio & Video',
    url: '/shop'
  }, {
    text: 'Wireless Speaker',
    url: '/shop'
  }]
};

const FooterLinks = () => FooterLinks_jsx("div", {
  className: "ps-footer__links"
}, FooterLinks_jsx("p", null, FooterLinks_jsx("strong", null, "Consumer Electric:"), Links.consumerElectric.map(item => FooterLinks_jsx(link_default.a, {
  href: item.url,
  key: item.text
}, FooterLinks_jsx("a", null, item.text)))), FooterLinks_jsx("p", null, FooterLinks_jsx("strong", null, "Clothing & Apparel:"), Links.clothingAndApparel.map(item => FooterLinks_jsx(link_default.a, {
  href: item.url,
  key: item.text
}, FooterLinks_jsx("a", null, item.text)))), FooterLinks_jsx("p", null, FooterLinks_jsx("strong", null, "Home, Garden & Kitchen:"), Links.gardenAndKitchen.map(item => FooterLinks_jsx(link_default.a, {
  href: item.url,
  key: item.text
}, FooterLinks_jsx("a", null, item.text)))), FooterLinks_jsx("p", null, FooterLinks_jsx("strong", null, "Health & Beauty:"), Links.healthAndBeauty.map(item => FooterLinks_jsx(link_default.a, {
  href: item.url,
  key: item.text
}, FooterLinks_jsx("a", null, item.text)))), FooterLinks_jsx("p", null, FooterLinks_jsx("strong", null, "Jewelry & Watches:"), Links.jewelryAndWatch.map(item => FooterLinks_jsx(link_default.a, {
  href: item.url,
  key: item.text
}, FooterLinks_jsx("a", null, item.text)))), FooterLinks_jsx("p", null, FooterLinks_jsx("strong", null, "Computer & Technologies:"), Links.computerAndTechnology.map(item => FooterLinks_jsx(link_default.a, {
  href: item.url,
  key: item.text
}, FooterLinks_jsx("a", null, item.text)))));

/* harmony default export */ var modules_FooterLinks = (FooterLinks);
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCopyright.jsx
var FooterCopyright_jsx = external_react_default.a.createElement;


const FooterCopyright = () => FooterCopyright_jsx("div", {
  className: "ps-footer__copyright"
}, FooterCopyright_jsx("p", null, "\xA9 ", new Date().getFullYear(), " Virem. All Rights Reserved | Crafted by ", FooterCopyright_jsx("a", {
  className: "hov",
  href: "https://foverotechnologies.com",
  target: "_blank",
  rel: "noreferrer dofollow"
}, "Fovero Digital Technologies")), FooterCopyright_jsx("p", null, FooterCopyright_jsx("span", null, "Payment Methods:"), FooterCopyright_jsx("a", {
  href: "#"
}, FooterCopyright_jsx("img", {
  src: "/static/img/payment.webp",
  alt: "Payment Methods"
}))));

/* harmony default export */ var modules_FooterCopyright = (FooterCopyright);
// CONCATENATED MODULE: ./components/shared/footers/FooterFullwidth.jsx
var FooterFullwidth_jsx = external_react_default.a.createElement;





const FooterFullwidth = () => FooterFullwidth_jsx("footer", {
  className: "ps-footer bg-dark text-white"
}, FooterFullwidth_jsx("div", {
  className: "ps-container"
}, FooterFullwidth_jsx(modules_FooterWidgets, null), FooterFullwidth_jsx(modules_FooterCopyright, null)));

/* harmony default export */ var footers_FooterFullwidth = __webpack_exports__["a"] = (FooterFullwidth);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

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

/***/ "qQUb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iAvk");
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OqP1");
/* harmony import */ var _utilities_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("BVei");
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("pU5j");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class ProductResult extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      product,
      currency
    } = this.props;
    return __jsx("div", {
      className: "ps-product ps-product--wide ps-product--search-result"
    }, __jsx("div", {
      className: "ps-product__thumbnail"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`
    }, __jsx("a", null, __jsx("img", {
      src: _utilities_app_settings__WEBPACK_IMPORTED_MODULE_6__[/* isStaticData */ "a"] === true ? product.thumbnail.url : `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_7__[/* baseUrl */ "a"]}${product.thumbnail.url}`,
      alt: "martfury"
    })))), __jsx("div", {
      className: "ps-product__content"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`
    }, __jsx("a", {
      className: "ps-product__title"
    }, product.title)), __jsx("div", {
      className: "ps-product__rating"
    }, __jsx(_Rating__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), __jsx("span", null, product.ratingCount)), product.is_sale === true ? __jsx("p", {
      className: "ps-product__price sale"
    }, currency ? currency.symbol : '₦', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatCurrency */ "b"])(product.price), __jsx("del", {
      className: "ml-1"
    }, currency ? currency.symbol : '₦', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatCurrency */ "b"])(product.sale_price))) : __jsx("p", {
      className: "ps-product__price"
    }, currency ? currency.symbol : '₦', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatCurrency */ "b"])(product.price))));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ProductResult));

/***/ }),

/***/ "s/7F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_setting_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZzbE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CurrencyDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeCurrency", (e, currency) => {
      e.preventDefault();
      this.props.dispatch(Object(_store_setting_action__WEBPACK_IMPORTED_MODULE_3__[/* changeCurrency */ "b"])(currency));
    });
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    const {
      currency
    } = this.props;
    return __jsx("div", {
      className: "ps-dropdown"
    }, currency ? __jsx("a", {
      href: "/",
      onClick: e => e.preventDefault()
    }, currency.text) : '', __jsx("ul", {
      className: "ps-dropdown-menu"
    }, __jsx("li", null, __jsx("a", {
      href: "/",
      onClick: e => this.handleChangeCurrency(e, {
        symbol: '$',
        text: 'USD'
      })
    }, "USD")), __jsx("li", null, __jsx("a", {
      href: "/",
      onClick: e => this.handleChangeCurrency(e, {
        symbol: '€',
        text: 'EURO'
      })
    }, "EURO")), __jsx("li", null, __jsx("a", {
      href: "/",
      onClick: e => this.handleChangeCurrency(e, {
        symbol: '£',
        text: 'GBP'
      })
    }, "GBP"))));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CurrencyDropdown));

/***/ }),

/***/ "s5ri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NextArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return __jsx("button", {
    className: `slick-arrow slick-next ${className}`,
    onClick: onClick
  }, icon ? __jsx("i", {
    className: icon
  }) : __jsx("i", {
    className: "icon-chevron-right"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (NextArrow);

/***/ }),

/***/ "t0Be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0wdU");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iAvk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class InformationQuickView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddItemToCart", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      let tempProduct = product;
      tempProduct.quantity = this.state.quantity;
      this.props.dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_3__[/* addItem */ "b"])(product));
    });

    _defineProperty(this, "handleIncreaseItemQty", e => {
      e.preventDefault();
      this.setState({
        quantity: this.state.quantity + 1
      });
    });

    _defineProperty(this, "handleDecreaseItemQty", e => {
      e.preventDefault();

      if (this.state.quantity > 1) {
        this.setState({
          quantity: this.state.quantity - 1
        });
      }
    });

    this.state = {
      quantity: 1
    };
  }

  render() {
    const {
      product
    } = this.props;
    return __jsx("div", {
      className: "ps-product__info"
    }, __jsx("h1", null, product.title), __jsx("div", {
      className: "ps-product__meta"
    }, __jsx("p", null, "Brand:", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", {
      className: "ml-2 text-capitalize"
    }, product.vendor))), __jsx("div", {
      className: "ps-product__rating"
    }, __jsx(_Rating__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), __jsx("span", null, "(1 review)"))), product.is_sale === true ? __jsx("h4", {
      className: "ps-product__price sale"
    }, "$", product.price, " ", __jsx("del", null, "$", product.sale_price)) : __jsx("h4", {
      className: "ps-product__price"
    }, "$", product.price), __jsx("div", {
      className: "ps-product__desc"
    }, __jsx("p", null, "Sold By:", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, __jsx("strong", null, " ", product.vendor)))), __jsx("ul", {
      className: "ps-list--dot"
    }, __jsx("li", null, "Unrestrained and portable active stereo speaker"), __jsx("li", null, " Free from the confines of wires and chords"), __jsx("li", null, " 20 hours of portable capabilities"), __jsx("li", null, "Double-ended Coil Cord with 3.5mm Stereo Plugs Included"), __jsx("li", null, " 3/4\u2033 Dome Tweeters: 2X and 4\u2033 Woofer: 1X"))), __jsx("div", {
      className: "ps-product__shopping"
    }, __jsx("figure", null, __jsx("figcaption", null, "Quantity"), __jsx("div", {
      className: "form-group--number"
    }, __jsx("button", {
      className: "up",
      onClick: this.handleIncreaseItemQty.bind(this)
    }, __jsx("i", {
      className: "fa fa-plus"
    })), __jsx("button", {
      className: "down",
      onClick: this.handleDecreaseItemQty.bind(this)
    }, __jsx("i", {
      className: "fa fa-minus"
    })), __jsx("input", {
      className: "form-control",
      type: "text",
      placeholder: this.state.quantity,
      disabled: true
    }))), __jsx("a", {
      className: "ps-btn ps-btn--black",
      href: "#",
      onClick: this.handleAddItemToCart.bind(this)
    }, "Add to cart"), __jsx("a", {
      className: "ps-btn",
      href: "#"
    }, "Buy Now")), __jsx("div", {
      className: "ps-product__specification"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/page/blank"
    }, __jsx("a", {
      className: "report"
    }, "Report Abuse")), __jsx("p", null, __jsx("strong", null, "SKU:"), " SF1133569600-1"), __jsx("p", {
      className: "categories"
    }, __jsx("strong", null, " Categories:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, "Consumer Electronics")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, "Refrigerator")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, "Babies & Moms"))), __jsx("p", {
      className: "tags"
    }, __jsx("strong", null, " Tags:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, "sofa")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, "technologies")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shop"
    }, __jsx("a", null, "wireless")))), __jsx("div", {
      className: "ps-product__sharing"
    }, __jsx("a", {
      className: "facebook",
      href: "#"
    }, __jsx("i", {
      className: "fa fa-facebook"
    })), __jsx("a", {
      className: "twitter",
      href: "#"
    }, __jsx("i", {
      className: "fa fa-twitter"
    })), __jsx("a", {
      className: "google",
      href: "#"
    }, __jsx("i", {
      className: "fa fa-google-plus"
    })), __jsx("a", {
      className: "linkedin",
      href: "#"
    }, __jsx("i", {
      className: "fa fa-linkedin"
    })), __jsx("a", {
      className: "instagram",
      href: "#"
    }, __jsx("i", {
      className: "fa fa-instagram"
    }))));
  }

}

const mapStateToProps = state => {
  return state.cart;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(InformationQuickView));

/***/ }),

/***/ "w957":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/elements/menu/MegaMenu.jsx
var __jsx = external_react_default.a.createElement;



class MegaMenu_Menu extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuData
    } = this.props;
    return __jsx("li", {
      className: menuData.megaContent ? 'menu-item-has-children has-mega-menu' : ''
    }, menuData.type === 'dynamic' ? __jsx(link_default.a, {
      href: `${menuData.url}/[pid]`,
      as: `${menuData.url}/${menuData.endPoint}`
    }, __jsx("a", null, menuData.text)) : __jsx(link_default.a, {
      href: menuData.url,
      as: menuData.url
    }, __jsx("a", null, menuData.text)), __jsx("div", {
      className: "mega-menu"
    }, menuData && menuData.megaContent.map(megaItem => __jsx("div", {
      className: "mega-menu__column",
      key: megaItem.heading
    }, __jsx("h4", null, megaItem.heading), __jsx("ul", {
      className: "mega-menu__list"
    }, megaItem.megaItems.map(megaSubItem => __jsx("li", {
      key: megaSubItem.text
    }, megaSubItem.type === 'dynamic' ? __jsx(link_default.a, {
      href: `${megaSubItem.url}/[pid]`,
      as: `${megaSubItem.url}/${megaSubItem.endPoint}`
    }, __jsx("a", null, megaSubItem.text)) : __jsx(link_default.a, {
      href: megaSubItem.url,
      as: megaSubItem.url
    }, __jsx("a", null, megaSubItem.text)))))))));
  }

}

/* harmony default export */ var MegaMenu = (MegaMenu_Menu);
// CONCATENATED MODULE: ./components/elements/menu/MenuDropdown.jsx
var MenuDropdown_jsx = external_react_default.a.createElement;



class MenuDropdown_MenuDropdown extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuData
    } = this.props;
    return MenuDropdown_jsx("li", {
      className: menuData.subMenu ? 'menu-item-has-children dropdown' : ''
    }, menuData.type === 'dynamic' ? MenuDropdown_jsx(link_default.a, {
      href: `${menuData.url}/[pid]`,
      as: `${menuData.url}/${menuData.endPoint}`
    }, MenuDropdown_jsx("a", null, menuData.text)) : MenuDropdown_jsx(link_default.a, {
      href: menuData.url,
      as: menuData.alias
    }, MenuDropdown_jsx("a", null, menuData.text)), menuData.subMenu ? MenuDropdown_jsx("ul", {
      className: menuData.subClass
    }, menuData.subMenu.map((subMenuItem, index) => MenuDropdown_jsx(MenuDropdown_MenuDropdown, {
      menuData: subMenuItem,
      key: index
    }))) : '');
  }

}

/* harmony default export */ var menu_MenuDropdown = (MenuDropdown_MenuDropdown);
// CONCATENATED MODULE: ./components/elements/menu/Menu.jsx
var Menu_jsx = external_react_default.a.createElement;





const Menu_Menu = ({
  data,
  className
}) => Menu_jsx("ul", {
  className: className
}, data && data.map(item => {
  if (item.subMenu) {
    return Menu_jsx(menu_MenuDropdown, {
      menuData: item,
      key: item.text
    });
  } else if (item.megaContent) {
    return Menu_jsx(MegaMenu, {
      menuData: item,
      key: item.text
    });
  } else {
    return Menu_jsx("li", {
      key: item.text
    }, item.type === 'dynamic' ? Menu_jsx(link_default.a, {
      href: `${item.url}/[pid]`,
      as: `${item.url}/${item.endPoint}`
    }, Menu_jsx("a", null, item.text)) : Menu_jsx(link_default.a, {
      href: item.url,
      as: item.alias
    }, Menu_jsx("a", null, item.text)));
  }
}));

/* harmony default export */ var menu_Menu = __webpack_exports__["a"] = (Menu_Menu);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y2E8":
/***/ (function(module) {

module.exports = JSON.parse("{\"menuPrimary\":{\"menu_1\":[{\"text\":\"Home\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"Shop For Products\",\"url\":\"/shop\"},{\"text\":\"Food and Drinks\",\"url\":\"/shop/category/236\"},{\"text\":\"Fashion\",\"url\":\"/shop/category/22\"},{\"text\":\"Beauty and Body Care\",\"url\":\"/shop/category/25\"}]},{\"text\":\"About Virem\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"About Us\",\"url\":\"/about-us\"},{\"text\":\"Contact Us\",\"url\":\"/contact-us\"},{\"text\":\"Terms and Conditions\",\"url\":\"/terms-and-conditions\"},{\"text\":\"Privacy Policy\",\"url\":\"/privacy-policy\"},{\"text\":\"Careers\",\"url\":\"/careers\"}]},{\"text\":\"My Account\",\"url\":\"/account/dashboard\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"My Dashboard\",\"url\":\"/account/dashboard\"},{\"text\":\"Become a Vendor\",\"url\":\"/vendors/become-a-vendor\"},{\"text\":\"My Orders\",\"url\":\"/account/orders\"},{\"text\":\"Track my orders\",\"url\":\"/account/order-tracking\"}]},{\"text\":\"Shopping\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"Deals of the day\",\"url\":\"/shop\"},{\"text\":\"Free Delivery\",\"url\":\"/shop\"},{\"text\":\"Foods\",\"url\":\"/shop/category/236\"},{\"text\":\"Fashion\",\"url\":\"/shop/category/22\"}]},{\"text\":\"Helpful Links\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"Our Blog\",\"url\":\"/blog\"},{\"text\":\"Find Stores\",\"url\":\"/vendors\"},{\"text\":\"All Products\",\"url\":\"/shop\"}]}]},\"WPMenu\":[{\"text\":\"Browse Products\",\"url\":\"/shop\"},{\"text\":\"Food & Drinks\",\"url\":\"/shop/category/236\"},{\"text\":\"Fashion\",\"url\":\"/shop/category/22\"},{\"text\":\"Beauty & Body Care\",\"url\":\"/shop/category/25\"},{\"text\":\"Blog\",\"url\":\"/blog\"}],\"product_categories\":[{\"icon\":\"icon-laundry\",\"text\":\"Computers and Electronics\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Laptops\",\"megaItems\":[{\"text\":\"Laptops\",\"url\":\"/shop/category/26\"},{\"text\":\"Apple\",\"url\":\"/shop/category/291\"}]},{\"heading\":\"Accessories\",\"megaItems\":[{\"text\":\"Laptop Accessories\",\"url\":\"/shop/category/292\"},{\"text\":\"Gadgets\",\"url\":\"/shop/category/23\"},{\"text\":\"Cameras\",\"url\":\"/shop/category/92\"}]}]},{\"icon\":\"icon-laundry\",\"text\":\"Phones and Tablets\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Phones and Tablets Categories\",\"megaItems\":[{\"text\":\"Phones\",\"url\":\"/shop/category/240\"},{\"text\":\"Smartphones\",\"url\":\"/shop/category/66\"},{\"text\":\"Ear Piece\",\"url\":\"/shop/category/289\"},{\"text\":\"Phone Accessories\",\"url\":\"/shop/category/283\"}]}]},{\"icon\":\"icon-laundry\",\"text\":\"Fashion\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Women's Fashion\",\"megaItems\":[{\"text\":\"Fashion\",\"url\":\"/shop/category/22\"},{\"text\":\"Women's Clothing\",\"url\":\"/shop/category/195\"},{\"text\":\"Jewelry\",\"url\":\"/shop/category/39\"},{\"text\":\"Hair\",\"url\":\"/shop/category/163\"},{\"text\":\"Ladies Shoes\",\"url\":\"/shop/category/369\"},{\"text\":\"Beauty\",\"url\":\"/shop/category/25\"},{\"text\":\"Bags\",\"url\":\"/shop/category/111\"}]},{\"heading\":\"Men's Fashion\",\"megaItems\":[{\"text\":\"Fashion\",\"url\":\"/shop/category/22\"},{\"text\":\"Trousers\",\"url\":\"/shop/category/325\"},{\"text\":\"Palm Slippers\",\"url\":\"/shop/category/320\"}]},{\"heading\":\"Unisex\",\"megaItems\":[{\"text\":\"Watches\",\"url\":\"/shop/category/194\"},{\"text\":\"Fashion\",\"url\":\"/shop/category/22\"},{\"text\":\"Clothing\",\"url\":\"/shop/category/35\"},{\"text\":\"T-Shirts\",\"url\":\"/shop/category/150\"},{\"text\":\"Shoes\",\"url\":\"/shop/category/47\"}]}]},{\"icon\":\"icon-laundry\",\"text\":\"Foods\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Foods Categories\",\"megaItems\":[{\"text\":\"Foods\",\"url\":\"/shop/category/236\"},{\"text\":\"Fast Foods\",\"url\":\"/shop/category/229\"},{\"text\":\"Groceries\",\"url\":\"/shop/category/173\"}]}]},{\"icon\":\"icon-diamond2\",\"text\":\"Electronics\",\"url\":\"/shop/category/567\"},{\"icon\":\"icon-laundry\",\"text\":\"Other Categories\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Beauty, Health and Personal Care\",\"megaItems\":[{\"text\":\"Health\",\"url\":\"/shop/category/24\"},{\"text\":\"Suppliments\",\"url\":\"/shop/category/261\"},{\"text\":\"Body Soaps\",\"url\":\"/shop/category/264\"},{\"text\":\"Condiments\",\"url\":\"/shop/category/226\"},{\"text\":\"Fragrance\",\"url\":\"/shop/category/306\"},{\"text\":\"Skin Care\",\"url\":\"/shop/category/255\"},{\"text\":\"Disinfectants\",\"url\":\"/shop/category/271\"},{\"text\":\"Toothpaste\",\"url\":\"/shop/category/273\"}]},{\"heading\":\"Sports and Fitness\",\"megaItems\":[{\"text\":\"Welness and Fitness\",\"url\":\"/shop/category/179\"}]},{\"heading\":\"Others\",\"megaItems\":[{\"text\":\"Security\",\"url\":\"/shop/category/91\"},{\"text\":\"Free Delivery\",\"url\":\"/shop/category/379\"},{\"text\":\"Others\",\"url\":\"/shop/category/15\"}]}]}]}");

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