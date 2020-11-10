webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/StoryList.js":
/*!***************************************!*\
  !*** ./pages/components/StoryList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Natalia\\Documents\\Front End Development\\NEXT.JS\\Next.js Udemy Course\\hacker-next\\pages\\components\\StoryList.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-3353760960" + " " + "story-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-3353760960" + " " + "story",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "jsx-3353760960" + " " + "story-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }
    }, __jsx("a", {
      href: story.url,
      className: "jsx-3353760960",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 40
      }
    }, story.title)), __jsx("div", {
      className: "jsx-3353760960" + " " + "story-details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "jsx-3353760960",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 16
      }
    }, __jsx("a", {
      className: "jsx-3353760960",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 20
      }
    }, story.comments_count || 0, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3353760960",
    __self: _this
  }, ".story-list.jsx-3353760960{padding:0 1em;}.story.jsx-3353760960{padding:1em 0;}.story-title.jsx-3353760960{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3353760960 a.jsx-3353760960{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3353760960 a.jsx-3353760960:hover,.story-details.jsx-3353760960 a.jsx-3353760960:hover{-webkit-text-decoration:initial;text-decoration:initial;}.story-details.jsx-3353760960{font-size:0.8rem;font-weight:bold;}.story-details.jsx-3353760960 span.jsx-3353760960{margin-right:1em;}.story-details.jsx-3353760960 a.jsx-3353760960{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmF0YWxpYVxcRG9jdW1lbnRzXFxGcm9udCBFbmQgRGV2ZWxvcG1lbnRcXE5FWFQuSlNcXE5leHQuanMgVWRlbXkgQ291cnNlXFxoYWNrZXItbmV4dFxccGFnZXNcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBRzJCLEFBSUEsQUFJQyxBQU1KLEFBSWEsQUFHUCxBQUlBLEFBR0gsV0FiTyxHQWR6QixBQUlBLEFBd0J5QixDQXBCTCxFQWFDLEFBSXJCLGNBaEJhLEdBYWIsTUFad0IsZ0JBUXhCLElBUEEsQ0FJQSxHQWNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTmF0YWxpYVxcRG9jdW1lbnRzXFxGcm9udCBFbmQgRGV2ZWxvcG1lbnRcXE5FWFQuSlNcXE5leHQuanMgVWRlbXkgQ291cnNlXFxoYWNrZXItbmV4dFxccGFnZXNcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBTdG9yeUxpc3QgPSAoe3N0b3JpZXN9KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cclxuICAgICAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5XCIga2V5PXtzdG9yeS5pZH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPjxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT48L2gyPiBcclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgIDxhPntzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50czwvYT5cclxuICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zdG9yeS1saXN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3Rvcnkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdG9yeS10aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnktdGl0bGUgYXtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIsIC5zdG9yeS1kZXRhaWxzIGE6aG92ZXIgIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnktZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0b3J5LWRldGFpbHMgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjAwZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgIFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Natalia\\\\Documents\\\\Front End Development\\\\NEXT.JS\\\\Next.js Udemy Course\\\\hacker-next\\\\pages\\\\components\\\\StoryList.js */"));
};

_c = StoryList;
/* harmony default export */ __webpack_exports__["default"] = (StoryList);

var _c;

$RefreshReg$(_c, "StoryList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyJdLCJuYW1lcyI6WyJTdG9yeUxpc3QiLCJzdG9yaWVzIiwibWFwIiwic3RvcnkiLCJpZCIsInVybCIsInRpdGxlIiwicG9pbnRzIiwiY29tbWVudHNfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxTQUNkO0FBQUEsd0NBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUFDLEtBQUs7QUFBQSxXQUNkO0FBQXVCLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQUFsQztBQUFBLDBDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVEO0FBQUEsMENBQWMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRCO0FBQUcsVUFBSSxFQUFFRCxLQUFLLENBQUNFLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCRixLQUFLLENBQUNHLEtBQTNCLENBQTVCLENBRkMsRUFHRDtBQUFBLDBDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPSCxLQUFLLENBQUNJLE1BQU4sSUFBZ0IsQ0FBdkIsWUFESixFQUVJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLHNCQUFlSixLQUFLLENBQUNDLEVBQXJCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxLQUFLLENBQUNLLGNBQU4sSUFBd0IsQ0FBNUIsY0FESixDQUZKLENBSEMsQ0FEYztBQUFBLEdBQWpCLENBREw7QUFBQTtBQUFBO0FBQUEsMmlIQURjO0FBQUEsQ0FBbEI7O0tBQU1SLFM7QUFzRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kMzEwMmM1NWU0ZjIyMmMyOGUzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7c3Rvcmllc30pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxyXG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlcIiBrZXk9e3N0b3J5LmlkfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+PGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPjwvaDI+IFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxyXG4gICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnN0b3J5LWxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdG9yeSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0b3J5LXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdG9yeS10aXRsZSBhe1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciwgLnN0b3J5LWRldGFpbHMgYTpob3ZlciAge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2MDBmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==