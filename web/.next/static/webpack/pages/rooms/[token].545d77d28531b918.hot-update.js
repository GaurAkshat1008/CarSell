"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rooms/[token]",{

/***/ "./src/pages/rooms/[token].tsx":
/*!*************************************!*\
  !*** ./src/pages/rooms/[token].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Programming_Programming_new_new_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Programming_Programming_new_new_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Programming_Programming_new_new_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_inputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputField */ \"./src/components/inputField.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/wrapper */ \"./src/components/wrapper.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Room = function(param) {\n    var token = param.token;\n    var ref14, ref1, ref2, ref3, ref4, ref5, ref6, ref7;\n    _s();\n    // console.log(token);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref8 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useMeQuery)(), 1), meData = ref8[0];\n    var ref9 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useRoomQuery)({\n        variables: {\n            token: token\n        }\n    }), 1), roomData = ref9[0];\n    var ref10 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useDeleteRoomMutation)(), 2), deletRoom = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isAdmited = ref11[0], setIsAdmited = ref11[1];\n    var ref12 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useMatchPasswordMutation)(), 2), pass = ref12[1];\n    var ref13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isDeleted = ref13[0], setIsDeleted = ref13[1];\n    var body = null;\n    if (!meData) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: \"pls login\"\n        }, void 0, false);\n    }\n    if (meData.fetching || roomData.fetching) {} else if (((ref14 = meData.data) === null || ref14 === void 0 ? void 0 : (ref1 = ref14.me) === null || ref1 === void 0 ? void 0 : ref1.id) !== ((ref2 = roomData.data) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.room) === null || ref3 === void 0 ? void 0 : ref3.owner) && isAdmited === false) {\n        var _this1 = _this;\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n                initialValues: {\n                    password: \"\"\n                },\n                onSubmit: function() {\n                    var _ref = _asyncToGenerator(D_Programming_Programming_new_new_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n                        var ref, bool;\n                        return D_Programming_Programming_new_new_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    ;\n                                    _ctx.next = 3;\n                                    return pass({\n                                        token: token,\n                                        password: values.password\n                                    });\n                                case 3:\n                                    bool = _ctx.sent;\n                                    // console.log(bool);\n                                    setIsAdmited((ref = bool.data) === null || ref === void 0 ? void 0 : ref.matchPassword);\n                                case 5:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }));\n                    return function(values) {\n                        return _ref.apply(this, arguments);\n                    };\n                }(),\n                children: function(props) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_inputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {\n                                name: \"password\",\n                                placeholder: \"Enter a password\",\n                                label: \"Password\",\n                                type: 'password'\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                                color: \"blue.100\",\n                                cursor: \"pointer\",\n                                mt: 2,\n                                direction: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                    mt: 5,\n                                    colorScheme: \"teal\",\n                                    isLoading: props.isSubmitting,\n                                    type: \"submit\",\n                                    w: '30%',\n                                    justifyContent: 'center',\n                                    alignSelf: 'end',\n                                    children: \"enter room\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this1);\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    } else if (((ref4 = meData.data) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.me) === null || ref5 === void 0 ? void 0 : ref5.id) !== ((ref6 = roomData.data) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.room) === null || ref7 === void 0 ? void 0 : ref7.owner) && isAdmited === true && isDeleted === false) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_wrapper__WEBPACK_IMPORTED_MODULE_7__.Wrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                href: '/',\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                    children: \"Leave\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this);\n    } else {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n            justifyContent: 'space-between',\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                    border: '1px',\n                    p: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                            children: \"Room details\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                            children: [\n                                \"Room Name :\",\n                                roomData.data.room.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 90,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                    onClick: function() {\n                        deletRoom({\n                            id: roomData.data.room.id\n                        });\n                        setIsDeleted(true);\n                        router.push('/');\n                    },\n                    backgroundColor: 'red.400',\n                    variant: 'o',\n                    children: \"delete room\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, _this);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        variant: \"regular\",\n        children: body\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\new\\\\new\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, _this));\n};\n_s(Room, \"lJ4lNXAeK2jtPnMLyN45MmJQugo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useRoomQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useDeleteRoomMutation,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_8__.useMatchPasswordMutation\n    ];\n});\n_c = Room;\nRoom.getInitialProps = function(param) {\n    var query = param.query;\n    return {\n        token: query.token\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDckI7QUFFRTtBQUNQO0FBQ3dCO0FBQ1I7QUFDRTtBQUNpRTtBQUNuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLEdBQUssQ0FBQ2dCLElBQUksR0FBZ0MsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLO1FBcUJ0Q0MsS0FBVyxRQUFhQyxJQUFhLFFBNEN0Q0QsSUFBVyxRQUFhQyxJQUFhOztJQWhFOUMsRUFBc0I7SUFDdEIsR0FBSyxDQUFDQyxNQUFNLEdBQUdkLHNEQUFTO0lBQ3hCLEdBQUssQ0FBWU8sSUFBWSxrQkFBWkEsOERBQVUsUUFBcEJLLE1BQU0sR0FBSUwsSUFBWTtJQUM3QixHQUFLLENBQWNDLElBSWpCLGtCQUppQkEsZ0VBQVksQ0FBQyxDQUFDO1FBQy9CTyxTQUFTLEVBQUMsQ0FBQztZQUNWSixLQUFLLEVBQUNBLEtBQUs7UUFDWixDQUFDO0lBQ0gsQ0FBQyxPQUpNRSxRQUFRLEdBQUlMLElBSWpCO0lBQ0YsR0FBSyxDQUFpQkgsS0FBdUIsa0JBQXZCQSx5RUFBcUIsUUFBbENXLFNBQVMsR0FBSVgsS0FBdUI7SUFDN0MsR0FBSyxDQUE2QkosS0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBekNnQixTQUFTLEdBQWtCaEIsS0FBZSxLQUEvQmlCLFlBQVksR0FBSWpCLEtBQWU7SUFDakQsR0FBSyxDQUFZSyxLQUEwQixrQkFBMUJBLDRFQUF3QixRQUFoQ2EsSUFBSSxHQUFJYixLQUEwQjtJQUMzQyxHQUFLLENBQTZCTCxLQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF6Q21CLFNBQVMsR0FBa0JuQixLQUFlLEtBQS9Cb0IsWUFBWSxHQUFJcEIsS0FBZTtJQUNqRCxHQUFHLENBQUNx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UUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSztJQUM3QixNQUFNLENBQUMsQ0FBQztRQUNOL0MsS0FBSyxFQUFFK0MsS0FBSyxDQUFDL0MsS0FBSztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jvb21zL1t0b2tlbl0udHN4PzZhMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnB1dEZpZWxkXCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VEZWxldGVSb29tTXV0YXRpb24sIHVzZU1hdGNoUGFzc3dvcmRNdXRhdGlvbiwgdXNlTWVRdWVyeSwgdXNlUm9vbVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBSb29tOiBOZXh0UGFnZTx7IHRva2VuOiBzdHJpbmcgfT4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW21lRGF0YV0gPSB1c2VNZVF1ZXJ5KClcclxuICBjb25zdCBbcm9vbURhdGFdID0gdXNlUm9vbVF1ZXJ5KHtcclxuICAgIHZhcmlhYmxlczp7XHJcbiAgICAgdG9rZW46dG9rZW5cclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IFssIGRlbGV0Um9vbV0gPSB1c2VEZWxldGVSb29tTXV0YXRpb24oKVxyXG4gIGNvbnN0IFtpc0FkbWl0ZWQsIHNldElzQWRtaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbLCBwYXNzXSA9IHVzZU1hdGNoUGFzc3dvcmRNdXRhdGlvbigpXHJcbiAgY29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGxldCBib2R5ID0gbnVsbFxyXG4gIGlmKCFtZURhdGEpe1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPD5wbHMgbG9naW48Lz5cclxuICAgIClcclxuICB9XHJcbiAgaWYobWVEYXRhLmZldGNoaW5nIHx8IHJvb21EYXRhLmZldGNoaW5nKXtcclxuXHJcbiAgfSBlbHNlIGlmKG1lRGF0YS5kYXRhPy5tZT8uaWQgIT09IHJvb21EYXRhLmRhdGE/LnJvb20/Lm93bmVyICYmIGlzQWRtaXRlZCA9PT0gZmFsc2Upe1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3twYXNzd29yZDpcIlwifX1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib29sID0gYXdhaXQgcGFzcyh7dG9rZW46dG9rZW4sIHBhc3N3b3JkOnZhbHVlcy5wYXNzd29yZH0pXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvb2wpO1xyXG4gICAgICAgICAgICBzZXRJc0FkbWl0ZWQoYm9vbC5kYXRhPy5tYXRjaFBhc3N3b3JkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHsocHJvcHMpID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9eydwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBjb2xvcj17XCJibHVlLjEwMFwifVxyXG4gICAgICAgICAgICAgIGN1cnNvcj17XCJwb2ludGVyXCJ9XHJcbiAgICAgICAgICAgICAgbXQ9ezJ9XHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBtdD17NX1cclxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e3Byb3BzLmlzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgdz17JzMwJSd9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17J2NlbnRlcid9XHJcbiAgICAgICAgICAgICAgICBhbGlnblNlbGY9eydlbmQnfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgZW50ZXIgcm9vbVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH0gIFxyXG4gIGVsc2UgaWYgKG1lRGF0YS5kYXRhPy5tZT8uaWQgIT09IHJvb21EYXRhLmRhdGE/LnJvb20/Lm93bmVyICYmIGlzQWRtaXRlZCA9PT0gdHJ1ZSAmJiBpc0RlbGV0ZWQgPT09IGZhbHNlKXtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICB7LyogPGRpdj50b2tlbiBpczoge3Rva2VufSA8L2Rpdj4gKi99XHJcbiAgICAgIDxOZXh0TGluayBocmVmPXsnLyd9PlxyXG4gICAgICA8QnV0dG9uPkxlYXZlPC9CdXR0b24+XHJcbiAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIClcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXsnc3BhY2UtYmV0d2Vlbid9PlxyXG4gICAgICA8Qm94IGJvcmRlcj17JzFweCd9IHA9ezR9PlxyXG4gICAgICAgIDxUZXh0PlJvb20gZGV0YWlsczwvVGV4dD5cclxuICAgICAgICA8VGV4dD5Sb29tIE5hbWUgOntyb29tRGF0YS5kYXRhLnJvb20ubmFtZX08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+e1xyXG4gICAgICAgICAgICBkZWxldFJvb20oe2lkOnJvb21EYXRhLmRhdGEucm9vbS5pZH0pXHJcbiAgICAgICAgICAgIHNldElzRGVsZXRlZCh0cnVlKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXsncmVkLjQwMCd9XHJcbiAgICAgICAgICB2YXJpYW50PXsnbyd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgZGVsZXRlIHJvb21cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB2YXJpYW50PVwicmVndWxhclwiPlxyXG4gICAge2JvZHl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuUm9vbS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBxdWVyeS50b2tlbiBhcyBzdHJpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsIkZvcm0iLCJGb3JtaWsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIklucHV0RmllbGQiLCJMYXlvdXQiLCJXcmFwcGVyIiwidXNlRGVsZXRlUm9vbU11dGF0aW9uIiwidXNlTWF0Y2hQYXNzd29yZE11dGF0aW9uIiwidXNlTWVRdWVyeSIsInVzZVJvb21RdWVyeSIsIk5leHRMaW5rIiwiUm9vbSIsInRva2VuIiwibWVEYXRhIiwicm9vbURhdGEiLCJyb3V0ZXIiLCJ2YXJpYWJsZXMiLCJkZWxldFJvb20iLCJpc0FkbWl0ZWQiLCJzZXRJc0FkbWl0ZWQiLCJwYXNzIiwiaXNEZWxldGVkIiwic2V0SXNEZWxldGVkIiwiYm9keSIsImZldGNoaW5nIiwiZGF0YSIsIm1lIiwiaWQiLCJyb29tIiwib3duZXIiLCJpbml0aWFsVmFsdWVzIiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImJvb2wiLCJtYXRjaFBhc3N3b3JkIiwicHJvcHMiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsInR5cGUiLCJjb2xvciIsImN1cnNvciIsIm10IiwiZGlyZWN0aW9uIiwiY29sb3JTY2hlbWUiLCJpc0xvYWRpbmciLCJpc1N1Ym1pdHRpbmciLCJ3IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnblNlbGYiLCJocmVmIiwiYm9yZGVyIiwicCIsIm9uQ2xpY2siLCJwdXNoIiwiYmFja2dyb3VuZENvbG9yIiwidmFyaWFudCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/rooms/[token].tsx\n");

/***/ })

});