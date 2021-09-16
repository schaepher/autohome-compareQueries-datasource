define(["@grafana/data","app/plugins/sdk","lodash","moment"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./config_ctrl.ts":
/*!************************!*\
  !*** ./config_ctrl.ts ***!
  \************************/
/*! exports provided: CompareQueriesConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareQueriesConfigCtrl", function() { return CompareQueriesConfigCtrl; });
var CompareQueriesConfigCtrl =
/** @class */
function () {
  function CompareQueriesConfigCtrl() {}

  CompareQueriesConfigCtrl.templateUrl = 'partials/config.html';
  return CompareQueriesConfigCtrl;
}();



/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: CompareQueriesDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareQueriesDatasource", function() { return CompareQueriesDatasource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);

 // eslint-disable-line no-restricted-imports



var CompareQueriesDatasource =
/** @class */
function () {
  CompareQueriesDatasource.$inject = ["$q", "datasourceSrv", "templateSrv"];

  /** @ngInject */
  function CompareQueriesDatasource($q, datasourceSrv, templateSrv) {
    this.units = ['y', 'M', 'w', 'd', 'h', 'm', 's'];
    this.datasourceSrv = datasourceSrv;
    this.$q = $q;
    this.templateSrv = templateSrv;
  }

  CompareQueriesDatasource.prototype.testDatasource = function () {
    return new Promise(function (resolve, reject) {
      resolve({
        status: 'success',
        message: 'Compare Query Source is working correctly',
        title: 'Success'
      });
    });
  }; // Called once per panel (graph)


  CompareQueriesDatasource.prototype.query = function (options) {
    var _this = this;

    var sets = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(options.targets, 'datasource');

    var querys = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(options.targets, 'refId');

    var promises = [];

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(sets, function (targets, dsName) {
      var opt = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(options);

      var promise = _this.datasourceSrv.get(dsName).then(function (ds) {
        if (ds.meta.id === _this.meta.id) {
          return _this._compareQuery(options, targets, querys, _this);
        } else {
          opt.targets = targets;
          var result_1 = ds.query(opt);
          return typeof result_1.toPromise === 'function' ? result_1.toPromise() : result_1;
        }
      });

      promises.push(promise);
    });

    var result = this.$q.all(promises).then(function (results) {
      return {
        data: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(results, function (result) {
          var data = result.data;

          if (data) {
            data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(result.data, function (datum) {
              return datum.hide !== true;
            });
          }

          return data;
        }), function (result) {
          return result !== undefined && result !== null;
        }))
      };
    });
    return result;
  };

  CompareQueriesDatasource.prototype._compareQuery = function (options, targets, querys, _this) {
    var comparePromises = []; //console.log('_compareQuery targets', targets)

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(targets, function (target) {
      var query = target.query;

      if (query === null || query === '' || querys[query] === null) {
        return;
      }

      var queryObj = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(querys[query][0]);

      queryObj.hide = false;

      if (queryObj) {
        var compareDsName = queryObj.datasource;

        if (target.timeShifts && target.timeShifts.length > 0) {
          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(target.timeShifts, function (timeShift) {
            var timeShiftValue;
            var timeShiftAlias;
            var aliasType = timeShift.aliasType || 'suffix';
            var delimiter = timeShift.delimiter || '_';

            var comparePromise = _this.datasourceSrv.get(compareDsName).then(function (compareDs) {
              if (compareDs.meta.id === _this.meta.id) {
                return {
                  data: []
                };
              }

              timeShiftValue = _this.templateSrv.replace(timeShift.value, options.scopedVars);
              timeShiftAlias = _this.templateSrv.replace(timeShift.alias, options.scopedVars) || timeShiftValue;

              if (timeShiftValue === null || timeShiftValue === '' || typeof timeShiftValue === 'undefined') {
                return {
                  data: []
                };
              }

              var compareOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(options);

              compareOptions.range.from = _this.addTimeShift(compareOptions.range.from, timeShiftValue);
              compareOptions.range.to = _this.addTimeShift(compareOptions.range.to, timeShiftValue);
              compareOptions.range.raw = {
                from: compareOptions.range.from,
                to: compareOptions.range.to
              };
              compareOptions.rangeRaw = compareOptions.range.raw;
              compareOptions.scopedVars['__from'] = {
                text: '__from',
                value: compareOptions.range.from
              };
              compareOptions.scopedVars['__to'] = {
                text: '__to',
                value: compareOptions.range.to
              };
              queryObj.refId = queryObj.refId + '_' + timeShiftValue;
              compareOptions.targets = [queryObj];
              compareOptions.requestId = compareOptions.requestId + '_' + timeShiftValue;
              var compareResult = compareDs.query(compareOptions);
              return typeof compareResult.toPromise === 'function' ? compareResult.toPromise() : compareResult;
            }).then(function (compareResult) {
              var data = compareResult.data;
              data.forEach(function (line) {
                if (line.target) {
                  // if old time series format
                  line.target = _this.generalAlias(line.target, timeShiftAlias, aliasType, delimiter);
                  typeof line.title !== 'undefined' && line.title !== null && (line.title = _this.generalAlias(line.title, timeShiftAlias, aliasType, delimiter));
                } else if (line.fields) {
                  //else if new data frames format with multiple series
                  line.fields.forEach(function (field) {
                    if (field.name) {
                      field.name = _this.generalAlias(field.name, timeShiftAlias, aliasType, delimiter);
                    }

                    if (field.config && field.config.displayName) {
                      field.config.displayName = _this.generalAlias(field.config.displayName, timeShiftAlias, aliasType, delimiter);
                    }

                    if (field.config && field.config.displayNameFromDS) {
                      field.config.displayNameFromDS = _this.generalAlias(field.config.displayNameFromDS, timeShiftAlias, aliasType, delimiter);
                    }
                  });
                } else if (line.columns) {
                  line.columns.forEach(function (field) {
                    if (field.text) {
                      field.text = _this.generalAlias(field.text, timeShiftAlias, aliasType, delimiter);
                    }
                  });
                }

                if (target.process) {
                  var timeShift_ms_1 = _this.parseShiftToMs(timeShiftValue);

                  if (line.type === 'table') {
                    if (line.rows) {
                      line.rows.forEach(function (row) {
                        row[0] = row[0] + timeShift_ms_1;
                      });
                    }
                  } else {
                    if (line.datapoints) {
                      // if old time series format
                      line.datapoints.forEach(function (datapoint) {
                        datapoint[1] = datapoint[1] + timeShift_ms_1;
                      });
                    } else if (line.fields && line.fields.length > 0) {
                      //else if new data frames format
                      var unshiftedTimeField = line.fields.find(function (field) {
                        return field.type === 'time';
                      });

                      if (unshiftedTimeField) {
                        var timeField = {
                          name: unshiftedTimeField.name,
                          type: unshiftedTimeField.type,
                          config: unshiftedTimeField.config || {},
                          labels: unshiftedTimeField.labels,
                          values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__["ArrayVector"]()
                        };

                        for (var i = 0; i < line.length; i++) {
                          timeField.values.set(i, unshiftedTimeField.values.get(i) + timeShift_ms_1);
                        }

                        line.fields[0] = timeField;
                      }
                    } else if (line.rows && line.rows.length > 0) {
                      line.rows.forEach(function (datapoint) {
                        datapoint[0] = new Date(Date.parse(datapoint[0]) + timeShift_ms_1);
                      });
                    } else {
                      console.log('unsupport line format');
                    }
                  }
                }

                line.hide = target.hide;
              });
              return {
                data: data
              };
            });

            comparePromises.push(comparePromise);
          });
        }
      }
    });

    return this.$q.all(comparePromises).then(function (results) {
      return {
        data: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(results, function (result) {
          var data = result.data;

          if (data) {
            data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(result.data, function (datum) {
              return datum.hide !== true;
            });
          }

          return data;
        }), function (result) {
          return result !== undefined && result !== null;
        }))
      };
    });
  };

  CompareQueriesDatasource.prototype.generalAlias = function (original, alias, aliasType, delimiter) {
    switch (aliasType) {
      case 'prefix':
        return alias + delimiter + original;

      case 'absolute':
        return alias;

      case 'suffix':
      default:
        return original + delimiter + alias;
    }
  };

  CompareQueriesDatasource.prototype.parseShiftToMs = function (timeShift) {
    var timeShiftObj = this.parseTimeShift(timeShift);

    if (!timeShiftObj) {
      return;
    }

    var num = 0 - timeShiftObj.num;
    var unit = timeShiftObj.unit;

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(this.units, unit)) {
      return undefined;
    } else {
      var curTime = moment__WEBPACK_IMPORTED_MODULE_1___default()();
      var shiftTime = curTime.clone().add(num, unit);
      return curTime.valueOf() - shiftTime.valueOf();
    }
  };

  CompareQueriesDatasource.prototype.parseTimeShift = function (timeShift) {
    var dateTime = timeShift;
    var len = timeShift.length;
    var i = 0;

    while (i < len && !isNaN(dateTime.charAt(i))) {
      i++;

      if (i > 10) {
        return undefined;
      }
    }

    var num = parseInt(dateTime.substring(0, i), 10);
    var unit = dateTime.charAt(i);
    return {
      num: num,
      unit: unit
    };
  };

  CompareQueriesDatasource.prototype.addTimeShift = function (time, timeShift) {
    var timeShiftObj = this.parseTimeShift(timeShift);

    if (!timeShiftObj) {
      return;
    }

    var num = 0 - timeShiftObj.num;
    var unit = timeShiftObj.unit;

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(this.units, unit)) {
      return undefined;
    } else {
      var curTime = time;
      var shiftTime = curTime.clone().add(num, unit);
      return shiftTime;
    }
  };

  return CompareQueriesDatasource;
}();



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: Datasource, QueryCtrl, ConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return _datasource__WEBPACK_IMPORTED_MODULE_0__["CompareQueriesDatasource"]; });

