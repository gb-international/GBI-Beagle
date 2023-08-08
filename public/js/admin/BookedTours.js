(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/BookedTours"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/List-reservation.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/List-reservation.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List-reservation.vue?vue&type=template&id=0e585eb3& */ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&");
/* harmony import */ var _List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List-reservation.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/List-reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List-reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List-reservation.vue?vue&type=template&id=0e585eb3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/List-reservation.vue?vue&type=template&id=0e585eb3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_reservation_vue_vue_type_template_id_0e585eb3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);