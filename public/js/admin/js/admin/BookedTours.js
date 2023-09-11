(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/BookedTours"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BookingDashboardList",
  data: function data() {
    return {
      client_view: [],
      entity: [],
      tour: [],
      train: [],
      hotel: [],
      restaurant: [],
      escorts: [],
      bus: [],
      flight: [],
      modal_pnr: false,
      transportId: "",
      transportType: "",
      label: "PNRs",
      row_input: 2,
      tour_code: 0,
      total_row: [],
      placeholderValue: "",
      itinerary: "",
      sightseeing: [],
      counter: 0
    };
  },
  mounted: function mounted() {
    this.getAllData();
    this.labelChange();
  },
  watch: {
    transportType: function transportType() {
      this.labelChange();
    }
  },
  methods: {
    labelChange: function labelChange() {
      if (this.transportType == "bus") {
        this.label = "Buses";
        this.placeholderValue = "Enter Bus Number";
      } else if (this.transportType == "train") {
        this.label = "PNRs";
        this.placeholderValue = "Enter 10 Digits PNR";
      } else {
        this.label = "PNRs";
        this.placeholderValue = "Enter 6 Digits PNR";
      }
    },
    add_row: function add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.total_row.push({
          transport_id: this.transportId,
          transport_type: this.transportType,
          tour_code: this.tour.tour_id,
          pnr_number: ""
        });
      }

      this.row_input = "";
    },
    tranportModal: function tranportModal(id, type) {
      this.total_row = [];
      this.row_input = 2;
      this.transportId = id;
      this.transportType = type;
      this.add_row();
      this.modal_pnr = true;
    },
    sendLink: function sendLink(phoneno, name) {
      var _this = this;

      var data = {
        'escort_phone_no': phoneno,
        'name': name
      };
      axios.post('/api/escort-login-link', data).then(function (response) {
        console.log(response);

        _this.$toast.fire({
          icon: "success",
          title: "Link sent to the Escort successfully!!!"
        });
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;

      for (var i = this.total_row.length - 1; i >= 0; i--) {
        var pnr = this.total_row[i]["pnr_number"];

        if (pnr == "") {
          this.total_row.splice(i, 1);
        }

        if (this.transportType == "train" && pnr.length != 10) {
          this.$toast.fire({
            icon: "error",
            title: "PNR Number should be 10 Digits long !!"
          });
          return false;
        } else if (this.transportType == "flight" && pnr.length != 6) {
          this.$toast.fire({
            icon: "error",
            title: "PNR Number should be 6 Digits long !!"
          });
          return false;
        } else {}
      }

      var path = "/api/pnrs";
      axios.post(path, this.total_row).then(function (response) {
        _this2.total_row = [{
          transport_id: _this2.transport_id,
          transport_type: _this2.transport_type,
          tour_code: _this2.tour_code,
          pnr_number: ""
        }, {
          transport_id: _this2.transport_id,
          transport_type: _this2.transport_type,
          tour_code: _this2.tour_code,
          pnr_number: ""
        }];

        _this2.$toast.fire({
          icon: "success",
          title: "Successfully Added !!!"
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
        }
      });
    },
    getAllData: function getAllData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/tour/".concat(_this3.$route.params.id)).then(function (response) {
                  if (response.data) {
                    _this3.tour = response.data["tour"];
                    _this3.train = response.data["train"];
                    _this3.hotel = response.data["hotel"];
                    _this3.restaurant = response.data["restaurant"];
                    _this3.escorts = response.data["escort"];
                    _this3.bus = response.data["bus"];
                    _this3.flight = response.data["flight"];
                    _this3.entity = response.data["entity"];
                    _this3.itinerary = response.data["itinerary"];
                    _this3.sightseeing = response.data["sightseeing"]; //console.log(this.entity);
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteBookedTrain: function deleteBookedTrain(id) {
      var _this4 = this;

      var uri = "/api/bookedtrains/" + id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this4.getAllData();
          });

          _this4.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteBookedsightseeing: function deleteBookedsightseeing() {
      var _this5 = this;

      var uri = "/api/bookedsightseeings/" + this.tour.tour_id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this5.getAllData();
          });

          _this5.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteBookedHotel: function deleteBookedHotel(id) {
      var _this6 = this;

      var uri = "/api/bookedhotels/" + id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this6.getAllData();
          });

          _this6.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteBookedRestaurant: function deleteBookedRestaurant(id) {
      var _this7 = this;

      var uri = "/api/bookedrestaurants/" + id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this7.getAllData();
          });

          _this7.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteBookedEscort: function deleteBookedEscort(id) {
      var _this8 = this;

      var uri = "/api/bookedescorts/" + id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this8.getAllData();
          });

          _this8.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteBookedFlight: function deleteBookedFlight(id) {
      var _this9 = this;

      var uri = "/api/bookedflights/" + id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this9.getAllData();
          });

          _this9.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteBookedBus: function deleteBookedBus(id) {
      var _this10 = this;

      var uri = "/api/bookedbuses/" + id;
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](uri).then(function (response) {
            _this10.getAllData();
          });

          _this10.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    goBack: function goBack() {
      this.$router.push("/tours");
    }
  },
  computed: {
    hasSchoolPaymentPerms: function hasSchoolPaymentPerms() {
      if (window.userRole == 1) {
        return true;
      }

      var perms = window.viewPerms;

      var hasPerm = function hasPerm(perm) {
        return perm.permission_id === 56;
      };

      return perms.some(hasPerm);
    },
    hasCorpPaymentPerms: function hasCorpPaymentPerms() {
      if (window.userRole == 1) {
        return true;
      }

      var perms = window.viewPerms;

      var hasPerm = function hasPerm(perm) {
        return perm.permission_id === 92;
      };

      return perms.some(hasPerm);
    }
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/List-reservation.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/List-reservation.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List-reservation.vue?vue&type=template&id=0e585eb3& */ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&");
/* harmony import */ var _List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List-reservation.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/List-reservation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List-reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List-reservation.vue?vue&type=template&id=0e585eb3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "row justify-content-around" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "container container_admin_body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("h6", [
                _vm._v(
                  _vm._s(
                    _vm.tour.customer_type == "corporate"
                      ? "COMPANY NAME"
                      : "SCHOOL NAME"
                  )
                ),
              ]),
              _vm._v(" "),
              _vm.tour.customer_type == "corporate"
                ? _c("p", [_vm._v(_vm._s(_vm.entity["company_name"]))])
                : _c("p", [_vm._v(_vm._s(_vm.entity["school_name"]))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" }, [
              _c("h6", [_vm._v("PRICE")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.tour.tour_price))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" }, [
              _c("h6", [_vm._v("TOUR CODE")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.tour.tour_id))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" }, [
              _c("h6", [_vm._v("TOUR START DATE")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.tour.tour_start_date))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" }, [
              _c("h6", [_vm._v("TOUR END DATE")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.tour.tour_end_date))]),
            ]),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "row m-30 tour_list_block" }, [
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/booked-tour-manager/" + _vm.tour.id } },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/tour-manager.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/booked-tour-hotel/" + _vm.tour.id } },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/hotel.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to:
                        "/booked-tour-restaurant/" +
                        _vm.tour.id +
                        "/" +
                        _vm.tour.tour_id,
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/restaurant.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3 m-30" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/booked-tour-flight/" + _vm.tour.id } },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/airlines.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3 m-30" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/booked-tour-train/" + _vm.tour.id } },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/train-icon.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3 m-30" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/booked-tour-bus/" + _vm.tour.id } },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/bus-icon.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.tour.customer_type == "school"
              ? _c(
                  "div",
                  { staticClass: "col-sm-3 mb-3 m-30" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            "/booked-tour-group/" +
                            _vm.entity["id"] +
                            "/" +
                            _vm.tour.tour_id,
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              _vm.$gbiAssets +
                              "/assets/admin/default/icon/student.png",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                )
              : _c(
                  "div",
                  { staticClass: "col-sm-3 mb-3 m-30" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            "/booked-corp-group/" +
                            _vm.entity["id"] +
                            "/" +
                            _vm.tour.tour_id,
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              _vm.$gbiAssets +
                              "/assets/admin/default/icon/groupList.png",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
            _vm._v(" "),
            _vm.tour.customer_type == "school" && _vm.hasSchoolPaymentPerms
              ? _c(
                  "div",
                  { staticClass: "col-sm-3 mb-3 m-30" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            "/payments-school/" +
                            _vm.entity["id"] +
                            "/" +
                            _vm.tour.tour_id,
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              _vm.$gbiAssets +
                              "/assets/admin/default/icon/payment.png",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.tour.customer_type == "corporate" && _vm.hasCorpPaymentPerms
              ? _c(
                  "div",
                  { staticClass: "col-sm-3 mb-3 m-30" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            "/payments-corporate/" +
                            _vm.entity["id"] +
                            "/" +
                            _vm.tour.tour_id,
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              _vm.$gbiAssets +
                              "/assets/admin/default/icon/payment.png",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3 m-30" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: "/foods/" + _vm.tour.id + "/" + _vm.tour.tour_id,
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/snacks.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.itinerary
              ? _c(
                  "div",
                  { staticClass: "col-sm-3 mb-3 m-30" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            "/booked-sightseen/" +
                            _vm.tour.id +
                            "/" +
                            _vm.tour.tour_id +
                            "/" +
                            _vm.itinerary.id,
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              _vm.$gbiAssets +
                              "/assets/admin/default/icon/sightseeing.png",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 mb-3 m-30" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to:
                        "/escort-update/" +
                        _vm.tour.id +
                        "/" +
                        _vm.tour.tour_id,
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$gbiAssets +
                          "/assets/admin/default/icon/escort_Update.png",
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.escorts.length > 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("h4", [_vm._v("Tour Manager")]),
                  _vm._v(" "),
                  _vm._l(_vm.escorts, function (escort) {
                    return _c("div", { key: escort.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(escort["escort"].name))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Perday Allowance")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(_vm._s(escort["escort"].salaryPerday)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Contact")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(escort["escort"].phoneno))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(escort["escort"].email))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1 p-0" }, [
                        _c("label", [_vm._v("Login Link")]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "cursor-pointer text-info",
                            on: {
                              click: function ($event) {
                                return _vm.sendLink(
                                  escort["escort"].phoneno,
                                  escort["escort"].name
                                )
                              },
                            },
                          },
                          [_c("b", [_vm._v("Send Link")])]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1" }, [
                        _vm.$can("delete clients")
                          ? _c(
                              "a",
                              {
                                staticClass: "delete_link",
                                attrs: { href: "" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteBookedEscort(escort.id)
                                  },
                                },
                              },
                              [_vm._m(0, true)]
                            )
                          : _vm._e(),
                      ]),
                    ])
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hotel.length > 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("h4", [_vm._v("Hotel")]),
                  _vm._v(" "),
                  _vm._l(_vm.hotel, function (hotel) {
                    return _c("div", { key: hotel.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(hotel["hotel"].name))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Address")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(hotel["hotel"].address))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Contact")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(hotel["hotel"].phoneno))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(hotel["hotel"].email))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1" }, [
                        _vm.$can("delete clients")
                          ? _c(
                              "a",
                              {
                                staticClass: "delete_link",
                                attrs: { href: "" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteBookedHotel(hotel.id)
                                  },
                                },
                              },
                              [_vm._m(1, true)]
                            )
                          : _vm._e(),
                      ]),
                    ])
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.restaurant.length > 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("h4", [_vm._v("Restaurant")]),
                  _vm._v(" "),
                  _vm._l(_vm.restaurant, function (rest) {
                    return _c("div", { key: rest.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(rest["restaurant"].name))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Address")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(rest["restaurant"].address))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Contact")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(_vm._s(rest["restaurant"].contact_number)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Person")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(_vm._s(rest["restaurant"].contact_name)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1" }, [
                        _vm.$can("delete clients")
                          ? _c(
                              "a",
                              {
                                staticClass: "delete_link",
                                attrs: { href: "" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteBookedRestaurant(rest.id)
                                  },
                                },
                              },
                              [_vm._m(2, true)]
                            )
                          : _vm._e(),
                      ]),
                    ])
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          Object.keys(_vm.sightseeing).length > 0
            ? _c("div", { staticClass: "card" }, [
                _c("h4", [_vm._v("Sightseeings ")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-11" },
                    _vm._l(_vm.sightseeing, function (parent, key, i) {
                      return _c("div", { key: i + i, staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("p", [_vm._v("Day " + _vm._s(++i))]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-8" },
                          _vm._l(parent, function (single, index) {
                            return _c(
                              "div",
                              { key: single.id, staticClass: "text-dark" },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(++index) +
                                    ". " +
                                    _vm._s(single.sightseeing.name) +
                                    "\n                  "
                                ),
                              ]
                            )
                          }),
                          0
                        ),
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-1" }, [
                    _vm.$can("delete clients")
                      ? _c(
                          "a",
                          {
                            staticClass: "delete_link",
                            attrs: { href: "" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.deleteBookedsightseeing()
                              },
                            },
                          },
                          [_vm._m(3)]
                        )
                      : _vm._e(),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.train.length > 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("h4", [_vm._v("Train")]),
                  _vm._v(" "),
                  _vm._l(_vm.train, function (train) {
                    return _c("div", { key: train.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(train["train"].name))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Code")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(train["train"].code))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Price")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(train.price))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Travel")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            _vm._s(train.source) +
                              " - " +
                              _vm._s(train.destination)
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-2 text-center" },
                        [
                          _c("label", [_vm._v("PNR")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "btn btn-sm btn-primary text-white cursor-pointer mr-1",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#pnrModal",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.tranportModal(train.id, "train")
                                },
                              },
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-sm btn-info text-white cursor-pointer mr-1",
                              attrs: {
                                to:
                                  "/booked-tour-pnr/" +
                                  ("train/" +
                                    train.id +
                                    "/" +
                                    _vm.tour.tour_id),
                              },
                            },
                            [_vm._v("List")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1 text-center" }, [
                        _vm.$can("delete clients")
                          ? _c(
                              "a",
                              {
                                staticClass: "delete_link",
                                attrs: { href: "" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteBookedTrain(train.id)
                                  },
                                },
                              },
                              [_vm._m(4, true)]
                            )
                          : _vm._e(),
                      ]),
                    ])
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.flight.length > 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("h4", [_vm._v("Flight")]),
                  _vm._v(" "),
                  _vm._l(_vm.flight, function (flight) {
                    return _c("div", { key: flight.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(flight["flight"].name))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Seat Type")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(flight["flight"].code))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Price")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(flight.price))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Travel")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            _vm._s(flight.source) +
                              " - " +
                              _vm._s(flight.destination)
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-2 text-center" },
                        [
                          _c("label", [_vm._v("PNR")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "btn btn-sm btn-primary text-white cursor-pointer mr-1",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#pnrModal",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.tranportModal(flight.id, "flight")
                                },
                              },
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-sm btn-info text-white cursor-pointer mr-1",
                              attrs: {
                                to:
                                  "/booked-tour-pnr/" +
                                  ("flight/" +
                                    flight.id +
                                    "/" +
                                    _vm.tour.tour_id),
                              },
                            },
                            [_vm._v("List")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1 text-center" }, [
                        _vm.$can("delete clients")
                          ? _c(
                              "a",
                              {
                                staticClass: "delete_link",
                                attrs: { href: "" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteBookedFlight(flight.id)
                                  },
                                },
                              },
                              [_vm._m(5, true)]
                            )
                          : _vm._e(),
                      ]),
                    ])
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.bus.length > 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("h4", [_vm._v("Bus")]),
                  _vm._v(" "),
                  _vm._l(_vm.bus, function (bus) {
                    return _c("div", { key: bus.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Company Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(bus["bus"].company_name))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Seat Type")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(bus["bus"].seat_type))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Price")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(bus.price))]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Travel")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            _vm._s(bus.source) + " - " + _vm._s(bus.destination)
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-2 text-center" },
                        [
                          _c("label", [_vm._v("Bus Number")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "btn btn-sm btn-primary text-white cursor-pointer mr-1",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#pnrModal",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.tranportModal(bus.id, "bus")
                                },
                              },
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-sm btn-info text-white cursor-pointer mr-1",
                              attrs: {
                                to:
                                  "/booked-tour-pnr/" +
                                  ("bus/" + bus.id + "/" + _vm.tour.tour_id),
                              },
                            },
                            [_vm._v("List")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1 text-center" }, [
                        _vm.$can("delete clients")
                          ? _c(
                              "a",
                              {
                                staticClass: "delete_link",
                                attrs: { href: "" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteBookedBus(bus.id)
                                  },
                                },
                              },
                              [_vm._m(6, true)]
                            )
                          : _vm._e(),
                      ]),
                    ])
                  }),
                ],
                2
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal", attrs: { id: "pnrModal" } }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content simple-form-bg" }, [
            _vm.modal_pnr
              ? _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [_vm._v("\n              ×\n            ")]
                  ),
                  _vm._v(" "),
                  _c("p", [_vm._v("Enter " + _vm._s(_vm.label) + " Number")]),
                  _vm._v(" "),
                  _c("form", { staticClass: "form simple-form" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.total_row, function (row, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-sm-6" },
                          [
                            _c("div", { staticClass: "row mb-2" }, [
                              _c("div", { staticClass: "col pt-1" }, [
                                _vm._v(_vm._s(++index)),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-10" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: row.pnr_number,
                                      expression: "row.pnr_number",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: _vm.placeholderValue,
                                  },
                                  domProps: { value: row.pnr_number },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        row,
                                        "pnr_number",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                              ]),
                            ]),
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-4" }, [
                      _c("div", { staticClass: "col-sm-5" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn text-white btn-gbi",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.submitForm()
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    SAVE\n                  "
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-5 align-self-right" }, [
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.row_input,
                                expression: "row_input",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", placeholder: "Add Row.." },
                            domProps: { value: _vm.row_input },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.row_input = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn text-white btn-gbi",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.add_row()
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                        Go\n                      "
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);