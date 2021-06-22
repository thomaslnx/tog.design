webpackHotUpdate("main",{

/***/ "./src/pages/Cart/styles.js":
/*!**********************************!*\
  !*** ./src/pages/Cart/styles.js ***!
  \**********************************/
/*! exports provided: Container, CartItems, Items, Resume, Content, Articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItems", function() { return CartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articles", function() { return Articles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].main`
  display: flex;
  width: 100%;
  height: 100%;
`;
const CartItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 130px;

  .logo {
    img {
      width: 180px;
      height: 60px;
      margin: 32px 0 0 20px;
    }
  }

  .title {
    text-align: center;
    font-family: var(--forgot-password-link);
    font-size: 28px;
    margin: 107px 0 56px 0;
  }
`;
const Items = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;

  header {
    width: 800px;

    span:nth-child(n + 1) {
      width: 320px;
    }
  }
`;
const Resume = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 64px;
  background-color: var(--aside-dashboard-menu);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 158px;
    margin-top: 27px;
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 102px;

  span {
    font-family: var(--forgot-password-link);
    font-size: 24px;
  }

  .cart-resume {
    display: block;

    label {
      .discount-label {
        position: relative;
        background-color: var(--aside-dashboard-menu);
        font-family: var(--placeholder-font);
        top: 72px;
        font-size: 14px;
        left: 14px;
        padding: 0 5px;
      }
    }

    input {
      width: 100%;
      height: 45px;
      margin-top: 62px;
      border: 1px solid var(--gray-cart-color);
      border-radius: 4px;
      background-color: var(--aside-dashboard-menu);
      padding: 0 16px;
      box-sizing: border-box;

      &::placeholder {
        font-family: var(--placeholder-font);
        font-size: 16px;
        color: var(--placeholder-color);
      }
    }
  }
  .subtotal {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 32px;
    border-bottom: 2px solid #707070;

    .values {
      display: flex;
      justify-content: space-between;
    }

    .title {
      font-family: var(--forgot-password-link);
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .value {
      font-family: var(--forgot-password-link);
      font-weight: 300;
      font-size: 16px;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .buy-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;

    button {
      height: 50px;
      border-radius: 30px;
      font-family: var(--forgot-password-link);
      font-weight: 400;
      font-size: 15px;
      margin-top: 65px;
    }

    .checkout {
      background-color: var(--checkout-button-color);
      border: 2px solid var(--checkout-button-color);
      color: var(--items-background);
    }

    .keep-buying {
      border: 2px solid var(--checkout-button-color);
      color: var(--checkout-button-color);
      font-weight: 500;
      margin-top: 32px;
    }
  }
`;
const Articles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.016d7af1f04e8778733c.hot-update.js.map