/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_ctrl */ "./query_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryCtrl", function() { return _query_ctrl__WEBPACK_IMPORTED_MODULE_1__["CompareQueriesQueryCtrl"]; });

/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config_ctrl */ "./config_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigCtrl", function() { return _config_ctrl__WEBPACK_IMPORTED_MODULE_2__["CompareQueriesConfigCtrl"]; });






/***/ }),

/***/ "./query_ctrl.ts":
/*!***********************!*\
  !*** ./query_ctrl.ts ***!
  \***********************/
/*! exports provided: CompareQueriesQueryCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareQueriesQueryCtrl", function() { return CompareQueriesQueryCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__);

 // import kbn from 'app/core/utils/kbn';



var CompareQueriesQueryCtrl =
/** @class */
function (_super) {
  CompareQueriesQueryCtrl.$inject = ["$scope", "$injector"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompareQueriesQueryCtrl, _super);
  /** @ngInject **/


  function CompareQueriesQueryCtrl($scope, $injector) {
    var _this = _super.call(this, $scope, $injector) || this;

    _this.aliasTypes = ['suffix', 'prefix', 'absolute'];

    if (!_this.target.timeShifts) {
      _this.target.timeShifts = [];
    }

    if (_this.target.timeShifts.length === 0) {
      _this.addTimeShifts();
    }

    if (typeof _this.target.process === 'undefined') {
      _this.target.process = true;
    }

    return _this;
  }

  CompareQueriesQueryCtrl.prototype.targetBlur = function () {
    this.refresh();
  };

  CompareQueriesQueryCtrl.prototype.onChangeInternal = function () {
    this.refresh(); // Asks the panel to refresh data.
  };

  CompareQueriesQueryCtrl.prototype.addTimeShifts = function () {
    var id = this.getTimeShiftId();
    this.target.timeShifts.push({
      id: id
    });
  };

  CompareQueriesQueryCtrl.prototype.removeTimeShift = function (timeShift) {
    if (this.target.timeShifts && this.target.timeShifts.length <= 1) {
      return;
    }

    var index = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.indexOf(this.target.timeShifts, timeShift);

    this.target.timeShifts.splice(index, 1);
    this.refreshTimeShifts();
  };

  CompareQueriesQueryCtrl.prototype.refreshTimeShifts = function () {
    this.refresh();
  };

  CompareQueriesQueryCtrl.prototype.onAliasAsChange = function (aliasAs) {
    console.error('timeShift.aliasAs=' + this.target.aliasAs);
    console.error('aliasAs=' + aliasAs);
  };

  CompareQueriesQueryCtrl.prototype.getTimeShiftId = function () {
    var id = 0;

    while (true) {
      var notExits = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.every(this.target.timeShifts, function (timeShift) {
        return timeShift.id !== id;
      });

      if (notExits) {
        return id;
      } else {
        id++;
      }
    }
  };

  CompareQueriesQueryCtrl.templateUrl = 'partials/query.editor.html';
  return CompareQueriesQueryCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__["QueryCtrl"]);



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map