"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatextra_app"]("src_app_views_products_index_tsx",{

/***/ "./src/app/views/products/products.tsx":
/*!*********************************************!*\
  !*** ./src/app/views/products/products.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.module.css */ \"./src/app/views/products/products.module.css\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ \"./src/app/store/hooks.tsx\");\n/* harmony import */ var _store_cart_cartReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cart/cartReducer */ \"./src/app/store/cart/cartReducer.tsx\");\n\n\n\n\nvar Products = function Products(_ref) {\n  var productList = _ref.productList;\n  var dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n  var onclick = function onclick(name) {\n    //setName(name)\n  };\n  var addToCart = function addToCart(product) {\n    console.log(product);\n    var item = {\n      id: product.id,\n      price: product.price,\n      key: product.id,\n      qty: 1,\n      total: product.price * product * 1\n    };\n    //dispatch(addItem(item))\n    dispatch((0,_store_cart_cartReducer__WEBPACK_IMPORTED_MODULE_3__.addItem)(product));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, productList.map(function (p) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _products_module_css__WEBPACK_IMPORTED_MODULE_1__.image_wrapper\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _products_module_css__WEBPACK_IMPORTED_MODULE_1__.image,\n      onClick: function onClick() {\n        return onclick('d1');\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"/assets/images/img1.jpg\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _products_module_css__WEBPACK_IMPORTED_MODULE_1__.product_title\n    }, p.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _products_module_css__WEBPACK_IMPORTED_MODULE_1__.product_price\n    }, \"$\", p.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _products_module_css__WEBPACK_IMPORTED_MODULE_1__.product_selection,\n      onClick: function onClick() {\n        return addToCart(p);\n      }\n    }, \"ADD TO CART\"));\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\n\n//# sourceURL=webpack://xtra-app/./src/app/views/products/products.tsx?");

/***/ })

});