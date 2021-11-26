webpackJsonp([1], {
    133: function(e, exports) {},
    205: function(e, exports, t) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var i = r(t(206)),
            n = r(t(207));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t(133);
        var s = {
            template: i.default,
            restrict: "E",
            controller: n.default
        };
        exports.default = s
    },
    206: function(e, exports) {
        e.exports = '\x3c!-- Place all UI elements intended to be present across all routes in this file --\x3e\n<div class="app">\n  <noindex-svg></noindex-svg>\n  <s-header\n    binded-children="$ctrl.children"\n    binded-teacher="$ctrl.teacher"\n    binded-user="$ctrl.user"\n    binded-active-child-index="$ctrl.activeChildIndex"\n    binded-student="$ctrl.currentStudent"\n  >\n  </s-header>\n  <modal-default class="noSwipe"></modal-default>\n  <m-site ng-if="$ctrl.currentMenu && $ctrl._windowWidthService.windowWidth > $ctrl._deviceMarginConstants.MOBILE_MARGIN"\n    binded-menu="$ctrl.currentMenu"\n    binded-menu-logo="$ctrl.menuLogo"\n    binded-events="$ctrl.menuEvents"\n    binded-children="$ctrl.children"\n  ></m-site>\n  <ui-view scroll-top ng-click="$ctrl.bounceMenu($event)"></ui-view>\n  <s-footer></s-footer>\n</div>\n'
    },
    207: function(e, exports, t) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var i = r(t(1)),
            n = r(t(2));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function() {
            function e(t, n, r, s, c, o, u, a, d, l, h, v, _, f, m, S, g, p, k, w) {
                "ngInject";
                var y = this;
                (0, i.default)(this, e), this._$scope = t, this._$timeout = n, this._communicatorDataService = r, this._authService = s, this._DOMElementsService = a, this._windowWidthService = v, this._$rootScope = h, this._$state = l, this._menuService = o, this._$window = u, this._studentsService = c, this._deviceMarginConstants = m, this._$log = _, this._logoutService = f, this._userService = S, this._modalDefaultService = g, this._teachersService = k, this._fastClickService = w, this.bindEvents();
                var C = d.onSuccess({}, function() {
                    u.innerWidth <= y._deviceMarginConstants.MOBILE_MARGIN && y.redirectToHome(), C()
                });
                this.addLogoutListeners()
            }
            return e.$inject = ["$scope", "$timeout", "communicatorDataService", "authService", "studentsService", "menuService", "$window", "DOMElementsService", "$transitions", "$state", "$rootScope", "windowWidthService", "$log", "logoutService", "deviceMarginConstants", "userService", "modalDefaultService", "$fcmService", "teachersService", "fastClickService"], (0, n.default)(e, [{
                key: "addLogoutListeners",
                value: function() {
                    var e = this,
                        t = angular.element(document);
                    this._$window.cordova && "ios" === this._$window.cordova.platformId ? t.on("resign.logout", function() {
                        e._authService.isAuthorized && e.logoutOnPause && e._logoutService.logout()
                    }) : this._$window.cordova && t.on("pause.logout", function() {
                        e._authService.isAuthorized && e.logoutOnPause && e._logoutService.logout()
                    })
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var e = this;
                    this._$rootScope.$on("resize.getWindowSize", function(t, i) {
                        i && i.innerWidth && i.innerWidth <= e._deviceMarginConstants.MOBILE_MARGIN && e.redirectToHome()
                    }), this._$scope.$on("$locationChangeStart", function(t, i) {
                        e._$timeout(function() {
                            return e.handleFastClick()
                        })
                    })
                }
            }, {
                key: "handleFastClick",
                value: function() {
                    this._$state.current.data && this._$state.current.data.destroyFastClick && this._fastClickService.hasFastClick(document.body) ? this._fastClickService.removeFastClick(document.body) : this._$state.current.data && this._$state.current.data.destroyFastClick || this._fastClickService.hasFastClick(document.body) || this._fastClickService.addFastClick(document.body)
                }
            }, {
                key: "redirectToHome",
                value: function() {
                    switch (this._$state.current.name.split(".")[0]) {
                        case "profiles":
                            this._$window.location = "/"
                    }
                    switch (this._$state.current.name.split(".").slice(0, -1).join(".")) {
                        case "student.assessment":
                            this._$window.location = "/"
                    }
                }
            }, {
                key: "bounceMenu",
                value: function(e) {
                    angular.element(e.target).hasClass("container") && this._menuService.setEvents([this._menuService.eventsName.BOUNCE_ACTIVE_ITEM])
                }
            }, {
                key: "logoutOnPause",
                get: function() {
                    return this._userService && this._userService.user.miscellaneous.app && this._userService.user.miscellaneous.app.logout_on_pause
                }
            }, {
                key: "currentMenu",
                get: function() {
                    return this._menuService.menu
                }
            }, {
                key: "menuLogo",
                get: function() {
                    return this._menuService.logo
                }
            }, {
                key: "children",
                get: function() {
                    return this._userService.user && this._userService.user.children || null
                }
            }, {
                key: "teacher",
                get: function() {
                    return this._teachersService.data.selectedTeacher || this._userService.user && this._userService.user.data
                }
            }, {
                key: "user",
                get: function() {
                    return this._communicatorDataService.selectedUser
                }
            }, {
                key: "activeChildIndex",
                get: function() {
                    return this._userService.user && this._userService.user.activeChildIndex
                }
            }, {
                key: "currentStudent",
                get: function() {
                    return this._userService.user && this._userService.user.activeStudent
                }
            }, {
                key: "menuEvents",
                get: function() {
                    return this._menuService.events
                }
            }, {
                key: "openModals",
                get: function() {
                    return this._modalDefaultService.openModals
                }
            }]), e
        }();
        exports.default = s
    },
    635: function(e, exports, t) {
        "use strict";
        var i, n = t(0),
            r = (i = n) && i.__esModule ? i : {
                default: i
            };
        t(205);
        var s = document.getElementsByTagName("body")[0];
        "file:" === document.location.protocol ? document.addEventListener("deviceready", function() {
            r.default.isDefined(window.IonicDeeplink) && (console.log("Deeplink is defined"), window.IonicDeeplink.route({}, function() {}, function(e) {
                var t = r.default.element(s).injector().get("$stateParams"),
                    i = r.default.element(s).injector().get("$state"),
                    n = r.default.element(s).injector().get("$location"),
                    c = r.default.element(s).injector().get("$rootScope"),
                    o = i.current,
                    u = r.default.copy(t);
                n.url(e.$link.fragment.substr(1)), i.transitionTo(o, u), c.$digest()
            })), r.default.bootstrap(s, ["app"])
        }, !1) : r.default.bootstrap(s, ["app"])
    }
}, [635]);