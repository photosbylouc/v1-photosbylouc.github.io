(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
  [52730],
  {
    192628: function (D, e, r) {
      "use strict";
      var g = r(870752),
        E = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        P = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        w = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        _ = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        p = {};
      (p[g.ForwardRef] = w), (p[g.Memo] = _);
      function h(s) {
        return g.isMemo(s) ? _ : p[s.$$typeof] || E;
      }
      var j = Object.defineProperty,
        m = Object.getOwnPropertyNames,
        y = Object.getOwnPropertySymbols,
        b = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        v = Object.prototype;
      function d(s, u, O) {
        if (typeof u != "string") {
          if (v) {
            var o = f(u);
            o && o !== v && d(s, o, O);
          }
          var i = m(u);
          y && (i = i.concat(y(u)));
          for (var l = h(s), t = h(u), n = 0; n < i.length; ++n) {
            var a = i[n];
            if (!P[a] && !(O && O[a]) && !(t && t[a]) && !(l && l[a])) {
              var c = b(u, a);
              try {
                j(s, a, c);
              } catch (A) {}
            }
          }
        }
        return s;
      }
      D.exports = d;
    },
    139e3: function (D) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var e = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable;
      function E(w) {
        if (w == null)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(w);
      }
      function P() {
        try {
          if (!Object.assign) return !1;
          var w = new String("abc");
          if (((w[5] = "de"), Object.getOwnPropertyNames(w)[0] === "5"))
            return !1;
          for (var _ = {}, p = 0; p < 10; p++)
            _["_" + String.fromCharCode(p)] = p;
          var h = Object.getOwnPropertyNames(_).map(function (m) {
            return _[m];
          });
          if (h.join("") !== "0123456789") return !1;
          var j = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (m) {
              j[m] = m;
            }),
            Object.keys(Object.assign({}, j)).join("") ===
              "abcdefghijklmnopqrst"
          );
        } catch (m) {
          return !1;
        }
      }
      D.exports = P()
        ? Object.assign
        : function (w, _) {
            for (var p, h = E(w), j, m = 1; m < arguments.length; m++) {
              p = Object(arguments[m]);
              for (var y in p) r.call(p, y) && (h[y] = p[y]);
              if (e) {
                j = e(p);
                for (var b = 0; b < j.length; b++)
                  g.call(p, j[b]) && (h[j[b]] = p[j[b]]);
              }
            }
            return h;
          };
    },
    760636: function (D) {
      var e = (D.exports = {}),
        r,
        g;
      function E() {
        throw new Error("setTimeout has not been defined");
      }
      function P() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = E);
        } catch (d) {
          r = E;
        }
        try {
          typeof clearTimeout == "function" ? (g = clearTimeout) : (g = P);
        } catch (d) {
          g = P;
        }
      })();
      function w(d) {
        if (r === setTimeout) return setTimeout(d, 0);
        if ((r === E || !r) && setTimeout)
          return (r = setTimeout), setTimeout(d, 0);
        try {
          return r(d, 0);
        } catch (s) {
          try {
            return r.call(null, d, 0);
          } catch (u) {
            return r.call(this, d, 0);
          }
        }
      }
      function _(d) {
        if (g === clearTimeout) return clearTimeout(d);
        if ((g === P || !g) && clearTimeout)
          return (g = clearTimeout), clearTimeout(d);
        try {
          return g(d);
        } catch (s) {
          try {
            return g.call(null, d);
          } catch (u) {
            return g.call(this, d);
          }
        }
      }
      var p = [],
        h = !1,
        j,
        m = -1;
      function y() {
        !h ||
          !j ||
          ((h = !1), j.length ? (p = j.concat(p)) : (m = -1), p.length && b());
      }
      function b() {
        if (!h) {
          var d = w(y);
          h = !0;
          for (var s = p.length; s; ) {
            for (j = p, p = []; ++m < s; ) j && j[m].run();
            (m = -1), (s = p.length);
          }
          (j = null), (h = !1), _(d);
        }
      }
      e.nextTick = function (d) {
        var s = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var u = 1; u < arguments.length; u++) s[u - 1] = arguments[u];
        p.push(new f(d, s)), p.length === 1 && !h && w(b);
      };
      function f(d, s) {
        (this.fun = d), (this.array = s);
      }
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (e.title = "browser"),
        (e.browser = !0),
        (e.env = {}),
        (e.argv = []),
        (e.version = ""),
        (e.versions = {});
      function v() {}
      (e.on = v),
        (e.addListener = v),
        (e.once = v),
        (e.off = v),
        (e.removeListener = v),
        (e.removeAllListeners = v),
        (e.emit = v),
        (e.prependListener = v),
        (e.prependOnceListener = v),
        (e.listeners = function (d) {
          return [];
        }),
        (e.binding = function (d) {
          throw new Error("process.binding is not supported");
        }),
        (e.cwd = function () {
          return "/";
        }),
        (e.chdir = function (d) {
          throw new Error("process.chdir is not supported");
        }),
        (e.umask = function () {
          return 0;
        });
    },
    739847: function (D, e) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = typeof Symbol == "function" && Symbol.for,
        g = r ? Symbol.for("react.element") : 60103,
        E = r ? Symbol.for("react.portal") : 60106,
        P = r ? Symbol.for("react.fragment") : 60107,
        w = r ? Symbol.for("react.strict_mode") : 60108,
        _ = r ? Symbol.for("react.profiler") : 60114,
        p = r ? Symbol.for("react.provider") : 60109,
        h = r ? Symbol.for("react.context") : 60110,
        j = r ? Symbol.for("react.async_mode") : 60111,
        m = r ? Symbol.for("react.concurrent_mode") : 60111,
        y = r ? Symbol.for("react.forward_ref") : 60112,
        b = r ? Symbol.for("react.suspense") : 60113,
        f = r ? Symbol.for("react.suspense_list") : 60120,
        v = r ? Symbol.for("react.memo") : 60115,
        d = r ? Symbol.for("react.lazy") : 60116,
        s = r ? Symbol.for("react.block") : 60121,
        u = r ? Symbol.for("react.fundamental") : 60117,
        O = r ? Symbol.for("react.responder") : 60118,
        o = r ? Symbol.for("react.scope") : 60119;
      function i(t) {
        if (typeof t == "object" && t !== null) {
          var n = t.$$typeof;
          switch (n) {
            case g:
              switch (((t = t.type), t)) {
                case j:
                case m:
                case P:
                case _:
                case w:
                case b:
                  return t;
                default:
                  switch (((t = t && t.$$typeof), t)) {
                    case h:
                    case y:
                    case d:
                    case v:
                    case p:
                      return t;
                    default:
                      return n;
                  }
              }
            case E:
              return n;
          }
        }
      }
      function l(t) {
        return i(t) === m;
      }
      (e.AsyncMode = j),
        (e.ConcurrentMode = m),
        (e.ContextConsumer = h),
        (e.ContextProvider = p),
        (e.Element = g),
        (e.ForwardRef = y),
        (e.Fragment = P),
        (e.Lazy = d),
        (e.Memo = v),
        (e.Portal = E),
        (e.Profiler = _),
        (e.StrictMode = w),
        (e.Suspense = b),
        (e.isAsyncMode = function (t) {
          return l(t) || i(t) === j;
        }),
        (e.isConcurrentMode = l),
        (e.isContextConsumer = function (t) {
          return i(t) === h;
        }),
        (e.isContextProvider = function (t) {
          return i(t) === p;
        }),
        (e.isElement = function (t) {
          return typeof t == "object" && t !== null && t.$$typeof === g;
        }),
        (e.isForwardRef = function (t) {
          return i(t) === y;
        }),
        (e.isFragment = function (t) {
          return i(t) === P;
        }),
        (e.isLazy = function (t) {
          return i(t) === d;
        }),
        (e.isMemo = function (t) {
          return i(t) === v;
        }),
        (e.isPortal = function (t) {
          return i(t) === E;
        }),
        (e.isProfiler = function (t) {
          return i(t) === _;
        }),
        (e.isStrictMode = function (t) {
          return i(t) === w;
        }),
        (e.isSuspense = function (t) {
          return i(t) === b;
        }),
        (e.isValidElementType = function (t) {
          return (
            typeof t == "string" ||
            typeof t == "function" ||
            t === P ||
            t === m ||
            t === _ ||
            t === w ||
            t === b ||
            t === f ||
            (typeof t == "object" &&
              t !== null &&
              (t.$$typeof === d ||
                t.$$typeof === v ||
                t.$$typeof === p ||
                t.$$typeof === h ||
                t.$$typeof === y ||
                t.$$typeof === u ||
                t.$$typeof === O ||
                t.$$typeof === o ||
                t.$$typeof === s))
          );
        }),
        (e.typeOf = i);
    },
    870752: function (D, e, r) {
      "use strict";
      D.exports = r(739847);
    },
    713320: function (D, e, r) {
      "use strict";
      /** @license React v16.14.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var g = r(139e3),
        E = typeof Symbol == "function" && Symbol.for,
        P = E ? Symbol.for("react.element") : 60103,
        w = E ? Symbol.for("react.portal") : 60106,
        _ = E ? Symbol.for("react.fragment") : 60107,
        p = E ? Symbol.for("react.strict_mode") : 60108,
        h = E ? Symbol.for("react.profiler") : 60114,
        j = E ? Symbol.for("react.provider") : 60109,
        m = E ? Symbol.for("react.context") : 60110,
        y = E ? Symbol.for("react.forward_ref") : 60112,
        b = E ? Symbol.for("react.suspense") : 60113,
        f = E ? Symbol.for("react.memo") : 60115,
        v = E ? Symbol.for("react.lazy") : 60116,
        d = typeof Symbol == "function" && Symbol.iterator;
      function s(I) {
        for (
          var H = "https://reactjs.org/docs/error-decoder.html?invariant=" + I,
            Z = 1;
          Z < arguments.length;
          Z++
        )
          H += "&args[]=" + encodeURIComponent(arguments[Z]);
        return (
          "Minified React error #" +
          I +
          "; visit " +
          H +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var u = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        O = {};
      function o(I, H, Z) {
        (this.props = I),
          (this.context = H),
          (this.refs = O),
          (this.updater = Z || u);
      }
      (o.prototype.isReactComponent = {}),
        (o.prototype.setState = function (I, H) {
          if (typeof I != "object" && typeof I != "function" && I != null)
            throw Error(s(85));
          this.updater.enqueueSetState(this, I, H, "setState");
        }),
        (o.prototype.forceUpdate = function (I) {
          this.updater.enqueueForceUpdate(this, I, "forceUpdate");
        });
      function i() {}
      i.prototype = o.prototype;
      function l(I, H, Z) {
        (this.props = I),
          (this.context = H),
          (this.refs = O),
          (this.updater = Z || u);
      }
      var t = (l.prototype = new i());
      (t.constructor = l), g(t, o.prototype), (t.isPureReactComponent = !0);
      var n = { current: null },
        a = Object.prototype.hasOwnProperty,
        c = { key: !0, ref: !0, __self: !0, __source: !0 };
      function A(I, H, Z) {
        var oe,
          te = {},
          J = null,
          q = null;
        if (H != null)
          for (oe in (H.ref !== void 0 && (q = H.ref),
          H.key !== void 0 && (J = "" + H.key),
          H))
            a.call(H, oe) && !c.hasOwnProperty(oe) && (te[oe] = H[oe]);
        var re = arguments.length - 2;
        if (re === 1) te.children = Z;
        else if (1 < re) {
          for (var ce = Array(re), fe = 0; fe < re; fe++)
            ce[fe] = arguments[fe + 2];
          te.children = ce;
        }
        if (I && I.defaultProps)
          for (oe in ((re = I.defaultProps), re))
            te[oe] === void 0 && (te[oe] = re[oe]);
        return {
          $$typeof: P,
          type: I,
          key: J,
          ref: q,
          props: te,
          _owner: n.current,
        };
      }
      function C(I, H) {
        return {
          $$typeof: P,
          type: I.type,
          key: H,
          ref: I.ref,
          props: I.props,
          _owner: I._owner,
        };
      }
      function U(I) {
        return typeof I == "object" && I !== null && I.$$typeof === P;
      }
      function L(I) {
        var H = { "=": "=0", ":": "=2" };
        return (
          "$" +
          ("" + I).replace(/[=:]/g, function (Z) {
            return H[Z];
          })
        );
      }
      var S = /\/+/g,
        B = [];
      function Y(I, H, Z, oe) {
        if (B.length) {
          var te = B.pop();
          return (
            (te.result = I),
            (te.keyPrefix = H),
            (te.func = Z),
            (te.context = oe),
            (te.count = 0),
            te
          );
        }
        return { result: I, keyPrefix: H, func: Z, context: oe, count: 0 };
      }
      function F(I) {
        (I.result = null),
          (I.keyPrefix = null),
          (I.func = null),
          (I.context = null),
          (I.count = 0),
          10 > B.length && B.push(I);
      }
      function z(I, H, Z, oe) {
        var te = typeof I;
        (te === "undefined" || te === "boolean") && (I = null);
        var J = !1;
        if (I === null) J = !0;
        else
          switch (te) {
            case "string":
            case "number":
              J = !0;
              break;
            case "object":
              switch (I.$$typeof) {
                case P:
                case w:
                  J = !0;
              }
          }
        if (J) return Z(oe, I, H === "" ? "." + V(I, 0) : H), 1;
        if (((J = 0), (H = H === "" ? "." : H + ":"), Array.isArray(I)))
          for (var q = 0; q < I.length; q++) {
            te = I[q];
            var re = H + V(te, q);
            J += z(te, re, Z, oe);
          }
        else if (
          (I === null || typeof I != "object"
            ? (re = null)
            : ((re = (d && I[d]) || I["@@iterator"]),
              (re = typeof re == "function" ? re : null)),
          typeof re == "function")
        )
          for (I = re.call(I), q = 0; !(te = I.next()).done; )
            (te = te.value), (re = H + V(te, q++)), (J += z(te, re, Z, oe));
        else if (te === "object")
          throw (
            ((Z = "" + I),
            Error(
              s(
                31,
                Z === "[object Object]"
                  ? "object with keys {" + Object.keys(I).join(", ") + "}"
                  : Z,
                ""
              )
            ))
          );
        return J;
      }
      function Q(I, H, Z) {
        return I == null ? 0 : z(I, "", H, Z);
      }
      function V(I, H) {
        return typeof I == "object" && I !== null && I.key != null
          ? L(I.key)
          : H.toString(36);
      }
      function N(I, H) {
        I.func.call(I.context, H, I.count++);
      }
      function R(I, H, Z) {
        var oe = I.result,
          te = I.keyPrefix;
        (I = I.func.call(I.context, H, I.count++)),
          Array.isArray(I)
            ? T(I, oe, Z, function (J) {
                return J;
              })
            : I != null &&
              (U(I) &&
                (I = C(
                  I,
                  te +
                    (!I.key || (H && H.key === I.key)
                      ? ""
                      : ("" + I.key).replace(S, "$&/") + "/") +
                    Z
                )),
              oe.push(I));
      }
      function T(I, H, Z, oe, te) {
        var J = "";
        Z != null && (J = ("" + Z).replace(S, "$&/") + "/"),
          (H = Y(H, J, oe, te)),
          Q(I, R, H),
          F(H);
      }
      var k = { current: null };
      function M() {
        var I = k.current;
        if (I === null) throw Error(s(321));
        return I;
      }
      var $ = {
        ReactCurrentDispatcher: k,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: n,
        IsSomeRendererActing: { current: !1 },
        assign: g,
      };
      (e.Children = {
        map: function (I, H, Z) {
          if (I == null) return I;
          var oe = [];
          return T(I, oe, null, H, Z), oe;
        },
        forEach: function (I, H, Z) {
          if (I == null) return I;
          (H = Y(null, null, H, Z)), Q(I, N, H), F(H);
        },
        count: function (I) {
          return Q(
            I,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (I) {
          var H = [];
          return (
            T(I, H, null, function (Z) {
              return Z;
            }),
            H
          );
        },
        only: function (I) {
          if (!U(I)) throw Error(s(143));
          return I;
        },
      }),
        (e.Component = o),
        (e.Fragment = _),
        (e.Profiler = h),
        (e.PureComponent = l),
        (e.StrictMode = p),
        (e.Suspense = b),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
        (e.cloneElement = function (I, H, Z) {
          if (I == null) throw Error(s(267, I));
          var oe = g({}, I.props),
            te = I.key,
            J = I.ref,
            q = I._owner;
          if (H != null) {
            if (
              (H.ref !== void 0 && ((J = H.ref), (q = n.current)),
              H.key !== void 0 && (te = "" + H.key),
              I.type && I.type.defaultProps)
            )
              var re = I.type.defaultProps;
            for (ce in H)
              a.call(H, ce) &&
                !c.hasOwnProperty(ce) &&
                (oe[ce] = H[ce] === void 0 && re !== void 0 ? re[ce] : H[ce]);
          }
          var ce = arguments.length - 2;
          if (ce === 1) oe.children = Z;
          else if (1 < ce) {
            re = Array(ce);
            for (var fe = 0; fe < ce; fe++) re[fe] = arguments[fe + 2];
            oe.children = re;
          }
          return {
            $$typeof: P,
            type: I.type,
            key: te,
            ref: J,
            props: oe,
            _owner: q,
          };
        }),
        (e.createContext = function (I, H) {
          return (
            H === void 0 && (H = null),
            (I = {
              $$typeof: m,
              _calculateChangedBits: H,
              _currentValue: I,
              _currentValue2: I,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }),
            (I.Provider = { $$typeof: j, _context: I }),
            (I.Consumer = I)
          );
        }),
        (e.createElement = A),
        (e.createFactory = function (I) {
          var H = A.bind(null, I);
          return (H.type = I), H;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (I) {
          return { $$typeof: y, render: I };
        }),
        (e.isValidElement = U),
        (e.lazy = function (I) {
          return { $$typeof: v, _ctor: I, _status: -1, _result: null };
        }),
        (e.memo = function (I, H) {
          return { $$typeof: f, type: I, compare: H === void 0 ? null : H };
        }),
        (e.useCallback = function (I, H) {
          return M().useCallback(I, H);
        }),
        (e.useContext = function (I, H) {
          return M().useContext(I, H);
        }),
        (e.useDebugValue = function () {}),
        (e.useEffect = function (I, H) {
          return M().useEffect(I, H);
        }),
        (e.useImperativeHandle = function (I, H, Z) {
          return M().useImperativeHandle(I, H, Z);
        }),
        (e.useLayoutEffect = function (I, H) {
          return M().useLayoutEffect(I, H);
        }),
        (e.useMemo = function (I, H) {
          return M().useMemo(I, H);
        }),
        (e.useReducer = function (I, H, Z) {
          return M().useReducer(I, H, Z);
        }),
        (e.useRef = function (I) {
          return M().useRef(I);
        }),
        (e.useState = function (I) {
          return M().useState(I);
        }),
        (e.version = "16.14.0");
    },
    508669: function (D, e, r) {
      "use strict";
      D.exports = r(713320);
    },
    331070: function (D, e, r) {
      "use strict";
      var g = r(875832),
        E = g(r(346797)),
        P = r(354874),
        w = g(r(672325)),
        _ = g(r(768918)),
        p = r(691582);
      function h(t, n) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          n &&
            (c = c.filter(function (A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable;
            })),
            a.push.apply(a, c);
        }
        return a;
      }
      function j(t) {
        for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? h(Object(a), !0).forEach(function (c) {
                (0, E.default)(t, c, a[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : h(Object(a)).forEach(function (c) {
                Object.defineProperty(
                  t,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                );
              });
        }
        return t;
      }
      var m = window.Static && window.Static.SQUARESPACE_CONTEXT,
        y = window.top !== window,
        b = Object.freeze(
          (0, E.default)({}, _.default.COMMERCE_CART_V2, "commerce-cart")
        );
      function f() {
        var t = (window.location && window.location.pathname) || "";
        return !y && /^\/config(\/.*)?$/.test(t);
      }
      function v() {
        return {
          inFrame: y,
          templateId: m.templateId || "",
          impersonatedSession: !!m.impersonatedSession,
          pageType: typeof m.pageType == "number" ? m.pageType : -1,
        };
      }
      function d() {
        var t = m.website,
          n = t === void 0 ? {} : t;
        return {
          authenticUrl: n.authenticUrl || "",
          cloneable: !!n.cloneable,
          developerMode: !!n.developerMode,
          isHstsEnabled: !!n.isHstsEnabled,
          language: n.language || "",
          timeZone: n.timeZone || "",
          websiteId: n.id || "",
          websiteType: n.websiteType || -1,
        };
      }
      function s() {
        var t = m.websiteSettings,
          n = t === void 0 ? {} : t;
        return { ampEnabled: !!n.ampEnabled };
      }
      function u() {
        var t = m.collection,
          n = t === void 0 ? {} : t;
        return { collectionType: n.type || -1 };
      }
      function O() {
        return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace;
      }
      function o() {
        return m.hasOwnProperty("templateVersion")
          ? m.templateVersion.replace(".", "_")
          : O()
          ? "8"
          : null;
      }
      function i(t) {
        var n = f(),
          a = b[m.pageType],
          c = {
            appName:
              a || "v".concat(t, "-").concat(n ? "config" : "user-sites"),
            context: j(j(j(j({}, v()), d()), s()), u()),
            captureException: function (B, Y) {
              (0, p.withScope)(function (F) {
                F.setTag("project", "rum-collector"),
                  Y !== void 0 && F.setExtra("extras", Y),
                  (0, p.captureException)(B);
              });
            },
          };
        if (n) {
          var A = m.website.siteStatus.value === w.default.INTERNAL,
            C = m.authenticatedAccount,
            U = C.createdOn,
            L = C.id;
          (c.context.isInternal = A),
            (c.context.createdOn = U),
            (c.context.memberId = L);
        }
        return c;
      }
      function l() {
        if (m) {
          var t = o();
          if (t === null) return;
          var n = i(t);
          (0, P.init)(n);
        }
      }
      l();
    },
    691582: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.withScope =
          e.isSentryConnected =
          e.configureScope =
          e.captureMessage =
          e.captureException =
          e.captureEvent =
          e.addBreadcrumb =
            void 0);
      var g = r(827681),
        E,
        P,
        w,
        _,
        p,
        h;
      (e.withScope = h),
        (e.configureScope = p),
        (e.captureEvent = _),
        (e.captureException = w),
        (e.captureMessage = P),
        (e.addBreadcrumb = E);
      var j = function (v) {
          return function (d) {
            for (
              var s,
                u = arguments.length,
                O = new Array(u > 1 ? u - 1 : 0),
                o = 1;
              o < u;
              o++
            )
              O[o - 1] = arguments[o];
            return (
              (s = console).log.apply(
                s,
                ["[Sentry][".concat(v, "] ").concat(d)].concat(O)
              ),
              "some-error-identifier"
            );
          };
        },
        m = !1,
        y = function (v) {
          var d = v.category,
            s = v.message;
          console.log("[Sentry][addBreadcrumb] (".concat(d, ") ").concat(s));
        },
        b = !1;
      (e.isSentryConnected = b),
        window.SQUARESPACE_SENTRY
          ? ((e.isSentryConnected = b = !0),
            (e.addBreadcrumb = E = window.SQUARESPACE_SENTRY.addBreadcrumb),
            (e.captureMessage = P = window.SQUARESPACE_SENTRY.captureMessage),
            (e.captureException = w =
              window.SQUARESPACE_SENTRY.captureException),
            (e.captureEvent = _ = window.SQUARESPACE_SENTRY.captureEvent),
            (e.configureScope = p = window.SQUARESPACE_SENTRY.configureScope),
            (e.withScope = h = window.SQUARESPACE_SENTRY.withScope))
          : (console.warn(
              "SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."
            ),
            (e.addBreadcrumb = E = m ? y : function () {}),
            (e.captureMessage = P = j("captureMessage")),
            (e.captureException = w = j("captureException")),
            (e.captureEvent = _ = j("captureEvent")),
            (e.configureScope = p = function () {}),
            (e.withScope = h =
              function (v) {
                var d = new g.Scope();
                console.log("[Sentry][withScope]", d), v(d);
              }));
    },
    993797: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BrowserClient = void 0);
      var E = g(r(858240)),
        P = g(r(4636)),
        w = g(r(820721)),
        _ = g(r(721854)),
        p = g(r(699467)),
        h = g(r(506051)),
        j = r(423241),
        m = r(681321),
        y = r(61659),
        b = r(176591),
        f = r(503656),
        v = r(280544);
      function d(O) {
        var o = s();
        return function () {
          var l = (0, h.default)(O),
            t;
          if (o) {
            var n = (0, h.default)(this).constructor;
            t = Reflect.construct(l, arguments, n);
          } else t = l.apply(this, arguments);
          return (0, p.default)(this, t);
        };
      }
      function s() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (O) {
          return !1;
        }
      }
      var u = (function (O) {
        (0, _.default)(i, O);
        var o = d(i);
        function i(l) {
          var t;
          return (
            (0, E.default)(this, i),
            (l._metadata = l._metadata || {}),
            (l._metadata.sdk = l._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [
                { name: "npm:@sentry/browser", version: m.SDK_VERSION },
              ],
              version: m.SDK_VERSION,
            }),
            (t = o.call(this, l)),
            l.sendClientReports &&
              f.WINDOW.document &&
              f.WINDOW.document.addEventListener(
                "visibilitychange",
                function () {
                  f.WINDOW.document.visibilityState === "hidden" &&
                    t._flushOutcomes();
                }
              ),
            t
          );
        }
        return (
          (0, P.default)(i, [
            {
              key: "eventFromException",
              value: function (t, n) {
                return (0, b.eventFromException)(
                  this._options.stackParser,
                  t,
                  n,
                  this._options.attachStacktrace
                );
              },
            },
            {
              key: "eventFromMessage",
              value: function (t) {
                var n =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : "info",
                  a = arguments.length > 2 ? arguments[2] : void 0;
                return (0, b.eventFromMessage)(
                  this._options.stackParser,
                  t,
                  n,
                  a,
                  this._options.attachStacktrace
                );
              },
            },
            {
              key: "sendEvent",
              value: function (t, n) {
                var a = this.getIntegrationById(v.BREADCRUMB_INTEGRATION_ID);
                (0, j._optionalChain)([
                  a,
                  "optionalAccess",
                  function (c) {
                    return c.addSentryBreadcrumb;
                  },
                  "optionalCall",
                  function (c) {
                    return c(t);
                  },
                ]),
                  (0, w.default)(
                    (0, h.default)(i.prototype),
                    "sendEvent",
                    this
                  ).call(this, t, n);
              },
            },
            {
              key: "_prepareEvent",
              value: function (t, n, a) {
                return (
                  (t.platform = t.platform || "javascript"),
                  (0, w.default)(
                    (0, h.default)(i.prototype),
                    "_prepareEvent",
                    this
                  ).call(this, t, n, a)
                );
              },
            },
            {
              key: "_flushOutcomes",
              value: function () {
                var t = this._clearOutcomes();
                if (t.length === 0) {
                  (typeof __SENTRY_DEBUG__ == "undefined" ||
                    __SENTRY_DEBUG__) &&
                    y.logger.log("No outcomes to send");
                  return;
                }
                if (!this._dsn) {
                  (typeof __SENTRY_DEBUG__ == "undefined" ||
                    __SENTRY_DEBUG__) &&
                    y.logger.log("No dsn provided, will not send outcomes");
                  return;
                }
                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                  y.logger.log("Sending outcomes:", t);
                var n = (0, m.getEnvelopeEndpointWithUrlEncodedAuth)(
                    this._dsn,
                    this._options
                  ),
                  a = (0, y.createClientReportEnvelope)(
                    t,
                    this._options.tunnel && (0, y.dsnToString)(this._dsn)
                  );
                try {
                  var c =
                      Object.prototype.toString.call(
                        f.WINDOW && f.WINDOW.navigator
                      ) === "[object Navigator]",
                    A = c && typeof f.WINDOW.navigator.sendBeacon == "function";
                  if (A && !this._options.transportOptions) {
                    var C = f.WINDOW.navigator.sendBeacon.bind(
                      f.WINDOW.navigator
                    );
                    C(n, (0, y.serializeEnvelope)(a));
                  } else this._sendEnvelope(a);
                } catch (U) {
                  (typeof __SENTRY_DEBUG__ == "undefined" ||
                    __SENTRY_DEBUG__) &&
                    y.logger.error(U);
                }
              },
            },
          ]),
          i
        );
      })(m.BaseClient);
      e.BrowserClient = u;
    },
    176591: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.eventFromError = m),
        (e.eventFromException = d),
        (e.eventFromMessage = s),
        (e.eventFromPlainObject = j),
        (e.eventFromString = O),
        (e.eventFromUnknownInput = u),
        (e.exceptionFromError = h),
        (e.parseStackFrames = y);
      var E = g(r(346797)),
        P = r(681321),
        w = r(61659);
      function _(o, i) {
        var l = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(o);
          i &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(o, n).enumerable;
            })),
            l.push.apply(l, t);
        }
        return l;
      }
      function p(o) {
        for (var i = 1; i < arguments.length; i++) {
          var l = arguments[i] != null ? arguments[i] : {};
          i % 2
            ? _(Object(l), !0).forEach(function (t) {
                (0, E.default)(o, t, l[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
            : _(Object(l)).forEach(function (t) {
                Object.defineProperty(
                  o,
                  t,
                  Object.getOwnPropertyDescriptor(l, t)
                );
              });
        }
        return o;
      }
      function h(o, i) {
        var l = y(o, i),
          t = { type: i && i.name, value: v(i) };
        return (
          l.length && (t.stacktrace = { frames: l }),
          t.type === void 0 &&
            t.value === "" &&
            (t.value = "Unrecoverable error caught"),
          t
        );
      }
      function j(o, i, l, t) {
        var n = (0, P.getCurrentHub)(),
          a = n.getClient(),
          c = a && a.getOptions().normalizeDepth,
          A = {
            exception: {
              values: [
                {
                  type: (0, w.isEvent)(i)
                    ? i.constructor.name
                    : t
                    ? "UnhandledRejection"
                    : "Error",
                  value: "Non-Error "
                    .concat(
                      t ? "promise rejection" : "exception",
                      " captured with keys: "
                    )
                    .concat((0, w.extractExceptionKeysForMessage)(i)),
                },
              ],
            },
            extra: { __serialized__: (0, w.normalizeToSize)(i, c) },
          };
        if (l) {
          var C = y(o, l);
          C.length && (A.exception.values[0].stacktrace = { frames: C });
        }
        return A;
      }
      function m(o, i) {
        return { exception: { values: [h(o, i)] } };
      }
      function y(o, i) {
        var l = i.stacktrace || i.stack || "",
          t = f(i);
        try {
          return o(l, t);
        } catch (n) {}
        return [];
      }
      var b = /Minified React error #\d+;/i;
      function f(o) {
        if (o) {
          if (typeof o.framesToPop == "number") return o.framesToPop;
          if (b.test(o.message)) return 1;
        }
        return 0;
      }
      function v(o) {
        var i = o && o.message;
        return i
          ? i.error && typeof i.error.message == "string"
            ? i.error.message
            : i
          : "No error message";
      }
      function d(o, i, l, t) {
        var n = (l && l.syntheticException) || void 0,
          a = u(o, i, n, t);
        return (
          (0, w.addExceptionMechanism)(a),
          (a.level = "error"),
          l && l.event_id && (a.event_id = l.event_id),
          (0, w.resolvedSyncPromise)(a)
        );
      }
      function s(o, i) {
        var l =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : "info",
          t = arguments.length > 3 ? arguments[3] : void 0,
          n = arguments.length > 4 ? arguments[4] : void 0,
          a = (t && t.syntheticException) || void 0,
          c = O(o, i, a, n);
        return (
          (c.level = l),
          t && t.event_id && (c.event_id = t.event_id),
          (0, w.resolvedSyncPromise)(c)
        );
      }
      function u(o, i, l, t, n) {
        var a;
        if ((0, w.isErrorEvent)(i) && i.error) {
          var c = i;
          return m(o, c.error);
        }
        if ((0, w.isDOMError)(i) || (0, w.isDOMException)(i)) {
          var A = i;
          if ("stack" in i) a = m(o, i);
          else {
            var C =
                A.name || ((0, w.isDOMError)(A) ? "DOMError" : "DOMException"),
              U = A.message ? "".concat(C, ": ").concat(A.message) : C;
            (a = O(o, U, l, t)), (0, w.addExceptionTypeValue)(a, U);
          }
          return (
            "code" in A &&
              (a.tags = p(
                p({}, a.tags),
                {},
                { "DOMException.code": "".concat(A.code) }
              )),
            a
          );
        }
        if ((0, w.isError)(i)) return m(o, i);
        if ((0, w.isPlainObject)(i) || (0, w.isEvent)(i)) {
          var L = i;
          return (
            (a = j(o, L, l, n)),
            (0, w.addExceptionMechanism)(a, { synthetic: !0 }),
            a
          );
        }
        return (
          (a = O(o, i, l, t)),
          (0, w.addExceptionTypeValue)(a, "".concat(i), void 0),
          (0, w.addExceptionMechanism)(a, { synthetic: !0 }),
          a
        );
      }
      function O(o, i, l, t) {
        var n = { message: i };
        if (t && l) {
          var a = y(o, l);
          a.length &&
            (n.exception = {
              values: [{ value: i, stacktrace: { frames: a } }],
            });
        }
        return n;
      }
    },
    404825: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BrowserClient", {
          enumerable: !0,
          get: function () {
            return P.BrowserClient;
          },
        }),
        Object.defineProperty(e, "FunctionToString", {
          enumerable: !0,
          get: function () {
            return g.FunctionToString;
          },
        }),
        Object.defineProperty(e, "Hub", {
          enumerable: !0,
          get: function () {
            return g.Hub;
          },
        }),
        Object.defineProperty(e, "InboundFilters", {
          enumerable: !0,
          get: function () {
            return g.InboundFilters;
          },
        }),
        Object.defineProperty(e, "SDK_VERSION", {
          enumerable: !0,
          get: function () {
            return g.SDK_VERSION;
          },
        }),
        Object.defineProperty(e, "Scope", {
          enumerable: !0,
          get: function () {
            return g.Scope;
          },
        }),
        Object.defineProperty(e, "WINDOW", {
          enumerable: !0,
          get: function () {
            return E.WINDOW;
          },
        }),
        Object.defineProperty(e, "addBreadcrumb", {
          enumerable: !0,
          get: function () {
            return g.addBreadcrumb;
          },
        }),
        Object.defineProperty(e, "addGlobalEventProcessor", {
          enumerable: !0,
          get: function () {
            return g.addGlobalEventProcessor;
          },
        }),
        Object.defineProperty(e, "captureEvent", {
          enumerable: !0,
          get: function () {
            return g.captureEvent;
          },
        }),
        Object.defineProperty(e, "captureException", {
          enumerable: !0,
          get: function () {
            return g.captureException;
          },
        }),
        Object.defineProperty(e, "captureMessage", {
          enumerable: !0,
          get: function () {
            return g.captureMessage;
          },
        }),
        Object.defineProperty(e, "chromeStackLineParser", {
          enumerable: !0,
          get: function () {
            return w.chromeStackLineParser;
          },
        }),
        Object.defineProperty(e, "close", {
          enumerable: !0,
          get: function () {
            return _.close;
          },
        }),
        Object.defineProperty(e, "configureScope", {
          enumerable: !0,
          get: function () {
            return g.configureScope;
          },
        }),
        Object.defineProperty(e, "createTransport", {
          enumerable: !0,
          get: function () {
            return g.createTransport;
          },
        }),
        Object.defineProperty(e, "defaultIntegrations", {
          enumerable: !0,
          get: function () {
            return _.defaultIntegrations;
          },
        }),
        Object.defineProperty(e, "defaultStackLineParsers", {
          enumerable: !0,
          get: function () {
            return w.defaultStackLineParsers;
          },
        }),
        Object.defineProperty(e, "defaultStackParser", {
          enumerable: !0,
          get: function () {
            return w.defaultStackParser;
          },
        }),
        Object.defineProperty(e, "flush", {
          enumerable: !0,
          get: function () {
            return _.flush;
          },
        }),
        Object.defineProperty(e, "forceLoad", {
          enumerable: !0,
          get: function () {
            return _.forceLoad;
          },
        }),
        Object.defineProperty(e, "geckoStackLineParser", {
          enumerable: !0,
          get: function () {
            return w.geckoStackLineParser;
          },
        }),
        Object.defineProperty(e, "getCurrentHub", {
          enumerable: !0,
          get: function () {
            return g.getCurrentHub;
          },
        }),
        Object.defineProperty(e, "getHubFromCarrier", {
          enumerable: !0,
          get: function () {
            return g.getHubFromCarrier;
          },
        }),
        Object.defineProperty(e, "init", {
          enumerable: !0,
          get: function () {
            return _.init;
          },
        }),
        Object.defineProperty(e, "lastEventId", {
          enumerable: !0,
          get: function () {
            return _.lastEventId;
          },
        }),
        Object.defineProperty(e, "makeMain", {
          enumerable: !0,
          get: function () {
            return g.makeMain;
          },
        }),
        Object.defineProperty(e, "onLoad", {
          enumerable: !0,
          get: function () {
            return _.onLoad;
          },
        }),
        Object.defineProperty(e, "opera10StackLineParser", {
          enumerable: !0,
          get: function () {
            return w.opera10StackLineParser;
          },
        }),
        Object.defineProperty(e, "opera11StackLineParser", {
          enumerable: !0,
          get: function () {
            return w.opera11StackLineParser;
          },
        }),
        Object.defineProperty(e, "setContext", {
          enumerable: !0,
          get: function () {
            return g.setContext;
          },
        }),
        Object.defineProperty(e, "setExtra", {
          enumerable: !0,
          get: function () {
            return g.setExtra;
          },
        }),
        Object.defineProperty(e, "setExtras", {
          enumerable: !0,
          get: function () {
            return g.setExtras;
          },
        }),
        Object.defineProperty(e, "setTag", {
          enumerable: !0,
          get: function () {
            return g.setTag;
          },
        }),
        Object.defineProperty(e, "setTags", {
          enumerable: !0,
          get: function () {
            return g.setTags;
          },
        }),
        Object.defineProperty(e, "setUser", {
          enumerable: !0,
          get: function () {
            return g.setUser;
          },
        }),
        Object.defineProperty(e, "showReportDialog", {
          enumerable: !0,
          get: function () {
            return _.showReportDialog;
          },
        }),
        Object.defineProperty(e, "startTransaction", {
          enumerable: !0,
          get: function () {
            return g.startTransaction;
          },
        }),
        Object.defineProperty(e, "winjsStackLineParser", {
          enumerable: !0,
          get: function () {
            return w.winjsStackLineParser;
          },
        }),
        Object.defineProperty(e, "withScope", {
          enumerable: !0,
          get: function () {
            return g.withScope;
          },
        }),
        Object.defineProperty(e, "wrap", {
          enumerable: !0,
          get: function () {
            return _.wrap;
          },
        });
      var g = r(681321),
        E = r(503656),
        P = r(993797);
      r(661144);
      var w = r(308404),
        _ = r(748873);
      r(45656);
    },
    503656: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WINDOW = void 0),
        (e.ignoreNextOnError = y),
        (e.shouldIgnoreOnError = m),
        (e.wrap = b);
      var E = g(r(346797)),
        P = r(681321),
        w = r(61659);
      function _(f, v) {
        var d = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(f);
          v &&
            (s = s.filter(function (u) {
              return Object.getOwnPropertyDescriptor(f, u).enumerable;
            })),
            d.push.apply(d, s);
        }
        return d;
      }
      function p(f) {
        for (var v = 1; v < arguments.length; v++) {
          var d = arguments[v] != null ? arguments[v] : {};
          v % 2
            ? _(Object(d), !0).forEach(function (s) {
                (0, E.default)(f, s, d[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(d))
            : _(Object(d)).forEach(function (s) {
                Object.defineProperty(
                  f,
                  s,
                  Object.getOwnPropertyDescriptor(d, s)
                );
              });
        }
        return f;
      }
      var h = w.GLOBAL_OBJ;
      e.WINDOW = h;
      var j = 0;
      function m() {
        return j > 0;
      }
      function y() {
        j++,
          setTimeout(function () {
            j--;
          });
      }
      function b(f) {
        var v =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          d = arguments.length > 2 ? arguments[2] : void 0;
        if (typeof f != "function") return f;
        try {
          var s = f.__sentry_wrapped__;
          if (s) return s;
          if ((0, w.getOriginalFunction)(f)) return f;
        } catch (i) {
          return f;
        }
        var u = function () {
          var l = Array.prototype.slice.call(arguments);
          try {
            d && typeof d == "function" && d.apply(this, arguments);
            var t = l.map(function (n) {
              return b(n, v);
            });
            return f.apply(this, t);
          } catch (n) {
            throw (
              (y(),
              (0, P.withScope)(function (a) {
                a.addEventProcessor(function (c) {
                  return (
                    v.mechanism &&
                      ((0, w.addExceptionTypeValue)(c, void 0, void 0),
                      (0, w.addExceptionMechanism)(c, v.mechanism)),
                    (c.extra = p(p({}, c.extra), {}, { arguments: l })),
                    c
                  );
                }),
                  (0, P.captureException)(n);
              }),
              n)
            );
          }
        };
        try {
          for (var O in f)
            Object.prototype.hasOwnProperty.call(f, O) && (u[O] = f[O]);
        } catch (i) {}
        (0, w.markFunctionWrapped)(u, f),
          (0, w.addNonEnumerableProperty)(f, "__sentry_wrapped__", u);
        try {
          var o = Object.getOwnPropertyDescriptor(u, "name");
          o.configurable &&
            Object.defineProperty(u, "name", {
              get: function () {
                return f.name;
              },
            });
        } catch (i) {}
        return u;
      }
    },
    806962: function (D, e, r) {
      "use strict";
      var g = r(875832),
        E = r(569644);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Breadcrumbs", {
          enumerable: !0,
          get: function () {
            return d.Breadcrumbs;
          },
        }),
        Object.defineProperty(e, "BrowserClient", {
          enumerable: !0,
          get: function () {
            return h.BrowserClient;
          },
        }),
        Object.defineProperty(e, "Dedupe", {
          enumerable: !0,
          get: function () {
            return O.Dedupe;
          },
        }),
        Object.defineProperty(e, "FunctionToString", {
          enumerable: !0,
          get: function () {
            return w.FunctionToString;
          },
        }),
        Object.defineProperty(e, "GlobalHandlers", {
          enumerable: !0,
          get: function () {
            return f.GlobalHandlers;
          },
        }),
        Object.defineProperty(e, "HttpContext", {
          enumerable: !0,
          get: function () {
            return u.HttpContext;
          },
        }),
        Object.defineProperty(e, "Hub", {
          enumerable: !0,
          get: function () {
            return w.Hub;
          },
        }),
        Object.defineProperty(e, "InboundFilters", {
          enumerable: !0,
          get: function () {
            return w.InboundFilters;
          },
        }),
        (e.Integrations = void 0),
        Object.defineProperty(e, "LinkedErrors", {
          enumerable: !0,
          get: function () {
            return s.LinkedErrors;
          },
        }),
        Object.defineProperty(e, "SDK_VERSION", {
          enumerable: !0,
          get: function () {
            return w.SDK_VERSION;
          },
        }),
        Object.defineProperty(e, "Scope", {
          enumerable: !0,
          get: function () {
            return w.Scope;
          },
        }),
        Object.defineProperty(e, "TryCatch", {
          enumerable: !0,
          get: function () {
            return v.TryCatch;
          },
        }),
        Object.defineProperty(e, "WINDOW", {
          enumerable: !0,
          get: function () {
            return _.WINDOW;
          },
        }),
        Object.defineProperty(e, "addBreadcrumb", {
          enumerable: !0,
          get: function () {
            return w.addBreadcrumb;
          },
        }),
        Object.defineProperty(e, "addGlobalEventProcessor", {
          enumerable: !0,
          get: function () {
            return w.addGlobalEventProcessor;
          },
        }),
        Object.defineProperty(e, "captureEvent", {
          enumerable: !0,
          get: function () {
            return w.captureEvent;
          },
        }),
        Object.defineProperty(e, "captureException", {
          enumerable: !0,
          get: function () {
            return w.captureException;
          },
        }),
        Object.defineProperty(e, "captureMessage", {
          enumerable: !0,
          get: function () {
            return w.captureMessage;
          },
        }),
        Object.defineProperty(e, "chromeStackLineParser", {
          enumerable: !0,
          get: function () {
            return y.chromeStackLineParser;
          },
        }),
        Object.defineProperty(e, "close", {
          enumerable: !0,
          get: function () {
            return b.close;
          },
        }),
        Object.defineProperty(e, "configureScope", {
          enumerable: !0,
          get: function () {
            return w.configureScope;
          },
        }),
        Object.defineProperty(e, "createTransport", {
          enumerable: !0,
          get: function () {
            return w.createTransport;
          },
        }),
        Object.defineProperty(e, "defaultIntegrations", {
          enumerable: !0,
          get: function () {
            return b.defaultIntegrations;
          },
        }),
        Object.defineProperty(e, "defaultStackLineParsers", {
          enumerable: !0,
          get: function () {
            return y.defaultStackLineParsers;
          },
        }),
        Object.defineProperty(e, "defaultStackParser", {
          enumerable: !0,
          get: function () {
            return y.defaultStackParser;
          },
        }),
        Object.defineProperty(e, "flush", {
          enumerable: !0,
          get: function () {
            return b.flush;
          },
        }),
        Object.defineProperty(e, "forceLoad", {
          enumerable: !0,
          get: function () {
            return b.forceLoad;
          },
        }),
        Object.defineProperty(e, "geckoStackLineParser", {
          enumerable: !0,
          get: function () {
            return y.geckoStackLineParser;
          },
        }),
        Object.defineProperty(e, "getCurrentHub", {
          enumerable: !0,
          get: function () {
            return w.getCurrentHub;
          },
        }),
        Object.defineProperty(e, "getHubFromCarrier", {
          enumerable: !0,
          get: function () {
            return w.getHubFromCarrier;
          },
        }),
        Object.defineProperty(e, "init", {
          enumerable: !0,
          get: function () {
            return b.init;
          },
        }),
        Object.defineProperty(e, "lastEventId", {
          enumerable: !0,
          get: function () {
            return b.lastEventId;
          },
        }),
        Object.defineProperty(e, "makeFetchTransport", {
          enumerable: !0,
          get: function () {
            return j.makeFetchTransport;
          },
        }),
        Object.defineProperty(e, "makeMain", {
          enumerable: !0,
          get: function () {
            return w.makeMain;
          },
        }),
        Object.defineProperty(e, "makeXHRTransport", {
          enumerable: !0,
          get: function () {
            return m.makeXHRTransport;
          },
        }),
        Object.defineProperty(e, "onLoad", {
          enumerable: !0,
          get: function () {
            return b.onLoad;
          },
        }),
        Object.defineProperty(e, "opera10StackLineParser", {
          enumerable: !0,
          get: function () {
            return y.opera10StackLineParser;
          },
        }),
        Object.defineProperty(e, "opera11StackLineParser", {
          enumerable: !0,
          get: function () {
            return y.opera11StackLineParser;
          },
        }),
        Object.defineProperty(e, "setContext", {
          enumerable: !0,
          get: function () {
            return w.setContext;
          },
        }),
        Object.defineProperty(e, "setExtra", {
          enumerable: !0,
          get: function () {
            return w.setExtra;
          },
        }),
        Object.defineProperty(e, "setExtras", {
          enumerable: !0,
          get: function () {
            return w.setExtras;
          },
        }),
        Object.defineProperty(e, "setTag", {
          enumerable: !0,
          get: function () {
            return w.setTag;
          },
        }),
        Object.defineProperty(e, "setTags", {
          enumerable: !0,
          get: function () {
            return w.setTags;
          },
        }),
        Object.defineProperty(e, "setUser", {
          enumerable: !0,
          get: function () {
            return w.setUser;
          },
        }),
        Object.defineProperty(e, "showReportDialog", {
          enumerable: !0,
          get: function () {
            return b.showReportDialog;
          },
        }),
        Object.defineProperty(e, "startTransaction", {
          enumerable: !0,
          get: function () {
            return w.startTransaction;
          },
        }),
        Object.defineProperty(e, "winjsStackLineParser", {
          enumerable: !0,
          get: function () {
            return y.winjsStackLineParser;
          },
        }),
        Object.defineProperty(e, "withScope", {
          enumerable: !0,
          get: function () {
            return w.withScope;
          },
        }),
        Object.defineProperty(e, "wrap", {
          enumerable: !0,
          get: function () {
            return b.wrap;
          },
        });
      var P = g(r(346797));
      r(404825);
      var w = r(681321),
        _ = r(503656),
        p = i(r(45656)),
        h = r(993797),
        j = r(279936),
        m = r(235278),
        y = r(308404),
        b = r(748873),
        f = r(393234),
        v = r(908986),
        d = r(280544),
        s = r(161310),
        u = r(561449),
        O = r(586439);
      function o(c) {
        if (typeof WeakMap != "function") return null;
        var A = new WeakMap(),
          C = new WeakMap();
        return (o = function (L) {
          return L ? C : A;
        })(c);
      }
      function i(c, A) {
        if (!A && c && c.__esModule) return c;
        if (c === null || (E(c) !== "object" && typeof c != "function"))
          return { default: c };
        var C = o(A);
        if (C && C.has(c)) return C.get(c);
        var U = {},
          L = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var S in c)
          if (S !== "default" && Object.prototype.hasOwnProperty.call(c, S)) {
            var B = L ? Object.getOwnPropertyDescriptor(c, S) : null;
            B && (B.get || B.set)
              ? Object.defineProperty(U, S, B)
              : (U[S] = c[S]);
          }
        return (U.default = c), C && C.set(c, U), U;
      }
      function l(c, A) {
        var C = Object.keys(c);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(c);
          A &&
            (U = U.filter(function (L) {
              return Object.getOwnPropertyDescriptor(c, L).enumerable;
            })),
            C.push.apply(C, U);
        }
        return C;
      }
      function t(c) {
        for (var A = 1; A < arguments.length; A++) {
          var C = arguments[A] != null ? arguments[A] : {};
          A % 2
            ? l(Object(C), !0).forEach(function (U) {
                (0, P.default)(c, U, C[U]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(C))
            : l(Object(C)).forEach(function (U) {
                Object.defineProperty(
                  c,
                  U,
                  Object.getOwnPropertyDescriptor(C, U)
                );
              });
        }
        return c;
      }
      var n = {};
      _.WINDOW.Sentry &&
        _.WINDOW.Sentry.Integrations &&
        (n = _.WINDOW.Sentry.Integrations);
      var a = t(t(t({}, n), w.Integrations), p);
      e.Integrations = a;
    },
    280544: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Breadcrumbs = e.BREADCRUMB_INTEGRATION_ID = void 0);
      var E = g(r(569644)),
        P = g(r(346797)),
        w = g(r(858240)),
        _ = g(r(4636)),
        p = r(681321),
        h = r(61659),
        j = r(503656);
      function m(i, l) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(i);
          l &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(i, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function y(i) {
        for (var l = 1; l < arguments.length; l++) {
          var t = arguments[l] != null ? arguments[l] : {};
          l % 2
            ? m(Object(t), !0).forEach(function (n) {
                (0, P.default)(i, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  i,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return i;
      }
      var b = 1024,
        f = "Breadcrumbs";
      e.BREADCRUMB_INTEGRATION_ID = f;
      var v = (function () {
        function i(l) {
          (0, w.default)(this, i),
            i.prototype.__init.call(this),
            (this.options = y(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              l
            ));
        }
        return (
          (0, _.default)(
            i,
            [
              {
                key: "__init",
                value: function () {
                  this.name = i.id;
                },
              },
              {
                key: "setupOnce",
                value: function () {
                  this.options.console &&
                    (0, h.addInstrumentationHandler)("console", s),
                    this.options.dom &&
                      (0, h.addInstrumentationHandler)(
                        "dom",
                        d(this.options.dom)
                      ),
                    this.options.xhr &&
                      (0, h.addInstrumentationHandler)("xhr", u),
                    this.options.fetch &&
                      (0, h.addInstrumentationHandler)("fetch", O),
                    this.options.history &&
                      (0, h.addInstrumentationHandler)("history", o);
                },
              },
              {
                key: "addSentryBreadcrumb",
                value: function (t) {
                  this.options.sentry &&
                    (0, p.getCurrentHub)().addBreadcrumb(
                      {
                        category: "sentry.".concat(
                          t.type === "transaction" ? "transaction" : "event"
                        ),
                        event_id: t.event_id,
                        level: t.level,
                        message: (0, h.getEventDescription)(t),
                      },
                      { event: t }
                    );
                },
              },
            ],
            [
              {
                key: "__initStatic",
                value: function () {
                  this.id = f;
                },
              },
            ]
          ),
          i
        );
      })();
      (e.Breadcrumbs = v), v.__initStatic();
      function d(i) {
        function l(t) {
          var n,
            a = (0, E.default)(i) === "object" ? i.serializeAttribute : void 0,
            c =
              (0, E.default)(i) === "object" &&
              typeof i.maxStringLength == "number"
                ? i.maxStringLength
                : void 0;
          c &&
            c > b &&
            ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              h.logger.warn(
                "`dom.maxStringLength` cannot exceed "
                  .concat(b, ", but a value of ")
                  .concat(c, " was configured. Sentry will use ")
                  .concat(b, " instead.")
              ),
            (c = b)),
            typeof a == "string" && (a = [a]);
          try {
            n = t.event.target
              ? (0, h.htmlTreeAsString)(t.event.target, {
                  keyAttrs: a,
                  maxStringLength: c,
                })
              : (0, h.htmlTreeAsString)(t.event, {
                  keyAttrs: a,
                  maxStringLength: c,
                });
          } catch (A) {
            n = "<unknown>";
          }
          n.length !== 0 &&
            (0, p.getCurrentHub)().addBreadcrumb(
              { category: "ui.".concat(t.name), message: n },
              { event: t.event, name: t.name, global: t.global }
            );
        }
        return l;
      }
      function s(i) {
        for (var l = 0; l < i.args.length; l++)
          if (i.args[l] === "ref=Ref<") {
            i.args[l + 1] = "viewRef";
            break;
          }
        var t = {
          category: "console",
          data: { arguments: i.args, logger: "console" },
          level: (0, h.severityLevelFromString)(i.level),
          message: (0, h.safeJoin)(i.args, " "),
        };
        if (i.level === "assert")
          if (i.args[0] === !1)
            (t.message = "Assertion failed: ".concat(
              (0, h.safeJoin)(i.args.slice(1), " ") || "console.assert"
            )),
              (t.data.arguments = i.args.slice(1));
          else return;
        (0, p.getCurrentHub)().addBreadcrumb(t, {
          input: i.args,
          level: i.level,
        });
      }
      function u(i) {
        if (i.endTimestamp) {
          if (i.xhr.__sentry_own_request__) return;
          var l = i.xhr.__sentry_xhr__ || {},
            t = l.method,
            n = l.url,
            a = l.status_code,
            c = l.body;
          (0, p.getCurrentHub)().addBreadcrumb(
            {
              category: "xhr",
              data: { method: t, url: n, status_code: a },
              type: "http",
            },
            { xhr: i.xhr, input: c }
          );
          return;
        }
      }
      function O(i) {
        !i.endTimestamp ||
          (i.fetchData.url.match(/sentry_key/) &&
            i.fetchData.method === "POST") ||
          (i.error
            ? (0, p.getCurrentHub)().addBreadcrumb(
                {
                  category: "fetch",
                  data: i.fetchData,
                  level: "error",
                  type: "http",
                },
                { data: i.error, input: i.args }
              )
            : (0, p.getCurrentHub)().addBreadcrumb(
                {
                  category: "fetch",
                  data: y(
                    y({}, i.fetchData),
                    {},
                    { status_code: i.response.status }
                  ),
                  type: "http",
                },
                { input: i.args, response: i.response }
              ));
      }
      function o(i) {
        var l = i.from,
          t = i.to,
          n = (0, h.parseUrl)(j.WINDOW.location.href),
          a = (0, h.parseUrl)(l),
          c = (0, h.parseUrl)(t);
        a.path || (a = n),
          n.protocol === c.protocol && n.host === c.host && (t = c.relative),
          n.protocol === a.protocol && n.host === a.host && (l = a.relative),
          (0, p.getCurrentHub)().addBreadcrumb({
            category: "navigation",
            data: { from: l, to: t },
          });
      }
    },
    586439: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Dedupe = void 0);
      var E = g(r(858240)),
        P = g(r(4636)),
        w = r(61659),
        _ = (function () {
          function v() {
            (0, E.default)(this, v), v.prototype.__init.call(this);
          }
          return (
            (0, P.default)(
              v,
              [
                {
                  key: "__init",
                  value: function () {
                    this.name = v.id;
                  },
                },
                {
                  key: "setupOnce",
                  value: function (s, u) {
                    var O = function (i) {
                      var l = u().getIntegration(v);
                      if (l) {
                        try {
                          if (p(i, l._previousEvent))
                            return (
                              (typeof __SENTRY_DEBUG__ == "undefined" ||
                                __SENTRY_DEBUG__) &&
                                w.logger.warn(
                                  "Event dropped due to being a duplicate of previously captured event."
                                ),
                              null
                            );
                        } catch (t) {
                          return (l._previousEvent = i);
                        }
                        return (l._previousEvent = i);
                      }
                      return i;
                    };
                    (O.id = this.name), s(O);
                  },
                },
              ],
              [
                {
                  key: "__initStatic",
                  value: function () {
                    this.id = "Dedupe";
                  },
                },
              ]
            ),
            v
          );
        })();
      (e.Dedupe = _), _.__initStatic();
      function p(v, d) {
        return d ? !!(h(v, d) || j(v, d)) : !1;
      }
      function h(v, d) {
        var s = v.message,
          u = d.message;
        return !(
          (!s && !u) ||
          (s && !u) ||
          (!s && u) ||
          s !== u ||
          !y(v, d) ||
          !m(v, d)
        );
      }
      function j(v, d) {
        var s = b(d),
          u = b(v);
        return !(
          !s ||
          !u ||
          s.type !== u.type ||
          s.value !== u.value ||
          !y(v, d) ||
          !m(v, d)
        );
      }
      function m(v, d) {
        var s = f(v),
          u = f(d);
        if (!s && !u) return !0;
        if ((s && !u) || (!s && u) || ((s = s), (u = u), u.length !== s.length))
          return !1;
        for (var O = 0; O < u.length; O++) {
          var o = u[O],
            i = s[O];
          if (
            o.filename !== i.filename ||
            o.lineno !== i.lineno ||
            o.colno !== i.colno ||
            o.function !== i.function
          )
            return !1;
        }
        return !0;
      }
      function y(v, d) {
        var s = v.fingerprint,
          u = d.fingerprint;
        if (!s && !u) return !0;
        if ((s && !u) || (!s && u)) return !1;
        (s = s), (u = u);
        try {
          return s.join("") === u.join("");
        } catch (O) {
          return !1;
        }
      }
      function b(v) {
        return v.exception && v.exception.values && v.exception.values[0];
      }
      function f(v) {
        var d = v.exception;
        if (d)
          try {
            return d.values[0].stacktrace.frames;
          } catch (s) {
            return;
          }
      }
    },
    393234: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GlobalHandlers = void 0);
      var E = g(r(375798)),
        P = g(r(346797)),
        w = g(r(858240)),
        _ = g(r(4636)),
        p = r(681321),
        h = r(61659),
        j = r(176591),
        m = r(503656);
      function y(t, n) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          n &&
            (c = c.filter(function (A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable;
            })),
            a.push.apply(a, c);
        }
        return a;
      }
      function b(t) {
        for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? y(Object(a), !0).forEach(function (c) {
                (0, P.default)(t, c, a[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : y(Object(a)).forEach(function (c) {
                Object.defineProperty(
                  t,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                );
              });
        }
        return t;
      }
      var f = (function () {
        function t(n) {
          (0, w.default)(this, t),
            t.prototype.__init.call(this),
            t.prototype.__init2.call(this),
            (this._options = b({ onerror: !0, onunhandledrejection: !0 }, n));
        }
        return (
          (0, _.default)(
            t,
            [
              {
                key: "__init",
                value: function () {
                  this.name = t.id;
                },
              },
              {
                key: "__init2",
                value: function () {
                  this._installFunc = { onerror: v, onunhandledrejection: d };
                },
              },
              {
                key: "setupOnce",
                value: function () {
                  Error.stackTraceLimit = 50;
                  var a = this._options;
                  for (var c in a) {
                    var A = this._installFunc[c];
                    A && a[c] && (o(c), A(), (this._installFunc[c] = void 0));
                  }
                },
              },
            ],
            [
              {
                key: "__initStatic",
                value: function () {
                  this.id = "GlobalHandlers";
                },
              },
            ]
          ),
          t
        );
      })();
      (e.GlobalHandlers = f), f.__initStatic();
      function v() {
        (0, h.addInstrumentationHandler)("error", function (t) {
          var n = l(),
            a = (0, E.default)(n, 3),
            c = a[0],
            A = a[1],
            C = a[2];
          if (!!c.getIntegration(f)) {
            var U = t.msg,
              L = t.url,
              S = t.line,
              B = t.column,
              Y = t.error;
            if (
              !((0, m.shouldIgnoreOnError)() || (Y && Y.__sentry_own_request__))
            ) {
              var F =
                Y === void 0 && (0, h.isString)(U)
                  ? u(U, L, S, B)
                  : O(
                      (0, j.eventFromUnknownInput)(A, Y || U, void 0, C, !1),
                      L,
                      S,
                      B
                    );
              (F.level = "error"), i(c, Y, F, "onerror");
            }
          }
        });
      }
      function d() {
        (0, h.addInstrumentationHandler)("unhandledrejection", function (t) {
          var n = l(),
            a = (0, E.default)(n, 3),
            c = a[0],
            A = a[1],
            C = a[2];
          if (!!c.getIntegration(f)) {
            var U = t;
            try {
              "reason" in t
                ? (U = t.reason)
                : "detail" in t &&
                  "reason" in t.detail &&
                  (U = t.detail.reason);
            } catch (S) {}
            if ((0, m.shouldIgnoreOnError)() || (U && U.__sentry_own_request__))
              return !0;
            var L = (0, h.isPrimitive)(U)
              ? s(U)
              : (0, j.eventFromUnknownInput)(A, U, void 0, C, !0);
            (L.level = "error"), i(c, U, L, "onunhandledrejection");
          }
        });
      }
      function s(t) {
        return {
          exception: {
            values: [
              {
                type: "UnhandledRejection",
                value:
                  "Non-Error promise rejection captured with value: ".concat(
                    String(t)
                  ),
              },
            ],
          },
        };
      }
      function u(t, n, a, c) {
        var A =
            /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
          C = (0, h.isErrorEvent)(t) ? t.message : t,
          U = "Error",
          L = C.match(A);
        L && ((U = L[1]), (C = L[2]));
        var S = { exception: { values: [{ type: U, value: C }] } };
        return O(S, n, a, c);
      }
      function O(t, n, a, c) {
        var A = (t.exception = t.exception || {}),
          C = (A.values = A.values || []),
          U = (C[0] = C[0] || {}),
          L = (U.stacktrace = U.stacktrace || {}),
          S = (L.frames = L.frames || []),
          B = isNaN(parseInt(c, 10)) ? void 0 : c,
          Y = isNaN(parseInt(a, 10)) ? void 0 : a,
          F = (0, h.isString)(n) && n.length > 0 ? n : (0, h.getLocationHref)();
        return (
          S.length === 0 &&
            S.push({
              colno: B,
              filename: F,
              function: "?",
              in_app: !0,
              lineno: Y,
            }),
          t
        );
      }
      function o(t) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          h.logger.log("Global Handler attached: ".concat(t));
      }
      function i(t, n, a, c) {
        (0, h.addExceptionMechanism)(a, { handled: !1, type: c }),
          t.captureEvent(a, { originalException: n });
      }
      function l() {
        var t = (0, p.getCurrentHub)(),
          n = t.getClient(),
          a = (n && n.getOptions()) || {
            stackParser: function () {
              return [];
            },
            attachStacktrace: !1,
          };
        return [t, a.stackParser, a.attachStacktrace];
      }
    },
    561449: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HttpContext = void 0);
      var E = g(r(346797)),
        P = g(r(858240)),
        w = g(r(4636)),
        _ = r(681321),
        p = r(503656);
      function h(y, b) {
        var f = Object.keys(y);
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(y);
          b &&
            (v = v.filter(function (d) {
              return Object.getOwnPropertyDescriptor(y, d).enumerable;
            })),
            f.push.apply(f, v);
        }
        return f;
      }
      function j(y) {
        for (var b = 1; b < arguments.length; b++) {
          var f = arguments[b] != null ? arguments[b] : {};
          b % 2
            ? h(Object(f), !0).forEach(function (v) {
                (0, E.default)(y, v, f[v]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(f))
            : h(Object(f)).forEach(function (v) {
                Object.defineProperty(
                  y,
                  v,
                  Object.getOwnPropertyDescriptor(f, v)
                );
              });
        }
        return y;
      }
      var m = (function () {
        function y() {
          (0, P.default)(this, y), y.prototype.__init.call(this);
        }
        return (
          (0, w.default)(
            y,
            [
              {
                key: "__init",
                value: function () {
                  this.name = y.id;
                },
              },
              {
                key: "setupOnce",
                value: function () {
                  (0, _.addGlobalEventProcessor)(function (f) {
                    if ((0, _.getCurrentHub)().getIntegration(y)) {
                      if (
                        !p.WINDOW.navigator &&
                        !p.WINDOW.location &&
                        !p.WINDOW.document
                      )
                        return f;
                      var v =
                          (f.request && f.request.url) ||
                          (p.WINDOW.location && p.WINDOW.location.href),
                        d = p.WINDOW.document || {},
                        s = d.referrer,
                        u = p.WINDOW.navigator || {},
                        O = u.userAgent,
                        o = j(
                          j(
                            j({}, f.request && f.request.headers),
                            s && { Referer: s }
                          ),
                          O && { "User-Agent": O }
                        ),
                        i = j(j({}, v && { url: v }), {}, { headers: o });
                      return j(j({}, f), {}, { request: i });
                    }
                    return f;
                  });
                },
              },
            ],
            [
              {
                key: "__initStatic",
                value: function () {
                  this.id = "HttpContext";
                },
              },
            ]
          ),
          y
        );
      })();
      (e.HttpContext = m), m.__initStatic();
    },
    45656: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Breadcrumbs", {
          enumerable: !0,
          get: function () {
            return P.Breadcrumbs;
          },
        }),
        Object.defineProperty(e, "Dedupe", {
          enumerable: !0,
          get: function () {
            return p.Dedupe;
          },
        }),
        Object.defineProperty(e, "GlobalHandlers", {
          enumerable: !0,
          get: function () {
            return g.GlobalHandlers;
          },
        }),
        Object.defineProperty(e, "HttpContext", {
          enumerable: !0,
          get: function () {
            return _.HttpContext;
          },
        }),
        Object.defineProperty(e, "LinkedErrors", {
          enumerable: !0,
          get: function () {
            return w.LinkedErrors;
          },
        }),
        Object.defineProperty(e, "TryCatch", {
          enumerable: !0,
          get: function () {
            return E.TryCatch;
          },
        });
      var g = r(393234),
        E = r(908986),
        P = r(280544),
        w = r(161310),
        _ = r(561449),
        p = r(586439);
    },
    161310: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinkedErrors = void 0),
        (e._handler = b),
        (e._walkErrorTree = f);
      var E = g(r(603912)),
        P = g(r(858240)),
        w = g(r(4636)),
        _ = r(681321),
        p = r(61659),
        h = r(176591),
        j = "cause",
        m = 5,
        y = (function () {
          function v() {
            var d =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            (0, P.default)(this, v),
              v.prototype.__init.call(this),
              (this._key = d.key || j),
              (this._limit = d.limit || m);
          }
          return (
            (0, w.default)(
              v,
              [
                {
                  key: "__init",
                  value: function () {
                    this.name = v.id;
                  },
                },
                {
                  key: "setupOnce",
                  value: function () {
                    var s = (0, _.getCurrentHub)().getClient();
                    !s ||
                      (0, _.addGlobalEventProcessor)(function (u, O) {
                        var o = (0, _.getCurrentHub)().getIntegration(v);
                        return o
                          ? b(
                              s.getOptions().stackParser,
                              o._key,
                              o._limit,
                              u,
                              O
                            )
                          : u;
                      });
                  },
                },
              ],
              [
                {
                  key: "__initStatic",
                  value: function () {
                    this.id = "LinkedErrors";
                  },
                },
              ]
            ),
            v
          );
        })();
      (e.LinkedErrors = y), y.__initStatic();
      function b(v, d, s, u, O) {
        if (
          !u.exception ||
          !u.exception.values ||
          !O ||
          !(0, p.isInstanceOf)(O.originalException, Error)
        )
          return u;
        var o = f(v, s, O.originalException, d);
        return (
          (u.exception.values = [].concat(
            (0, E.default)(o),
            (0, E.default)(u.exception.values)
          )),
          u
        );
      }
      function f(v, d, s, u) {
        var O =
          arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
        if (!(0, p.isInstanceOf)(s[u], Error) || O.length + 1 >= d) return O;
        var o = (0, h.exceptionFromError)(v, s[u]);
        return f(v, d, s[u], u, [o].concat((0, E.default)(O)));
      }
    },
    908986: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TryCatch = void 0);
      var E = g(r(346797)),
        P = g(r(858240)),
        w = g(r(4636)),
        _ = r(61659),
        p = r(503656);
      function h(s, u) {
        var O = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(s);
          u &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(s, i).enumerable;
            })),
            O.push.apply(O, o);
        }
        return O;
      }
      function j(s) {
        for (var u = 1; u < arguments.length; u++) {
          var O = arguments[u] != null ? arguments[u] : {};
          u % 2
            ? h(Object(O), !0).forEach(function (o) {
                (0, E.default)(s, o, O[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(O))
            : h(Object(O)).forEach(function (o) {
                Object.defineProperty(
                  s,
                  o,
                  Object.getOwnPropertyDescriptor(O, o)
                );
              });
        }
        return s;
      }
      var m = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        y = (function () {
          function s(u) {
            (0, P.default)(this, s),
              s.prototype.__init.call(this),
              (this._options = j(
                {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                },
                u
              ));
          }
          return (
            (0, w.default)(
              s,
              [
                {
                  key: "__init",
                  value: function () {
                    this.name = s.id;
                  },
                },
                {
                  key: "setupOnce",
                  value: function () {
                    this._options.setTimeout &&
                      (0, _.fill)(p.WINDOW, "setTimeout", b),
                      this._options.setInterval &&
                        (0, _.fill)(p.WINDOW, "setInterval", b),
                      this._options.requestAnimationFrame &&
                        (0, _.fill)(p.WINDOW, "requestAnimationFrame", f),
                      this._options.XMLHttpRequest &&
                        "XMLHttpRequest" in p.WINDOW &&
                        (0, _.fill)(XMLHttpRequest.prototype, "send", v);
                    var O = this._options.eventTarget;
                    if (O) {
                      var o = Array.isArray(O) ? O : m;
                      o.forEach(d);
                    }
                  },
                },
              ],
              [
                {
                  key: "__initStatic",
                  value: function () {
                    this.id = "TryCatch";
                  },
                },
              ]
            ),
            s
          );
        })();
      (e.TryCatch = y), y.__initStatic();
      function b(s) {
        return function () {
          for (var u = arguments.length, O = new Array(u), o = 0; o < u; o++)
            O[o] = arguments[o];
          var i = O[0];
          return (
            (O[0] = (0, p.wrap)(i, {
              mechanism: {
                data: { function: (0, _.getFunctionName)(s) },
                handled: !0,
                type: "instrument",
              },
            })),
            s.apply(this, O)
          );
        };
      }
      function f(s) {
        return function (u) {
          return s.apply(this, [
            (0, p.wrap)(u, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: (0, _.getFunctionName)(s),
                },
                handled: !0,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function v(s) {
        return function () {
          var u = this,
            O = ["onload", "onerror", "onprogress", "onreadystatechange"];
          O.forEach(function (t) {
            t in u &&
              typeof u[t] == "function" &&
              (0, _.fill)(u, t, function (n) {
                var a = {
                    mechanism: {
                      data: { function: t, handler: (0, _.getFunctionName)(n) },
                      handled: !0,
                      type: "instrument",
                    },
                  },
                  c = (0, _.getOriginalFunction)(n);
                return (
                  c && (a.mechanism.data.handler = (0, _.getFunctionName)(c)),
                  (0, p.wrap)(n, a)
                );
              });
          });
          for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
            i[l] = arguments[l];
          return s.apply(this, i);
        };
      }
      function d(s) {
        var u = p.WINDOW,
          O = u[s] && u[s].prototype;
        !O ||
          !O.hasOwnProperty ||
          !O.hasOwnProperty("addEventListener") ||
          ((0, _.fill)(O, "addEventListener", function (o) {
            return function (i, l, t) {
              try {
                typeof l.handleEvent == "function" &&
                  (l.handleEvent = (0, p.wrap)(l.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: (0, _.getFunctionName)(l),
                        target: s,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }));
              } catch (n) {}
              return o.apply(this, [
                i,
                (0, p.wrap)(l, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: (0, _.getFunctionName)(l),
                      target: s,
                    },
                    handled: !0,
                    type: "instrument",
                  },
                }),
                t,
              ]);
            };
          }),
          (0, _.fill)(O, "removeEventListener", function (o) {
            return function (i, l, t) {
              var n = l;
              try {
                var a = n && n.__sentry_wrapped__;
                a && o.call(this, i, a, t);
              } catch (c) {}
              return o.call(this, i, n, t);
            };
          }));
      }
    },
    748873: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.close = A),
        (e.defaultIntegrations = void 0),
        (e.flush = c),
        (e.forceLoad = n),
        (e.init = i),
        (e.lastEventId = t),
        (e.onLoad = a),
        (e.showReportDialog = l),
        (e.wrap = C);
      var E = g(r(346797)),
        P = r(681321),
        w = r(61659),
        _ = r(993797),
        p = r(503656);
      r(45656);
      var h = r(308404);
      r(661144);
      var j = r(908986),
        m = r(280544),
        y = r(393234),
        b = r(161310),
        f = r(586439),
        v = r(561449),
        d = r(279936),
        s = r(235278);
      function u(S, B) {
        var Y = Object.keys(S);
        if (Object.getOwnPropertySymbols) {
          var F = Object.getOwnPropertySymbols(S);
          B &&
            (F = F.filter(function (z) {
              return Object.getOwnPropertyDescriptor(S, z).enumerable;
            })),
            Y.push.apply(Y, F);
        }
        return Y;
      }
      function O(S) {
        for (var B = 1; B < arguments.length; B++) {
          var Y = arguments[B] != null ? arguments[B] : {};
          B % 2
            ? u(Object(Y), !0).forEach(function (F) {
                (0, E.default)(S, F, Y[F]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(Y))
            : u(Object(Y)).forEach(function (F) {
                Object.defineProperty(
                  S,
                  F,
                  Object.getOwnPropertyDescriptor(Y, F)
                );
              });
        }
        return S;
      }
      var o = [
        new P.Integrations.InboundFilters(),
        new P.Integrations.FunctionToString(),
        new j.TryCatch(),
        new m.Breadcrumbs(),
        new y.GlobalHandlers(),
        new b.LinkedErrors(),
        new f.Dedupe(),
        new v.HttpContext(),
      ];
      e.defaultIntegrations = o;
      function i() {
        var S =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        S.defaultIntegrations === void 0 && (S.defaultIntegrations = o),
          S.release === void 0 &&
            (typeof __SENTRY_RELEASE__ == "string" &&
              (S.release = __SENTRY_RELEASE__),
            p.WINDOW.SENTRY_RELEASE &&
              p.WINDOW.SENTRY_RELEASE.id &&
              (S.release = p.WINDOW.SENTRY_RELEASE.id)),
          S.autoSessionTracking === void 0 && (S.autoSessionTracking = !0),
          S.sendClientReports === void 0 && (S.sendClientReports = !0);
        var B = O(
          O({}, S),
          {},
          {
            stackParser: (0, w.stackParserFromStackParserOptions)(
              S.stackParser || h.defaultStackParser
            ),
            integrations: (0, P.getIntegrationsToSetup)(S),
            transport:
              S.transport ||
              ((0, w.supportsFetch)()
                ? d.makeFetchTransport
                : s.makeXHRTransport),
          }
        );
        (0, P.initAndBind)(_.BrowserClient, B), S.autoSessionTracking && L();
      }
      function l() {
        var S =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          B =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : (0, P.getCurrentHub)();
        if (!p.WINDOW.document) {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            w.logger.error(
              "Global document not defined in showReportDialog call"
            );
          return;
        }
        var Y = B.getStackTop(),
          F = Y.client,
          z = Y.scope,
          Q = S.dsn || (F && F.getDsn());
        if (!Q) {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            w.logger.error("DSN not configured for showReportDialog call");
          return;
        }
        z && (S.user = O(O({}, z.getUser()), S.user)),
          S.eventId || (S.eventId = B.lastEventId());
        var V = p.WINDOW.document.createElement("script");
        (V.async = !0),
          (V.src = (0, P.getReportDialogEndpoint)(Q, S)),
          S.onLoad && (V.onload = S.onLoad);
        var N = p.WINDOW.document.head || p.WINDOW.document.body;
        N
          ? N.appendChild(V)
          : (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            w.logger.error(
              "Not injecting report dialog. No injection point found in HTML"
            );
      }
      function t() {
        return (0, P.getCurrentHub)().lastEventId();
      }
      function n() {}
      function a(S) {
        S();
      }
      function c(S) {
        var B = (0, P.getCurrentHub)().getClient();
        return B
          ? B.flush(S)
          : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              w.logger.warn("Cannot flush events. No client defined."),
            (0, w.resolvedSyncPromise)(!1));
      }
      function A(S) {
        var B = (0, P.getCurrentHub)().getClient();
        return B
          ? B.close(S)
          : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              w.logger.warn(
                "Cannot flush events and disable SDK. No client defined."
              ),
            (0, w.resolvedSyncPromise)(!1));
      }
      function C(S) {
        return (0, p.wrap)(S)();
      }
      function U(S) {
        S.startSession({ ignoreDuration: !0 }), S.captureSession();
      }
      function L() {
        if (typeof p.WINDOW.document == "undefined") {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            w.logger.warn(
              "Session tracking in non-browser environment with @sentry/browser is not supported."
            );
          return;
        }
        var S = (0, P.getCurrentHub)();
        !S.captureSession ||
          (U(S),
          (0, w.addInstrumentationHandler)("history", function (B) {
            var Y = B.from,
              F = B.to;
            Y === void 0 || Y === F || U((0, P.getCurrentHub)());
          }));
      }
    },
    308404: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.winjsStackLineParser =
          e.opera11StackLineParser =
          e.opera10StackLineParser =
          e.geckoStackLineParser =
          e.defaultStackParser =
          e.defaultStackLineParsers =
          e.chromeStackLineParser =
            void 0);
      var E = g(r(375798)),
        P = r(61659),
        w = "?",
        _ = 10,
        p = 20,
        h = 30,
        j = 40,
        m = 50;
      function y(Y, F, z, Q) {
        var V = { filename: Y, function: F, in_app: !0 };
        return z !== void 0 && (V.lineno = z), Q !== void 0 && (V.colno = Q), V;
      }
      var b =
          /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        f = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        v = function (F) {
          var z = b.exec(F);
          if (z) {
            var Q = z[2] && z[2].indexOf("eval") === 0;
            if (Q) {
              var V = f.exec(z[2]);
              V && ((z[2] = V[1]), (z[3] = V[2]), (z[4] = V[3]));
            }
            var N = B(z[1] || w, z[2]),
              R = (0, E.default)(N, 2),
              T = R[0],
              k = R[1];
            return y(k, T, z[3] ? +z[3] : void 0, z[4] ? +z[4] : void 0);
          }
        },
        d = [h, v];
      e.chromeStackLineParser = d;
      var s =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        O = function (F) {
          var z = s.exec(F);
          if (z) {
            var Q = z[3] && z[3].indexOf(" > eval") > -1;
            if (Q) {
              var V = u.exec(z[3]);
              V &&
                ((z[1] = z[1] || "eval"),
                (z[3] = V[1]),
                (z[4] = V[2]),
                (z[5] = ""));
            }
            var N = z[3],
              R = z[1] || w,
              T = B(R, N),
              k = (0, E.default)(T, 2);
            return (
              (R = k[0]),
              (N = k[1]),
              y(N, R, z[4] ? +z[4] : void 0, z[5] ? +z[5] : void 0)
            );
          }
        },
        o = [m, O];
      e.geckoStackLineParser = o;
      var i =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        l = function (F) {
          var z = i.exec(F);
          return z ? y(z[2], z[1] || w, +z[3], z[4] ? +z[4] : void 0) : void 0;
        },
        t = [j, l];
      e.winjsStackLineParser = t;
      var n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        a = function (F) {
          var z = n.exec(F);
          return z ? y(z[2], z[3] || w, +z[1]) : void 0;
        },
        c = [_, a];
      e.opera10StackLineParser = c;
      var A =
          / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        C = function (F) {
          var z = A.exec(F);
          return z ? y(z[5], z[3] || z[4] || w, +z[1], +z[2]) : void 0;
        },
        U = [p, C];
      e.opera11StackLineParser = U;
      var L = [d, o, t];
      e.defaultStackLineParsers = L;
      var S = P.createStackParser.apply(void 0, L);
      e.defaultStackParser = S;
      var B = function (F, z) {
        var Q = F.indexOf("safari-extension") !== -1,
          V = F.indexOf("safari-web-extension") !== -1;
        return Q || V
          ? [
              F.indexOf("@") !== -1 ? F.split("@")[0] : w,
              Q
                ? "safari-extension:".concat(z)
                : "safari-web-extension:".concat(z),
            ]
          : [F, z];
      };
    },
    279936: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.makeFetchTransport = j);
      var E = g(r(346797)),
        P = r(681321),
        w = r(61659),
        _ = r(626812);
      function p(m, y) {
        var b = Object.keys(m);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(m);
          y &&
            (f = f.filter(function (v) {
              return Object.getOwnPropertyDescriptor(m, v).enumerable;
            })),
            b.push.apply(b, f);
        }
        return b;
      }
      function h(m) {
        for (var y = 1; y < arguments.length; y++) {
          var b = arguments[y] != null ? arguments[y] : {};
          y % 2
            ? p(Object(b), !0).forEach(function (f) {
                (0, E.default)(m, f, b[f]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(b))
            : p(Object(b)).forEach(function (f) {
                Object.defineProperty(
                  m,
                  f,
                  Object.getOwnPropertyDescriptor(b, f)
                );
              });
        }
        return m;
      }
      function j(m) {
        var y =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : (0, _.getNativeFetchImplementation)();
        function b(f) {
          var v = h(
            {
              body: f.body,
              method: "POST",
              referrerPolicy: "origin",
              headers: m.headers,
              keepalive: f.body.length <= 65536,
            },
            m.fetchOptions
          );
          try {
            return y(m.url, v).then(function (d) {
              return {
                statusCode: d.status,
                headers: {
                  "x-sentry-rate-limits": d.headers.get("X-Sentry-Rate-Limits"),
                  "retry-after": d.headers.get("Retry-After"),
                },
              };
            });
          } catch (d) {
            return (
              (0, _.clearCachedFetchImplementation)(),
              (0, w.rejectedSyncPromise)(d)
            );
          }
        }
        return (0, P.createTransport)(m, b);
      }
    },
    661144: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "makeFetchTransport", {
          enumerable: !0,
          get: function () {
            return g.makeFetchTransport;
          },
        }),
        Object.defineProperty(e, "makeXHRTransport", {
          enumerable: !0,
          get: function () {
            return E.makeXHRTransport;
          },
        });
      var g = r(279936),
        E = r(235278);
    },
    626812: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clearCachedFetchImplementation = _),
        (e.getNativeFetchImplementation = w);
      var g = r(61659),
        E = r(503656),
        P = void 0;
      function w() {
        if (P) return P;
        if ((0, g.isNativeFetch)(E.WINDOW.fetch))
          return (P = E.WINDOW.fetch.bind(E.WINDOW));
        var p = E.WINDOW.document,
          h = E.WINDOW.fetch;
        if (p && typeof p.createElement == "function")
          try {
            var j = p.createElement("iframe");
            (j.hidden = !0), p.head.appendChild(j);
            var m = j.contentWindow;
            m && m.fetch && (h = m.fetch), p.head.removeChild(j);
          } catch (y) {
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              g.logger.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                y
              );
          }
        return (P = h.bind(E.WINDOW));
      }
      function _() {
        P = void 0;
      }
    },
    235278: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.makeXHRTransport = w);
      var g = r(681321),
        E = r(61659),
        P = 4;
      function w(_) {
        function p(h) {
          return new E.SyncPromise(function (j, m) {
            var y = new XMLHttpRequest();
            (y.onerror = m),
              (y.onreadystatechange = function () {
                y.readyState === P &&
                  j({
                    statusCode: y.status,
                    headers: {
                      "x-sentry-rate-limits": y.getResponseHeader(
                        "X-Sentry-Rate-Limits"
                      ),
                      "retry-after": y.getResponseHeader("Retry-After"),
                    },
                  });
              }),
              y.open("POST", _.url);
            for (var b in _.headers)
              Object.prototype.hasOwnProperty.call(_.headers, b) &&
                y.setRequestHeader(b, _.headers[b]);
            y.send(h.body);
          });
        }
        return (0, g.createTransport)(_, p);
      }
    },
    791498: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getEnvelopeEndpointWithUrlEncodedAuth = y),
        (e.getReportDialogEndpoint = b);
      var E = g(r(346797)),
        P = r(61659);
      function w(f, v) {
        var d = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(f);
          v &&
            (s = s.filter(function (u) {
              return Object.getOwnPropertyDescriptor(f, u).enumerable;
            })),
            d.push.apply(d, s);
        }
        return d;
      }
      function _(f) {
        for (var v = 1; v < arguments.length; v++) {
          var d = arguments[v] != null ? arguments[v] : {};
          v % 2
            ? w(Object(d), !0).forEach(function (s) {
                (0, E.default)(f, s, d[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(d))
            : w(Object(d)).forEach(function (s) {
                Object.defineProperty(
                  f,
                  s,
                  Object.getOwnPropertyDescriptor(d, s)
                );
              });
        }
        return f;
      }
      var p = "7";
      function h(f) {
        var v = f.protocol ? "".concat(f.protocol, ":") : "",
          d = f.port ? ":".concat(f.port) : "";
        return ""
          .concat(v, "//")
          .concat(f.host)
          .concat(d)
          .concat(f.path ? "/".concat(f.path) : "", "/api/");
      }
      function j(f) {
        return "".concat(h(f)).concat(f.projectId, "/envelope/");
      }
      function m(f, v) {
        return (0, P.urlEncode)(
          _(
            { sentry_key: f.publicKey, sentry_version: p },
            v && { sentry_client: "".concat(v.name, "/").concat(v.version) }
          )
        );
      }
      function y(f) {
        var v =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          d = typeof v == "string" ? v : v.tunnel,
          s = typeof v == "string" || !v._metadata ? void 0 : v._metadata.sdk;
        return d || "".concat(j(f), "?").concat(m(f, s));
      }
      function b(f, v) {
        var d = (0, P.makeDsn)(f),
          s = "".concat(h(d), "embed/error-page/"),
          u = "dsn=".concat((0, P.dsnToString)(d));
        for (var O in v)
          if (O !== "dsn")
            if (O === "user") {
              var o = v.user;
              if (!o) continue;
              o.name && (u += "&name=".concat(encodeURIComponent(o.name))),
                o.email && (u += "&email=".concat(encodeURIComponent(o.email)));
            } else
              u += "&"
                .concat(encodeURIComponent(O), "=")
                .concat(encodeURIComponent(v[O]));
        return "".concat(s, "?").concat(u);
      }
    },
    170806: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BaseClient = void 0);
      var E = g(r(375798)),
        P = g(r(603912)),
        w = g(r(346797)),
        _ = g(r(858240)),
        p = g(r(4636)),
        h = r(61659),
        j = r(791498),
        m = r(34001),
        y = r(291640),
        b = r(465088),
        f = r(255810);
      function v(t, n) {
        var a =
          (typeof Symbol != "undefined" && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!a) {
          if (
            Array.isArray(t) ||
            (a = d(t)) ||
            (n && t && typeof t.length == "number")
          ) {
            a && (t = a);
            var c = 0,
              A = function () {};
            return {
              s: A,
              n: function () {
                return c >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[c++] };
              },
              e: function (B) {
                throw B;
              },
              f: A,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var C = !0,
          U = !1,
          L;
        return {
          s: function () {
            a = a.call(t);
          },
          n: function () {
            var B = a.next();
            return (C = B.done), B;
          },
          e: function (B) {
            (U = !0), (L = B);
          },
          f: function () {
            try {
              !C && a.return != null && a.return();
            } finally {
              if (U) throw L;
            }
          },
        };
      }
      function d(t, n) {
        if (!!t) {
          if (typeof t == "string") return s(t, n);
          var a = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (a === "Object" && t.constructor && (a = t.constructor.name),
            a === "Map" || a === "Set")
          )
            return Array.from(t);
          if (
            a === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return s(t, n);
        }
      }
      function s(t, n) {
        (n == null || n > t.length) && (n = t.length);
        for (var a = 0, c = new Array(n); a < n; a++) c[a] = t[a];
        return c;
      }
      function u(t, n) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          n &&
            (c = c.filter(function (A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable;
            })),
            a.push.apply(a, c);
        }
        return a;
      }
      function O(t) {
        for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? u(Object(a), !0).forEach(function (c) {
                (0, w.default)(t, c, a[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : u(Object(a)).forEach(function (c) {
                Object.defineProperty(
                  t,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                );
              });
        }
        return t;
      }
      var o = "Not capturing exception because it's already been captured.",
        i = (function () {
          function t(n) {
            if (
              ((0, _.default)(this, t),
              t.prototype.__init.call(this),
              t.prototype.__init2.call(this),
              t.prototype.__init3.call(this),
              t.prototype.__init4.call(this),
              (this._options = n),
              n.dsn)
            ) {
              this._dsn = (0, h.makeDsn)(n.dsn);
              var a = (0, j.getEnvelopeEndpointWithUrlEncodedAuth)(
                this._dsn,
                n
              );
              this._transport = n.transport(
                O(
                  O(
                    { recordDroppedEvent: this.recordDroppedEvent.bind(this) },
                    n.transportOptions
                  ),
                  {},
                  { url: a }
                )
              );
            } else
              (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                h.logger.warn("No DSN provided, client will not do anything.");
          }
          return (
            (0, p.default)(t, [
              {
                key: "__init",
                value: function () {
                  this._integrations = {};
                },
              },
              {
                key: "__init2",
                value: function () {
                  this._integrationsInitialized = !1;
                },
              },
              {
                key: "__init3",
                value: function () {
                  this._numProcessing = 0;
                },
              },
              {
                key: "__init4",
                value: function () {
                  this._outcomes = {};
                },
              },
              {
                key: "captureException",
                value: function (a, c, A) {
                  var C = this;
                  if ((0, h.checkOrSetAlreadyCaught)(a)) {
                    (typeof __SENTRY_DEBUG__ == "undefined" ||
                      __SENTRY_DEBUG__) &&
                      h.logger.log(o);
                    return;
                  }
                  var U = c && c.event_id;
                  return (
                    this._process(
                      this.eventFromException(a, c)
                        .then(function (L) {
                          return C._captureEvent(L, c, A);
                        })
                        .then(function (L) {
                          U = L;
                        })
                    ),
                    U
                  );
                },
              },
              {
                key: "captureMessage",
                value: function (a, c, A, C) {
                  var U = this,
                    L = A && A.event_id,
                    S = (0, h.isPrimitive)(a)
                      ? this.eventFromMessage(String(a), c, A)
                      : this.eventFromException(a, A);
                  return (
                    this._process(
                      S.then(function (B) {
                        return U._captureEvent(B, A, C);
                      }).then(function (B) {
                        L = B;
                      })
                    ),
                    L
                  );
                },
              },
              {
                key: "captureEvent",
                value: function (a, c, A) {
                  if (
                    c &&
                    c.originalException &&
                    (0, h.checkOrSetAlreadyCaught)(c.originalException)
                  ) {
                    (typeof __SENTRY_DEBUG__ == "undefined" ||
                      __SENTRY_DEBUG__) &&
                      h.logger.log(o);
                    return;
                  }
                  var C = c && c.event_id;
                  return (
                    this._process(
                      this._captureEvent(a, c, A).then(function (U) {
                        C = U;
                      })
                    ),
                    C
                  );
                },
              },
              {
                key: "captureSession",
                value: function (a) {
                  if (!this._isEnabled()) {
                    (typeof __SENTRY_DEBUG__ == "undefined" ||
                      __SENTRY_DEBUG__) &&
                      h.logger.warn(
                        "SDK not enabled, will not capture session."
                      );
                    return;
                  }
                  typeof a.release != "string"
                    ? (typeof __SENTRY_DEBUG__ == "undefined" ||
                        __SENTRY_DEBUG__) &&
                      h.logger.warn(
                        "Discarded session because of missing or non-string release"
                      )
                    : (this.sendSession(a),
                      (0, f.updateSession)(a, { init: !1 }));
                },
              },
              {
                key: "getDsn",
                value: function () {
                  return this._dsn;
                },
              },
              {
                key: "getOptions",
                value: function () {
                  return this._options;
                },
              },
              {
                key: "getTransport",
                value: function () {
                  return this._transport;
                },
              },
              {
                key: "flush",
                value: function (a) {
                  var c = this._transport;
                  return c
                    ? this._isClientDoneProcessing(a).then(function (A) {
                        return c.flush(a).then(function (C) {
                          return A && C;
                        });
                      })
                    : (0, h.resolvedSyncPromise)(!0);
                },
              },
              {
                key: "close",
                value: function (a) {
                  var c = this;
                  return this.flush(a).then(function (A) {
                    return (c.getOptions().enabled = !1), A;
                  });
                },
              },
              {
                key: "setupIntegrations",
                value: function () {
                  this._isEnabled() &&
                    !this._integrationsInitialized &&
                    ((this._integrations = (0, y.setupIntegrations)(
                      this._options.integrations
                    )),
                    (this._integrationsInitialized = !0));
                },
              },
              {
                key: "getIntegrationById",
                value: function (a) {
                  return this._integrations[a];
                },
              },
              {
                key: "getIntegration",
                value: function (a) {
                  try {
                    return this._integrations[a.id] || null;
                  } catch (c) {
                    return (
                      (typeof __SENTRY_DEBUG__ == "undefined" ||
                        __SENTRY_DEBUG__) &&
                        h.logger.warn(
                          "Cannot retrieve integration ".concat(
                            a.id,
                            " from the current Client"
                          )
                        ),
                      null
                    );
                  }
                },
              },
              {
                key: "sendEvent",
                value: function (a) {
                  var c =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  if (this._dsn) {
                    var A = (0, m.createEventEnvelope)(
                        a,
                        this._dsn,
                        this._options._metadata,
                        this._options.tunnel
                      ),
                      C = v(c.attachments || []),
                      U;
                    try {
                      for (C.s(); !(U = C.n()).done; ) {
                        var L = U.value;
                        A = (0, h.addItemToEnvelope)(
                          A,
                          (0, h.createAttachmentEnvelopeItem)(
                            L,
                            this._options.transportOptions &&
                              this._options.transportOptions.textEncoder
                          )
                        );
                      }
                    } catch (S) {
                      C.e(S);
                    } finally {
                      C.f();
                    }
                    this._sendEnvelope(A);
                  }
                },
              },
              {
                key: "sendSession",
                value: function (a) {
                  if (this._dsn) {
                    var c = (0, m.createSessionEnvelope)(
                      a,
                      this._dsn,
                      this._options._metadata,
                      this._options.tunnel
                    );
                    this._sendEnvelope(c);
                  }
                },
              },
              {
                key: "recordDroppedEvent",
                value: function (a, c, A) {
                  if (this._options.sendClientReports) {
                    var C = "".concat(a, ":").concat(c);
                    (typeof __SENTRY_DEBUG__ == "undefined" ||
                      __SENTRY_DEBUG__) &&
                      h.logger.log('Adding outcome: "'.concat(C, '"')),
                      (this._outcomes[C] = this._outcomes[C] + 1 || 1);
                  }
                },
              },
              {
                key: "_updateSessionFromEvent",
                value: function (a, c) {
                  var A = !1,
                    C = !1,
                    U = c.exception && c.exception.values;
                  if (U) {
                    C = !0;
                    var L = v(U),
                      S;
                    try {
                      for (L.s(); !(S = L.n()).done; ) {
                        var B = S.value,
                          Y = B.mechanism;
                        if (Y && Y.handled === !1) {
                          A = !0;
                          break;
                        }
                      }
                    } catch (Q) {
                      L.e(Q);
                    } finally {
                      L.f();
                    }
                  }
                  var F = a.status === "ok",
                    z = (F && a.errors === 0) || (F && A);
                  z &&
                    ((0, f.updateSession)(
                      a,
                      O(
                        O({}, A && { status: "crashed" }),
                        {},
                        { errors: a.errors || Number(C || A) }
                      )
                    ),
                    this.captureSession(a));
                },
              },
              {
                key: "_isClientDoneProcessing",
                value: function (a) {
                  var c = this;
                  return new h.SyncPromise(function (A) {
                    var C = 0,
                      U = 1,
                      L = setInterval(function () {
                        c._numProcessing == 0
                          ? (clearInterval(L), A(!0))
                          : ((C += U),
                            a && C >= a && (clearInterval(L), A(!1)));
                      }, U);
                  });
                },
              },
              {
                key: "_isEnabled",
                value: function () {
                  return (
                    this.getOptions().enabled !== !1 && this._dsn !== void 0
                  );
                },
              },
              {
                key: "_prepareEvent",
                value: function (a, c, A) {
                  var C = this,
                    U = this.getOptions(),
                    L = U.normalizeDepth,
                    S = L === void 0 ? 3 : L,
                    B = U.normalizeMaxBreadth,
                    Y = B === void 0 ? 1e3 : B,
                    F = O(
                      O({}, a),
                      {},
                      {
                        event_id: a.event_id || c.event_id || (0, h.uuid4)(),
                        timestamp:
                          a.timestamp || (0, h.dateTimestampInSeconds)(),
                      }
                    );
                  this._applyClientOptions(F),
                    this._applyIntegrationsMetadata(F);
                  var z = A;
                  c.captureContext &&
                    (z = b.Scope.clone(z).update(c.captureContext));
                  var Q = (0, h.resolvedSyncPromise)(F);
                  if (z && z.getAttachments) {
                    var V = [].concat(
                      (0, P.default)(c.attachments || []),
                      (0, P.default)(z.getAttachments())
                    );
                    V.length && (c.attachments = V), (Q = z.applyToEvent(F, c));
                  }
                  return Q.then(function (N) {
                    return typeof S == "number" && S > 0
                      ? C._normalizeEvent(N, S, Y)
                      : N;
                  });
                },
              },
              {
                key: "_normalizeEvent",
                value: function (a, c, A) {
                  if (!a) return null;
                  var C = O(
                    O(
                      O(
                        O(
                          O({}, a),
                          a.breadcrumbs && {
                            breadcrumbs: a.breadcrumbs.map(function (U) {
                              return O(
                                O({}, U),
                                U.data && {
                                  data: (0, h.normalize)(U.data, c, A),
                                }
                              );
                            }),
                          }
                        ),
                        a.user && { user: (0, h.normalize)(a.user, c, A) }
                      ),
                      a.contexts && {
                        contexts: (0, h.normalize)(a.contexts, c, A),
                      }
                    ),
                    a.extra && { extra: (0, h.normalize)(a.extra, c, A) }
                  );
                  return (
                    a.contexts &&
                      a.contexts.trace &&
                      C.contexts &&
                      ((C.contexts.trace = a.contexts.trace),
                      a.contexts.trace.data &&
                        (C.contexts.trace.data = (0, h.normalize)(
                          a.contexts.trace.data,
                          c,
                          A
                        ))),
                    a.spans &&
                      (C.spans = a.spans.map(function (U) {
                        return (
                          U.data && (U.data = (0, h.normalize)(U.data, c, A)), U
                        );
                      })),
                    C
                  );
                },
              },
              {
                key: "_applyClientOptions",
                value: function (a) {
                  var c = this.getOptions(),
                    A = c.environment,
                    C = c.release,
                    U = c.dist,
                    L = c.maxValueLength,
                    S = L === void 0 ? 250 : L;
                  "environment" in a ||
                    (a.environment = "environment" in c ? A : "production"),
                    a.release === void 0 && C !== void 0 && (a.release = C),
                    a.dist === void 0 && U !== void 0 && (a.dist = U),
                    a.message && (a.message = (0, h.truncate)(a.message, S));
                  var B =
                    a.exception && a.exception.values && a.exception.values[0];
                  B && B.value && (B.value = (0, h.truncate)(B.value, S));
                  var Y = a.request;
                  Y && Y.url && (Y.url = (0, h.truncate)(Y.url, S));
                },
              },
              {
                key: "_applyIntegrationsMetadata",
                value: function (a) {
                  var c = Object.keys(this._integrations);
                  c.length > 0 &&
                    ((a.sdk = a.sdk || {}),
                    (a.sdk.integrations = [].concat(
                      (0, P.default)(a.sdk.integrations || []),
                      c
                    )));
                },
              },
              {
                key: "_captureEvent",
                value: function (a) {
                  var c =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    A = arguments.length > 2 ? arguments[2] : void 0;
                  return this._processEvent(a, c, A).then(
                    function (C) {
                      return C.event_id;
                    },
                    function (C) {
                      if (
                        typeof __SENTRY_DEBUG__ == "undefined" ||
                        __SENTRY_DEBUG__
                      ) {
                        var U = C;
                        U.logLevel === "log"
                          ? h.logger.log(U.message)
                          : h.logger.warn(U);
                      }
                    }
                  );
                },
              },
              {
                key: "_processEvent",
                value: function (a, c, A) {
                  var C = this,
                    U = this.getOptions(),
                    L = U.sampleRate;
                  if (!this._isEnabled())
                    return (0, h.rejectedSyncPromise)(
                      new h.SentryError(
                        "SDK not enabled, will not capture event.",
                        "log"
                      )
                    );
                  var S = a.type === "transaction",
                    B = S ? "beforeSendTransaction" : "beforeSend",
                    Y = U[B];
                  return !S && typeof L == "number" && Math.random() > L
                    ? (this.recordDroppedEvent("sample_rate", "error", a),
                      (0, h.rejectedSyncPromise)(
                        new h.SentryError(
                          "Discarding event because it's not included in the random sample (sampling rate = ".concat(
                            L,
                            ")"
                          ),
                          "log"
                        )
                      ))
                    : this._prepareEvent(a, c, A)
                        .then(function (F) {
                          if (F === null)
                            throw (
                              (C.recordDroppedEvent(
                                "event_processor",
                                a.type || "error",
                                a
                              ),
                              new h.SentryError(
                                "An event processor returned `null`, will not send event.",
                                "log"
                              ))
                            );
                          var z = c.data && c.data.__sentry__ === !0;
                          if (z || !Y) return F;
                          var Q = Y(F, c);
                          return l(Q, B);
                        })
                        .then(function (F) {
                          if (F === null)
                            throw (
                              (C.recordDroppedEvent(
                                "before_send",
                                a.type || "error",
                                a
                              ),
                              new h.SentryError(
                                "`".concat(
                                  B,
                                  "` returned `null`, will not send event."
                                ),
                                "log"
                              ))
                            );
                          var z = A && A.getSession();
                          !S && z && C._updateSessionFromEvent(z, F);
                          var Q = F.transaction_info;
                          if (S && Q && F.transaction !== a.transaction) {
                            var V = "custom";
                            F.transaction_info = O(
                              O({}, Q),
                              {},
                              {
                                source: V,
                                changes: [].concat((0, P.default)(Q.changes), [
                                  {
                                    source: V,
                                    timestamp: F.timestamp,
                                    propagations: Q.propagations,
                                  },
                                ]),
                              }
                            );
                          }
                          return C.sendEvent(F, c), F;
                        })
                        .then(null, function (F) {
                          throw F instanceof h.SentryError
                            ? F
                            : (C.captureException(F, {
                                data: { __sentry__: !0 },
                                originalException: F,
                              }),
                              new h.SentryError(
                                "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(
                                  F
                                )
                              ));
                        });
                },
              },
              {
                key: "_process",
                value: function (a) {
                  var c = this;
                  this._numProcessing++,
                    a.then(
                      function (A) {
                        return c._numProcessing--, A;
                      },
                      function (A) {
                        return c._numProcessing--, A;
                      }
                    );
                },
              },
              {
                key: "_sendEnvelope",
                value: function (a) {
                  this._transport && this._dsn
                    ? this._transport.send(a).then(null, function (c) {
                        (typeof __SENTRY_DEBUG__ == "undefined" ||
                          __SENTRY_DEBUG__) &&
                          h.logger.error("Error while sending event:", c);
                      })
                    : (typeof __SENTRY_DEBUG__ == "undefined" ||
                        __SENTRY_DEBUG__) &&
                      h.logger.error("Transport disabled");
                },
              },
              {
                key: "_clearOutcomes",
                value: function () {
                  var a = this._outcomes;
                  return (
                    (this._outcomes = {}),
                    Object.keys(a).map(function (c) {
                      var A = c.split(":"),
                        C = (0, E.default)(A, 2),
                        U = C[0],
                        L = C[1];
                      return { reason: U, category: L, quantity: a[c] };
                    })
                  );
                },
              },
            ]),
            t
          );
        })();
      e.BaseClient = i;
      function l(t, n) {
        var a = "`".concat(n, "` must return `null` or a valid event.");
        if ((0, h.isThenable)(t))
          return t.then(
            function (c) {
              if (!(0, h.isPlainObject)(c) && c !== null)
                throw new h.SentryError(a);
              return c;
            },
            function (c) {
              throw new h.SentryError(
                "`".concat(n, "` rejected with ").concat(c)
              );
            }
          );
        if (!(0, h.isPlainObject)(t) && t !== null) throw new h.SentryError(a);
        return t;
      }
    },
    34001: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createEventEnvelope = y),
        (e.createSessionEnvelope = m);
      var E = g(r(346797)),
        P = g(r(603912)),
        w = r(61659);
      function _(f, v) {
        var d = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(f);
          v &&
            (s = s.filter(function (u) {
              return Object.getOwnPropertyDescriptor(f, u).enumerable;
            })),
            d.push.apply(d, s);
        }
        return d;
      }
      function p(f) {
        for (var v = 1; v < arguments.length; v++) {
          var d = arguments[v] != null ? arguments[v] : {};
          v % 2
            ? _(Object(d), !0).forEach(function (s) {
                (0, E.default)(f, s, d[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(d))
            : _(Object(d)).forEach(function (s) {
                Object.defineProperty(
                  f,
                  s,
                  Object.getOwnPropertyDescriptor(d, s)
                );
              });
        }
        return f;
      }
      function h(f) {
        if (!(!f || !f.sdk)) {
          var v = f.sdk,
            d = v.name,
            s = v.version;
          return { name: d, version: s };
        }
      }
      function j(f, v) {
        return (
          v &&
            ((f.sdk = f.sdk || {}),
            (f.sdk.name = f.sdk.name || v.name),
            (f.sdk.version = f.sdk.version || v.version),
            (f.sdk.integrations = [].concat(
              (0, P.default)(f.sdk.integrations || []),
              (0, P.default)(v.integrations || [])
            )),
            (f.sdk.packages = [].concat(
              (0, P.default)(f.sdk.packages || []),
              (0, P.default)(v.packages || [])
            ))),
          f
        );
      }
      function m(f, v, d, s) {
        var u = h(d),
          O = p(
            p({ sent_at: new Date().toISOString() }, u && { sdk: u }),
            !!s && { dsn: (0, w.dsnToString)(v) }
          ),
          o =
            "aggregates" in f
              ? [{ type: "sessions" }, f]
              : [{ type: "session" }, f];
        return (0, w.createEnvelope)(O, [o]);
      }
      function y(f, v, d, s) {
        var u = h(d),
          O = f.type || "event";
        j(f, d && d.sdk);
        var o = b(f, u, s, v);
        delete f.sdkProcessingMetadata;
        var i = [{ type: O }, f];
        return (0, w.createEnvelope)(o, [i]);
      }
      function b(f, v, d, s) {
        var u =
          f.sdkProcessingMetadata &&
          f.sdkProcessingMetadata.dynamicSamplingContext;
        return p(
          p(
            p(
              { event_id: f.event_id, sent_at: new Date().toISOString() },
              v && { sdk: v }
            ),
            !!d && { dsn: (0, w.dsnToString)(s) }
          ),
          f.type === "transaction" &&
            u && { trace: (0, w.dropUndefinedKeys)(p({}, u)) }
        );
      }
    },
    513597: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addBreadcrumb = y),
        (e.captureEvent = j),
        (e.captureException = p),
        (e.captureMessage = h),
        (e.configureScope = m),
        (e.setContext = b),
        (e.setExtra = v),
        (e.setExtras = f),
        (e.setTag = s),
        (e.setTags = d),
        (e.setUser = u),
        (e.startTransaction = o),
        (e.withScope = O);
      var E = g(r(346797)),
        P = r(72917);
      function w(i, l) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(i);
          l &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(i, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function _(i) {
        for (var l = 1; l < arguments.length; l++) {
          var t = arguments[l] != null ? arguments[l] : {};
          l % 2
            ? w(Object(t), !0).forEach(function (n) {
                (0, E.default)(i, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  i,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return i;
      }
      function p(i, l) {
        return (0, P.getCurrentHub)().captureException(i, {
          captureContext: l,
        });
      }
      function h(i, l) {
        var t = typeof l == "string" ? l : void 0,
          n = typeof l != "string" ? { captureContext: l } : void 0;
        return (0, P.getCurrentHub)().captureMessage(i, t, n);
      }
      function j(i, l) {
        return (0, P.getCurrentHub)().captureEvent(i, l);
      }
      function m(i) {
        (0, P.getCurrentHub)().configureScope(i);
      }
      function y(i) {
        (0, P.getCurrentHub)().addBreadcrumb(i);
      }
      function b(i, l) {
        (0, P.getCurrentHub)().setContext(i, l);
      }
      function f(i) {
        (0, P.getCurrentHub)().setExtras(i);
      }
      function v(i, l) {
        (0, P.getCurrentHub)().setExtra(i, l);
      }
      function d(i) {
        (0, P.getCurrentHub)().setTags(i);
      }
      function s(i, l) {
        (0, P.getCurrentHub)().setTag(i, l);
      }
      function u(i) {
        (0, P.getCurrentHub)().setUser(i);
      }
      function O(i) {
        (0, P.getCurrentHub)().withScope(i);
      }
      function o(i, l) {
        return (0, P.getCurrentHub)().startTransaction(_({}, i), l);
      }
    },
    72917: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Hub = e.API_VERSION = void 0),
        (e.getCurrentHub = s),
        (e.getHubFromCarrier = o),
        (e.getMainCarrier = v),
        (e.makeMain = d),
        (e.setHubOnCarrier = i);
      var E = g(r(346797)),
        P = g(r(858240)),
        w = g(r(4636)),
        _ = r(61659),
        p = r(465088),
        h = r(255810);
      function j(l, t) {
        var n = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(l);
          t &&
            (a = a.filter(function (c) {
              return Object.getOwnPropertyDescriptor(l, c).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function m(l) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (a) {
                (0, E.default)(l, a, n[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (a) {
                Object.defineProperty(
                  l,
                  a,
                  Object.getOwnPropertyDescriptor(n, a)
                );
              });
        }
        return l;
      }
      var y = 4;
      e.API_VERSION = y;
      var b = 100,
        f = (function () {
          function l(t) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : new p.Scope(),
              a =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : y;
            (0, P.default)(this, l),
              (this._version = a),
              l.prototype.__init.call(this),
              (this.getStackTop().scope = n),
              t && this.bindClient(t);
          }
          return (
            (0, w.default)(l, [
              {
                key: "__init",
                value: function () {
                  this._stack = [{}];
                },
              },
              {
                key: "isOlderThan",
                value: function (n) {
                  return this._version < n;
                },
              },
              {
                key: "bindClient",
                value: function (n) {
                  var a = this.getStackTop();
                  (a.client = n),
                    n && n.setupIntegrations && n.setupIntegrations();
                },
              },
              {
                key: "pushScope",
                value: function () {
                  var n = p.Scope.clone(this.getScope());
                  return (
                    this.getStack().push({
                      client: this.getClient(),
                      scope: n,
                    }),
                    n
                  );
                },
              },
              {
                key: "popScope",
                value: function () {
                  return this.getStack().length <= 1
                    ? !1
                    : !!this.getStack().pop();
                },
              },
              {
                key: "withScope",
                value: function (n) {
                  var a = this.pushScope();
                  try {
                    n(a);
                  } finally {
                    this.popScope();
                  }
                },
              },
              {
                key: "getClient",
                value: function () {
                  return this.getStackTop().client;
                },
              },
              {
                key: "getScope",
                value: function () {
                  return this.getStackTop().scope;
                },
              },
              {
                key: "getStack",
                value: function () {
                  return this._stack;
                },
              },
              {
                key: "getStackTop",
                value: function () {
                  return this._stack[this._stack.length - 1];
                },
              },
              {
                key: "captureException",
                value: function (n, a) {
                  var c = (this._lastEventId =
                      a && a.event_id ? a.event_id : (0, _.uuid4)()),
                    A = new Error("Sentry syntheticException");
                  return (
                    this._withClient(function (C, U) {
                      C.captureException(
                        n,
                        m(
                          m({ originalException: n, syntheticException: A }, a),
                          {},
                          { event_id: c }
                        ),
                        U
                      );
                    }),
                    c
                  );
                },
              },
              {
                key: "captureMessage",
                value: function (n, a, c) {
                  var A = (this._lastEventId =
                      c && c.event_id ? c.event_id : (0, _.uuid4)()),
                    C = new Error(n);
                  return (
                    this._withClient(function (U, L) {
                      U.captureMessage(
                        n,
                        a,
                        m(
                          m({ originalException: n, syntheticException: C }, c),
                          {},
                          { event_id: A }
                        ),
                        L
                      );
                    }),
                    A
                  );
                },
              },
              {
                key: "captureEvent",
                value: function (n, a) {
                  var c = a && a.event_id ? a.event_id : (0, _.uuid4)();
                  return (
                    n.type !== "transaction" && (this._lastEventId = c),
                    this._withClient(function (A, C) {
                      A.captureEvent(n, m(m({}, a), {}, { event_id: c }), C);
                    }),
                    c
                  );
                },
              },
              {
                key: "lastEventId",
                value: function () {
                  return this._lastEventId;
                },
              },
              {
                key: "addBreadcrumb",
                value: function (n, a) {
                  var c = this.getStackTop(),
                    A = c.scope,
                    C = c.client;
                  if (!(!A || !C)) {
                    var U = (C.getOptions && C.getOptions()) || {},
                      L = U.beforeBreadcrumb,
                      S = L === void 0 ? null : L,
                      B = U.maxBreadcrumbs,
                      Y = B === void 0 ? b : B;
                    if (!(Y <= 0)) {
                      var F = (0, _.dateTimestampInSeconds)(),
                        z = m({ timestamp: F }, n),
                        Q = S
                          ? (0, _.consoleSandbox)(function () {
                              return S(z, a);
                            })
                          : z;
                      Q !== null && A.addBreadcrumb(Q, Y);
                    }
                  }
                },
              },
              {
                key: "setUser",
                value: function (n) {
                  var a = this.getScope();
                  a && a.setUser(n);
                },
              },
              {
                key: "setTags",
                value: function (n) {
                  var a = this.getScope();
                  a && a.setTags(n);
                },
              },
              {
                key: "setExtras",
                value: function (n) {
                  var a = this.getScope();
                  a && a.setExtras(n);
                },
              },
              {
                key: "setTag",
                value: function (n, a) {
                  var c = this.getScope();
                  c && c.setTag(n, a);
                },
              },
              {
                key: "setExtra",
                value: function (n, a) {
                  var c = this.getScope();
                  c && c.setExtra(n, a);
                },
              },
              {
                key: "setContext",
                value: function (n, a) {
                  var c = this.getScope();
                  c && c.setContext(n, a);
                },
              },
              {
                key: "configureScope",
                value: function (n) {
                  var a = this.getStackTop(),
                    c = a.scope,
                    A = a.client;
                  c && A && n(c);
                },
              },
              {
                key: "run",
                value: function (n) {
                  var a = d(this);
                  try {
                    n(this);
                  } finally {
                    d(a);
                  }
                },
              },
              {
                key: "getIntegration",
                value: function (n) {
                  var a = this.getClient();
                  if (!a) return null;
                  try {
                    return a.getIntegration(n);
                  } catch (c) {
                    return (
                      (typeof __SENTRY_DEBUG__ == "undefined" ||
                        __SENTRY_DEBUG__) &&
                        _.logger.warn(
                          "Cannot retrieve integration ".concat(
                            n.id,
                            " from the current Hub"
                          )
                        ),
                      null
                    );
                  }
                },
              },
              {
                key: "startTransaction",
                value: function (n, a) {
                  return this._callExtensionMethod("startTransaction", n, a);
                },
              },
              {
                key: "traceHeaders",
                value: function () {
                  return this._callExtensionMethod("traceHeaders");
                },
              },
              {
                key: "captureSession",
                value: function () {
                  var n =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : !1;
                  if (n) return this.endSession();
                  this._sendSessionUpdate();
                },
              },
              {
                key: "endSession",
                value: function () {
                  var n = this.getStackTop(),
                    a = n && n.scope,
                    c = a && a.getSession();
                  c && (0, h.closeSession)(c),
                    this._sendSessionUpdate(),
                    a && a.setSession();
                },
              },
              {
                key: "startSession",
                value: function (n) {
                  var a = this.getStackTop(),
                    c = a.scope,
                    A = a.client,
                    C = (A && A.getOptions()) || {},
                    U = C.release,
                    L = C.environment,
                    S = _.GLOBAL_OBJ.navigator || {},
                    B = S.userAgent,
                    Y = (0, h.makeSession)(
                      m(
                        m(
                          m(
                            { release: U, environment: L },
                            c && { user: c.getUser() }
                          ),
                          B && { userAgent: B }
                        ),
                        n
                      )
                    );
                  if (c) {
                    var F = c.getSession && c.getSession();
                    F &&
                      F.status === "ok" &&
                      (0, h.updateSession)(F, { status: "exited" }),
                      this.endSession(),
                      c.setSession(Y);
                  }
                  return Y;
                },
              },
              {
                key: "shouldSendDefaultPii",
                value: function () {
                  var n = this.getClient(),
                    a = n && n.getOptions();
                  return Boolean(a && a.sendDefaultPii);
                },
              },
              {
                key: "_sendSessionUpdate",
                value: function () {
                  var n = this.getStackTop(),
                    a = n.scope,
                    c = n.client;
                  if (!!a) {
                    var A = a.getSession();
                    A && c && c.captureSession && c.captureSession(A);
                  }
                },
              },
              {
                key: "_withClient",
                value: function (n) {
                  var a = this.getStackTop(),
                    c = a.scope,
                    A = a.client;
                  A && n(A, c);
                },
              },
              {
                key: "_callExtensionMethod",
                value: function (n) {
                  var a = v(),
                    c = a.__SENTRY__;
                  if (
                    c &&
                    c.extensions &&
                    typeof c.extensions[n] == "function"
                  ) {
                    for (
                      var A = arguments.length,
                        C = new Array(A > 1 ? A - 1 : 0),
                        U = 1;
                      U < A;
                      U++
                    )
                      C[U - 1] = arguments[U];
                    return c.extensions[n].apply(this, C);
                  }
                  (typeof __SENTRY_DEBUG__ == "undefined" ||
                    __SENTRY_DEBUG__) &&
                    _.logger.warn(
                      "Extension method ".concat(
                        n,
                        " couldn't be found, doing nothing."
                      )
                    );
                },
              },
            ]),
            l
          );
        })();
      e.Hub = f;
      function v() {
        return (
          (_.GLOBAL_OBJ.__SENTRY__ = _.GLOBAL_OBJ.__SENTRY__ || {
            extensions: {},
            hub: void 0,
          }),
          _.GLOBAL_OBJ
        );
      }
      function d(l) {
        var t = v(),
          n = o(t);
        return i(t, l), n;
      }
      function s() {
        var l = v();
        return (
          (!O(l) || o(l).isOlderThan(y)) && i(l, new f()),
          (0, _.isNodeEnv)() ? u(l) : o(l)
        );
      }
      function u(l) {
        try {
          var t = v().__SENTRY__,
            n =
              t &&
              t.extensions &&
              t.extensions.domain &&
              t.extensions.domain.active;
          if (!n) return o(l);
          if (!O(n) || o(n).isOlderThan(y)) {
            var a = o(l).getStackTop();
            i(n, new f(a.client, p.Scope.clone(a.scope)));
          }
          return o(n);
        } catch (c) {
          return o(l);
        }
      }
      function O(l) {
        return !!(l && l.__SENTRY__ && l.__SENTRY__.hub);
      }
      function o(l) {
        return (0, _.getGlobalSingleton)(
          "hub",
          function () {
            return new f();
          },
          l
        );
      }
      function i(l, t) {
        if (!l) return !1;
        var n = (l.__SENTRY__ = l.__SENTRY__ || {});
        return (n.hub = t), !0;
      }
    },
    681321: function (D, e, r) {
      "use strict";
      var g = r(569644);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BaseClient", {
          enumerable: !0,
          get: function () {
            return j.BaseClient;
          },
        }),
        Object.defineProperty(e, "FunctionToString", {
          enumerable: !0,
          get: function () {
            return d.FunctionToString;
          },
        }),
        Object.defineProperty(e, "Hub", {
          enumerable: !0,
          get: function () {
            return P.Hub;
          },
        }),
        Object.defineProperty(e, "InboundFilters", {
          enumerable: !0,
          get: function () {
            return s.InboundFilters;
          },
        }),
        (e.Integrations = void 0),
        Object.defineProperty(e, "SDK_VERSION", {
          enumerable: !0,
          get: function () {
            return b.SDK_VERSION;
          },
        }),
        Object.defineProperty(e, "Scope", {
          enumerable: !0,
          get: function () {
            return p.Scope;
          },
        }),
        Object.defineProperty(e, "SessionFlusher", {
          enumerable: !0,
          get: function () {
            return _.SessionFlusher;
          },
        }),
        Object.defineProperty(e, "addBreadcrumb", {
          enumerable: !0,
          get: function () {
            return E.addBreadcrumb;
          },
        }),
        Object.defineProperty(e, "addGlobalEventProcessor", {
          enumerable: !0,
          get: function () {
            return p.addGlobalEventProcessor;
          },
        }),
        Object.defineProperty(e, "captureEvent", {
          enumerable: !0,
          get: function () {
            return E.captureEvent;
          },
        }),
        Object.defineProperty(e, "captureException", {
          enumerable: !0,
          get: function () {
            return E.captureException;
          },
        }),
        Object.defineProperty(e, "captureMessage", {
          enumerable: !0,
          get: function () {
            return E.captureMessage;
          },
        }),
        Object.defineProperty(e, "closeSession", {
          enumerable: !0,
          get: function () {
            return w.closeSession;
          },
        }),
        Object.defineProperty(e, "configureScope", {
          enumerable: !0,
          get: function () {
            return E.configureScope;
          },
        }),
        Object.defineProperty(e, "createTransport", {
          enumerable: !0,
          get: function () {
            return y.createTransport;
          },
        }),
        Object.defineProperty(e, "getCurrentHub", {
          enumerable: !0,
          get: function () {
            return P.getCurrentHub;
          },
        }),
        Object.defineProperty(e, "getEnvelopeEndpointWithUrlEncodedAuth", {
          enumerable: !0,
          get: function () {
            return h.getEnvelopeEndpointWithUrlEncodedAuth;
          },
        }),
        Object.defineProperty(e, "getHubFromCarrier", {
          enumerable: !0,
          get: function () {
            return P.getHubFromCarrier;
          },
        }),
        Object.defineProperty(e, "getIntegrationsToSetup", {
          enumerable: !0,
          get: function () {
            return f.getIntegrationsToSetup;
          },
        }),
        Object.defineProperty(e, "getMainCarrier", {
          enumerable: !0,
          get: function () {
            return P.getMainCarrier;
          },
        }),
        Object.defineProperty(e, "getReportDialogEndpoint", {
          enumerable: !0,
          get: function () {
            return h.getReportDialogEndpoint;
          },
        }),
        Object.defineProperty(e, "initAndBind", {
          enumerable: !0,
          get: function () {
            return m.initAndBind;
          },
        }),
        Object.defineProperty(e, "makeMain", {
          enumerable: !0,
          get: function () {
            return P.makeMain;
          },
        }),
        Object.defineProperty(e, "makeSession", {
          enumerable: !0,
          get: function () {
            return w.makeSession;
          },
        }),
        Object.defineProperty(e, "setContext", {
          enumerable: !0,
          get: function () {
            return E.setContext;
          },
        }),
        Object.defineProperty(e, "setExtra", {
          enumerable: !0,
          get: function () {
            return E.setExtra;
          },
        }),
        Object.defineProperty(e, "setExtras", {
          enumerable: !0,
          get: function () {
            return E.setExtras;
          },
        }),
        Object.defineProperty(e, "setHubOnCarrier", {
          enumerable: !0,
          get: function () {
            return P.setHubOnCarrier;
          },
        }),
        Object.defineProperty(e, "setTag", {
          enumerable: !0,
          get: function () {
            return E.setTag;
          },
        }),
        Object.defineProperty(e, "setTags", {
          enumerable: !0,
          get: function () {
            return E.setTags;
          },
        }),
        Object.defineProperty(e, "setUser", {
          enumerable: !0,
          get: function () {
            return E.setUser;
          },
        }),
        Object.defineProperty(e, "startTransaction", {
          enumerable: !0,
          get: function () {
            return E.startTransaction;
          },
        }),
        Object.defineProperty(e, "updateSession", {
          enumerable: !0,
          get: function () {
            return w.updateSession;
          },
        }),
        Object.defineProperty(e, "withScope", {
          enumerable: !0,
          get: function () {
            return E.withScope;
          },
        });
      var E = r(513597),
        P = r(72917),
        w = r(255810),
        _ = r(291451),
        p = r(465088),
        h = r(791498),
        j = r(170806),
        m = r(407481),
        y = r(87216),
        b = r(886474),
        f = r(291640),
        v = O(r(98708));
      e.Integrations = v;
      var d = r(776219),
        s = r(22453);
      function u(o) {
        if (typeof WeakMap != "function") return null;
        var i = new WeakMap(),
          l = new WeakMap();
        return (u = function (n) {
          return n ? l : i;
        })(o);
      }
      function O(o, i) {
        if (!i && o && o.__esModule) return o;
        if (o === null || (g(o) !== "object" && typeof o != "function"))
          return { default: o };
        var l = u(i);
        if (l && l.has(o)) return l.get(o);
        var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in o)
          if (a !== "default" && Object.prototype.hasOwnProperty.call(o, a)) {
            var c = n ? Object.getOwnPropertyDescriptor(o, a) : null;
            c && (c.get || c.set)
              ? Object.defineProperty(t, a, c)
              : (t[a] = o[a]);
          }
        return (t.default = o), l && l.set(o, t), t;
      }
    },
    291640: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getIntegrationsToSetup = m),
        (e.installedIntegrations = void 0),
        (e.setupIntegrations = y);
      var E = g(r(375798)),
        P = g(r(603912)),
        w = r(61659),
        _ = r(72917),
        p = r(465088),
        h = [];
      e.installedIntegrations = h;
      function j(b) {
        var f = {};
        return (
          b.forEach(function (v) {
            var d = v.name,
              s = f[d];
            (s && !s.isDefaultInstance && v.isDefaultInstance) || (f[d] = v);
          }),
          Object.values(f)
        );
      }
      function m(b) {
        var f = b.defaultIntegrations || [],
          v = b.integrations;
        f.forEach(function (l) {
          l.isDefaultInstance = !0;
        });
        var d;
        Array.isArray(v)
          ? (d = [].concat((0, P.default)(f), (0, P.default)(v)))
          : typeof v == "function"
          ? (d = (0, w.arrayify)(v(f)))
          : (d = f);
        var s = j(d),
          u = s.findIndex(function (l) {
            return l.name === "Debug";
          });
        if (u !== -1) {
          var O = s.splice(u, 1),
            o = (0, E.default)(O, 1),
            i = o[0];
          s.push(i);
        }
        return s;
      }
      function y(b) {
        var f = {};
        return (
          b.forEach(function (v) {
            (f[v.name] = v),
              h.indexOf(v.name) === -1 &&
                (v.setupOnce(p.addGlobalEventProcessor, _.getCurrentHub),
                h.push(v.name),
                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                  w.logger.log("Integration installed: ".concat(v.name)));
          }),
          f
        );
      }
    },
    776219: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FunctionToString = void 0);
      var E = g(r(858240)),
        P = g(r(4636)),
        w = r(61659),
        _,
        p = (function () {
          function h() {
            (0, E.default)(this, h), h.prototype.__init.call(this);
          }
          return (
            (0, P.default)(
              h,
              [
                {
                  key: "__init",
                  value: function () {
                    this.name = h.id;
                  },
                },
                {
                  key: "setupOnce",
                  value: function () {
                    (_ = Function.prototype.toString),
                      (Function.prototype.toString = function () {
                        for (
                          var m = (0, w.getOriginalFunction)(this) || this,
                            y = arguments.length,
                            b = new Array(y),
                            f = 0;
                          f < y;
                          f++
                        )
                          b[f] = arguments[f];
                        return _.apply(m, b);
                      });
                  },
                },
              ],
              [
                {
                  key: "__initStatic",
                  value: function () {
                    this.id = "FunctionToString";
                  },
                },
              ]
            ),
            h
          );
        })();
      (e.FunctionToString = p), p.__initStatic();
    },
    22453: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InboundFilters = void 0),
        (e._mergeOptions = j),
        (e._shouldDropEvent = m);
      var E = g(r(603912)),
        P = g(r(858240)),
        w = g(r(4636)),
        _ = r(61659),
        p = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        h = (function () {
          function O() {
            var o =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            (0, P.default)(this, O),
              (this._options = o),
              O.prototype.__init.call(this);
          }
          return (
            (0, w.default)(
              O,
              [
                {
                  key: "__init",
                  value: function () {
                    this.name = O.id;
                  },
                },
                {
                  key: "setupOnce",
                  value: function (i, l) {
                    var t = function (a) {
                      var c = l();
                      if (c) {
                        var A = c.getIntegration(O);
                        if (A) {
                          var C = c.getClient(),
                            U = C ? C.getOptions() : {},
                            L = j(A._options, U);
                          return m(a, L) ? null : a;
                        }
                      }
                      return a;
                    };
                    (t.id = this.name), i(t);
                  },
                },
              ],
              [
                {
                  key: "__initStatic",
                  value: function () {
                    this.id = "InboundFilters";
                  },
                },
              ]
            ),
            O
          );
        })();
      (e.InboundFilters = h), h.__initStatic();
      function j() {
        var O =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          o =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return {
          allowUrls: [].concat(
            (0, E.default)(O.allowUrls || []),
            (0, E.default)(o.allowUrls || [])
          ),
          denyUrls: [].concat(
            (0, E.default)(O.denyUrls || []),
            (0, E.default)(o.denyUrls || [])
          ),
          ignoreErrors: [].concat(
            (0, E.default)(O.ignoreErrors || []),
            (0, E.default)(o.ignoreErrors || []),
            p
          ),
          ignoreInternal: O.ignoreInternal !== void 0 ? O.ignoreInternal : !0,
        };
      }
      function m(O, o) {
        return o.ignoreInternal && d(O)
          ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              _.logger.warn(
                "Event dropped due to being internal Sentry Error.\nEvent: ".concat(
                  (0, _.getEventDescription)(O)
                )
              ),
            !0)
          : y(O, o.ignoreErrors)
          ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              _.logger.warn(
                "Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat(
                  (0, _.getEventDescription)(O)
                )
              ),
            !0)
          : b(O, o.denyUrls)
          ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              _.logger.warn(
                "Event dropped due to being matched by `denyUrls` option.\nEvent: "
                  .concat((0, _.getEventDescription)(O), ".\nUrl: ")
                  .concat(u(O))
              ),
            !0)
          : f(O, o.allowUrls)
          ? !1
          : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              _.logger.warn(
                "Event dropped due to not being matched by `allowUrls` option.\nEvent: "
                  .concat((0, _.getEventDescription)(O), ".\nUrl: ")
                  .concat(u(O))
              ),
            !0);
      }
      function y(O, o) {
        return !o || !o.length
          ? !1
          : v(O).some(function (i) {
              return (0, _.stringMatchesSomePattern)(i, o);
            });
      }
      function b(O, o) {
        if (!o || !o.length) return !1;
        var i = u(O);
        return i ? (0, _.stringMatchesSomePattern)(i, o) : !1;
      }
      function f(O, o) {
        if (!o || !o.length) return !0;
        var i = u(O);
        return i ? (0, _.stringMatchesSomePattern)(i, o) : !0;
      }
      function v(O) {
        if (O.message) return [O.message];
        if (O.exception)
          try {
            var o = (O.exception.values && O.exception.values[0]) || {},
              i = o.type,
              l = i === void 0 ? "" : i,
              t = o.value,
              n = t === void 0 ? "" : t;
            return ["".concat(n), "".concat(l, ": ").concat(n)];
          } catch (a) {
            return (
              (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                _.logger.error(
                  "Cannot extract message for event ".concat(
                    (0, _.getEventDescription)(O)
                  )
                ),
              []
            );
          }
        return [];
      }
      function d(O) {
        try {
          return O.exception.values[0].type === "SentryError";
        } catch (o) {}
        return !1;
      }
      function s() {
        for (
          var O =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            o = O.length - 1;
          o >= 0;
          o--
        ) {
          var i = O[o];
          if (
            i &&
            i.filename !== "<anonymous>" &&
            i.filename !== "[native code]"
          )
            return i.filename || null;
        }
        return null;
      }
      function u(O) {
        try {
          var o;
          try {
            o = O.exception.values[0].stacktrace.frames;
          } catch (i) {}
          return o ? s(o) : null;
        } catch (i) {
          return (
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              _.logger.error(
                "Cannot extract url for event ".concat(
                  (0, _.getEventDescription)(O)
                )
              ),
            null
          );
        }
      }
    },
    98708: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "FunctionToString", {
          enumerable: !0,
          get: function () {
            return g.FunctionToString;
          },
        }),
        Object.defineProperty(e, "InboundFilters", {
          enumerable: !0,
          get: function () {
            return E.InboundFilters;
          },
        });
      var g = r(776219),
        E = r(22453);
    },
    465088: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Scope = void 0),
        (e.addGlobalEventProcessor = v);
      var E = g(r(603912)),
        P = g(r(346797)),
        w = g(r(858240)),
        _ = g(r(4636)),
        p = r(61659),
        h = r(255810);
      function j(d, s) {
        var u = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
          var O = Object.getOwnPropertySymbols(d);
          s &&
            (O = O.filter(function (o) {
              return Object.getOwnPropertyDescriptor(d, o).enumerable;
            })),
            u.push.apply(u, O);
        }
        return u;
      }
      function m(d) {
        for (var s = 1; s < arguments.length; s++) {
          var u = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? j(Object(u), !0).forEach(function (O) {
                (0, P.default)(d, O, u[O]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(u))
            : j(Object(u)).forEach(function (O) {
                Object.defineProperty(
                  d,
                  O,
                  Object.getOwnPropertyDescriptor(u, O)
                );
              });
        }
        return d;
      }
      var y = 100,
        b = (function () {
          function d() {
            (0, w.default)(this, d),
              (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._attachments = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {}),
              (this._sdkProcessingMetadata = {});
          }
          return (
            (0, _.default)(
              d,
              [
                {
                  key: "addScopeListener",
                  value: function (u) {
                    this._scopeListeners.push(u);
                  },
                },
                {
                  key: "addEventProcessor",
                  value: function (u) {
                    return this._eventProcessors.push(u), this;
                  },
                },
                {
                  key: "setUser",
                  value: function (u) {
                    return (
                      (this._user = u || {}),
                      this._session &&
                        (0, h.updateSession)(this._session, { user: u }),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "getUser",
                  value: function () {
                    return this._user;
                  },
                },
                {
                  key: "getRequestSession",
                  value: function () {
                    return this._requestSession;
                  },
                },
                {
                  key: "setRequestSession",
                  value: function (u) {
                    return (this._requestSession = u), this;
                  },
                },
                {
                  key: "setTags",
                  value: function (u) {
                    return (
                      (this._tags = m(m({}, this._tags), u)),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setTag",
                  value: function (u, O) {
                    return (
                      (this._tags = m(
                        m({}, this._tags),
                        {},
                        (0, P.default)({}, u, O)
                      )),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setExtras",
                  value: function (u) {
                    return (
                      (this._extra = m(m({}, this._extra), u)),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setExtra",
                  value: function (u, O) {
                    return (
                      (this._extra = m(
                        m({}, this._extra),
                        {},
                        (0, P.default)({}, u, O)
                      )),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setFingerprint",
                  value: function (u) {
                    return (
                      (this._fingerprint = u),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setLevel",
                  value: function (u) {
                    return (
                      (this._level = u), this._notifyScopeListeners(), this
                    );
                  },
                },
                {
                  key: "setTransactionName",
                  value: function (u) {
                    return (
                      (this._transactionName = u),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setContext",
                  value: function (u, O) {
                    return (
                      O === null
                        ? delete this._contexts[u]
                        : (this._contexts[u] = O),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "setSpan",
                  value: function (u) {
                    return (this._span = u), this._notifyScopeListeners(), this;
                  },
                },
                {
                  key: "getSpan",
                  value: function () {
                    return this._span;
                  },
                },
                {
                  key: "getTransaction",
                  value: function () {
                    var u = this.getSpan();
                    return u && u.transaction;
                  },
                },
                {
                  key: "setSession",
                  value: function (u) {
                    return (
                      u ? (this._session = u) : delete this._session,
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "getSession",
                  value: function () {
                    return this._session;
                  },
                },
                {
                  key: "update",
                  value: function (u) {
                    if (!u) return this;
                    if (typeof u == "function") {
                      var O = u(this);
                      return O instanceof d ? O : this;
                    }
                    return (
                      u instanceof d
                        ? ((this._tags = m(m({}, this._tags), u._tags)),
                          (this._extra = m(m({}, this._extra), u._extra)),
                          (this._contexts = m(
                            m({}, this._contexts),
                            u._contexts
                          )),
                          u._user &&
                            Object.keys(u._user).length &&
                            (this._user = u._user),
                          u._level && (this._level = u._level),
                          u._fingerprint &&
                            (this._fingerprint = u._fingerprint),
                          u._requestSession &&
                            (this._requestSession = u._requestSession))
                        : (0, p.isPlainObject)(u) &&
                          ((u = u),
                          (this._tags = m(m({}, this._tags), u.tags)),
                          (this._extra = m(m({}, this._extra), u.extra)),
                          (this._contexts = m(
                            m({}, this._contexts),
                            u.contexts
                          )),
                          u.user && (this._user = u.user),
                          u.level && (this._level = u.level),
                          u.fingerprint && (this._fingerprint = u.fingerprint),
                          u.requestSession &&
                            (this._requestSession = u.requestSession)),
                      this
                    );
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    return (
                      (this._breadcrumbs = []),
                      (this._tags = {}),
                      (this._extra = {}),
                      (this._user = {}),
                      (this._contexts = {}),
                      (this._level = void 0),
                      (this._transactionName = void 0),
                      (this._fingerprint = void 0),
                      (this._requestSession = void 0),
                      (this._span = void 0),
                      (this._session = void 0),
                      this._notifyScopeListeners(),
                      (this._attachments = []),
                      this
                    );
                  },
                },
                {
                  key: "addBreadcrumb",
                  value: function (u, O) {
                    var o = typeof O == "number" ? O : y;
                    if (o <= 0) return this;
                    var i = m(
                      { timestamp: (0, p.dateTimestampInSeconds)() },
                      u
                    );
                    return (
                      (this._breadcrumbs = []
                        .concat((0, E.default)(this._breadcrumbs), [i])
                        .slice(-o)),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "clearBreadcrumbs",
                  value: function () {
                    return (
                      (this._breadcrumbs = []),
                      this._notifyScopeListeners(),
                      this
                    );
                  },
                },
                {
                  key: "addAttachment",
                  value: function (u) {
                    return this._attachments.push(u), this;
                  },
                },
                {
                  key: "getAttachments",
                  value: function () {
                    return this._attachments;
                  },
                },
                {
                  key: "clearAttachments",
                  value: function () {
                    return (this._attachments = []), this;
                  },
                },
                {
                  key: "applyToEvent",
                  value: function (u) {
                    var O =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
                    if (
                      (this._extra &&
                        Object.keys(this._extra).length &&
                        (u.extra = m(m({}, this._extra), u.extra)),
                      this._tags &&
                        Object.keys(this._tags).length &&
                        (u.tags = m(m({}, this._tags), u.tags)),
                      this._user &&
                        Object.keys(this._user).length &&
                        (u.user = m(m({}, this._user), u.user)),
                      this._contexts &&
                        Object.keys(this._contexts).length &&
                        (u.contexts = m(m({}, this._contexts), u.contexts)),
                      this._level && (u.level = this._level),
                      this._transactionName &&
                        (u.transaction = this._transactionName),
                      this._span)
                    ) {
                      u.contexts = m(
                        { trace: this._span.getTraceContext() },
                        u.contexts
                      );
                      var o =
                        this._span.transaction && this._span.transaction.name;
                      o && (u.tags = m({ transaction: o }, u.tags));
                    }
                    return (
                      this._applyFingerprint(u),
                      (u.breadcrumbs = [].concat(
                        (0, E.default)(u.breadcrumbs || []),
                        (0, E.default)(this._breadcrumbs)
                      )),
                      (u.breadcrumbs =
                        u.breadcrumbs.length > 0 ? u.breadcrumbs : void 0),
                      (u.sdkProcessingMetadata = m(
                        m({}, u.sdkProcessingMetadata),
                        this._sdkProcessingMetadata
                      )),
                      this._notifyEventProcessors(
                        [].concat(
                          (0, E.default)(f()),
                          (0, E.default)(this._eventProcessors)
                        ),
                        u,
                        O
                      )
                    );
                  },
                },
                {
                  key: "setSDKProcessingMetadata",
                  value: function (u) {
                    return (
                      (this._sdkProcessingMetadata = m(
                        m({}, this._sdkProcessingMetadata),
                        u
                      )),
                      this
                    );
                  },
                },
                {
                  key: "_notifyEventProcessors",
                  value: function (u, O, o) {
                    var i = this,
                      l =
                        arguments.length > 3 && arguments[3] !== void 0
                          ? arguments[3]
                          : 0;
                    return new p.SyncPromise(function (t, n) {
                      var a = u[l];
                      if (O === null || typeof a != "function") t(O);
                      else {
                        var c = a(m({}, O), o);
                        (typeof __SENTRY_DEBUG__ == "undefined" ||
                          __SENTRY_DEBUG__) &&
                          a.id &&
                          c === null &&
                          p.logger.log(
                            'Event processor "'.concat(a.id, '" dropped event')
                          ),
                          (0, p.isThenable)(c)
                            ? c
                                .then(function (A) {
                                  return i
                                    ._notifyEventProcessors(u, A, o, l + 1)
                                    .then(t);
                                })
                                .then(null, n)
                            : i
                                ._notifyEventProcessors(u, c, o, l + 1)
                                .then(t)
                                .then(null, n);
                      }
                    });
                  },
                },
                {
                  key: "_notifyScopeListeners",
                  value: function () {
                    var u = this;
                    this._notifyingListeners ||
                      ((this._notifyingListeners = !0),
                      this._scopeListeners.forEach(function (O) {
                        O(u);
                      }),
                      (this._notifyingListeners = !1));
                  },
                },
                {
                  key: "_applyFingerprint",
                  value: function (u) {
                    (u.fingerprint = u.fingerprint
                      ? (0, p.arrayify)(u.fingerprint)
                      : []),
                      this._fingerprint &&
                        (u.fingerprint = u.fingerprint.concat(
                          this._fingerprint
                        )),
                      u.fingerprint &&
                        !u.fingerprint.length &&
                        delete u.fingerprint;
                  },
                },
              ],
              [
                {
                  key: "clone",
                  value: function (u) {
                    var O = new d();
                    return (
                      u &&
                        ((O._breadcrumbs = (0, E.default)(u._breadcrumbs)),
                        (O._tags = m({}, u._tags)),
                        (O._extra = m({}, u._extra)),
                        (O._contexts = m({}, u._contexts)),
                        (O._user = u._user),
                        (O._level = u._level),
                        (O._span = u._span),
                        (O._session = u._session),
                        (O._transactionName = u._transactionName),
                        (O._fingerprint = u._fingerprint),
                        (O._eventProcessors = (0, E.default)(
                          u._eventProcessors
                        )),
                        (O._requestSession = u._requestSession),
                        (O._attachments = (0, E.default)(u._attachments)),
                        (O._sdkProcessingMetadata = m(
                          {},
                          u._sdkProcessingMetadata
                        ))),
                      O
                    );
                  },
                },
              ]
            ),
            d
          );
        })();
      e.Scope = b;
      function f() {
        return (0, p.getGlobalSingleton)("globalEventProcessors", function () {
          return [];
        });
      }
      function v(d) {
        f().push(d);
      }
    },
    407481: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initAndBind = P);
      var g = r(61659),
        E = r(72917);
      function P(w, _) {
        _.debug === !0 &&
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__
            ? g.logger.enable()
            : console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              ));
        var p = (0, E.getCurrentHub)(),
          h = p.getScope();
        h && h.update(_.initialScope);
        var j = new w(_);
        p.bindClient(j);
      }
    },
    255810: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.closeSession = w),
        (e.makeSession = E),
        (e.updateSession = P);
      var g = r(61659);
      function E(p) {
        var h = (0, g.timestampInSeconds)(),
          j = {
            sid: (0, g.uuid4)(),
            init: !0,
            timestamp: h,
            started: h,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: function () {
              return _(j);
            },
          };
        return p && P(j, p), j;
      }
      function P(p) {
        var h =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (h.user &&
            (!p.ipAddress &&
              h.user.ip_address &&
              (p.ipAddress = h.user.ip_address),
            !p.did &&
              !h.did &&
              (p.did = h.user.id || h.user.email || h.user.username)),
          (p.timestamp = h.timestamp || (0, g.timestampInSeconds)()),
          h.ignoreDuration && (p.ignoreDuration = h.ignoreDuration),
          h.sid && (p.sid = h.sid.length === 32 ? h.sid : (0, g.uuid4)()),
          h.init !== void 0 && (p.init = h.init),
          !p.did && h.did && (p.did = "".concat(h.did)),
          typeof h.started == "number" && (p.started = h.started),
          p.ignoreDuration)
        )
          p.duration = void 0;
        else if (typeof h.duration == "number") p.duration = h.duration;
        else {
          var j = p.timestamp - p.started;
          p.duration = j >= 0 ? j : 0;
        }
        h.release && (p.release = h.release),
          h.environment && (p.environment = h.environment),
          !p.ipAddress && h.ipAddress && (p.ipAddress = h.ipAddress),
          !p.userAgent && h.userAgent && (p.userAgent = h.userAgent),
          typeof h.errors == "number" && (p.errors = h.errors),
          h.status && (p.status = h.status);
      }
      function w(p, h) {
        var j = {};
        h
          ? (j = { status: h })
          : p.status === "ok" && (j = { status: "exited" }),
          P(p, j);
      }
      function _(p) {
        return (0, g.dropUndefinedKeys)({
          sid: "".concat(p.sid),
          init: p.init,
          started: new Date(p.started * 1e3).toISOString(),
          timestamp: new Date(p.timestamp * 1e3).toISOString(),
          status: p.status,
          errors: p.errors,
          did:
            typeof p.did == "number" || typeof p.did == "string"
              ? "".concat(p.did)
              : void 0,
          duration: p.duration,
          attrs: {
            release: p.release,
            environment: p.environment,
            ip_address: p.ipAddress,
            user_agent: p.userAgent,
          },
        });
      }
    },
    291451: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SessionFlusher = void 0);
      var E = g(r(858240)),
        P = g(r(4636)),
        w = r(61659),
        _ = r(72917),
        p = (function () {
          function h(j, m) {
            var y = this;
            (0, E.default)(this, h),
              h.prototype.__init.call(this),
              h.prototype.__init2.call(this),
              h.prototype.__init3.call(this),
              (this._client = j),
              (this._intervalId = setInterval(function () {
                return y.flush();
              }, this.flushTimeout * 1e3)),
              (this._sessionAttrs = m);
          }
          return (
            (0, P.default)(h, [
              {
                key: "__init",
                value: function () {
                  this.flushTimeout = 60;
                },
              },
              {
                key: "__init2",
                value: function () {
                  this._pendingAggregates = {};
                },
              },
              {
                key: "__init3",
                value: function () {
                  this._isEnabled = !0;
                },
              },
              {
                key: "flush",
                value: function () {
                  var m = this.getSessionAggregates();
                  m.aggregates.length !== 0 &&
                    ((this._pendingAggregates = {}),
                    this._client.sendSession(m));
                },
              },
              {
                key: "getSessionAggregates",
                value: function () {
                  var m = this,
                    y = Object.keys(this._pendingAggregates).map(function (f) {
                      return m._pendingAggregates[parseInt(f)];
                    }),
                    b = { attrs: this._sessionAttrs, aggregates: y };
                  return (0, w.dropUndefinedKeys)(b);
                },
              },
              {
                key: "close",
                value: function () {
                  clearInterval(this._intervalId),
                    (this._isEnabled = !1),
                    this.flush();
                },
              },
              {
                key: "incrementSessionStatusCount",
                value: function () {
                  if (!!this._isEnabled) {
                    var m = (0, _.getCurrentHub)().getScope(),
                      y = m && m.getRequestSession();
                    y &&
                      y.status &&
                      (this._incrementSessionStatusCount(y.status, new Date()),
                      m && m.setRequestSession(void 0));
                  }
                },
              },
              {
                key: "_incrementSessionStatusCount",
                value: function (m, y) {
                  var b = new Date(y).setSeconds(0, 0);
                  this._pendingAggregates[b] = this._pendingAggregates[b] || {};
                  var f = this._pendingAggregates[b];
                  switch (
                    (f.started || (f.started = new Date(b).toISOString()), m)
                  ) {
                    case "errored":
                      return (f.errored = (f.errored || 0) + 1), f.errored;
                    case "ok":
                      return (f.exited = (f.exited || 0) + 1), f.exited;
                    default:
                      return (f.crashed = (f.crashed || 0) + 1), f.crashed;
                  }
                },
              },
            ]),
            h
          );
        })();
      e.SessionFlusher = p;
    },
    87216: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DEFAULT_TRANSPORT_BUFFER_SIZE = void 0),
        (e.createTransport = P);
      var g = r(61659),
        E = 30;
      e.DEFAULT_TRANSPORT_BUFFER_SIZE = E;
      function P(_, p) {
        var h =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : (0, g.makePromiseBuffer)(_.bufferSize || E),
          j = {},
          m = function (f) {
            return h.drain(f);
          };
        function y(b) {
          var f = [];
          if (
            ((0, g.forEachEnvelopeItem)(b, function (u, O) {
              var o = (0, g.envelopeItemTypeToDataCategory)(O);
              if ((0, g.isRateLimited)(j, o)) {
                var i = w(u, O);
                _.recordDroppedEvent("ratelimit_backoff", o, i);
              } else f.push(u);
            }),
            f.length === 0)
          )
            return (0, g.resolvedSyncPromise)();
          var v = (0, g.createEnvelope)(b[0], f),
            d = function (O) {
              (0, g.forEachEnvelopeItem)(v, function (o, i) {
                var l = w(o, i);
                _.recordDroppedEvent(
                  O,
                  (0, g.envelopeItemTypeToDataCategory)(i),
                  l
                );
              });
            },
            s = function () {
              return p({
                body: (0, g.serializeEnvelope)(v, _.textEncoder),
              }).then(
                function (O) {
                  O.statusCode !== void 0 &&
                    (O.statusCode < 200 || O.statusCode >= 300) &&
                    (typeof __SENTRY_DEBUG__ == "undefined" ||
                      __SENTRY_DEBUG__) &&
                    g.logger.warn(
                      "Sentry responded with status code ".concat(
                        O.statusCode,
                        " to sent event."
                      )
                    ),
                    (j = (0, g.updateRateLimits)(j, O));
                },
                function (O) {
                  (typeof __SENTRY_DEBUG__ == "undefined" ||
                    __SENTRY_DEBUG__) &&
                    g.logger.error("Failed while sending event:", O),
                    d("network_error");
                }
              );
            };
          return h.add(s).then(
            function (u) {
              return u;
            },
            function (u) {
              if (u instanceof g.SentryError)
                return (
                  (typeof __SENTRY_DEBUG__ == "undefined" ||
                    __SENTRY_DEBUG__) &&
                    g.logger.error(
                      "Skipped sending event because buffer is full."
                    ),
                  d("queue_overflow"),
                  (0, g.resolvedSyncPromise)()
                );
              throw u;
            }
          );
        }
        return { send: y, flush: m };
      }
      function w(_, p) {
        if (!(p !== "event" && p !== "transaction"))
          return Array.isArray(_) ? _[1] : void 0;
      }
    },
    886474: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SDK_VERSION = void 0);
      var r = "7.24.2";
      e.SDK_VERSION = r;
    },
    41002: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.REACT_UPDATE_OP = e.REACT_RENDER_OP = e.REACT_MOUNT_OP = void 0);
      var r = "ui.react.render";
      e.REACT_RENDER_OP = r;
      var g = "ui.react.update";
      e.REACT_UPDATE_OP = g;
      var E = "ui.react.mount";
      e.REACT_MOUNT_OP = E;
    },
    149781: function (D, e, r) {
      "use strict";
      var g = r(875832),
        E = r(569644);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.UNKNOWN_COMPONENT = e.ErrorBoundary = void 0),
        (e.isAtLeastReact17 = t),
        (e.withErrorBoundary = A);
      var P = g(r(346797)),
        w = g(r(858240)),
        _ = g(r(4636)),
        p = g(r(177928)),
        h = g(r(721854)),
        j = g(r(699467)),
        m = g(r(506051)),
        y = r(806962),
        b = r(61659),
        f = g(r(192628)),
        v = s(r(508669));
      function d(C) {
        if (typeof WeakMap != "function") return null;
        var U = new WeakMap(),
          L = new WeakMap();
        return (d = function (B) {
          return B ? L : U;
        })(C);
      }
      function s(C, U) {
        if (!U && C && C.__esModule) return C;
        if (C === null || (E(C) !== "object" && typeof C != "function"))
          return { default: C };
        var L = d(U);
        if (L && L.has(C)) return L.get(C);
        var S = {},
          B = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Y in C)
          if (Y !== "default" && Object.prototype.hasOwnProperty.call(C, Y)) {
            var F = B ? Object.getOwnPropertyDescriptor(C, Y) : null;
            F && (F.get || F.set)
              ? Object.defineProperty(S, Y, F)
              : (S[Y] = C[Y]);
          }
        return (S.default = C), L && L.set(C, S), S;
      }
      function u(C, U) {
        var L = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(C);
          U &&
            (S = S.filter(function (B) {
              return Object.getOwnPropertyDescriptor(C, B).enumerable;
            })),
            L.push.apply(L, S);
        }
        return L;
      }
      function O(C) {
        for (var U = 1; U < arguments.length; U++) {
          var L = arguments[U] != null ? arguments[U] : {};
          U % 2
            ? u(Object(L), !0).forEach(function (S) {
                (0, P.default)(C, S, L[S]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(L))
            : u(Object(L)).forEach(function (S) {
                Object.defineProperty(
                  C,
                  S,
                  Object.getOwnPropertyDescriptor(L, S)
                );
              });
        }
        return C;
      }
      function o(C) {
        var U = i();
        return function () {
          var S = (0, m.default)(C),
            B;
          if (U) {
            var Y = (0, m.default)(this).constructor;
            B = Reflect.construct(S, arguments, Y);
          } else B = S.apply(this, arguments);
          return (0, j.default)(this, B);
        };
      }
      function i() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (C) {
          return !1;
        }
      }
      var l =
        "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";
      function t(C) {
        var U = C.match(/^([^.]+)/);
        return U !== null && parseInt(U[0]) >= 17;
      }
      var n = "unknown";
      e.UNKNOWN_COMPONENT = n;
      var a = { componentStack: null, error: null, eventId: null },
        c = (function (C) {
          (0, h.default)(L, C);
          var U = o(L);
          function L() {
            var S;
            (0, w.default)(this, L);
            for (var B = arguments.length, Y = new Array(B), F = 0; F < B; F++)
              Y[F] = arguments[F];
            return (
              (S = U.call.apply(U, [this].concat(Y))),
              L.prototype.__init.call((0, p.default)(S)),
              L.prototype.__init2.call((0, p.default)(S)),
              S
            );
          }
          return (
            (0, _.default)(L, [
              {
                key: "__init",
                value: function () {
                  this.state = a;
                },
              },
              {
                key: "componentDidCatch",
                value: function (B, Y) {
                  var F = this,
                    z = Y.componentStack,
                    Q = this.props,
                    V = Q.beforeCapture,
                    N = Q.onError,
                    R = Q.showDialog,
                    T = Q.dialogOptions;
                  (0, y.withScope)(function (k) {
                    if (t(v.version) && (0, b.isError)(B)) {
                      var M = new Error(B.message);
                      (M.name = "React ErrorBoundary ".concat(M.name)),
                        (M.stack = z),
                        (B.cause = M);
                    }
                    V && V(k, B, z);
                    var $ = (0, y.captureException)(B, {
                      contexts: { react: { componentStack: z } },
                    });
                    N && N(B, z, $),
                      R &&
                        (0, y.showReportDialog)(
                          O(O({}, T), {}, { eventId: $ })
                        ),
                      F.setState({ error: B, componentStack: z, eventId: $ });
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var B = this.props.onMount;
                  B && B();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var B = this.state,
                    Y = B.error,
                    F = B.componentStack,
                    z = B.eventId,
                    Q = this.props.onUnmount;
                  Q && Q(Y, F, z);
                },
              },
              {
                key: "__init2",
                value: function () {
                  var B = this;
                  this.resetErrorBoundary = function () {
                    var Y = B.props.onReset,
                      F = B.state,
                      z = F.error,
                      Q = F.componentStack,
                      V = F.eventId;
                    Y && Y(z, Q, V), B.setState(a);
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var B = this.props,
                    Y = B.fallback,
                    F = B.children,
                    z = this.state,
                    Q = z.error,
                    V = z.componentStack,
                    N = z.eventId;
                  if (Q) {
                    var R = void 0;
                    return (
                      typeof Y == "function"
                        ? (R = Y({
                            error: Q,
                            componentStack: V,
                            resetError: this.resetErrorBoundary,
                            eventId: N,
                          }))
                        : (R = Y),
                      v.isValidElement(R)
                        ? R
                        : (Y &&
                            (typeof __SENTRY_DEBUG__ == "undefined" ||
                              __SENTRY_DEBUG__) &&
                            b.logger.warn(
                              "fallback did not produce a valid ReactElement"
                            ),
                          null)
                    );
                  }
                  return typeof F == "function" ? F() : F;
                },
              },
            ]),
            L
          );
        })(v.Component);
      e.ErrorBoundary = c;
      function A(C, U) {
        var L = this,
          S = C.displayName || C.name || n,
          B = function (F) {
            return v.createElement(
              c,
              O(
                O({}, U),
                {},
                { __self: L, __source: { fileName: l, lineNumber: 173 } }
              ),
              v.createElement(
                C,
                O(
                  O({}, F),
                  {},
                  { __self: L, __source: { fileName: l, lineNumber: 174 } }
                )
              )
            );
          };
        return (
          (B.displayName = "errorBoundary(".concat(S, ")")),
          (0, f.default)(B, C),
          B
        );
      }
    },
    827681: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var g = {
        init: !0,
        Profiler: !0,
        useProfiler: !0,
        withProfiler: !0,
        ErrorBoundary: !0,
        withErrorBoundary: !0,
        createReduxEnhancer: !0,
        reactRouterV3Instrumentation: !0,
        reactRouterV4Instrumentation: !0,
        reactRouterV5Instrumentation: !0,
        withSentryRouting: !0,
        reactRouterV6Instrumentation: !0,
        withSentryReactRouterV6Routing: !0,
        wrapCreateBrowserRouter: !0,
        wrapUseRoutes: !0,
      };
      Object.defineProperty(e, "ErrorBoundary", {
        enumerable: !0,
        get: function () {
          return _.ErrorBoundary;
        },
      }),
        Object.defineProperty(e, "Profiler", {
          enumerable: !0,
          get: function () {
            return w.Profiler;
          },
        }),
        Object.defineProperty(e, "createReduxEnhancer", {
          enumerable: !0,
          get: function () {
            return p.createReduxEnhancer;
          },
        }),
        Object.defineProperty(e, "init", {
          enumerable: !0,
          get: function () {
            return P.init;
          },
        }),
        Object.defineProperty(e, "reactRouterV3Instrumentation", {
          enumerable: !0,
          get: function () {
            return h.reactRouterV3Instrumentation;
          },
        }),
        Object.defineProperty(e, "reactRouterV4Instrumentation", {
          enumerable: !0,
          get: function () {
            return j.reactRouterV4Instrumentation;
          },
        }),
        Object.defineProperty(e, "reactRouterV5Instrumentation", {
          enumerable: !0,
          get: function () {
            return j.reactRouterV5Instrumentation;
          },
        }),
        Object.defineProperty(e, "reactRouterV6Instrumentation", {
          enumerable: !0,
          get: function () {
            return m.reactRouterV6Instrumentation;
          },
        }),
        Object.defineProperty(e, "useProfiler", {
          enumerable: !0,
          get: function () {
            return w.useProfiler;
          },
        }),
        Object.defineProperty(e, "withErrorBoundary", {
          enumerable: !0,
          get: function () {
            return _.withErrorBoundary;
          },
        }),
        Object.defineProperty(e, "withProfiler", {
          enumerable: !0,
          get: function () {
            return w.withProfiler;
          },
        }),
        Object.defineProperty(e, "withSentryReactRouterV6Routing", {
          enumerable: !0,
          get: function () {
            return m.withSentryReactRouterV6Routing;
          },
        }),
        Object.defineProperty(e, "withSentryRouting", {
          enumerable: !0,
          get: function () {
            return j.withSentryRouting;
          },
        }),
        Object.defineProperty(e, "wrapCreateBrowserRouter", {
          enumerable: !0,
          get: function () {
            return m.wrapCreateBrowserRouter;
          },
        }),
        Object.defineProperty(e, "wrapUseRoutes", {
          enumerable: !0,
          get: function () {
            return m.wrapUseRoutes;
          },
        });
      var E = r(806962);
      Object.keys(E).forEach(function (y) {
        y === "default" ||
          y === "__esModule" ||
          Object.prototype.hasOwnProperty.call(g, y) ||
          (y in e && e[y] === E[y]) ||
          Object.defineProperty(e, y, {
            enumerable: !0,
            get: function () {
              return E[y];
            },
          });
      });
      var P = r(658149),
        w = r(811840),
        _ = r(149781),
        p = r(420575),
        h = r(135829),
        j = r(86098),
        m = r(811050);
    },
    811840: function (D, e, r) {
      "use strict";
      var g = r(875832),
        E = r(569644);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.UNKNOWN_COMPONENT = e.Profiler = void 0),
        (e.getActiveTransaction = U),
        (e.useProfiler = C),
        (e.withProfiler = A);
      var P = g(r(375798)),
        w = g(r(346797)),
        _ = g(r(858240)),
        p = g(r(4636)),
        h = g(r(177928)),
        j = g(r(721854)),
        m = g(r(699467)),
        y = g(r(506051)),
        b = r(806962),
        f = r(61659),
        v = g(r(192628)),
        d = O(r(508669)),
        s = r(41002);
      function u(L) {
        if (typeof WeakMap != "function") return null;
        var S = new WeakMap(),
          B = new WeakMap();
        return (u = function (F) {
          return F ? B : S;
        })(L);
      }
      function O(L, S) {
        if (!S && L && L.__esModule) return L;
        if (L === null || (E(L) !== "object" && typeof L != "function"))
          return { default: L };
        var B = u(S);
        if (B && B.has(L)) return B.get(L);
        var Y = {},
          F = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var z in L)
          if (z !== "default" && Object.prototype.hasOwnProperty.call(L, z)) {
            var Q = F ? Object.getOwnPropertyDescriptor(L, z) : null;
            Q && (Q.get || Q.set)
              ? Object.defineProperty(Y, z, Q)
              : (Y[z] = L[z]);
          }
        return (Y.default = L), B && B.set(L, Y), Y;
      }
      function o(L, S) {
        var B = Object.keys(L);
        if (Object.getOwnPropertySymbols) {
          var Y = Object.getOwnPropertySymbols(L);
          S &&
            (Y = Y.filter(function (F) {
              return Object.getOwnPropertyDescriptor(L, F).enumerable;
            })),
            B.push.apply(B, Y);
        }
        return B;
      }
      function i(L) {
        for (var S = 1; S < arguments.length; S++) {
          var B = arguments[S] != null ? arguments[S] : {};
          S % 2
            ? o(Object(B), !0).forEach(function (Y) {
                (0, w.default)(L, Y, B[Y]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(B))
            : o(Object(B)).forEach(function (Y) {
                Object.defineProperty(
                  L,
                  Y,
                  Object.getOwnPropertyDescriptor(B, Y)
                );
              });
        }
        return L;
      }
      function l(L) {
        var S = t();
        return function () {
          var Y = (0, y.default)(L),
            F;
          if (S) {
            var z = (0, y.default)(this).constructor;
            F = Reflect.construct(Y, arguments, z);
          } else F = Y.apply(this, arguments);
          return (0, m.default)(this, F);
        };
      }
      function t() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (L) {
          return !1;
        }
      }
      var n =
          "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/profiler.tsx",
        a = "unknown";
      e.UNKNOWN_COMPONENT = a;
      var c = (function (L) {
        (0, j.default)(B, L);
        var S = l(B);
        function B(Y) {
          var F;
          (0, _.default)(this, B),
            (F = S.call(this, Y)),
            B.prototype.__init.call((0, h.default)(F)),
            B.prototype.__init2.call((0, h.default)(F));
          var z = F.props,
            Q = z.name,
            V = z.disabled,
            N = V === void 0 ? !1 : V;
          if (N) return (0, m.default)(F);
          var R = U();
          return (
            R &&
              (F._mountSpan = R.startChild({
                description: "<".concat(Q, ">"),
                op: s.REACT_MOUNT_OP,
              })),
            F
          );
        }
        return (
          (0, p.default)(
            B,
            [
              {
                key: "__init",
                value: function () {
                  this._mountSpan = void 0;
                },
              },
              {
                key: "__init2",
                value: function () {
                  this._updateSpan = void 0;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this._mountSpan && this._mountSpan.finish();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (F) {
                  var z = this,
                    Q = F.updateProps,
                    V = F.includeUpdates,
                    N = V === void 0 ? !0 : V;
                  if (N && this._mountSpan && Q !== this.props.updateProps) {
                    var R = Object.keys(Q).filter(function (k) {
                      return Q[k] !== z.props.updateProps[k];
                    });
                    if (R.length > 0) {
                      var T = (0, f.timestampWithMs)();
                      this._updateSpan = this._mountSpan.startChild({
                        data: { changedProps: R },
                        description: "<".concat(this.props.name, ">"),
                        op: s.REACT_UPDATE_OP,
                        startTimestamp: T,
                      });
                    }
                  }
                  return !0;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this._updateSpan &&
                    (this._updateSpan.finish(), (this._updateSpan = void 0));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var F = this.props,
                    z = F.name,
                    Q = F.includeRender,
                    V = Q === void 0 ? !0 : Q;
                  this._mountSpan &&
                    V &&
                    this._mountSpan.startChild({
                      description: "<".concat(z, ">"),
                      endTimestamp: (0, f.timestampWithMs)(),
                      op: s.REACT_RENDER_OP,
                      startTimestamp: this._mountSpan.endTimestamp,
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ],
            [
              {
                key: "__initStatic",
                value: function () {
                  this.defaultProps = {
                    disabled: !1,
                    includeRender: !0,
                    includeUpdates: !0,
                  };
                },
              },
            ]
          ),
          B
        );
      })(d.Component);
      (e.Profiler = c), c.__initStatic();
      function A(L, S) {
        var B = this,
          Y = (S && S.name) || L.displayName || L.name || a,
          F = function (Q) {
            return d.createElement(
              c,
              i(
                i({}, S),
                {},
                {
                  name: Y,
                  updateProps: Q,
                  __self: B,
                  __source: { fileName: n, lineNumber: 144 },
                }
              ),
              d.createElement(
                L,
                i(
                  i({}, Q),
                  {},
                  { __self: B, __source: { fileName: n, lineNumber: 145 } }
                )
              )
            );
          };
        return (
          (F.displayName = "profiler(".concat(Y, ")")), (0, v.default)(F, L), F
        );
      }
      function C(L) {
        var S =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { disabled: !1, hasRenderSpan: !0 },
          B = d.useState(function () {
            if (!(S && S.disabled)) {
              var z = U();
              if (z)
                return z.startChild({
                  description: "<".concat(L, ">"),
                  op: s.REACT_MOUNT_OP,
                });
            }
          }),
          Y = (0, P.default)(B, 1),
          F = Y[0];
        d.useEffect(function () {
          return (
            F && F.finish(),
            function () {
              F &&
                S.hasRenderSpan &&
                F.startChild({
                  description: "<".concat(L, ">"),
                  endTimestamp: (0, f.timestampWithMs)(),
                  op: s.REACT_RENDER_OP,
                  startTimestamp: F.endTimestamp,
                });
            }
          );
        }, []);
      }
      function U() {
        var L =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : (0, b.getCurrentHub)();
        if (L) {
          var S = L.getScope();
          if (S) return S.getTransaction();
        }
      }
    },
    86098: function (D, e, r) {
      "use strict";
      var g = r(875832),
        E = r(569644);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.reactRouterV4Instrumentation = d),
        (e.reactRouterV5Instrumentation = s),
        (e.withSentryRouting = i);
      var P = g(r(346797)),
        w = g(r(375798)),
        _ = r(806962),
        p = g(r(192628)),
        h = m(r(508669));
      function j(l) {
        if (typeof WeakMap != "function") return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (j = function (c) {
          return c ? n : t;
        })(l);
      }
      function m(l, t) {
        if (!t && l && l.__esModule) return l;
        if (l === null || (E(l) !== "object" && typeof l != "function"))
          return { default: l };
        var n = j(t);
        if (n && n.has(l)) return n.get(l);
        var a = {},
          c = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var A in l)
          if (A !== "default" && Object.prototype.hasOwnProperty.call(l, A)) {
            var C = c ? Object.getOwnPropertyDescriptor(l, A) : null;
            C && (C.get || C.set)
              ? Object.defineProperty(a, A, C)
              : (a[A] = l[A]);
          }
        return (a.default = l), n && n.set(l, a), a;
      }
      function y(l, t) {
        var n = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(l);
          t &&
            (a = a.filter(function (c) {
              return Object.getOwnPropertyDescriptor(l, c).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function b(l) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (a) {
                (0, P.default)(l, a, n[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (a) {
                Object.defineProperty(
                  l,
                  a,
                  Object.getOwnPropertyDescriptor(n, a)
                );
              });
        }
        return l;
      }
      var f =
          "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouter.tsx",
        v;
      function d(l, t, n) {
        return u(l, "react-router-v4", t, n);
      }
      function s(l, t, n) {
        return u(l, "react-router-v5", t, n);
      }
      function u(l, t) {
        var n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
          a = arguments.length > 3 ? arguments[3] : void 0;
        function c() {
          if (l && l.location) return l.location.pathname;
          if (_.WINDOW && _.WINDOW.location) return _.WINDOW.location.pathname;
        }
        function A(U) {
          if (n.length === 0 || !a) return [U, "url"];
          for (var L = O(n, U, a), S = 0; S < L.length; S++)
            if (L[S].match.isExact) return [L[S].match.path, "route"];
          return [U, "url"];
        }
        var C = { "routing.instrumentation": t };
        return function (U) {
          var L =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !0,
            S =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            B = c();
          if (L && B) {
            var Y = A(B),
              F = (0, w.default)(Y, 2),
              z = F[0],
              Q = F[1];
            v = U({
              name: z,
              op: "pageload",
              tags: C,
              metadata: { source: Q },
            });
          }
          S &&
            l.listen &&
            l.listen(function (V, N) {
              if (N && (N === "PUSH" || N === "POP")) {
                v && v.finish();
                var R = A(V.pathname),
                  T = (0, w.default)(R, 2),
                  k = T[0],
                  M = T[1];
                v = U({
                  name: k,
                  op: "navigation",
                  tags: C,
                  metadata: { source: M },
                });
              }
            });
        };
      }
      function O(l, t, n) {
        var a =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
        return (
          l.some(function (c) {
            var A = c.path ? n(t, c) : a.length ? a[a.length - 1].match : o(t);
            return (
              A &&
                (a.push({ route: c, match: A }),
                c.routes && O(c.routes, t, n, a)),
              !!A
            );
          }),
          a
        );
      }
      function o(l) {
        return { path: "/", url: "/", params: {}, isExact: l === "/" };
      }
      function i(l) {
        var t = this,
          n = l.displayName || l.name,
          a = function (A) {
            return (
              v &&
                A &&
                A.computedMatch &&
                A.computedMatch.isExact &&
                v.setName(A.computedMatch.path, "route"),
              h.createElement(
                l,
                b(
                  b({}, A),
                  {},
                  { __self: t, __source: { fileName: f, lineNumber: 174 } }
                )
              )
            );
          };
        return (
          (a.displayName = "sentryRoute(".concat(n, ")")),
          (0, p.default)(a, l),
          a
        );
      }
    },
    135829: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.reactRouterV3Instrumentation = E);
      var g = r(806962);
      function E(_, p, h) {
        return function (j) {
          var m =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !0,
            y =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            b,
            f;
          m &&
            g.WINDOW &&
            g.WINDOW.location &&
            P(p, g.WINDOW.location, h, function (v) {
              var d =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : "url";
              (f = v),
                (b = j({
                  name: f,
                  op: "pageload",
                  tags: { "routing.instrumentation": "react-router-v3" },
                  metadata: { source: d },
                }));
            }),
            y &&
              _.listen &&
              _.listen(function (v) {
                if (v.action === "PUSH" || v.action === "POP") {
                  b && b.finish();
                  var d = { "routing.instrumentation": "react-router-v3" };
                  f && (d.from = f),
                    P(p, v, h, function (s) {
                      var u =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : "url";
                      (f = s),
                        (b = j({
                          name: f,
                          op: "navigation",
                          tags: d,
                          metadata: { source: u },
                        }));
                    });
                }
              });
        };
      }
      function P(_, p, h, j) {
        var m = p.pathname;
        h({ location: p, routes: _ }, function (y, b, f) {
          if (y || !f) return j(m);
          var v = w(f.routes || []);
          return v.length === 0 || v === "/*" ? j(m) : ((m = v), j(m, "route"));
        });
      }
      function w(_) {
        if (!Array.isArray(_) || _.length === 0) return "";
        for (
          var p = _.filter(function (y) {
              return !!y.path;
            }),
            h = -1,
            j = p.length - 1;
          j >= 0;
          j--
        ) {
          var m = p[j];
          if (m.path && m.path.startsWith("/")) {
            h = j;
            break;
          }
        }
        return p
          .slice(h)
          .filter(function (y) {
            var b = y.path;
            return !!b;
          })
          .map(function (y) {
            var b = y.path;
            return b;
          })
          .join("");
      }
    },
    811050: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.reactRouterV6Instrumentation = t),
        (e.withSentryReactRouterV6Routing = A),
        (e.wrapCreateBrowserRouter = U),
        (e.wrapUseRoutes = C);
      var E = g(r(346797)),
        P = g(r(375798)),
        w = g(r(603912)),
        _ = r(806962),
        p = r(61659),
        h = g(r(192628)),
        j = g(r(508669));
      function m(L, S) {
        var B = Object.keys(L);
        if (Object.getOwnPropertySymbols) {
          var Y = Object.getOwnPropertySymbols(L);
          S &&
            (Y = Y.filter(function (F) {
              return Object.getOwnPropertyDescriptor(L, F).enumerable;
            })),
            B.push.apply(B, Y);
        }
        return B;
      }
      function y(L) {
        for (var S = 1; S < arguments.length; S++) {
          var B = arguments[S] != null ? arguments[S] : {};
          S % 2
            ? m(Object(B), !0).forEach(function (Y) {
                (0, E.default)(L, Y, B[Y]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(B))
            : m(Object(B)).forEach(function (Y) {
                Object.defineProperty(
                  L,
                  Y,
                  Object.getOwnPropertyDescriptor(B, Y)
                );
              });
        }
        return L;
      }
      var b =
          "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouterv6.tsx",
        f,
        v,
        d,
        s,
        u,
        O,
        o,
        i,
        l = { "routing.instrumentation": "react-router-v6" };
      function t(L, S, B, Y, F) {
        return function (z) {
          var Q =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !0,
            V =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            N = _.WINDOW && _.WINDOW.location && _.WINDOW.location.pathname;
          Q &&
            N &&
            (f = z({
              name: N,
              op: "pageload",
              tags: l,
              metadata: { source: "url" },
            })),
            (v = L),
            (d = S),
            (s = B),
            (O = F),
            (u = Y),
            (o = z),
            (i = V);
        };
      }
      function n(L, S, B) {
        if (!L || L.length === 0) return [S.pathname, "url"];
        var Y = "";
        if (B)
          for (var F = 0; F < B.length; F++) {
            var z = B[F],
              Q = z.route;
            if (Q) {
              if (Q.index) return [z.pathname, "route"];
              var V = Q.path;
              if (V) {
                var N =
                  V[0] === "/" || Y[Y.length - 1] === "/" ? V : "/".concat(V);
                if (((Y += N), z.pathname === S.pathname))
                  return (0, p.getNumberOfUrlSegments)(Y) !==
                    (0, p.getNumberOfUrlSegments)(z.pathname) &&
                    Y.slice(-2) !== "/*"
                    ? [N, "route"]
                    : [Y, "route"];
              }
            }
          }
        return [S.pathname, "url"];
      }
      function a(L, S, B) {
        var Y = Array.isArray(B) ? B : O(S, L);
        if (f && Y) {
          var F;
          (F = f).setName.apply(F, (0, w.default)(n(S, L, Y)));
        }
      }
      function c(L, S, B, Y, F) {
        if (Y) {
          f && f.finish();
          return;
        }
        var z = Array.isArray(F) ? F : O(S, L);
        if (i && (B === "PUSH" || B === "POP") && z) {
          f && f.finish();
          var Q = n(S, L, z),
            V = (0, P.default)(Q, 2),
            N = V[0],
            R = V[1];
          f = o({
            name: N,
            op: "navigation",
            tags: l,
            metadata: { source: R },
          });
        }
      }
      function A(L) {
        var S = this;
        if (!v || !d || !s || !u || !O || !o)
          return (
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              p.logger.warn(
                "reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: "
                  .concat(v, ". useLocation: ")
                  .concat(d, ". useNavigationType: ")
                  .concat(s, ".\n      createRoutesFromChildren: ")
                  .concat(u, ". matchRoutes: ")
                  .concat(O, ". customStartTransaction: ")
                  .concat(o, ".")
              ),
            L
          );
        var B = !1,
          Y,
          F = function (Q) {
            var V = d(),
              N = s();
            return (
              v(
                function () {
                  (Y = u(Q.children)), (B = !0), a(V, Y);
                },
                [Q.children]
              ),
              v(
                function () {
                  c(V, Y, N, B);
                },
                [Q.children, V, N, B]
              ),
              (B = !1),
              j.default.createElement(
                L,
                y(
                  y({}, Q),
                  {},
                  { __self: S, __source: { fileName: b, lineNumber: 207 } }
                )
              )
            );
          };
        return (0, h.default)(F, L), F;
      }
      function C(L) {
        var S = this;
        if (!v || !d || !s || !O || !o)
          return (
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              p.logger.warn(
                "reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."
              ),
            L
          );
        var B = !1;
        return function (Y, F) {
          var z = function (V) {
            var N = L(Y, F),
              R = typeof F == "string" ? { pathname: F } : F,
              T = R || d(),
              k = s();
            return (
              v(
                function () {
                  (B = !0), a(T, Y);
                },
                [V]
              ),
              v(
                function () {
                  c(T, Y, k, B);
                },
                [V, T, k, B]
              ),
              (B = !1),
              N
            );
          };
          return j.default.createElement(z, {
            __self: S,
            __source: { fileName: b, lineNumber: 253 },
          });
        };
      }
      function U(L) {
        return function (S, B) {
          var Y = L(S, B);
          return (
            Y.state.historyAction === "POP" && f && a(Y.state.location, S),
            Y.subscribe(function (F) {
              var z = F.location;
              i &&
                (F.historyAction === "PUSH" || F.historyAction === "POP") &&
                f &&
                c(z, S, F.historyAction, !1);
            }),
            Y
          );
        };
      }
    },
    420575: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createReduxEnhancer = m);
      var E = g(r(346797)),
        P = r(806962);
      function w(y, b) {
        var f = Object.keys(y);
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(y);
          b &&
            (v = v.filter(function (d) {
              return Object.getOwnPropertyDescriptor(y, d).enumerable;
            })),
            f.push.apply(f, v);
        }
        return f;
      }
      function _(y) {
        for (var b = 1; b < arguments.length; b++) {
          var f = arguments[b] != null ? arguments[b] : {};
          b % 2
            ? w(Object(f), !0).forEach(function (v) {
                (0, E.default)(y, v, f[v]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(f))
            : w(Object(f)).forEach(function (v) {
                Object.defineProperty(
                  y,
                  v,
                  Object.getOwnPropertyDescriptor(f, v)
                );
              });
        }
        return y;
      }
      var p = "redux.action",
        h = "info",
        j = {
          actionTransformer: function (b) {
            return b;
          },
          stateTransformer: function (b) {
            return b || null;
          },
        };
      function m(y) {
        var b = _(_({}, j), y);
        return function (f) {
          return function (v, d) {
            var s = function (O, o) {
              var i = v(O, o);
              return (
                (0, P.configureScope)(function (l) {
                  var t = b.actionTransformer(o);
                  typeof t != "undefined" &&
                    t !== null &&
                    l.addBreadcrumb({ category: p, data: t, type: h });
                  var n = b.stateTransformer(i);
                  typeof n != "undefined" && n !== null
                    ? l.setContext("state", {
                        state: { type: "redux", value: n },
                      })
                    : l.setContext("state", null);
                  var a = b.configureScopeWithState;
                  typeof a == "function" && a(l, i);
                }),
                i
              );
            };
            return f(s, d);
          };
        };
      }
    },
    658149: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.init = E);
      var g = r(806962);
      function E(P) {
        (P._metadata = P._metadata || {}),
          (P._metadata.sdk = P._metadata.sdk || {
            name: "sentry.javascript.react",
            packages: [{ name: "npm:@sentry/react", version: g.SDK_VERSION }],
            version: g.SDK_VERSION,
          }),
          (0, g.init)(P);
      }
    },
    896715: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SENTRY_BAGGAGE_KEY_PREFIX_REGEX =
          e.SENTRY_BAGGAGE_KEY_PREFIX =
          e.MAX_BAGGAGE_STRING_LENGTH =
          e.BAGGAGE_HEADER_NAME =
            void 0),
        (e.baggageHeaderToDynamicSamplingContext = f),
        (e.dynamicSamplingContextToSentryBaggageHeader = v);
      var E = g(r(375798)),
        P = g(r(346797)),
        w = r(558527),
        _ = r(412797);
      function p(u, O) {
        var o = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(u);
          O &&
            (i = i.filter(function (l) {
              return Object.getOwnPropertyDescriptor(u, l).enumerable;
            })),
            o.push.apply(o, i);
        }
        return o;
      }
      function h(u) {
        for (var O = 1; O < arguments.length; O++) {
          var o = arguments[O] != null ? arguments[O] : {};
          O % 2
            ? p(Object(o), !0).forEach(function (i) {
                (0, P.default)(u, i, o[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o))
            : p(Object(o)).forEach(function (i) {
                Object.defineProperty(
                  u,
                  i,
                  Object.getOwnPropertyDescriptor(o, i)
                );
              });
        }
        return u;
      }
      var j = "baggage";
      e.BAGGAGE_HEADER_NAME = j;
      var m = "sentry-";
      e.SENTRY_BAGGAGE_KEY_PREFIX = m;
      var y = /^sentry-/;
      e.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = y;
      var b = 8192;
      e.MAX_BAGGAGE_STRING_LENGTH = b;
      function f(u) {
        if (!(!(0, w.isString)(u) && !Array.isArray(u))) {
          var O = {};
          if (Array.isArray(u))
            O = u.reduce(function (i, l) {
              var t = d(l);
              return h(h({}, i), t);
            }, {});
          else {
            if (!u) return;
            O = d(u);
          }
          var o = Object.entries(O).reduce(function (i, l) {
            var t = (0, E.default)(l, 2),
              n = t[0],
              a = t[1];
            if (n.match(y)) {
              var c = n.slice(m.length);
              i[c] = a;
            }
            return i;
          }, {});
          if (Object.keys(o).length > 0) return o;
        }
      }
      function v(u) {
        var O = Object.entries(u).reduce(function (o, i) {
          var l = (0, E.default)(i, 2),
            t = l[0],
            n = l[1];
          return n && (o["".concat(m).concat(t)] = n), o;
        }, {});
        return s(O);
      }
      function d(u) {
        return u
          .split(",")
          .map(function (O) {
            return O.split("=").map(function (o) {
              return decodeURIComponent(o.trim());
            });
          })
          .reduce(function (O, o) {
            var i = (0, E.default)(o, 2),
              l = i[0],
              t = i[1];
            return (O[l] = t), O;
          }, {});
      }
      function s(u) {
        if (Object.keys(u).length !== 0)
          return Object.entries(u).reduce(function (O, o, i) {
            var l = (0, E.default)(o, 2),
              t = l[0],
              n = l[1],
              a = ""
                .concat(encodeURIComponent(t), "=")
                .concat(encodeURIComponent(n)),
              c = i === 0 ? a : "".concat(O, ",").concat(a);
            return c.length > b
              ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                  _.logger.warn(
                    "Not adding key: "
                      .concat(t, " with val: ")
                      .concat(
                        n,
                        " to baggage header due to exceeding baggage size limits."
                      )
                  ),
                O)
              : c;
          }, "");
      }
    },
    101968: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDomElement = j),
        (e.getLocationHref = h),
        (e.htmlTreeAsString = _);
      var g = r(558527),
        E = r(604538),
        P = (0, E.getGlobalObject)(),
        w = 80;
      function _(m) {
        var y =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
          for (
            var b = m,
              f = 5,
              v = [],
              d = 0,
              s = 0,
              u = " > ",
              O = u.length,
              o,
              i = Array.isArray(y) ? y : y.keyAttrs,
              l = (!Array.isArray(y) && y.maxStringLength) || w;
            b &&
            d++ < f &&
            ((o = p(b, i)),
            !(o === "html" || (d > 1 && s + v.length * O + o.length >= l)));

          )
            v.push(o), (s += o.length), (b = b.parentNode);
          return v.reverse().join(u);
        } catch (t) {
          return "<unknown>";
        }
      }
      function p(m, y) {
        var b = m,
          f = [],
          v,
          d,
          s,
          u,
          O;
        if (!b || !b.tagName) return "";
        f.push(b.tagName.toLowerCase());
        var o =
          y && y.length
            ? y
                .filter(function (l) {
                  return b.getAttribute(l);
                })
                .map(function (l) {
                  return [l, b.getAttribute(l)];
                })
            : null;
        if (o && o.length)
          o.forEach(function (l) {
            f.push("[".concat(l[0], '="').concat(l[1], '"]'));
          });
        else if (
          (b.id && f.push("#".concat(b.id)),
          (v = b.className),
          v && (0, g.isString)(v))
        )
          for (d = v.split(/\s+/), O = 0; O < d.length; O++)
            f.push(".".concat(d[O]));
        var i = ["type", "name", "title", "alt"];
        for (O = 0; O < i.length; O++)
          (s = i[O]),
            (u = b.getAttribute(s)),
            u && f.push("[".concat(s, '="').concat(u, '"]'));
        return f.join("");
      }
      function h() {
        try {
          return P.document.location.href;
        } catch (m) {
          return "";
        }
      }
      function j(m) {
        return P.document && P.document.querySelector
          ? P.document.querySelector(m)
          : null;
      }
    },
    601154: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._asyncNullishCoalesce = p);
      var E = g(r(569644)),
        P = g(r(385870)),
        w = r(371875);
      function _() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _ =
          function () {
            return j;
          };
        var j = {},
          m = Object.prototype,
          y = m.hasOwnProperty,
          b =
            Object.defineProperty ||
            function (N, R, T) {
              N[R] = T.value;
            },
          f = typeof Symbol == "function" ? Symbol : {},
          v = f.iterator || "@@iterator",
          d = f.asyncIterator || "@@asyncIterator",
          s = f.toStringTag || "@@toStringTag";
        function u(N, R, T) {
          return (
            Object.defineProperty(N, R, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            N[R]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (T, k, M) {
            return (T[k] = M);
          };
        }
        function O(N, R, T, k) {
          var M = R && R.prototype instanceof l ? R : l,
            $ = Object.create(M.prototype),
            I = new z(k || []);
          return b($, "_invoke", { value: S(N, T, I) }), $;
        }
        function o(N, R, T) {
          try {
            return { type: "normal", arg: N.call(R, T) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        j.wrap = O;
        var i = {};
        function l() {}
        function t() {}
        function n() {}
        var a = {};
        u(a, v, function () {
          return this;
        });
        var c = Object.getPrototypeOf,
          A = c && c(c(Q([])));
        A && A !== m && y.call(A, v) && (a = A);
        var C = (n.prototype = l.prototype = Object.create(a));
        function U(N) {
          ["next", "throw", "return"].forEach(function (R) {
            u(N, R, function (T) {
              return this._invoke(R, T);
            });
          });
        }
        function L(N, R) {
          function T(M, $, I, H) {
            var Z = o(N[M], N, $);
            if (Z.type !== "throw") {
              var oe = Z.arg,
                te = oe.value;
              return te &&
                (0, E.default)(te) == "object" &&
                y.call(te, "__await")
                ? R.resolve(te.__await).then(
                    function (J) {
                      T("next", J, I, H);
                    },
                    function (J) {
                      T("throw", J, I, H);
                    }
                  )
                : R.resolve(te).then(
                    function (J) {
                      (oe.value = J), I(oe);
                    },
                    function (J) {
                      return T("throw", J, I, H);
                    }
                  );
            }
            H(Z.arg);
          }
          var k;
          b(this, "_invoke", {
            value: function ($, I) {
              function H() {
                return new R(function (Z, oe) {
                  T($, I, Z, oe);
                });
              }
              return (k = k ? k.then(H, H) : H());
            },
          });
        }
        function S(N, R, T) {
          var k = "suspendedStart";
          return function (M, $) {
            if (k === "executing")
              throw new Error("Generator is already running");
            if (k === "completed") {
              if (M === "throw") throw $;
              return V();
            }
            for (T.method = M, T.arg = $; ; ) {
              var I = T.delegate;
              if (I) {
                var H = B(I, T);
                if (H) {
                  if (H === i) continue;
                  return H;
                }
              }
              if (T.method === "next") T.sent = T._sent = T.arg;
              else if (T.method === "throw") {
                if (k === "suspendedStart") throw ((k = "completed"), T.arg);
                T.dispatchException(T.arg);
              } else T.method === "return" && T.abrupt("return", T.arg);
              k = "executing";
              var Z = o(N, R, T);
              if (Z.type === "normal") {
                if (
                  ((k = T.done ? "completed" : "suspendedYield"), Z.arg === i)
                )
                  continue;
                return { value: Z.arg, done: T.done };
              }
              Z.type === "throw" &&
                ((k = "completed"), (T.method = "throw"), (T.arg = Z.arg));
            }
          };
        }
        function B(N, R) {
          var T = R.method,
            k = N.iterator[T];
          if (k === void 0)
            return (
              (R.delegate = null),
              (T === "throw" &&
                N.iterator.return &&
                ((R.method = "return"),
                (R.arg = void 0),
                B(N, R),
                R.method === "throw")) ||
                (T !== "return" &&
                  ((R.method = "throw"),
                  (R.arg = new TypeError(
                    "The iterator does not provide a '" + T + "' method"
                  )))),
              i
            );
          var M = o(k, N.iterator, R.arg);
          if (M.type === "throw")
            return (
              (R.method = "throw"), (R.arg = M.arg), (R.delegate = null), i
            );
          var $ = M.arg;
          return $
            ? $.done
              ? ((R[N.resultName] = $.value),
                (R.next = N.nextLoc),
                R.method !== "return" &&
                  ((R.method = "next"), (R.arg = void 0)),
                (R.delegate = null),
                i)
              : $
            : ((R.method = "throw"),
              (R.arg = new TypeError("iterator result is not an object")),
              (R.delegate = null),
              i);
        }
        function Y(N) {
          var R = { tryLoc: N[0] };
          1 in N && (R.catchLoc = N[1]),
            2 in N && ((R.finallyLoc = N[2]), (R.afterLoc = N[3])),
            this.tryEntries.push(R);
        }
        function F(N) {
          var R = N.completion || {};
          (R.type = "normal"), delete R.arg, (N.completion = R);
        }
        function z(N) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            N.forEach(Y, this),
            this.reset(!0);
        }
        function Q(N) {
          if (N) {
            var R = N[v];
            if (R) return R.call(N);
            if (typeof N.next == "function") return N;
            if (!isNaN(N.length)) {
              var T = -1,
                k = function M() {
                  for (; ++T < N.length; )
                    if (y.call(N, T)) return (M.value = N[T]), (M.done = !1), M;
                  return (M.value = void 0), (M.done = !0), M;
                };
              return (k.next = k);
            }
          }
          return { next: V };
        }
        function V() {
          return { value: void 0, done: !0 };
        }
        return (
          (t.prototype = n),
          b(C, "constructor", { value: n, configurable: !0 }),
          b(n, "constructor", { value: t, configurable: !0 }),
          (t.displayName = u(n, s, "GeneratorFunction")),
          (j.isGeneratorFunction = function (N) {
            var R = typeof N == "function" && N.constructor;
            return (
              !!R &&
              (R === t || (R.displayName || R.name) === "GeneratorFunction")
            );
          }),
          (j.mark = function (N) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(N, n)
                : ((N.__proto__ = n), u(N, s, "GeneratorFunction")),
              (N.prototype = Object.create(C)),
              N
            );
          }),
          (j.awrap = function (N) {
            return { __await: N };
          }),
          U(L.prototype),
          u(L.prototype, d, function () {
            return this;
          }),
          (j.AsyncIterator = L),
          (j.async = function (N, R, T, k, M) {
            M === void 0 && (M = Promise);
            var $ = new L(O(N, R, T, k), M);
            return j.isGeneratorFunction(R)
              ? $
              : $.next().then(function (I) {
                  return I.done ? I.value : $.next();
                });
          }),
          U(C),
          u(C, s, "Generator"),
          u(C, v, function () {
            return this;
          }),
          u(C, "toString", function () {
            return "[object Generator]";
          }),
          (j.keys = function (N) {
            var R = Object(N),
              T = [];
            for (var k in R) T.push(k);
            return (
              T.reverse(),
              function M() {
                for (; T.length; ) {
                  var $ = T.pop();
                  if ($ in R) return (M.value = $), (M.done = !1), M;
                }
                return (M.done = !0), M;
              }
            );
          }),
          (j.values = Q),
          (z.prototype = {
            constructor: z,
            reset: function (R) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(F),
                !R)
              )
                for (var T in this)
                  T.charAt(0) === "t" &&
                    y.call(this, T) &&
                    !isNaN(+T.slice(1)) &&
                    (this[T] = void 0);
            },
            stop: function () {
              this.done = !0;
              var R = this.tryEntries[0].completion;
              if (R.type === "throw") throw R.arg;
              return this.rval;
            },
            dispatchException: function (R) {
              if (this.done) throw R;
              var T = this;
              function k(oe, te) {
                return (
                  (I.type = "throw"),
                  (I.arg = R),
                  (T.next = oe),
                  te && ((T.method = "next"), (T.arg = void 0)),
                  !!te
                );
              }
              for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                var $ = this.tryEntries[M],
                  I = $.completion;
                if ($.tryLoc === "root") return k("end");
                if ($.tryLoc <= this.prev) {
                  var H = y.call($, "catchLoc"),
                    Z = y.call($, "finallyLoc");
                  if (H && Z) {
                    if (this.prev < $.catchLoc) return k($.catchLoc, !0);
                    if (this.prev < $.finallyLoc) return k($.finallyLoc);
                  } else if (H) {
                    if (this.prev < $.catchLoc) return k($.catchLoc, !0);
                  } else {
                    if (!Z)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < $.finallyLoc) return k($.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (R, T) {
              for (var k = this.tryEntries.length - 1; k >= 0; --k) {
                var M = this.tryEntries[k];
                if (
                  M.tryLoc <= this.prev &&
                  y.call(M, "finallyLoc") &&
                  this.prev < M.finallyLoc
                ) {
                  var $ = M;
                  break;
                }
              }
              $ &&
                (R === "break" || R === "continue") &&
                $.tryLoc <= T &&
                T <= $.finallyLoc &&
                ($ = null);
              var I = $ ? $.completion : {};
              return (
                (I.type = R),
                (I.arg = T),
                $
                  ? ((this.method = "next"), (this.next = $.finallyLoc), i)
                  : this.complete(I)
              );
            },
            complete: function (R, T) {
              if (R.type === "throw") throw R.arg;
              return (
                R.type === "break" || R.type === "continue"
                  ? (this.next = R.arg)
                  : R.type === "return"
                  ? ((this.rval = this.arg = R.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : R.type === "normal" && T && (this.next = T),
                i
              );
            },
            finish: function (R) {
              for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                var k = this.tryEntries[T];
                if (k.finallyLoc === R)
                  return this.complete(k.completion, k.afterLoc), F(k), i;
              }
            },
            catch: function (R) {
              for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                var k = this.tryEntries[T];
                if (k.tryLoc === R) {
                  var M = k.completion;
                  if (M.type === "throw") {
                    var $ = M.arg;
                    F(k);
                  }
                  return $;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (R, T, k) {
              return (
                (this.delegate = { iterator: Q(R), resultName: T, nextLoc: k }),
                this.method === "next" && (this.arg = void 0),
                i
              );
            },
          }),
          j
        );
      }
      function p(j, m) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = (0, P.default)(
            _().mark(function j(m, y) {
              return _().wrap(function (f) {
                for (;;)
                  switch ((f.prev = f.next)) {
                    case 0:
                      return f.abrupt("return", (0, w._nullishCoalesce)(m, y));
                    case 1:
                    case "end":
                      return f.stop();
                  }
              }, j);
            })
          )),
          h.apply(this, arguments)
        );
      }
    },
    702250: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._asyncOptionalChain = _);
      var E = g(r(569644)),
        P = g(r(385870));
      function w() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ w =
          function () {
            return h;
          };
        var h = {},
          j = Object.prototype,
          m = j.hasOwnProperty,
          y =
            Object.defineProperty ||
            function (V, N, R) {
              V[N] = R.value;
            },
          b = typeof Symbol == "function" ? Symbol : {},
          f = b.iterator || "@@iterator",
          v = b.asyncIterator || "@@asyncIterator",
          d = b.toStringTag || "@@toStringTag";
        function s(V, N, R) {
          return (
            Object.defineProperty(V, N, {
              value: R,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            V[N]
          );
        }
        try {
          s({}, "");
        } catch (V) {
          s = function (R, T, k) {
            return (R[T] = k);
          };
        }
        function u(V, N, R, T) {
          var k = N && N.prototype instanceof i ? N : i,
            M = Object.create(k.prototype),
            $ = new F(T || []);
          return y(M, "_invoke", { value: L(V, R, $) }), M;
        }
        function O(V, N, R) {
          try {
            return { type: "normal", arg: V.call(N, R) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        h.wrap = u;
        var o = {};
        function i() {}
        function l() {}
        function t() {}
        var n = {};
        s(n, f, function () {
          return this;
        });
        var a = Object.getPrototypeOf,
          c = a && a(a(z([])));
        c && c !== j && m.call(c, f) && (n = c);
        var A = (t.prototype = i.prototype = Object.create(n));
        function C(V) {
          ["next", "throw", "return"].forEach(function (N) {
            s(V, N, function (R) {
              return this._invoke(N, R);
            });
          });
        }
        function U(V, N) {
          function R(k, M, $, I) {
            var H = O(V[k], V, M);
            if (H.type !== "throw") {
              var Z = H.arg,
                oe = Z.value;
              return oe &&
                (0, E.default)(oe) == "object" &&
                m.call(oe, "__await")
                ? N.resolve(oe.__await).then(
                    function (te) {
                      R("next", te, $, I);
                    },
                    function (te) {
                      R("throw", te, $, I);
                    }
                  )
                : N.resolve(oe).then(
                    function (te) {
                      (Z.value = te), $(Z);
                    },
                    function (te) {
                      return R("throw", te, $, I);
                    }
                  );
            }
            I(H.arg);
          }
          var T;
          y(this, "_invoke", {
            value: function (M, $) {
              function I() {
                return new N(function (H, Z) {
                  R(M, $, H, Z);
                });
              }
              return (T = T ? T.then(I, I) : I());
            },
          });
        }
        function L(V, N, R) {
          var T = "suspendedStart";
          return function (k, M) {
            if (T === "executing")
              throw new Error("Generator is already running");
            if (T === "completed") {
              if (k === "throw") throw M;
              return Q();
            }
            for (R.method = k, R.arg = M; ; ) {
              var $ = R.delegate;
              if ($) {
                var I = S($, R);
                if (I) {
                  if (I === o) continue;
                  return I;
                }
              }
              if (R.method === "next") R.sent = R._sent = R.arg;
              else if (R.method === "throw") {
                if (T === "suspendedStart") throw ((T = "completed"), R.arg);
                R.dispatchException(R.arg);
              } else R.method === "return" && R.abrupt("return", R.arg);
              T = "executing";
              var H = O(V, N, R);
              if (H.type === "normal") {
                if (
                  ((T = R.done ? "completed" : "suspendedYield"), H.arg === o)
                )
                  continue;
                return { value: H.arg, done: R.done };
              }
              H.type === "throw" &&
                ((T = "completed"), (R.method = "throw"), (R.arg = H.arg));
            }
          };
        }
        function S(V, N) {
          var R = N.method,
            T = V.iterator[R];
          if (T === void 0)
            return (
              (N.delegate = null),
              (R === "throw" &&
                V.iterator.return &&
                ((N.method = "return"),
                (N.arg = void 0),
                S(V, N),
                N.method === "throw")) ||
                (R !== "return" &&
                  ((N.method = "throw"),
                  (N.arg = new TypeError(
                    "The iterator does not provide a '" + R + "' method"
                  )))),
              o
            );
          var k = O(T, V.iterator, N.arg);
          if (k.type === "throw")
            return (
              (N.method = "throw"), (N.arg = k.arg), (N.delegate = null), o
            );
          var M = k.arg;
          return M
            ? M.done
              ? ((N[V.resultName] = M.value),
                (N.next = V.nextLoc),
                N.method !== "return" &&
                  ((N.method = "next"), (N.arg = void 0)),
                (N.delegate = null),
                o)
              : M
            : ((N.method = "throw"),
              (N.arg = new TypeError("iterator result is not an object")),
              (N.delegate = null),
              o);
        }
        function B(V) {
          var N = { tryLoc: V[0] };
          1 in V && (N.catchLoc = V[1]),
            2 in V && ((N.finallyLoc = V[2]), (N.afterLoc = V[3])),
            this.tryEntries.push(N);
        }
        function Y(V) {
          var N = V.completion || {};
          (N.type = "normal"), delete N.arg, (V.completion = N);
        }
        function F(V) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            V.forEach(B, this),
            this.reset(!0);
        }
        function z(V) {
          if (V) {
            var N = V[f];
            if (N) return N.call(V);
            if (typeof V.next == "function") return V;
            if (!isNaN(V.length)) {
              var R = -1,
                T = function k() {
                  for (; ++R < V.length; )
                    if (m.call(V, R)) return (k.value = V[R]), (k.done = !1), k;
                  return (k.value = void 0), (k.done = !0), k;
                };
              return (T.next = T);
            }
          }
          return { next: Q };
        }
        function Q() {
          return { value: void 0, done: !0 };
        }
        return (
          (l.prototype = t),
          y(A, "constructor", { value: t, configurable: !0 }),
          y(t, "constructor", { value: l, configurable: !0 }),
          (l.displayName = s(t, d, "GeneratorFunction")),
          (h.isGeneratorFunction = function (V) {
            var N = typeof V == "function" && V.constructor;
            return (
              !!N &&
              (N === l || (N.displayName || N.name) === "GeneratorFunction")
            );
          }),
          (h.mark = function (V) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(V, t)
                : ((V.__proto__ = t), s(V, d, "GeneratorFunction")),
              (V.prototype = Object.create(A)),
              V
            );
          }),
          (h.awrap = function (V) {
            return { __await: V };
          }),
          C(U.prototype),
          s(U.prototype, v, function () {
            return this;
          }),
          (h.AsyncIterator = U),
          (h.async = function (V, N, R, T, k) {
            k === void 0 && (k = Promise);
            var M = new U(u(V, N, R, T), k);
            return h.isGeneratorFunction(N)
              ? M
              : M.next().then(function ($) {
                  return $.done ? $.value : M.next();
                });
          }),
          C(A),
          s(A, d, "Generator"),
          s(A, f, function () {
            return this;
          }),
          s(A, "toString", function () {
            return "[object Generator]";
          }),
          (h.keys = function (V) {
            var N = Object(V),
              R = [];
            for (var T in N) R.push(T);
            return (
              R.reverse(),
              function k() {
                for (; R.length; ) {
                  var M = R.pop();
                  if (M in N) return (k.value = M), (k.done = !1), k;
                }
                return (k.done = !0), k;
              }
            );
          }),
          (h.values = z),
          (F.prototype = {
            constructor: F,
            reset: function (N) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(Y),
                !N)
              )
                for (var R in this)
                  R.charAt(0) === "t" &&
                    m.call(this, R) &&
                    !isNaN(+R.slice(1)) &&
                    (this[R] = void 0);
            },
            stop: function () {
              this.done = !0;
              var N = this.tryEntries[0].completion;
              if (N.type === "throw") throw N.arg;
              return this.rval;
            },
            dispatchException: function (N) {
              if (this.done) throw N;
              var R = this;
              function T(Z, oe) {
                return (
                  ($.type = "throw"),
                  ($.arg = N),
                  (R.next = Z),
                  oe && ((R.method = "next"), (R.arg = void 0)),
                  !!oe
                );
              }
              for (var k = this.tryEntries.length - 1; k >= 0; --k) {
                var M = this.tryEntries[k],
                  $ = M.completion;
                if (M.tryLoc === "root") return T("end");
                if (M.tryLoc <= this.prev) {
                  var I = m.call(M, "catchLoc"),
                    H = m.call(M, "finallyLoc");
                  if (I && H) {
                    if (this.prev < M.catchLoc) return T(M.catchLoc, !0);
                    if (this.prev < M.finallyLoc) return T(M.finallyLoc);
                  } else if (I) {
                    if (this.prev < M.catchLoc) return T(M.catchLoc, !0);
                  } else {
                    if (!H)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < M.finallyLoc) return T(M.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (N, R) {
              for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                var k = this.tryEntries[T];
                if (
                  k.tryLoc <= this.prev &&
                  m.call(k, "finallyLoc") &&
                  this.prev < k.finallyLoc
                ) {
                  var M = k;
                  break;
                }
              }
              M &&
                (N === "break" || N === "continue") &&
                M.tryLoc <= R &&
                R <= M.finallyLoc &&
                (M = null);
              var $ = M ? M.completion : {};
              return (
                ($.type = N),
                ($.arg = R),
                M
                  ? ((this.method = "next"), (this.next = M.finallyLoc), o)
                  : this.complete($)
              );
            },
            complete: function (N, R) {
              if (N.type === "throw") throw N.arg;
              return (
                N.type === "break" || N.type === "continue"
                  ? (this.next = N.arg)
                  : N.type === "return"
                  ? ((this.rval = this.arg = N.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : N.type === "normal" && R && (this.next = R),
                o
              );
            },
            finish: function (N) {
              for (var R = this.tryEntries.length - 1; R >= 0; --R) {
                var T = this.tryEntries[R];
                if (T.finallyLoc === N)
                  return this.complete(T.completion, T.afterLoc), Y(T), o;
              }
            },
            catch: function (N) {
              for (var R = this.tryEntries.length - 1; R >= 0; --R) {
                var T = this.tryEntries[R];
                if (T.tryLoc === N) {
                  var k = T.completion;
                  if (k.type === "throw") {
                    var M = k.arg;
                    Y(T);
                  }
                  return M;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (N, R, T) {
              return (
                (this.delegate = { iterator: z(N), resultName: R, nextLoc: T }),
                this.method === "next" && (this.arg = void 0),
                o
              );
            },
          }),
          h
        );
      }
      function _(h) {
        return p.apply(this, arguments);
      }
      function p() {
        return (
          (p = (0, P.default)(
            w().mark(function h(j) {
              var m, y, b, f, v;
              return w().wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      (m = void 0), (y = j[0]), (b = 1);
                    case 3:
                      if (!(b < j.length)) {
                        s.next = 23;
                        break;
                      }
                      if (
                        ((f = j[b]),
                        (v = j[b + 1]),
                        (b += 2),
                        !(
                          (f === "optionalAccess" || f === "optionalCall") &&
                          y == null
                        ))
                      ) {
                        s.next = 9;
                        break;
                      }
                      return s.abrupt("return");
                    case 9:
                      if (!(f === "access" || f === "optionalAccess")) {
                        s.next = 16;
                        break;
                      }
                      return (m = y), (s.next = 13), v(y);
                    case 13:
                      (y = s.sent), (s.next = 21);
                      break;
                    case 16:
                      if (!(f === "call" || f === "optionalCall")) {
                        s.next = 21;
                        break;
                      }
                      return (
                        (s.next = 19),
                        v(function () {
                          for (
                            var u,
                              O = arguments.length,
                              o = new Array(O),
                              i = 0;
                            i < O;
                            i++
                          )
                            o[i] = arguments[i];
                          return (u = y).call.apply(u, [m].concat(o));
                        })
                      );
                    case 19:
                      (y = s.sent), (m = void 0);
                    case 21:
                      s.next = 3;
                      break;
                    case 23:
                      return s.abrupt("return", y);
                    case 24:
                    case "end":
                      return s.stop();
                  }
              }, h);
            })
          )),
          p.apply(this, arguments)
        );
      }
    },
    964992: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._asyncOptionalChainDelete = p);
      var E = g(r(569644)),
        P = g(r(385870)),
        w = r(702250);
      function _() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _ =
          function () {
            return j;
          };
        var j = {},
          m = Object.prototype,
          y = m.hasOwnProperty,
          b =
            Object.defineProperty ||
            function (N, R, T) {
              N[R] = T.value;
            },
          f = typeof Symbol == "function" ? Symbol : {},
          v = f.iterator || "@@iterator",
          d = f.asyncIterator || "@@asyncIterator",
          s = f.toStringTag || "@@toStringTag";
        function u(N, R, T) {
          return (
            Object.defineProperty(N, R, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            N[R]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (T, k, M) {
            return (T[k] = M);
          };
        }
        function O(N, R, T, k) {
          var M = R && R.prototype instanceof l ? R : l,
            $ = Object.create(M.prototype),
            I = new z(k || []);
          return b($, "_invoke", { value: S(N, T, I) }), $;
        }
        function o(N, R, T) {
          try {
            return { type: "normal", arg: N.call(R, T) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        j.wrap = O;
        var i = {};
        function l() {}
        function t() {}
        function n() {}
        var a = {};
        u(a, v, function () {
          return this;
        });
        var c = Object.getPrototypeOf,
          A = c && c(c(Q([])));
        A && A !== m && y.call(A, v) && (a = A);
        var C = (n.prototype = l.prototype = Object.create(a));
        function U(N) {
          ["next", "throw", "return"].forEach(function (R) {
            u(N, R, function (T) {
              return this._invoke(R, T);
            });
          });
        }
        function L(N, R) {
          function T(M, $, I, H) {
            var Z = o(N[M], N, $);
            if (Z.type !== "throw") {
              var oe = Z.arg,
                te = oe.value;
              return te &&
                (0, E.default)(te) == "object" &&
                y.call(te, "__await")
                ? R.resolve(te.__await).then(
                    function (J) {
                      T("next", J, I, H);
                    },
                    function (J) {
                      T("throw", J, I, H);
                    }
                  )
                : R.resolve(te).then(
                    function (J) {
                      (oe.value = J), I(oe);
                    },
                    function (J) {
                      return T("throw", J, I, H);
                    }
                  );
            }
            H(Z.arg);
          }
          var k;
          b(this, "_invoke", {
            value: function ($, I) {
              function H() {
                return new R(function (Z, oe) {
                  T($, I, Z, oe);
                });
              }
              return (k = k ? k.then(H, H) : H());
            },
          });
        }
        function S(N, R, T) {
          var k = "suspendedStart";
          return function (M, $) {
            if (k === "executing")
              throw new Error("Generator is already running");
            if (k === "completed") {
              if (M === "throw") throw $;
              return V();
            }
            for (T.method = M, T.arg = $; ; ) {
              var I = T.delegate;
              if (I) {
                var H = B(I, T);
                if (H) {
                  if (H === i) continue;
                  return H;
                }
              }
              if (T.method === "next") T.sent = T._sent = T.arg;
              else if (T.method === "throw") {
                if (k === "suspendedStart") throw ((k = "completed"), T.arg);
                T.dispatchException(T.arg);
              } else T.method === "return" && T.abrupt("return", T.arg);
              k = "executing";
              var Z = o(N, R, T);
              if (Z.type === "normal") {
                if (
                  ((k = T.done ? "completed" : "suspendedYield"), Z.arg === i)
                )
                  continue;
                return { value: Z.arg, done: T.done };
              }
              Z.type === "throw" &&
                ((k = "completed"), (T.method = "throw"), (T.arg = Z.arg));
            }
          };
        }
        function B(N, R) {
          var T = R.method,
            k = N.iterator[T];
          if (k === void 0)
            return (
              (R.delegate = null),
              (T === "throw" &&
                N.iterator.return &&
                ((R.method = "return"),
                (R.arg = void 0),
                B(N, R),
                R.method === "throw")) ||
                (T !== "return" &&
                  ((R.method = "throw"),
                  (R.arg = new TypeError(
                    "The iterator does not provide a '" + T + "' method"
                  )))),
              i
            );
          var M = o(k, N.iterator, R.arg);
          if (M.type === "throw")
            return (
              (R.method = "throw"), (R.arg = M.arg), (R.delegate = null), i
            );
          var $ = M.arg;
          return $
            ? $.done
              ? ((R[N.resultName] = $.value),
                (R.next = N.nextLoc),
                R.method !== "return" &&
                  ((R.method = "next"), (R.arg = void 0)),
                (R.delegate = null),
                i)
              : $
            : ((R.method = "throw"),
              (R.arg = new TypeError("iterator result is not an object")),
              (R.delegate = null),
              i);
        }
        function Y(N) {
          var R = { tryLoc: N[0] };
          1 in N && (R.catchLoc = N[1]),
            2 in N && ((R.finallyLoc = N[2]), (R.afterLoc = N[3])),
            this.tryEntries.push(R);
        }
        function F(N) {
          var R = N.completion || {};
          (R.type = "normal"), delete R.arg, (N.completion = R);
        }
        function z(N) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            N.forEach(Y, this),
            this.reset(!0);
        }
        function Q(N) {
          if (N) {
            var R = N[v];
            if (R) return R.call(N);
            if (typeof N.next == "function") return N;
            if (!isNaN(N.length)) {
              var T = -1,
                k = function M() {
                  for (; ++T < N.length; )
                    if (y.call(N, T)) return (M.value = N[T]), (M.done = !1), M;
                  return (M.value = void 0), (M.done = !0), M;
                };
              return (k.next = k);
            }
          }
          return { next: V };
        }
        function V() {
          return { value: void 0, done: !0 };
        }
        return (
          (t.prototype = n),
          b(C, "constructor", { value: n, configurable: !0 }),
          b(n, "constructor", { value: t, configurable: !0 }),
          (t.displayName = u(n, s, "GeneratorFunction")),
          (j.isGeneratorFunction = function (N) {
            var R = typeof N == "function" && N.constructor;
            return (
              !!R &&
              (R === t || (R.displayName || R.name) === "GeneratorFunction")
            );
          }),
          (j.mark = function (N) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(N, n)
                : ((N.__proto__ = n), u(N, s, "GeneratorFunction")),
              (N.prototype = Object.create(C)),
              N
            );
          }),
          (j.awrap = function (N) {
            return { __await: N };
          }),
          U(L.prototype),
          u(L.prototype, d, function () {
            return this;
          }),
          (j.AsyncIterator = L),
          (j.async = function (N, R, T, k, M) {
            M === void 0 && (M = Promise);
            var $ = new L(O(N, R, T, k), M);
            return j.isGeneratorFunction(R)
              ? $
              : $.next().then(function (I) {
                  return I.done ? I.value : $.next();
                });
          }),
          U(C),
          u(C, s, "Generator"),
          u(C, v, function () {
            return this;
          }),
          u(C, "toString", function () {
            return "[object Generator]";
          }),
          (j.keys = function (N) {
            var R = Object(N),
              T = [];
            for (var k in R) T.push(k);
            return (
              T.reverse(),
              function M() {
                for (; T.length; ) {
                  var $ = T.pop();
                  if ($ in R) return (M.value = $), (M.done = !1), M;
                }
                return (M.done = !0), M;
              }
            );
          }),
          (j.values = Q),
          (z.prototype = {
            constructor: z,
            reset: function (R) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(F),
                !R)
              )
                for (var T in this)
                  T.charAt(0) === "t" &&
                    y.call(this, T) &&
                    !isNaN(+T.slice(1)) &&
                    (this[T] = void 0);
            },
            stop: function () {
              this.done = !0;
              var R = this.tryEntries[0].completion;
              if (R.type === "throw") throw R.arg;
              return this.rval;
            },
            dispatchException: function (R) {
              if (this.done) throw R;
              var T = this;
              function k(oe, te) {
                return (
                  (I.type = "throw"),
                  (I.arg = R),
                  (T.next = oe),
                  te && ((T.method = "next"), (T.arg = void 0)),
                  !!te
                );
              }
              for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                var $ = this.tryEntries[M],
                  I = $.completion;
                if ($.tryLoc === "root") return k("end");
                if ($.tryLoc <= this.prev) {
                  var H = y.call($, "catchLoc"),
                    Z = y.call($, "finallyLoc");
                  if (H && Z) {
                    if (this.prev < $.catchLoc) return k($.catchLoc, !0);
                    if (this.prev < $.finallyLoc) return k($.finallyLoc);
                  } else if (H) {
                    if (this.prev < $.catchLoc) return k($.catchLoc, !0);
                  } else {
                    if (!Z)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < $.finallyLoc) return k($.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (R, T) {
              for (var k = this.tryEntries.length - 1; k >= 0; --k) {
                var M = this.tryEntries[k];
                if (
                  M.tryLoc <= this.prev &&
                  y.call(M, "finallyLoc") &&
                  this.prev < M.finallyLoc
                ) {
                  var $ = M;
                  break;
                }
              }
              $ &&
                (R === "break" || R === "continue") &&
                $.tryLoc <= T &&
                T <= $.finallyLoc &&
                ($ = null);
              var I = $ ? $.completion : {};
              return (
                (I.type = R),
                (I.arg = T),
                $
                  ? ((this.method = "next"), (this.next = $.finallyLoc), i)
                  : this.complete(I)
              );
            },
            complete: function (R, T) {
              if (R.type === "throw") throw R.arg;
              return (
                R.type === "break" || R.type === "continue"
                  ? (this.next = R.arg)
                  : R.type === "return"
                  ? ((this.rval = this.arg = R.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : R.type === "normal" && T && (this.next = T),
                i
              );
            },
            finish: function (R) {
              for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                var k = this.tryEntries[T];
                if (k.finallyLoc === R)
                  return this.complete(k.completion, k.afterLoc), F(k), i;
              }
            },
            catch: function (R) {
              for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                var k = this.tryEntries[T];
                if (k.tryLoc === R) {
                  var M = k.completion;
                  if (M.type === "throw") {
                    var $ = M.arg;
                    F(k);
                  }
                  return $;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (R, T, k) {
              return (
                (this.delegate = { iterator: Q(R), resultName: T, nextLoc: k }),
                this.method === "next" && (this.arg = void 0),
                i
              );
            },
          }),
          j
        );
      }
      function p(j) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = (0, P.default)(
            _().mark(function j(m) {
              var y;
              return _().wrap(function (f) {
                for (;;)
                  switch ((f.prev = f.next)) {
                    case 0:
                      return (f.next = 2), (0, w._asyncOptionalChain)(m);
                    case 2:
                      return (
                        (y = f.sent), f.abrupt("return", y == null ? !0 : y)
                      );
                    case 4:
                    case "end":
                      return f.stop();
                  }
              }, j);
            })
          )),
          h.apply(this, arguments)
        );
      }
    },
    896678: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._createNamedExportFrom = r);
      function r(g, E, P) {
        e[E] = g[P];
      }
    },
    411183: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._createStarExport = r);
      function r(g) {
        Object.keys(g)
          .filter(function (E) {
            return E !== "default" && E !== "__esModule" && !(E in e);
          })
          .forEach(function (E) {
            return (e[E] = g[E]);
          });
      }
    },
    51268: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._interopDefault = r);
      function r(g) {
        return g.__esModule ? g.default : g;
      }
    },
    329584: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._interopNamespace = _);
      var E = g(r(346797));
      function P(p, h) {
        var j = Object.keys(p);
        if (Object.getOwnPropertySymbols) {
          var m = Object.getOwnPropertySymbols(p);
          h &&
            (m = m.filter(function (y) {
              return Object.getOwnPropertyDescriptor(p, y).enumerable;
            })),
            j.push.apply(j, m);
        }
        return j;
      }
      function w(p) {
        for (var h = 1; h < arguments.length; h++) {
          var j = arguments[h] != null ? arguments[h] : {};
          h % 2
            ? P(Object(j), !0).forEach(function (m) {
                (0, E.default)(p, m, j[m]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(j))
            : P(Object(j)).forEach(function (m) {
                Object.defineProperty(
                  p,
                  m,
                  Object.getOwnPropertyDescriptor(j, m)
                );
              });
        }
        return p;
      }
      function _(p) {
        return p.__esModule ? p : w(w({}, p), {}, { default: p });
      }
    },
    472897: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._interopNamespaceDefaultOnly = r);
      function r(g) {
        return { __proto__: null, default: g };
      }
    },
    180128: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._interopRequireDefault = r);
      function r(g) {
        return g.__esModule ? g : { default: g };
      }
    },
    116344: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._interopRequireWildcard = _);
      var E = g(r(346797));
      function P(p, h) {
        var j = Object.keys(p);
        if (Object.getOwnPropertySymbols) {
          var m = Object.getOwnPropertySymbols(p);
          h &&
            (m = m.filter(function (y) {
              return Object.getOwnPropertyDescriptor(p, y).enumerable;
            })),
            j.push.apply(j, m);
        }
        return j;
      }
      function w(p) {
        for (var h = 1; h < arguments.length; h++) {
          var j = arguments[h] != null ? arguments[h] : {};
          h % 2
            ? P(Object(j), !0).forEach(function (m) {
                (0, E.default)(p, m, j[m]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(j))
            : P(Object(j)).forEach(function (m) {
                Object.defineProperty(
                  p,
                  m,
                  Object.getOwnPropertyDescriptor(j, m)
                );
              });
        }
        return p;
      }
      function _(p) {
        return p.__esModule ? p : w(w({}, p), {}, { default: p });
      }
    },
    371875: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._nullishCoalesce = r);
      function r(g, E) {
        return g != null ? g : E();
      }
    },
    703732: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._optionalChain = r);
      function r(g) {
        for (var E = void 0, P = g[0], w = 1; w < g.length; ) {
          var _ = g[w],
            p = g[w + 1];
          if (
            ((w += 2),
            (_ === "optionalAccess" || _ === "optionalCall") && P == null)
          )
            return;
          _ === "access" || _ === "optionalAccess"
            ? ((E = P), (P = p(P)))
            : (_ === "call" || _ === "optionalCall") &&
              ((P = p(function () {
                for (
                  var h, j = arguments.length, m = new Array(j), y = 0;
                  y < j;
                  y++
                )
                  m[y] = arguments[y];
                return (h = P).call.apply(h, [E].concat(m));
              })),
              (E = void 0));
        }
        return P;
      }
    },
    953049: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._optionalChainDelete = E);
      var g = r(703732);
      function E(P) {
        var w = (0, g._optionalChain)(P);
        return w == null ? !0 : w;
      }
    },
    423241: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "_asyncNullishCoalesce", {
          enumerable: !0,
          get: function () {
            return g._asyncNullishCoalesce;
          },
        }),
        Object.defineProperty(e, "_asyncOptionalChain", {
          enumerable: !0,
          get: function () {
            return E._asyncOptionalChain;
          },
        }),
        Object.defineProperty(e, "_asyncOptionalChainDelete", {
          enumerable: !0,
          get: function () {
            return P._asyncOptionalChainDelete;
          },
        }),
        Object.defineProperty(e, "_createNamedExportFrom", {
          enumerable: !0,
          get: function () {
            return w._createNamedExportFrom;
          },
        }),
        Object.defineProperty(e, "_createStarExport", {
          enumerable: !0,
          get: function () {
            return _._createStarExport;
          },
        }),
        Object.defineProperty(e, "_interopDefault", {
          enumerable: !0,
          get: function () {
            return p._interopDefault;
          },
        }),
        Object.defineProperty(e, "_interopNamespace", {
          enumerable: !0,
          get: function () {
            return h._interopNamespace;
          },
        }),
        Object.defineProperty(e, "_interopNamespaceDefaultOnly", {
          enumerable: !0,
          get: function () {
            return j._interopNamespaceDefaultOnly;
          },
        }),
        Object.defineProperty(e, "_interopRequireDefault", {
          enumerable: !0,
          get: function () {
            return m._interopRequireDefault;
          },
        }),
        Object.defineProperty(e, "_interopRequireWildcard", {
          enumerable: !0,
          get: function () {
            return y._interopRequireWildcard;
          },
        }),
        Object.defineProperty(e, "_nullishCoalesce", {
          enumerable: !0,
          get: function () {
            return b._nullishCoalesce;
          },
        }),
        Object.defineProperty(e, "_optionalChain", {
          enumerable: !0,
          get: function () {
            return f._optionalChain;
          },
        }),
        Object.defineProperty(e, "_optionalChainDelete", {
          enumerable: !0,
          get: function () {
            return v._optionalChainDelete;
          },
        });
      var g = r(601154),
        E = r(702250),
        P = r(964992),
        w = r(896678),
        _ = r(411183),
        p = r(51268),
        h = r(329584),
        j = r(472897),
        m = r(180128),
        y = r(116344),
        b = r(371875),
        f = r(703732),
        v = r(953049);
    },
    487488: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createClientReportEnvelope = P);
      var g = r(38510),
        E = r(95143);
      function P(w, _, p) {
        var h = [
          { type: "client_report" },
          {
            timestamp: p || (0, E.dateTimestampInSeconds)(),
            discarded_events: w,
          },
        ];
        return (0, g.createEnvelope)(_ ? { dsn: _ } : {}, [h]);
      }
    },
    594973: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.dsnFromString = h),
        (e.dsnToString = p),
        (e.makeDsn = y);
      var E = g(r(375798)),
        P = r(672183),
        w = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function _(b) {
        return b === "http" || b === "https";
      }
      function p(b) {
        var f =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          v = b.host,
          d = b.path,
          s = b.pass,
          u = b.port,
          O = b.projectId,
          o = b.protocol,
          i = b.publicKey;
        return (
          ""
            .concat(o, "://")
            .concat(i)
            .concat(f && s ? ":".concat(s) : "") +
          "@"
            .concat(v)
            .concat(u ? ":".concat(u) : "", "/")
            .concat(d && "".concat(d, "/"))
            .concat(O)
        );
      }
      function h(b) {
        var f = w.exec(b);
        if (!f) throw new P.SentryError("Invalid Sentry Dsn: ".concat(b));
        var v = f.slice(1),
          d = (0, E.default)(v, 6),
          s = d[0],
          u = d[1],
          O = d[2],
          o = O === void 0 ? "" : O,
          i = d[3],
          l = d[4],
          t = l === void 0 ? "" : l,
          n = d[5],
          a = "",
          c = n,
          A = c.split("/");
        if (
          (A.length > 1 && ((a = A.slice(0, -1).join("/")), (c = A.pop())), c)
        ) {
          var C = c.match(/^\d+/);
          C && (c = C[0]);
        }
        return j({
          host: i,
          pass: o,
          path: a,
          projectId: c,
          port: t,
          protocol: s,
          publicKey: u,
        });
      }
      function j(b) {
        return {
          protocol: b.protocol,
          publicKey: b.publicKey || "",
          pass: b.pass || "",
          host: b.host,
          port: b.port || "",
          path: b.path || "",
          projectId: b.projectId,
        };
      }
      function m(b) {
        if (!!(typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__)) {
          var f = b.port,
            v = b.projectId,
            d = b.protocol,
            s = ["protocol", "publicKey", "host", "projectId"];
          if (
            (s.forEach(function (u) {
              if (!b[u])
                throw new P.SentryError(
                  "Invalid Sentry Dsn: ".concat(u, " missing")
                );
            }),
            !v.match(/^\d+$/))
          )
            throw new P.SentryError(
              "Invalid Sentry Dsn: Invalid projectId ".concat(v)
            );
          if (!_(d))
            throw new P.SentryError(
              "Invalid Sentry Dsn: Invalid protocol ".concat(d)
            );
          if (f && isNaN(parseInt(f, 10)))
            throw new P.SentryError(
              "Invalid Sentry Dsn: Invalid port ".concat(f)
            );
          return !0;
        }
      }
      function y(b) {
        var f = typeof b == "string" ? h(b) : j(b);
        return m(f), f;
      }
    },
    678903: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowserBundle = r);
      function r() {
        return (
          typeof __SENTRY_BROWSER_BUNDLE__ != "undefined" &&
          !!__SENTRY_BROWSER_BUNDLE__
        );
      }
    },
    38510: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addItemToEnvelope = y),
        (e.createAttachmentEnvelopeItem = s),
        (e.createEnvelope = m),
        (e.envelopeItemTypeToDataCategory = O),
        (e.forEachEnvelopeItem = b),
        (e.serializeEnvelope = v);
      var E = g(r(603912)),
        P = g(r(375798)),
        w = r(126002),
        _ = r(897677);
      function p(o, i) {
        var l =
          (typeof Symbol != "undefined" && o[Symbol.iterator]) ||
          o["@@iterator"];
        if (!l) {
          if (
            Array.isArray(o) ||
            (l = h(o)) ||
            (i && o && typeof o.length == "number")
          ) {
            l && (o = l);
            var t = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return t >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[t++] };
              },
              e: function (U) {
                throw U;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a = !0,
          c = !1,
          A;
        return {
          s: function () {
            l = l.call(o);
          },
          n: function () {
            var U = l.next();
            return (a = U.done), U;
          },
          e: function (U) {
            (c = !0), (A = U);
          },
          f: function () {
            try {
              !a && l.return != null && l.return();
            } finally {
              if (c) throw A;
            }
          },
        };
      }
      function h(o, i) {
        if (!!o) {
          if (typeof o == "string") return j(o, i);
          var l = Object.prototype.toString.call(o).slice(8, -1);
          if (
            (l === "Object" && o.constructor && (l = o.constructor.name),
            l === "Map" || l === "Set")
          )
            return Array.from(o);
          if (
            l === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return j(o, i);
        }
      }
      function j(o, i) {
        (i == null || i > o.length) && (i = o.length);
        for (var l = 0, t = new Array(i); l < i; l++) t[l] = o[l];
        return t;
      }
      function m(o) {
        var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return [o, i];
      }
      function y(o, i) {
        var l = (0, P.default)(o, 2),
          t = l[0],
          n = l[1];
        return [t, [].concat((0, E.default)(n), [i])];
      }
      function b(o, i) {
        var l = o[1];
        l.forEach(function (t) {
          var n = t[0].type;
          i(t, n);
        });
      }
      function f(o, i) {
        var l = i || new TextEncoder();
        return l.encode(o);
      }
      function v(o, i) {
        var l = (0, P.default)(o, 2),
          t = l[0],
          n = l[1],
          a = JSON.stringify(t);
        function c(F) {
          typeof a == "string"
            ? (a = typeof F == "string" ? a + F : [f(a, i), F])
            : a.push(typeof F == "string" ? f(F, i) : F);
        }
        var A = p(n),
          C;
        try {
          for (A.s(); !(C = A.n()).done; ) {
            var U = C.value,
              L = (0, P.default)(U, 2),
              S = L[0],
              B = L[1];
            if (
              (c("\n".concat(JSON.stringify(S), "\n")),
              typeof B == "string" || B instanceof Uint8Array)
            )
              c(B);
            else {
              var Y = void 0;
              try {
                Y = JSON.stringify(B);
              } catch (F) {
                Y = JSON.stringify((0, w.normalize)(B));
              }
              c(Y);
            }
          }
        } catch (F) {
          A.e(F);
        } finally {
          A.f();
        }
        return typeof a == "string" ? a : d(a);
      }
      function d(o) {
        var i = o.reduce(function (A, C) {
            return A + C.length;
          }, 0),
          l = new Uint8Array(i),
          t = 0,
          n = p(o),
          a;
        try {
          for (n.s(); !(a = n.n()).done; ) {
            var c = a.value;
            l.set(c, t), (t += c.length);
          }
        } catch (A) {
          n.e(A);
        } finally {
          n.f();
        }
        return l;
      }
      function s(o, i) {
        var l = typeof o.data == "string" ? f(o.data, i) : o.data;
        return [
          (0, _.dropUndefinedKeys)({
            type: "attachment",
            length: l.length,
            filename: o.filename,
            content_type: o.contentType,
            attachment_type: o.attachmentType,
          }),
          l,
        ];
      }
      var u = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
      };
      function O(o) {
        return u[o];
      }
    },
    672183: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SentryError = void 0);
      var E = g(r(4636)),
        P = g(r(858240)),
        w = g(r(177928)),
        _ = g(r(721854)),
        p = g(r(699467)),
        h = g(r(506051)),
        j = g(r(852156));
      function m(f) {
        var v = y();
        return function () {
          var s = (0, h.default)(f),
            u;
          if (v) {
            var O = (0, h.default)(this).constructor;
            u = Reflect.construct(s, arguments, O);
          } else u = s.apply(this, arguments);
          return (0, p.default)(this, u);
        };
      }
      function y() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (f) {
          return !1;
        }
      }
      var b = (function (f) {
        (0, _.default)(d, f);
        var v = m(d);
        function d(s) {
          var u,
            O =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "warn";
          return (
            (0, P.default)(this, d),
            (u = v.call(this, s)),
            (u.message = s),
            (u.name = (
              this instanceof d ? this.constructor : void 0
            ).prototype.constructor.name),
            Object.setPrototypeOf(
              (0, w.default)(u),
              (this instanceof d ? this.constructor : void 0).prototype
            ),
            (u.logLevel = O),
            u
          );
        }
        return (0, E.default)(d);
      })((0, j.default)(Error));
      e.SentryError = b;
    },
    61659: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BAGGAGE_HEADER_NAME", {
          enumerable: !0,
          get: function () {
            return U.BAGGAGE_HEADER_NAME;
          },
        }),
        Object.defineProperty(e, "CONSOLE_LEVELS", {
          enumerable: !0,
          get: function () {
            return h.CONSOLE_LEVELS;
          },
        }),
        Object.defineProperty(e, "DEFAULT_RETRY_AFTER", {
          enumerable: !0,
          get: function () {
            return C.DEFAULT_RETRY_AFTER;
          },
        }),
        Object.defineProperty(e, "GLOBAL_OBJ", {
          enumerable: !0,
          get: function () {
            return w.GLOBAL_OBJ;
          },
        }),
        Object.defineProperty(e, "MAX_BAGGAGE_STRING_LENGTH", {
          enumerable: !0,
          get: function () {
            return U.MAX_BAGGAGE_STRING_LENGTH;
          },
        }),
        Object.defineProperty(e, "SENTRY_BAGGAGE_KEY_PREFIX", {
          enumerable: !0,
          get: function () {
            return U.SENTRY_BAGGAGE_KEY_PREFIX;
          },
        }),
        Object.defineProperty(e, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", {
          enumerable: !0,
          get: function () {
            return U.SENTRY_BAGGAGE_KEY_PREFIX_REGEX;
          },
        }),
        Object.defineProperty(e, "SentryError", {
          enumerable: !0,
          get: function () {
            return P.SentryError;
          },
        }),
        Object.defineProperty(e, "SyncPromise", {
          enumerable: !0,
          get: function () {
            return l.SyncPromise;
          },
        }),
        Object.defineProperty(e, "TRACEPARENT_REGEXP", {
          enumerable: !0,
          get: function () {
            return n.TRACEPARENT_REGEXP;
          },
        }),
        Object.defineProperty(e, "_browserPerformanceTimeOriginMode", {
          enumerable: !0,
          get: function () {
            return t._browserPerformanceTimeOriginMode;
          },
        }),
        Object.defineProperty(e, "addContextToFrame", {
          enumerable: !0,
          get: function () {
            return m.addContextToFrame;
          },
        }),
        Object.defineProperty(e, "addExceptionMechanism", {
          enumerable: !0,
          get: function () {
            return m.addExceptionMechanism;
          },
        }),
        Object.defineProperty(e, "addExceptionTypeValue", {
          enumerable: !0,
          get: function () {
            return m.addExceptionTypeValue;
          },
        }),
        Object.defineProperty(e, "addInstrumentationHandler", {
          enumerable: !0,
          get: function () {
            return _.addInstrumentationHandler;
          },
        }),
        Object.defineProperty(e, "addItemToEnvelope", {
          enumerable: !0,
          get: function () {
            return c.addItemToEnvelope;
          },
        }),
        Object.defineProperty(e, "addNonEnumerableProperty", {
          enumerable: !0,
          get: function () {
            return f.addNonEnumerableProperty;
          },
        }),
        Object.defineProperty(e, "addRequestDataToEvent", {
          enumerable: !0,
          get: function () {
            return s.addRequestDataToEvent;
          },
        }),
        Object.defineProperty(e, "addRequestDataToTransaction", {
          enumerable: !0,
          get: function () {
            return s.addRequestDataToTransaction;
          },
        }),
        Object.defineProperty(e, "arrayify", {
          enumerable: !0,
          get: function () {
            return m.arrayify;
          },
        }),
        Object.defineProperty(e, "baggageHeaderToDynamicSamplingContext", {
          enumerable: !0,
          get: function () {
            return U.baggageHeaderToDynamicSamplingContext;
          },
        }),
        Object.defineProperty(e, "basename", {
          enumerable: !0,
          get: function () {
            return v.basename;
          },
        }),
        Object.defineProperty(e, "browserPerformanceTimeOrigin", {
          enumerable: !0,
          get: function () {
            return t.browserPerformanceTimeOrigin;
          },
        }),
        Object.defineProperty(e, "checkOrSetAlreadyCaught", {
          enumerable: !0,
          get: function () {
            return m.checkOrSetAlreadyCaught;
          },
        }),
        Object.defineProperty(e, "consoleSandbox", {
          enumerable: !0,
          get: function () {
            return h.consoleSandbox;
          },
        }),
        Object.defineProperty(e, "convertToPlainObject", {
          enumerable: !0,
          get: function () {
            return f.convertToPlainObject;
          },
        }),
        Object.defineProperty(e, "createAttachmentEnvelopeItem", {
          enumerable: !0,
          get: function () {
            return c.createAttachmentEnvelopeItem;
          },
        }),
        Object.defineProperty(e, "createClientReportEnvelope", {
          enumerable: !0,
          get: function () {
            return A.createClientReportEnvelope;
          },
        }),
        Object.defineProperty(e, "createEnvelope", {
          enumerable: !0,
          get: function () {
            return c.createEnvelope;
          },
        }),
        Object.defineProperty(e, "createStackParser", {
          enumerable: !0,
          get: function () {
            return O.createStackParser;
          },
        }),
        Object.defineProperty(e, "dateTimestampInSeconds", {
          enumerable: !0,
          get: function () {
            return t.dateTimestampInSeconds;
          },
        }),
        Object.defineProperty(e, "dirname", {
          enumerable: !0,
          get: function () {
            return v.dirname;
          },
        }),
        Object.defineProperty(e, "disabledUntil", {
          enumerable: !0,
          get: function () {
            return C.disabledUntil;
          },
        }),
        Object.defineProperty(e, "dropUndefinedKeys", {
          enumerable: !0,
          get: function () {
            return f.dropUndefinedKeys;
          },
        }),
        Object.defineProperty(e, "dsnFromString", {
          enumerable: !0,
          get: function () {
            return E.dsnFromString;
          },
        }),
        Object.defineProperty(e, "dsnToString", {
          enumerable: !0,
          get: function () {
            return E.dsnToString;
          },
        }),
        Object.defineProperty(e, "dynamicRequire", {
          enumerable: !0,
          get: function () {
            return y.dynamicRequire;
          },
        }),
        Object.defineProperty(
          e,
          "dynamicSamplingContextToSentryBaggageHeader",
          {
            enumerable: !0,
            get: function () {
              return U.dynamicSamplingContextToSentryBaggageHeader;
            },
          }
        ),
        Object.defineProperty(e, "envelopeItemTypeToDataCategory", {
          enumerable: !0,
          get: function () {
            return c.envelopeItemTypeToDataCategory;
          },
        }),
        Object.defineProperty(e, "escapeStringForRegex", {
          enumerable: !0,
          get: function () {
            return o.escapeStringForRegex;
          },
        }),
        Object.defineProperty(e, "extractExceptionKeysForMessage", {
          enumerable: !0,
          get: function () {
            return f.extractExceptionKeysForMessage;
          },
        }),
        Object.defineProperty(e, "extractPathForTransaction", {
          enumerable: !0,
          get: function () {
            return s.extractPathForTransaction;
          },
        }),
        Object.defineProperty(e, "extractRequestData", {
          enumerable: !0,
          get: function () {
            return s.extractRequestData;
          },
        }),
        Object.defineProperty(e, "extractTraceparentData", {
          enumerable: !0,
          get: function () {
            return n.extractTraceparentData;
          },
        }),
        Object.defineProperty(e, "fill", {
          enumerable: !0,
          get: function () {
            return f.fill;
          },
        }),
        Object.defineProperty(e, "forEachEnvelopeItem", {
          enumerable: !0,
          get: function () {
            return c.forEachEnvelopeItem;
          },
        }),
        Object.defineProperty(e, "getDomElement", {
          enumerable: !0,
          get: function () {
            return g.getDomElement;
          },
        }),
        Object.defineProperty(e, "getEventDescription", {
          enumerable: !0,
          get: function () {
            return m.getEventDescription;
          },
        }),
        Object.defineProperty(e, "getFunctionName", {
          enumerable: !0,
          get: function () {
            return O.getFunctionName;
          },
        }),
        Object.defineProperty(e, "getGlobalObject", {
          enumerable: !0,
          get: function () {
            return w.getGlobalObject;
          },
        }),
        Object.defineProperty(e, "getGlobalSingleton", {
          enumerable: !0,
          get: function () {
            return w.getGlobalSingleton;
          },
        }),
        Object.defineProperty(e, "getLocationHref", {
          enumerable: !0,
          get: function () {
            return g.getLocationHref;
          },
        }),
        Object.defineProperty(e, "getNumberOfUrlSegments", {
          enumerable: !0,
          get: function () {
            return L.getNumberOfUrlSegments;
          },
        }),
        Object.defineProperty(e, "getOriginalFunction", {
          enumerable: !0,
          get: function () {
            return f.getOriginalFunction;
          },
        }),
        Object.defineProperty(e, "htmlTreeAsString", {
          enumerable: !0,
          get: function () {
            return g.htmlTreeAsString;
          },
        }),
        Object.defineProperty(e, "isAbsolute", {
          enumerable: !0,
          get: function () {
            return v.isAbsolute;
          },
        }),
        Object.defineProperty(e, "isBrowserBundle", {
          enumerable: !0,
          get: function () {
            return a.isBrowserBundle;
          },
        }),
        Object.defineProperty(e, "isDOMError", {
          enumerable: !0,
          get: function () {
            return p.isDOMError;
          },
        }),
        Object.defineProperty(e, "isDOMException", {
          enumerable: !0,
          get: function () {
            return p.isDOMException;
          },
        }),
        Object.defineProperty(e, "isElement", {
          enumerable: !0,
          get: function () {
            return p.isElement;
          },
        }),
        Object.defineProperty(e, "isError", {
          enumerable: !0,
          get: function () {
            return p.isError;
          },
        }),
        Object.defineProperty(e, "isErrorEvent", {
          enumerable: !0,
          get: function () {
            return p.isErrorEvent;
          },
        }),
        Object.defineProperty(e, "isEvent", {
          enumerable: !0,
          get: function () {
            return p.isEvent;
          },
        }),
        Object.defineProperty(e, "isInstanceOf", {
          enumerable: !0,
          get: function () {
            return p.isInstanceOf;
          },
        }),
        Object.defineProperty(e, "isMatchingPattern", {
          enumerable: !0,
          get: function () {
            return o.isMatchingPattern;
          },
        }),
        Object.defineProperty(e, "isNaN", {
          enumerable: !0,
          get: function () {
            return p.isNaN;
          },
        }),
        Object.defineProperty(e, "isNativeFetch", {
          enumerable: !0,
          get: function () {
            return i.isNativeFetch;
          },
        }),
        Object.defineProperty(e, "isNodeEnv", {
          enumerable: !0,
          get: function () {
            return y.isNodeEnv;
          },
        }),
        Object.defineProperty(e, "isPlainObject", {
          enumerable: !0,
          get: function () {
            return p.isPlainObject;
          },
        }),
        Object.defineProperty(e, "isPrimitive", {
          enumerable: !0,
          get: function () {
            return p.isPrimitive;
          },
        }),
        Object.defineProperty(e, "isRateLimited", {
          enumerable: !0,
          get: function () {
            return C.isRateLimited;
          },
        }),
        Object.defineProperty(e, "isRegExp", {
          enumerable: !0,
          get: function () {
            return p.isRegExp;
          },
        }),
        Object.defineProperty(e, "isString", {
          enumerable: !0,
          get: function () {
            return p.isString;
          },
        }),
        Object.defineProperty(e, "isSyntheticEvent", {
          enumerable: !0,
          get: function () {
            return p.isSyntheticEvent;
          },
        }),
        Object.defineProperty(e, "isThenable", {
          enumerable: !0,
          get: function () {
            return p.isThenable;
          },
        }),
        Object.defineProperty(e, "join", {
          enumerable: !0,
          get: function () {
            return v.join;
          },
        }),
        Object.defineProperty(e, "loadModule", {
          enumerable: !0,
          get: function () {
            return y.loadModule;
          },
        }),
        Object.defineProperty(e, "logger", {
          enumerable: !0,
          get: function () {
            return h.logger;
          },
        }),
        Object.defineProperty(e, "makeDsn", {
          enumerable: !0,
          get: function () {
            return E.makeDsn;
          },
        }),
        Object.defineProperty(e, "makePromiseBuffer", {
          enumerable: !0,
          get: function () {
            return d.makePromiseBuffer;
          },
        }),
        Object.defineProperty(e, "markFunctionWrapped", {
          enumerable: !0,
          get: function () {
            return f.markFunctionWrapped;
          },
        }),
        Object.defineProperty(e, "memoBuilder", {
          enumerable: !0,
          get: function () {
            return j.memoBuilder;
          },
        }),
        Object.defineProperty(e, "nodeStackLineParser", {
          enumerable: !0,
          get: function () {
            return O.nodeStackLineParser;
          },
        }),
        Object.defineProperty(e, "normalize", {
          enumerable: !0,
          get: function () {
            return b.normalize;
          },
        }),
        Object.defineProperty(e, "normalizePath", {
          enumerable: !0,
          get: function () {
            return v.normalizePath;
          },
        }),
        Object.defineProperty(e, "normalizeToSize", {
          enumerable: !0,
          get: function () {
            return b.normalizeToSize;
          },
        }),
        Object.defineProperty(e, "objectify", {
          enumerable: !0,
          get: function () {
            return f.objectify;
          },
        }),
        Object.defineProperty(e, "parseRetryAfterHeader", {
          enumerable: !0,
          get: function () {
            return C.parseRetryAfterHeader;
          },
        }),
        Object.defineProperty(e, "parseSemver", {
          enumerable: !0,
          get: function () {
            return m.parseSemver;
          },
        }),
        Object.defineProperty(e, "parseUrl", {
          enumerable: !0,
          get: function () {
            return L.parseUrl;
          },
        }),
        Object.defineProperty(e, "rejectedSyncPromise", {
          enumerable: !0,
          get: function () {
            return l.rejectedSyncPromise;
          },
        }),
        Object.defineProperty(e, "relative", {
          enumerable: !0,
          get: function () {
            return v.relative;
          },
        }),
        Object.defineProperty(e, "resolve", {
          enumerable: !0,
          get: function () {
            return v.resolve;
          },
        }),
        Object.defineProperty(e, "resolvedSyncPromise", {
          enumerable: !0,
          get: function () {
            return l.resolvedSyncPromise;
          },
        }),
        Object.defineProperty(e, "safeJoin", {
          enumerable: !0,
          get: function () {
            return o.safeJoin;
          },
        }),
        Object.defineProperty(e, "serializeEnvelope", {
          enumerable: !0,
          get: function () {
            return c.serializeEnvelope;
          },
        }),
        Object.defineProperty(e, "severityFromString", {
          enumerable: !0,
          get: function () {
            return u.severityFromString;
          },
        }),
        Object.defineProperty(e, "severityLevelFromString", {
          enumerable: !0,
          get: function () {
            return u.severityLevelFromString;
          },
        }),
        Object.defineProperty(e, "snipLine", {
          enumerable: !0,
          get: function () {
            return o.snipLine;
          },
        }),
        Object.defineProperty(e, "stackParserFromStackParserOptions", {
          enumerable: !0,
          get: function () {
            return O.stackParserFromStackParserOptions;
          },
        }),
        Object.defineProperty(e, "stringMatchesSomePattern", {
          enumerable: !0,
          get: function () {
            return o.stringMatchesSomePattern;
          },
        }),
        Object.defineProperty(e, "stripSentryFramesAndReverse", {
          enumerable: !0,
          get: function () {
            return O.stripSentryFramesAndReverse;
          },
        }),
        Object.defineProperty(e, "stripUrlQueryAndFragment", {
          enumerable: !0,
          get: function () {
            return L.stripUrlQueryAndFragment;
          },
        }),
        Object.defineProperty(e, "supportsDOMError", {
          enumerable: !0,
          get: function () {
            return i.supportsDOMError;
          },
        }),
        Object.defineProperty(e, "supportsDOMException", {
          enumerable: !0,
          get: function () {
            return i.supportsDOMException;
          },
        }),
        Object.defineProperty(e, "supportsErrorEvent", {
          enumerable: !0,
          get: function () {
            return i.supportsErrorEvent;
          },
        }),
        Object.defineProperty(e, "supportsFetch", {
          enumerable: !0,
          get: function () {
            return i.supportsFetch;
          },
        }),
        Object.defineProperty(e, "supportsHistory", {
          enumerable: !0,
          get: function () {
            return i.supportsHistory;
          },
        }),
        Object.defineProperty(e, "supportsNativeFetch", {
          enumerable: !0,
          get: function () {
            return i.supportsNativeFetch;
          },
        }),
        Object.defineProperty(e, "supportsReferrerPolicy", {
          enumerable: !0,
          get: function () {
            return i.supportsReferrerPolicy;
          },
        }),
        Object.defineProperty(e, "supportsReportingObserver", {
          enumerable: !0,
          get: function () {
            return i.supportsReportingObserver;
          },
        }),
        Object.defineProperty(e, "timestampInSeconds", {
          enumerable: !0,
          get: function () {
            return t.timestampInSeconds;
          },
        }),
        Object.defineProperty(e, "timestampWithMs", {
          enumerable: !0,
          get: function () {
            return t.timestampWithMs;
          },
        }),
        Object.defineProperty(e, "truncate", {
          enumerable: !0,
          get: function () {
            return o.truncate;
          },
        }),
        Object.defineProperty(e, "updateRateLimits", {
          enumerable: !0,
          get: function () {
            return C.updateRateLimits;
          },
        }),
        Object.defineProperty(e, "urlEncode", {
          enumerable: !0,
          get: function () {
            return f.urlEncode;
          },
        }),
        Object.defineProperty(e, "usingPerformanceAPI", {
          enumerable: !0,
          get: function () {
            return t.usingPerformanceAPI;
          },
        }),
        Object.defineProperty(e, "uuid4", {
          enumerable: !0,
          get: function () {
            return m.uuid4;
          },
        }),
        Object.defineProperty(e, "validSeverityLevels", {
          enumerable: !0,
          get: function () {
            return u.validSeverityLevels;
          },
        }),
        Object.defineProperty(e, "walk", {
          enumerable: !0,
          get: function () {
            return b.walk;
          },
        });
      var g = r(101968),
        E = r(594973),
        P = r(672183),
        w = r(604538),
        _ = r(633308),
        p = r(558527),
        h = r(412797),
        j = r(894267),
        m = r(153179),
        y = r(701580),
        b = r(126002),
        f = r(897677),
        v = r(488105),
        d = r(57348),
        s = r(486711),
        u = r(321521),
        O = r(582422),
        o = r(943630),
        i = r(188800),
        l = r(763007),
        t = r(95143),
        n = r(625683),
        a = r(678903),
        c = r(38510),
        A = r(487488),
        C = r(891829),
        U = r(896715),
        L = r(664444);
    },
    633308: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addInstrumentationHandler = o);
      var E = g(r(346797)),
        P = r(558527),
        w = r(412797),
        _ = r(897677),
        p = r(582422),
        h = r(188800),
        j = r(604538);
      function m(T, k) {
        var M = Object.keys(T);
        if (Object.getOwnPropertySymbols) {
          var $ = Object.getOwnPropertySymbols(T);
          k &&
            ($ = $.filter(function (I) {
              return Object.getOwnPropertyDescriptor(T, I).enumerable;
            })),
            M.push.apply(M, $);
        }
        return M;
      }
      function y(T) {
        for (var k = 1; k < arguments.length; k++) {
          var M = arguments[k] != null ? arguments[k] : {};
          k % 2
            ? m(Object(M), !0).forEach(function ($) {
                (0, E.default)(T, $, M[$]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(M))
            : m(Object(M)).forEach(function ($) {
                Object.defineProperty(
                  T,
                  $,
                  Object.getOwnPropertyDescriptor(M, $)
                );
              });
        }
        return T;
      }
      function b(T, k) {
        var M =
          (typeof Symbol != "undefined" && T[Symbol.iterator]) ||
          T["@@iterator"];
        if (!M) {
          if (
            Array.isArray(T) ||
            (M = f(T)) ||
            (k && T && typeof T.length == "number")
          ) {
            M && (T = M);
            var $ = 0,
              I = function () {};
            return {
              s: I,
              n: function () {
                return $ >= T.length
                  ? { done: !0 }
                  : { done: !1, value: T[$++] };
              },
              e: function (J) {
                throw J;
              },
              f: I,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var H = !0,
          Z = !1,
          oe;
        return {
          s: function () {
            M = M.call(T);
          },
          n: function () {
            var J = M.next();
            return (H = J.done), J;
          },
          e: function (J) {
            (Z = !0), (oe = J);
          },
          f: function () {
            try {
              !H && M.return != null && M.return();
            } finally {
              if (Z) throw oe;
            }
          },
        };
      }
      function f(T, k) {
        if (!!T) {
          if (typeof T == "string") return v(T, k);
          var M = Object.prototype.toString.call(T).slice(8, -1);
          if (
            (M === "Object" && T.constructor && (M = T.constructor.name),
            M === "Map" || M === "Set")
          )
            return Array.from(T);
          if (
            M === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
          )
            return v(T, k);
        }
      }
      function v(T, k) {
        (k == null || k > T.length) && (k = T.length);
        for (var M = 0, $ = new Array(k); M < k; M++) $[M] = T[M];
        return $;
      }
      var d = (0, j.getGlobalObject)(),
        s = {},
        u = {};
      function O(T) {
        if (!u[T])
          switch (((u[T] = !0), T)) {
            case "console":
              l();
              break;
            case "dom":
              z();
              break;
            case "xhr":
              c();
              break;
            case "fetch":
              t();
              break;
            case "history":
              C();
              break;
            case "error":
              V();
              break;
            case "unhandledrejection":
              R();
              break;
            default:
              (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                w.logger.warn("unknown instrumentation type:", T);
              return;
          }
      }
      function o(T, k) {
        (s[T] = s[T] || []), s[T].push(k), O(T);
      }
      function i(T, k) {
        if (!(!T || !s[T])) {
          var M = b(s[T] || []),
            $;
          try {
            for (M.s(); !($ = M.n()).done; ) {
              var I = $.value;
              try {
                I(k);
              } catch (H) {
                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                  w.logger.error(
                    "Error while triggering instrumentation handler.\nType: "
                      .concat(T, "\nName: ")
                      .concat((0, p.getFunctionName)(I), "\nError:"),
                    H
                  );
              }
            }
          } catch (H) {
            M.e(H);
          } finally {
            M.f();
          }
        }
      }
      function l() {
        "console" in d &&
          w.CONSOLE_LEVELS.forEach(function (T) {
            T in d.console &&
              (0, _.fill)(d.console, T, function (k) {
                return function () {
                  for (
                    var M = arguments.length, $ = new Array(M), I = 0;
                    I < M;
                    I++
                  )
                    $[I] = arguments[I];
                  i("console", { args: $, level: T }),
                    k && k.apply(d.console, $);
                };
              });
          });
      }
      function t() {
        !(0, h.supportsNativeFetch)() ||
          (0, _.fill)(d, "fetch", function (T) {
            return function () {
              for (
                var k = arguments.length, M = new Array(k), $ = 0;
                $ < k;
                $++
              )
                M[$] = arguments[$];
              var I = {
                args: M,
                fetchData: { method: n(M), url: a(M) },
                startTimestamp: Date.now(),
              };
              return (
                i("fetch", y({}, I)),
                T.apply(d, M).then(
                  function (H) {
                    return (
                      i(
                        "fetch",
                        y(
                          y({}, I),
                          {},
                          { endTimestamp: Date.now(), response: H }
                        )
                      ),
                      H
                    );
                  },
                  function (H) {
                    throw (
                      (i(
                        "fetch",
                        y(y({}, I), {}, { endTimestamp: Date.now(), error: H })
                      ),
                      H)
                    );
                  }
                )
              );
            };
          });
      }
      function n() {
        var T =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return "Request" in d &&
          (0, P.isInstanceOf)(T[0], Request) &&
          T[0].method
          ? String(T[0].method).toUpperCase()
          : T[1] && T[1].method
          ? String(T[1].method).toUpperCase()
          : "GET";
      }
      function a() {
        var T =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return typeof T[0] == "string"
          ? T[0]
          : "Request" in d && (0, P.isInstanceOf)(T[0], Request)
          ? T[0].url
          : String(T[0]);
      }
      function c() {
        if ("XMLHttpRequest" in d) {
          var T = XMLHttpRequest.prototype;
          (0, _.fill)(T, "open", function (k) {
            return function () {
              for (
                var M = arguments.length, $ = new Array(M), I = 0;
                I < M;
                I++
              )
                $[I] = arguments[I];
              var H = this,
                Z = $[1],
                oe = (H.__sentry_xhr__ = {
                  method: (0, P.isString)($[0]) ? $[0].toUpperCase() : $[0],
                  url: $[1],
                });
              (0, P.isString)(Z) &&
                oe.method === "POST" &&
                Z.match(/sentry_key/) &&
                (H.__sentry_own_request__ = !0);
              var te = function () {
                if (H.readyState === 4) {
                  try {
                    oe.status_code = H.status;
                  } catch (q) {}
                  i("xhr", {
                    args: $,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: H,
                  });
                }
              };
              return (
                "onreadystatechange" in H &&
                typeof H.onreadystatechange == "function"
                  ? (0, _.fill)(H, "onreadystatechange", function (J) {
                      return function () {
                        te();
                        for (
                          var q = arguments.length, re = new Array(q), ce = 0;
                          ce < q;
                          ce++
                        )
                          re[ce] = arguments[ce];
                        return J.apply(H, re);
                      };
                    })
                  : H.addEventListener("readystatechange", te),
                k.apply(H, $)
              );
            };
          }),
            (0, _.fill)(T, "send", function (k) {
              return function () {
                for (
                  var M = arguments.length, $ = new Array(M), I = 0;
                  I < M;
                  I++
                )
                  $[I] = arguments[I];
                return (
                  this.__sentry_xhr__ &&
                    $[0] !== void 0 &&
                    (this.__sentry_xhr__.body = $[0]),
                  i("xhr", { args: $, startTimestamp: Date.now(), xhr: this }),
                  k.apply(this, $)
                );
              };
            });
        }
      }
      var A;
      function C() {
        if (!(0, h.supportsHistory)()) return;
        var T = d.onpopstate;
        d.onpopstate = function () {
          var M = d.location.href,
            $ = A;
          if (((A = M), i("history", { from: $, to: M }), T))
            try {
              for (
                var I = arguments.length, H = new Array(I), Z = 0;
                Z < I;
                Z++
              )
                H[Z] = arguments[Z];
              return T.apply(this, H);
            } catch (oe) {}
        };
        function k(M) {
          return function () {
            for (var $ = arguments.length, I = new Array($), H = 0; H < $; H++)
              I[H] = arguments[H];
            var Z = I.length > 2 ? I[2] : void 0;
            if (Z) {
              var oe = A,
                te = String(Z);
              (A = te), i("history", { from: oe, to: te });
            }
            return M.apply(this, I);
          };
        }
        (0, _.fill)(d.history, "pushState", k),
          (0, _.fill)(d.history, "replaceState", k);
      }
      var U = 1e3,
        L,
        S;
      function B(T, k) {
        if (!T || T.type !== k.type) return !0;
        try {
          if (T.target !== k.target) return !0;
        } catch (M) {}
        return !1;
      }
      function Y(T) {
        if (T.type !== "keypress") return !1;
        try {
          var k = T.target;
          if (!k || !k.tagName) return !0;
          if (
            k.tagName === "INPUT" ||
            k.tagName === "TEXTAREA" ||
            k.isContentEditable
          )
            return !1;
        } catch (M) {}
        return !0;
      }
      function F(T) {
        var k =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return function (M) {
          if (!(!M || S === M) && !Y(M)) {
            var $ = M.type === "keypress" ? "input" : M.type;
            L === void 0
              ? (T({ event: M, name: $, global: k }), (S = M))
              : B(S, M) && (T({ event: M, name: $, global: k }), (S = M)),
              clearTimeout(L),
              (L = d.setTimeout(function () {
                L = void 0;
              }, U));
          }
        };
      }
      function z() {
        if ("document" in d) {
          var T = i.bind(null, "dom"),
            k = F(T, !0);
          d.document.addEventListener("click", k, !1),
            d.document.addEventListener("keypress", k, !1),
            ["EventTarget", "Node"].forEach(function (M) {
              var $ = d[M] && d[M].prototype;
              !$ ||
                !$.hasOwnProperty ||
                !$.hasOwnProperty("addEventListener") ||
                ((0, _.fill)($, "addEventListener", function (I) {
                  return function (H, Z, oe) {
                    if (H === "click" || H == "keypress")
                      try {
                        var te = this,
                          J = (te.__sentry_instrumentation_handlers__ =
                            te.__sentry_instrumentation_handlers__ || {}),
                          q = (J[H] = J[H] || { refCount: 0 });
                        if (!q.handler) {
                          var re = F(T);
                          (q.handler = re), I.call(this, H, re, oe);
                        }
                        q.refCount++;
                      } catch (ce) {}
                    return I.call(this, H, Z, oe);
                  };
                }),
                (0, _.fill)($, "removeEventListener", function (I) {
                  return function (H, Z, oe) {
                    if (H === "click" || H == "keypress")
                      try {
                        var te = this,
                          J = te.__sentry_instrumentation_handlers__ || {},
                          q = J[H];
                        q &&
                          (q.refCount--,
                          q.refCount <= 0 &&
                            (I.call(this, H, q.handler, oe),
                            (q.handler = void 0),
                            delete J[H]),
                          Object.keys(J).length === 0 &&
                            delete te.__sentry_instrumentation_handlers__);
                      } catch (re) {}
                    return I.call(this, H, Z, oe);
                  };
                }));
            });
        }
      }
      var Q = null;
      function V() {
        (Q = d.onerror),
          (d.onerror = function (T, k, M, $, I) {
            return (
              i("error", { column: $, error: I, line: M, msg: T, url: k }),
              Q ? Q.apply(this, arguments) : !1
            );
          });
      }
      var N = null;
      function R() {
        (N = d.onunhandledrejection),
          (d.onunhandledrejection = function (T) {
            return (
              i("unhandledrejection", T), N ? N.apply(this, arguments) : !0
            );
          });
      }
    },
    558527: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isDOMError = h),
        (e.isDOMException = j),
        (e.isElement = v),
        (e.isError = w),
        (e.isErrorEvent = p),
        (e.isEvent = f),
        (e.isInstanceOf = o),
        (e.isNaN = O),
        (e.isPlainObject = b),
        (e.isPrimitive = y),
        (e.isRegExp = d),
        (e.isString = m),
        (e.isSyntheticEvent = u),
        (e.isThenable = s);
      var E = g(r(569644)),
        P = Object.prototype.toString;
      function w(i) {
        switch (P.call(i)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return o(i, Error);
        }
      }
      function _(i, l) {
        return P.call(i) === "[object ".concat(l, "]");
      }
      function p(i) {
        return _(i, "ErrorEvent");
      }
      function h(i) {
        return _(i, "DOMError");
      }
      function j(i) {
        return _(i, "DOMException");
      }
      function m(i) {
        return _(i, "String");
      }
      function y(i) {
        return (
          i === null ||
          ((0, E.default)(i) !== "object" && typeof i != "function")
        );
      }
      function b(i) {
        return _(i, "Object");
      }
      function f(i) {
        return typeof Event != "undefined" && o(i, Event);
      }
      function v(i) {
        return typeof Element != "undefined" && o(i, Element);
      }
      function d(i) {
        return _(i, "RegExp");
      }
      function s(i) {
        return Boolean(i && i.then && typeof i.then == "function");
      }
      function u(i) {
        return (
          b(i) &&
          "nativeEvent" in i &&
          "preventDefault" in i &&
          "stopPropagation" in i
        );
      }
      function O(i) {
        return typeof i == "number" && i !== i;
      }
      function o(i, l) {
        try {
          return i instanceof l;
        } catch (t) {
          return !1;
        }
      }
    },
    412797: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CONSOLE_LEVELS = void 0),
        (e.consoleSandbox = w),
        (e.logger = void 0);
      var g = r(604538),
        E = "Sentry Logger ",
        P = ["debug", "info", "warn", "error", "log", "assert", "trace"];
      e.CONSOLE_LEVELS = P;
      function w(h) {
        if (!("console" in g.GLOBAL_OBJ)) return h();
        var j = g.GLOBAL_OBJ.console,
          m = {};
        P.forEach(function (y) {
          var b = j[y] && j[y].__sentry_original__;
          y in j && b && ((m[y] = j[y]), (j[y] = b));
        });
        try {
          return h();
        } finally {
          Object.keys(m).forEach(function (y) {
            j[y] = m[y];
          });
        }
      }
      function _() {
        var h = !1,
          j = {
            enable: function () {
              h = !0;
            },
            disable: function () {
              h = !1;
            },
          };
        return (
          typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__
            ? P.forEach(function (m) {
                j[m] = function () {
                  for (
                    var y = arguments.length, b = new Array(y), f = 0;
                    f < y;
                    f++
                  )
                    b[f] = arguments[f];
                  h &&
                    w(function () {
                      var v;
                      (v = g.GLOBAL_OBJ.console)[m].apply(
                        v,
                        ["".concat(E, "[").concat(m, "]:")].concat(b)
                      );
                    });
                };
              })
            : P.forEach(function (m) {
                j[m] = function () {};
              }),
          j
        );
      }
      var p;
      (e.logger = p),
        typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__
          ? (e.logger = p = (0, g.getGlobalSingleton)("logger", _))
          : (e.logger = p = _());
    },
    894267: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.memoBuilder = r);
      function r() {
        var g = typeof WeakSet == "function",
          E = g ? new WeakSet() : [];
        function P(_) {
          if (g) return E.has(_) ? !0 : (E.add(_), !1);
          for (var p = 0; p < E.length; p++) {
            var h = E[p];
            if (h === _) return !0;
          }
          return E.push(_), !1;
        }
        function w(_) {
          if (g) E.delete(_);
          else
            for (var p = 0; p < E.length; p++)
              if (E[p] === _) {
                E.splice(p, 1);
                break;
              }
        }
        return [P, w];
      }
    },
    153179: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addContextToFrame = s),
        (e.addExceptionMechanism = f),
        (e.addExceptionTypeValue = b),
        (e.arrayify = O),
        (e.checkOrSetAlreadyCaught = u),
        (e.getEventDescription = y),
        (e.parseSemver = d),
        (e.uuid4 = j);
      var E = g(r(346797)),
        P = r(897677),
        w = r(943630),
        _ = r(604538);
      function p(o, i) {
        var l = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(o);
          i &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(o, n).enumerable;
            })),
            l.push.apply(l, t);
        }
        return l;
      }
      function h(o) {
        for (var i = 1; i < arguments.length; i++) {
          var l = arguments[i] != null ? arguments[i] : {};
          i % 2
            ? p(Object(l), !0).forEach(function (t) {
                (0, E.default)(o, t, l[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
            : p(Object(l)).forEach(function (t) {
                Object.defineProperty(
                  o,
                  t,
                  Object.getOwnPropertyDescriptor(l, t)
                );
              });
        }
        return o;
      }
      function j() {
        var o = _.GLOBAL_OBJ,
          i = o.crypto || o.msCrypto;
        if (i && i.randomUUID) return i.randomUUID().replace(/-/g, "");
        var l =
          i && i.getRandomValues
            ? function () {
                return i.getRandomValues(new Uint8Array(1))[0];
              }
            : function () {
                return Math.random() * 16;
              };
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function (t) {
          return (t ^ ((l() & 15) >> (t / 4))).toString(16);
        });
      }
      function m(o) {
        return o.exception && o.exception.values
          ? o.exception.values[0]
          : void 0;
      }
      function y(o) {
        var i = o.message,
          l = o.event_id;
        if (i) return i;
        var t = m(o);
        return t
          ? t.type && t.value
            ? "".concat(t.type, ": ").concat(t.value)
            : t.type || t.value || l || "<unknown>"
          : l || "<unknown>";
      }
      function b(o, i, l) {
        var t = (o.exception = o.exception || {}),
          n = (t.values = t.values || []),
          a = (n[0] = n[0] || {});
        a.value || (a.value = i || ""), a.type || (a.type = l || "Error");
      }
      function f(o, i) {
        var l = m(o);
        if (!!l) {
          var t = { type: "generic", handled: !0 },
            n = l.mechanism;
          if (((l.mechanism = h(h(h({}, t), n), i)), i && "data" in i)) {
            var a = h(h({}, n && n.data), i.data);
            l.mechanism.data = a;
          }
        }
      }
      var v =
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
      function d(o) {
        var i = o.match(v) || [],
          l = parseInt(i[1], 10),
          t = parseInt(i[2], 10),
          n = parseInt(i[3], 10);
        return {
          buildmetadata: i[5],
          major: isNaN(l) ? void 0 : l,
          minor: isNaN(t) ? void 0 : t,
          patch: isNaN(n) ? void 0 : n,
          prerelease: i[4],
        };
      }
      function s(o, i) {
        var l =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5,
          t = i.lineno || 0,
          n = o.length,
          a = Math.max(Math.min(n, t - 1), 0);
        (i.pre_context = o.slice(Math.max(0, a - l), a).map(function (c) {
          return (0, w.snipLine)(c, 0);
        })),
          (i.context_line = (0, w.snipLine)(
            o[Math.min(n - 1, a)],
            i.colno || 0
          )),
          (i.post_context = o
            .slice(Math.min(a + 1, n), a + 1 + l)
            .map(function (c) {
              return (0, w.snipLine)(c, 0);
            }));
      }
      function u(o) {
        if (o && o.__sentry_captured__) return !0;
        try {
          (0, P.addNonEnumerableProperty)(o, "__sentry_captured__", !0);
        } catch (i) {}
        return !1;
      }
      function O(o) {
        return Array.isArray(o) ? o : [o];
      }
    },
    701580: function (D, e, r) {
      "use strict";
      D = r.nmd(D);
      var g = r(760636);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.dynamicRequire = w),
        (e.isNodeEnv = P),
        (e.loadModule = _);
      var E = r(678903);
      function P() {
        return (
          !(0, E.isBrowserBundle)() &&
          Object.prototype.toString.call(typeof g != "undefined" ? g : 0) ===
            "[object process]"
        );
      }
      function w(p, h) {
        return p.require(h);
      }
      function _(p) {
        var h;
        try {
          h = w(D, p);
        } catch (y) {}
        try {
          var j = w(D, "process"),
            m = j.cwd;
          h = w(D, "".concat(m(), "/node_modules/").concat(p));
        } catch (y) {}
        return h;
      }
    },
    126002: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.normalize = j),
        (e.normalizeToSize = m),
        (e.walk = y);
      var E = g(r(569644)),
        P = g(r(375798)),
        w = r(558527),
        _ = r(894267),
        p = r(897677),
        h = r(582422);
      function j(d) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 1 / 0,
          u =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 1 / 0;
        try {
          return y("", d, s, u);
        } catch (O) {
          return { ERROR: "**non-serializable** (".concat(O, ")") };
        }
      }
      function m(d) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3,
          u =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 100 * 1024,
          O = j(d, s);
        return v(O) > u ? m(d, s - 1, u) : O;
      }
      function y(d, s) {
        var u =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 1 / 0,
          O =
            arguments.length > 3 && arguments[3] !== void 0
              ? arguments[3]
              : 1 / 0,
          o =
            arguments.length > 4 && arguments[4] !== void 0
              ? arguments[4]
              : (0, _.memoBuilder)(),
          i = (0, P.default)(o, 2),
          l = i[0],
          t = i[1];
        if (
          s === null ||
          (["number", "boolean", "string"].includes((0, E.default)(s)) &&
            !(0, w.isNaN)(s))
        )
          return s;
        var n = b(d, s);
        if (!n.startsWith("[object ")) return n;
        if (s.__sentry_skip_normalization__) return s;
        if (u === 0) return n.replace("object ", "");
        if (l(s)) return "[Circular ~]";
        var a = s;
        if (a && typeof a.toJSON == "function")
          try {
            var c = a.toJSON();
            return y("", c, u - 1, O, o);
          } catch (B) {}
        var A = Array.isArray(s) ? [] : {},
          C = 0,
          U = (0, p.convertToPlainObject)(s);
        for (var L in U)
          if (!!Object.prototype.hasOwnProperty.call(U, L)) {
            if (C >= O) {
              A[L] = "[MaxProperties ~]";
              break;
            }
            var S = U[L];
            (A[L] = y(L, S, u - 1, O, o)), C++;
          }
        return t(s), A;
      }
      function b(d, s) {
        try {
          return d === "domain" &&
            s &&
            (0, E.default)(s) === "object" &&
            s._events
            ? "[Domain]"
            : d === "domainEmitter"
            ? "[DomainEmitter]"
            : typeof r.g != "undefined" && s === r.g
            ? "[Global]"
            : typeof window != "undefined" && s === window
            ? "[Window]"
            : typeof document != "undefined" && s === document
            ? "[Document]"
            : (0, w.isSyntheticEvent)(s)
            ? "[SyntheticEvent]"
            : typeof s == "number" && s !== s
            ? "[NaN]"
            : s === void 0
            ? "[undefined]"
            : typeof s == "function"
            ? "[Function: ".concat((0, h.getFunctionName)(s), "]")
            : (0, E.default)(s) === "symbol"
            ? "[".concat(String(s), "]")
            : typeof s == "bigint"
            ? "[BigInt: ".concat(String(s), "]")
            : "[object ".concat(Object.getPrototypeOf(s).constructor.name, "]");
        } catch (u) {
          return "**non-serializable** (".concat(u, ")");
        }
      }
      function f(d) {
        return ~-encodeURI(d).split(/%..|./).length;
      }
      function v(d) {
        return f(JSON.stringify(d));
      }
    },
    897677: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addNonEnumerableProperty = y),
        (e.convertToPlainObject = d),
        (e.dropUndefinedKeys = o),
        (e.extractExceptionKeysForMessage = O),
        (e.fill = m),
        (e.getOriginalFunction = f),
        (e.markFunctionWrapped = b),
        (e.objectify = l),
        (e.urlEncode = v);
      var E = g(r(569644)),
        P = g(r(346797)),
        w = r(101968),
        _ = r(558527),
        p = r(943630);
      function h(t, n) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          n &&
            (c = c.filter(function (A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable;
            })),
            a.push.apply(a, c);
        }
        return a;
      }
      function j(t) {
        for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? h(Object(a), !0).forEach(function (c) {
                (0, P.default)(t, c, a[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : h(Object(a)).forEach(function (c) {
                Object.defineProperty(
                  t,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                );
              });
        }
        return t;
      }
      function m(t, n, a) {
        if (n in t) {
          var c = t[n],
            A = a(c);
          if (typeof A == "function")
            try {
              b(A, c);
            } catch (C) {}
          t[n] = A;
        }
      }
      function y(t, n, a) {
        Object.defineProperty(t, n, {
          value: a,
          writable: !0,
          configurable: !0,
        });
      }
      function b(t, n) {
        var a = n.prototype || {};
        (t.prototype = n.prototype = a), y(t, "__sentry_original__", n);
      }
      function f(t) {
        return t.__sentry_original__;
      }
      function v(t) {
        return Object.keys(t)
          .map(function (n) {
            return ""
              .concat(encodeURIComponent(n), "=")
              .concat(encodeURIComponent(t[n]));
          })
          .join("&");
      }
      function d(t) {
        if ((0, _.isError)(t))
          return j({ message: t.message, name: t.name, stack: t.stack }, u(t));
        if ((0, _.isEvent)(t)) {
          var n = j(
            {
              type: t.type,
              target: s(t.target),
              currentTarget: s(t.currentTarget),
            },
            u(t)
          );
          return (
            typeof CustomEvent != "undefined" &&
              (0, _.isInstanceOf)(t, CustomEvent) &&
              (n.detail = t.detail),
            n
          );
        } else return t;
      }
      function s(t) {
        try {
          return (0, _.isElement)(t)
            ? (0, w.htmlTreeAsString)(t)
            : Object.prototype.toString.call(t);
        } catch (n) {
          return "<unknown>";
        }
      }
      function u(t) {
        if ((0, E.default)(t) === "object" && t !== null) {
          var n = {};
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
          return n;
        } else return {};
      }
      function O(t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 40,
          a = Object.keys(d(t));
        if ((a.sort(), !a.length)) return "[object has no keys]";
        if (a[0].length >= n) return (0, p.truncate)(a[0], n);
        for (var c = a.length; c > 0; c--) {
          var A = a.slice(0, c).join(", ");
          if (!(A.length > n))
            return c === a.length ? A : (0, p.truncate)(A, n);
        }
        return "";
      }
      function o(t) {
        var n = new Map();
        return i(t, n);
      }
      function i(t, n) {
        if ((0, _.isPlainObject)(t)) {
          var a = n.get(t);
          if (a !== void 0) return a;
          var c = {};
          n.set(t, c);
          for (var A = 0, C = Object.keys(t); A < C.length; A++) {
            var U = C[A];
            typeof t[U] != "undefined" && (c[U] = i(t[U], n));
          }
          return c;
        }
        if (Array.isArray(t)) {
          var L = n.get(t);
          if (L !== void 0) return L;
          var S = [];
          return (
            n.set(t, S),
            t.forEach(function (B) {
              S.push(i(B, n));
            }),
            S
          );
        }
        return t;
      }
      function l(t) {
        var n;
        switch (!0) {
          case t == null:
            n = new String(t);
            break;
          case (0, E.default)(t) === "symbol" || typeof t == "bigint":
            n = Object(t);
            break;
          case (0, _.isPrimitive)(t):
            n = new t.constructor(t);
            break;
          default:
            n = t;
            break;
        }
        return n;
      }
    },
    488105: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.basename = y),
        (e.dirname = m),
        (e.isAbsolute = h),
        (e.join = j),
        (e.normalizePath = p),
        (e.relative = _),
        (e.resolve = P);
      function r(b, f) {
        for (var v = 0, d = b.length - 1; d >= 0; d--) {
          var s = b[d];
          s === "."
            ? b.splice(d, 1)
            : s === ".."
            ? (b.splice(d, 1), v++)
            : v && (b.splice(d, 1), v--);
        }
        if (f) for (; v--; v) b.unshift("..");
        return b;
      }
      var g = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
      function E(b) {
        var f = g.exec(b);
        return f ? f.slice(1) : [];
      }
      function P() {
        for (var b = "", f = !1, v = arguments.length - 1; v >= -1 && !f; v--) {
          var d =
            v >= 0
              ? v < 0 || arguments.length <= v
                ? void 0
                : arguments[v]
              : "/";
          !d || ((b = "".concat(d, "/").concat(b)), (f = d.charAt(0) === "/"));
        }
        return (
          (b = r(
            b.split("/").filter(function (s) {
              return !!s;
            }),
            !f
          ).join("/")),
          (f ? "/" : "") + b || "."
        );
      }
      function w(b) {
        for (var f = 0; f < b.length && b[f] === ""; f++);
        for (var v = b.length - 1; v >= 0 && b[v] === ""; v--);
        return f > v ? [] : b.slice(f, v - f + 1);
      }
      function _(b, f) {
        (b = P(b).substr(1)), (f = P(f).substr(1));
        for (
          var v = w(b.split("/")),
            d = w(f.split("/")),
            s = Math.min(v.length, d.length),
            u = s,
            O = 0;
          O < s;
          O++
        )
          if (v[O] !== d[O]) {
            u = O;
            break;
          }
        for (var o = [], i = u; i < v.length; i++) o.push("..");
        return (o = o.concat(d.slice(u))), o.join("/");
      }
      function p(b) {
        var f = h(b),
          v = b.substr(-1) === "/",
          d = r(
            b.split("/").filter(function (s) {
              return !!s;
            }),
            !f
          ).join("/");
        return !d && !f && (d = "."), d && v && (d += "/"), (f ? "/" : "") + d;
      }
      function h(b) {
        return b.charAt(0) === "/";
      }
      function j() {
        for (var b = arguments.length, f = new Array(b), v = 0; v < b; v++)
          f[v] = arguments[v];
        return p(f.join("/"));
      }
      function m(b) {
        var f = E(b),
          v = f[0],
          d = f[1];
        return !v && !d ? "." : (d && (d = d.substr(0, d.length - 1)), v + d);
      }
      function y(b, f) {
        var v = E(b)[2];
        return (
          f &&
            v.substr(f.length * -1) === f &&
            (v = v.substr(0, v.length - f.length)),
          v
        );
      }
    },
    57348: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.makePromiseBuffer = P);
      var g = r(672183),
        E = r(763007);
      function P(w) {
        var _ = [];
        function p() {
          return w === void 0 || _.length < w;
        }
        function h(y) {
          return _.splice(_.indexOf(y), 1)[0];
        }
        function j(y) {
          if (!p())
            return (0, E.rejectedSyncPromise)(
              new g.SentryError(
                "Not adding Promise because buffer limit was reached."
              )
            );
          var b = y();
          return (
            _.indexOf(b) === -1 && _.push(b),
            b
              .then(function () {
                return h(b);
              })
              .then(null, function () {
                return h(b).then(null, function () {});
              }),
            b
          );
        }
        function m(y) {
          return new E.SyncPromise(function (b, f) {
            var v = _.length;
            if (!v) return b(!0);
            var d = setTimeout(function () {
              y && y > 0 && b(!1);
            }, y);
            _.forEach(function (s) {
              (0, E.resolvedSyncPromise)(s).then(function () {
                --v || (clearTimeout(d), b(!0));
              }, f);
            });
          });
        }
        return { $: _, add: j, drain: m };
      }
    },
    891829: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DEFAULT_RETRY_AFTER = void 0),
        (e.disabledUntil = b),
        (e.isRateLimited = f),
        (e.parseRetryAfterHeader = y),
        (e.updateRateLimits = v);
      var E = g(r(375798)),
        P = g(r(346797));
      function w(d, s) {
        var u =
          (typeof Symbol != "undefined" && d[Symbol.iterator]) ||
          d["@@iterator"];
        if (!u) {
          if (
            Array.isArray(d) ||
            (u = _(d)) ||
            (s && d && typeof d.length == "number")
          ) {
            u && (d = u);
            var O = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return O >= d.length
                  ? { done: !0 }
                  : { done: !1, value: d[O++] };
              },
              e: function (a) {
                throw a;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i = !0,
          l = !1,
          t;
        return {
          s: function () {
            u = u.call(d);
          },
          n: function () {
            var a = u.next();
            return (i = a.done), a;
          },
          e: function (a) {
            (l = !0), (t = a);
          },
          f: function () {
            try {
              !i && u.return != null && u.return();
            } finally {
              if (l) throw t;
            }
          },
        };
      }
      function _(d, s) {
        if (!!d) {
          if (typeof d == "string") return p(d, s);
          var u = Object.prototype.toString.call(d).slice(8, -1);
          if (
            (u === "Object" && d.constructor && (u = d.constructor.name),
            u === "Map" || u === "Set")
          )
            return Array.from(d);
          if (
            u === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return p(d, s);
        }
      }
      function p(d, s) {
        (s == null || s > d.length) && (s = d.length);
        for (var u = 0, O = new Array(s); u < s; u++) O[u] = d[u];
        return O;
      }
      function h(d, s) {
        var u = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
          var O = Object.getOwnPropertySymbols(d);
          s &&
            (O = O.filter(function (o) {
              return Object.getOwnPropertyDescriptor(d, o).enumerable;
            })),
            u.push.apply(u, O);
        }
        return u;
      }
      function j(d) {
        for (var s = 1; s < arguments.length; s++) {
          var u = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? h(Object(u), !0).forEach(function (O) {
                (0, P.default)(d, O, u[O]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(u))
            : h(Object(u)).forEach(function (O) {
                Object.defineProperty(
                  d,
                  O,
                  Object.getOwnPropertyDescriptor(u, O)
                );
              });
        }
        return d;
      }
      var m = 60 * 1e3;
      e.DEFAULT_RETRY_AFTER = m;
      function y(d) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : Date.now(),
          u = parseInt("".concat(d), 10);
        if (!isNaN(u)) return u * 1e3;
        var O = Date.parse("".concat(d));
        return isNaN(O) ? m : O - s;
      }
      function b(d, s) {
        return d[s] || d.all || 0;
      }
      function f(d, s) {
        var u =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : Date.now();
        return b(d, s) > u;
      }
      function v(d, s) {
        var u = s.statusCode,
          O = s.headers,
          o =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : Date.now(),
          i = j({}, d),
          l = O && O["x-sentry-rate-limits"],
          t = O && O["retry-after"];
        if (l) {
          var n = w(l.trim().split(",")),
            a;
          try {
            for (n.s(); !(a = n.n()).done; ) {
              var c = a.value,
                A = c.split(":", 2),
                C = (0, E.default)(A, 2),
                U = C[0],
                L = C[1],
                S = parseInt(U, 10),
                B = (isNaN(S) ? 60 : S) * 1e3;
              if (!L) i.all = o + B;
              else {
                var Y = w(L.split(";")),
                  F;
                try {
                  for (Y.s(); !(F = Y.n()).done; ) {
                    var z = F.value;
                    i[z] = o + B;
                  }
                } catch (Q) {
                  Y.e(Q);
                } finally {
                  Y.f();
                }
              }
            }
          } catch (Q) {
            n.e(Q);
          } finally {
            n.f();
          }
        } else t ? (i.all = o + y(t, o)) : u === 429 && (i.all = o + 60 * 1e3);
        return i;
      }
    },
    486711: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addRequestDataToEvent = i),
        (e.addRequestDataToTransaction = d),
        (e.extractPathForTransaction = s),
        (e.extractRequestData = o);
      var E = g(r(569644)),
        P = g(r(346797)),
        w = g(r(603912)),
        _ = r(423241),
        p = r(558527),
        h = r(126002),
        j = r(664444);
      function m(t, n) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          n &&
            (c = c.filter(function (A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable;
            })),
            a.push.apply(a, c);
        }
        return a;
      }
      function y(t) {
        for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? m(Object(a), !0).forEach(function (c) {
                (0, P.default)(t, c, a[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : m(Object(a)).forEach(function (c) {
                Object.defineProperty(
                  t,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                );
              });
        }
        return t;
      }
      var b = { ip: !1, request: !0, transaction: !0, user: !0 },
        f = ["cookies", "data", "headers", "method", "query_string", "url"],
        v = ["id", "username", "email"];
      function d(t, n, a) {
        !t ||
          ((!t.metadata.source || t.metadata.source === "url") &&
            t.setName.apply(t, (0, w.default)(s(n, { path: !0, method: !0 }))),
          t.setData("url", n.originalUrl || n.url),
          n.baseUrl && t.setData("baseUrl", n.baseUrl),
          t.setData("query", l(n, a)));
      }
      function s(t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          a = t.method && t.method.toUpperCase(),
          c = "",
          A = "url";
        n.customRoute || t.route
          ? ((c =
              n.customRoute ||
              "".concat(t.baseUrl || "").concat(t.route && t.route.path)),
            (A = "route"))
          : (t.originalUrl || t.url) &&
            (c = (0, j.stripUrlQueryAndFragment)(t.originalUrl || t.url || ""));
        var C = "";
        return (
          n.method && a && (C += a),
          n.method && n.path && (C += " "),
          n.path && c && (C += c),
          [C, A]
        );
      }
      function u(t, n) {
        switch (n) {
          case "path":
            return s(t, { path: !0 })[0];
          case "handler":
            return (
              (t.route &&
                t.route.stack &&
                t.route.stack[0] &&
                t.route.stack[0].name) ||
              "<anonymous>"
            );
          case "methodPath":
          default:
            return s(t, { path: !0, method: !0 })[0];
        }
      }
      function O(t, n) {
        var a = {},
          c = Array.isArray(n) ? n : v;
        return (
          c.forEach(function (A) {
            t && A in t && (a[A] = t[A]);
          }),
          a
        );
      }
      function o(t, n) {
        var a = n || {},
          c = a.include,
          A = c === void 0 ? f : c,
          C = a.deps,
          U = {},
          L = t.headers || {},
          S = t.method,
          B = t.hostname || t.host || L.host || "<no host>",
          Y =
            t.protocol === "https" || (t.socket && t.socket.encrypted)
              ? "https"
              : "http",
          F = t.originalUrl || t.url || "",
          z = "".concat(Y, "://").concat(B).concat(F);
        return (
          A.forEach(function (Q) {
            switch (Q) {
              case "headers": {
                U.headers = L;
                break;
              }
              case "method": {
                U.method = S;
                break;
              }
              case "url": {
                U.url = z;
                break;
              }
              case "cookies": {
                U.cookies =
                  t.cookies ||
                  (L.cookie && C && C.cookie && C.cookie.parse(L.cookie)) ||
                  {};
                break;
              }
              case "query_string": {
                U.query_string = l(t, C);
                break;
              }
              case "data": {
                if (S === "GET" || S === "HEAD") break;
                t.body !== void 0 &&
                  (U.data = (0, p.isString)(t.body)
                    ? t.body
                    : JSON.stringify((0, h.normalize)(t.body)));
                break;
              }
              default:
                ({}).hasOwnProperty.call(t, Q) && (U[Q] = t[Q]);
            }
          }),
          U
        );
      }
      function i(t, n, a) {
        var c = y(
          y({}, b),
          (0, _._optionalChain)([
            a,
            "optionalAccess",
            function (L) {
              return L.include;
            },
          ])
        );
        if (c.request) {
          var A = Array.isArray(c.request)
            ? o(n, {
                include: c.request,
                deps: (0, _._optionalChain)([
                  a,
                  "optionalAccess",
                  function (L) {
                    return L.deps;
                  },
                ]),
              })
            : o(n, {
                deps: (0, _._optionalChain)([
                  a,
                  "optionalAccess",
                  function (L) {
                    return L.deps;
                  },
                ]),
              });
          t.request = y(y({}, t.request), A);
        }
        if (c.user) {
          var C =
            n.user && (0, p.isPlainObject)(n.user) ? O(n.user, c.user) : {};
          Object.keys(C).length && (t.user = y(y({}, t.user), C));
        }
        if (c.ip) {
          var U = n.ip || (n.socket && n.socket.remoteAddress);
          U && (t.user = y(y({}, t.user), {}, { ip_address: U }));
        }
        return (
          c.transaction &&
            !t.transaction &&
            (t.transaction = u(n, c.transaction)),
          t
        );
      }
      function l(t, n) {
        var a = t.originalUrl || t.url || "";
        if (!!a)
          return (
            a.startsWith("/") && (a = "http://dogs.are.great".concat(a)),
            t.query ||
              ((typeof URL == "undefined"
                ? "undefined"
                : (0, E.default)(URL)) !== void 0 &&
                new URL(a).search.replace("?", "")) ||
              (n && n.url && n.url.parse(a).query) ||
              void 0
          );
      }
    },
    321521: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.severityFromString = g),
        (e.severityLevelFromString = E),
        (e.validSeverityLevels = void 0);
      var r = ["fatal", "error", "warning", "log", "info", "debug"];
      e.validSeverityLevels = r;
      function g(P) {
        return E(P);
      }
      function E(P) {
        return P === "warn" ? "warning" : r.includes(P) ? P : "log";
      }
    },
    582422: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createStackParser = b),
        (e.getFunctionName = s),
        (e.nodeStackLineParser = O),
        (e.stackParserFromStackParserOptions = f),
        (e.stripSentryFramesAndReverse = v);
      var E = g(r(346797)),
        P = g(r(603912)),
        w = r(423241);
      function _(o, i) {
        var l = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(o);
          i &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(o, n).enumerable;
            })),
            l.push.apply(l, t);
        }
        return l;
      }
      function p(o) {
        for (var i = 1; i < arguments.length; i++) {
          var l = arguments[i] != null ? arguments[i] : {};
          i % 2
            ? _(Object(l), !0).forEach(function (t) {
                (0, E.default)(o, t, l[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
            : _(Object(l)).forEach(function (t) {
                Object.defineProperty(
                  o,
                  t,
                  Object.getOwnPropertyDescriptor(l, t)
                );
              });
        }
        return o;
      }
      function h(o, i) {
        var l =
          (typeof Symbol != "undefined" && o[Symbol.iterator]) ||
          o["@@iterator"];
        if (!l) {
          if (
            Array.isArray(o) ||
            (l = j(o)) ||
            (i && o && typeof o.length == "number")
          ) {
            l && (o = l);
            var t = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return t >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[t++] };
              },
              e: function (U) {
                throw U;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a = !0,
          c = !1,
          A;
        return {
          s: function () {
            l = l.call(o);
          },
          n: function () {
            var U = l.next();
            return (a = U.done), U;
          },
          e: function (U) {
            (c = !0), (A = U);
          },
          f: function () {
            try {
              !a && l.return != null && l.return();
            } finally {
              if (c) throw A;
            }
          },
        };
      }
      function j(o, i) {
        if (!!o) {
          if (typeof o == "string") return m(o, i);
          var l = Object.prototype.toString.call(o).slice(8, -1);
          if (
            (l === "Object" && o.constructor && (l = o.constructor.name),
            l === "Map" || l === "Set")
          )
            return Array.from(o);
          if (
            l === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return m(o, i);
        }
      }
      function m(o, i) {
        (i == null || i > o.length) && (i = o.length);
        for (var l = 0, t = new Array(i); l < i; l++) t[l] = o[l];
        return t;
      }
      var y = 50;
      function b() {
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
          i[l] = arguments[l];
        var t = i
          .sort(function (n, a) {
            return n[0] - a[0];
          })
          .map(function (n) {
            return n[1];
          });
        return function (n) {
          var a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            c = [],
            A = h(n.split("\n").slice(a)),
            C;
          try {
            for (A.s(); !(C = A.n()).done; ) {
              var U = C.value,
                L = U.replace(/\(error: (.*)\)/, "$1"),
                S = h(t),
                B;
              try {
                for (S.s(); !(B = S.n()).done; ) {
                  var Y = B.value,
                    F = Y(L);
                  if (F) {
                    c.push(F);
                    break;
                  }
                }
              } catch (z) {
                S.e(z);
              } finally {
                S.f();
              }
            }
          } catch (z) {
            A.e(z);
          } finally {
            A.f();
          }
          return v(c);
        };
      }
      function f(o) {
        return Array.isArray(o) ? b.apply(void 0, (0, P.default)(o)) : o;
      }
      function v(o) {
        if (!o.length) return [];
        var i = o,
          l = i[0].function || "",
          t = i[i.length - 1].function || "";
        return (
          (l.indexOf("captureMessage") !== -1 ||
            l.indexOf("captureException") !== -1) &&
            (i = i.slice(1)),
          t.indexOf("sentryWrapped") !== -1 && (i = i.slice(0, -1)),
          i
            .slice(0, y)
            .map(function (n) {
              return p(
                p({}, n),
                {},
                {
                  filename: n.filename || i[0].filename,
                  function: n.function || "?",
                }
              );
            })
            .reverse()
        );
      }
      var d = "<anonymous>";
      function s(o) {
        try {
          return !o || typeof o != "function" ? d : o.name || d;
        } catch (i) {
          return d;
        }
      }
      function u(o) {
        var i = /^\s*[-]{4,}$/,
          l = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
        return function (t) {
          if (t.match(i)) return { filename: t };
          var n = t.match(l);
          if (!!n) {
            var a, c, A, C, U;
            if (n[1]) {
              A = n[1];
              var L = A.lastIndexOf(".");
              if ((A[L - 1] === "." && L--, L > 0)) {
                (a = A.substr(0, L)), (c = A.substr(L + 1));
                var S = a.indexOf(".Module");
                S > 0 && ((A = A.substr(S + 1)), (a = a.substr(0, S)));
              }
              C = void 0;
            }
            c && ((C = a), (U = c)),
              c === "<anonymous>" && ((U = void 0), (A = void 0)),
              A === void 0 &&
                ((U = U || "<anonymous>"),
                (A = C ? "".concat(C, ".").concat(U) : U));
            var B = (0, w._optionalChain)([
                n,
                "access",
                function (Q) {
                  return Q[2];
                },
                "optionalAccess",
                function (Q) {
                  return Q.startsWith;
                },
                "call",
                function (Q) {
                  return Q("file://");
                },
              ])
                ? n[2].substr(7)
                : n[2],
              Y = n[5] === "native",
              F =
                Y ||
                (B &&
                  !B.startsWith("/") &&
                  !B.startsWith(".") &&
                  B.indexOf(":\\") !== 1),
              z = !F && B !== void 0 && !B.includes("node_modules/");
            return {
              filename: B,
              module: (0, w._optionalChain)([
                o,
                "optionalCall",
                function (Q) {
                  return Q(B);
                },
              ]),
              function: A,
              lineno: parseInt(n[3], 10) || void 0,
              colno: parseInt(n[4], 10) || void 0,
              in_app: z,
            };
          }
        };
      }
      function O(o) {
        return [90, u(o)];
      }
    },
    943630: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.escapeStringForRegex = h),
        (e.isMatchingPattern = _),
        (e.safeJoin = w),
        (e.snipLine = P),
        (e.stringMatchesSomePattern = p),
        (e.truncate = E);
      var g = r(558527);
      function E(j) {
        var m =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return typeof j != "string" || m === 0 || j.length <= m
          ? j
          : "".concat(j.substr(0, m), "...");
      }
      function P(j, m) {
        var y = j,
          b = y.length;
        if (b <= 150) return y;
        m > b && (m = b);
        var f = Math.max(m - 60, 0);
        f < 5 && (f = 0);
        var v = Math.min(f + 140, b);
        return (
          v > b - 5 && (v = b),
          v === b && (f = Math.max(v - 140, 0)),
          (y = y.slice(f, v)),
          f > 0 && (y = "'{snip} ".concat(y)),
          v < b && (y += " {snip}"),
          y
        );
      }
      function w(j, m) {
        if (!Array.isArray(j)) return "";
        for (var y = [], b = 0; b < j.length; b++) {
          var f = j[b];
          try {
            y.push(String(f));
          } catch (v) {
            y.push("[value cannot be serialized]");
          }
        }
        return y.join(m);
      }
      function _(j, m) {
        var y =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        return (0, g.isString)(j)
          ? (0, g.isRegExp)(m)
            ? m.test(j)
            : (0, g.isString)(m)
            ? y
              ? j === m
              : j.includes(m)
            : !1
          : !1;
      }
      function p(j) {
        var m =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          y =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        return m.some(function (b) {
          return _(j, b, y);
        });
      }
      function h(j) {
        return j.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
    },
    188800: function (D, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isNativeFetch = j),
        (e.supportsDOMError = _),
        (e.supportsDOMException = p),
        (e.supportsErrorEvent = w),
        (e.supportsFetch = h),
        (e.supportsHistory = f),
        (e.supportsNativeFetch = m),
        (e.supportsReferrerPolicy = b),
        (e.supportsReportingObserver = y);
      var g = r(412797),
        E = r(604538),
        P = (0, E.getGlobalObject)();
      function w() {
        try {
          return new ErrorEvent(""), !0;
        } catch (v) {
          return !1;
        }
      }
      function _() {
        try {
          return new DOMError(""), !0;
        } catch (v) {
          return !1;
        }
      }
      function p() {
        try {
          return new DOMException(""), !0;
        } catch (v) {
          return !1;
        }
      }
      function h() {
        if (!("fetch" in P)) return !1;
        try {
          return (
            new Headers(),
            new Request("http://www.example.com"),
            new Response(),
            !0
          );
        } catch (v) {
          return !1;
        }
      }
      function j(v) {
        return (
          v &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(v.toString())
        );
      }
      function m() {
        if (!h()) return !1;
        if (j(P.fetch)) return !0;
        var v = !1,
          d = P.document;
        if (d && typeof d.createElement == "function")
          try {
            var s = d.createElement("iframe");
            (s.hidden = !0),
              d.head.appendChild(s),
              s.contentWindow &&
                s.contentWindow.fetch &&
                (v = j(s.contentWindow.fetch)),
              d.head.removeChild(s);
          } catch (u) {
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              g.logger.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                u
              );
          }
        return v;
      }
      function y() {
        return "ReportingObserver" in P;
      }
      function b() {
        if (!h()) return !1;
        try {
          return new Request("_", { referrerPolicy: "origin" }), !0;
        } catch (v) {
          return !1;
        }
      }
      function f() {
        var v = P.chrome,
          d = v && v.app && v.app.runtime,
          s =
            "history" in P && !!P.history.pushState && !!P.history.replaceState;
        return !d && s;
      }
    },
    763007: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SyncPromise = void 0),
        (e.rejectedSyncPromise = h),
        (e.resolvedSyncPromise = p);
      var E = g(r(858240)),
        P = g(r(4636)),
        w = r(558527),
        _;
      (function (m) {
        var y = 0;
        m[(m.PENDING = y)] = "PENDING";
        var b = 1;
        m[(m.RESOLVED = b)] = "RESOLVED";
        var f = 2;
        m[(m.REJECTED = f)] = "REJECTED";
      })(_ || (_ = {}));
      function p(m) {
        return new j(function (y) {
          y(m);
        });
      }
      function h(m) {
        return new j(function (y, b) {
          b(m);
        });
      }
      var j = (function () {
        function m(y) {
          (0, E.default)(this, m),
            m.prototype.__init.call(this),
            m.prototype.__init2.call(this),
            m.prototype.__init3.call(this),
            m.prototype.__init4.call(this),
            m.prototype.__init5.call(this),
            m.prototype.__init6.call(this);
          try {
            y(this._resolve, this._reject);
          } catch (b) {
            this._reject(b);
          }
        }
        return (
          (0, P.default)(m, [
            {
              key: "__init",
              value: function () {
                this._state = _.PENDING;
              },
            },
            {
              key: "__init2",
              value: function () {
                this._handlers = [];
              },
            },
            {
              key: "then",
              value: function (b, f) {
                var v = this;
                return new m(function (d, s) {
                  v._handlers.push([
                    !1,
                    function (u) {
                      if (!b) d(u);
                      else
                        try {
                          d(b(u));
                        } catch (O) {
                          s(O);
                        }
                    },
                    function (u) {
                      if (!f) s(u);
                      else
                        try {
                          d(f(u));
                        } catch (O) {
                          s(O);
                        }
                    },
                  ]),
                    v._executeHandlers();
                });
              },
            },
            {
              key: "catch",
              value: function (b) {
                return this.then(function (f) {
                  return f;
                }, b);
              },
            },
            {
              key: "finally",
              value: function (b) {
                var f = this;
                return new m(function (v, d) {
                  var s, u;
                  return f
                    .then(
                      function (O) {
                        (u = !1), (s = O), b && b();
                      },
                      function (O) {
                        (u = !0), (s = O), b && b();
                      }
                    )
                    .then(function () {
                      if (u) {
                        d(s);
                        return;
                      }
                      v(s);
                    });
                });
              },
            },
            {
              key: "__init3",
              value: function () {
                var b = this;
                this._resolve = function (f) {
                  b._setResult(_.RESOLVED, f);
                };
              },
            },
            {
              key: "__init4",
              value: function () {
                var b = this;
                this._reject = function (f) {
                  b._setResult(_.REJECTED, f);
                };
              },
            },
            {
              key: "__init5",
              value: function () {
                var b = this;
                this._setResult = function (f, v) {
                  if (b._state === _.PENDING) {
                    if ((0, w.isThenable)(v)) {
                      v.then(b._resolve, b._reject);
                      return;
                    }
                    (b._state = f), (b._value = v), b._executeHandlers();
                  }
                };
              },
            },
            {
              key: "__init6",
              value: function () {
                var b = this;
                this._executeHandlers = function () {
                  if (b._state !== _.PENDING) {
                    var f = b._handlers.slice();
                    (b._handlers = []),
                      f.forEach(function (v) {
                        v[0] ||
                          (b._state === _.RESOLVED && v[1](b._value),
                          b._state === _.REJECTED && v[2](b._value),
                          (v[0] = !0));
                      });
                  }
                };
              },
            },
          ]),
          m
        );
      })();
      e.SyncPromise = j;
    },
    95143: function (D, e, r) {
      "use strict";
      (D = r.nmd(D)),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.usingPerformanceAPI =
          e.timestampWithMs =
          e.timestampInSeconds =
          e.dateTimestampInSeconds =
          e.browserPerformanceTimeOrigin =
          e._browserPerformanceTimeOriginMode =
            void 0);
      var g = r(701580),
        E = r(604538),
        P = (0, E.getGlobalObject)(),
        w = {
          nowSeconds: function () {
            return Date.now() / 1e3;
          },
        };
      function _() {
        var s = P.performance;
        if (!(!s || !s.now)) {
          var u = Date.now() - s.now();
          return {
            now: function () {
              return s.now();
            },
            timeOrigin: u,
          };
        }
      }
      function p() {
        try {
          var s = (0, g.dynamicRequire)(D, "perf_hooks");
          return s.performance;
        } catch (u) {
          return;
        }
      }
      var h = (0, g.isNodeEnv)() ? p() : _(),
        j =
          h === void 0
            ? w
            : {
                nowSeconds: function () {
                  return (h.timeOrigin + h.now()) / 1e3;
                },
              },
        m = w.nowSeconds.bind(w);
      e.dateTimestampInSeconds = m;
      var y = j.nowSeconds.bind(j);
      e.timestampInSeconds = y;
      var b = y;
      e.timestampWithMs = b;
      var f = h !== void 0;
      e.usingPerformanceAPI = f;
      var v;
      e._browserPerformanceTimeOriginMode = v;
      var d = (function () {
        var s = P.performance;
        if (!s || !s.now) {
          e._browserPerformanceTimeOriginMode = v = "none";
          return;
        }
        var u = 3600 * 1e3,
          O = s.now(),
          o = Date.now(),
          i = s.timeOrigin ? Math.abs(s.timeOrigin + O - o) : u,
          l = i < u,
          t = s.timing && s.timing.navigationStart,
          n = typeof t == "number",
          a = n ? Math.abs(t + O - o) : u,
          c = a < u;
        return l || c
          ? i <= a
            ? ((e._browserPerformanceTimeOriginMode = v = "timeOrigin"),
              s.timeOrigin)
            : ((e._browserPerformanceTimeOriginMode = v = "navigationStart"), t)
          : ((e._browserPerformanceTimeOriginMode = v = "dateNow"), o);
      })();
      e.browserPerformanceTimeOrigin = d;
    },
    625683: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TRACEPARENT_REGEXP = void 0),
        (e.extractTraceparentData = g);
      var r = new RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
      );
      e.TRACEPARENT_REGEXP = r;
      function g(E) {
        var P = E.match(r);
        if (!(!E || !P)) {
          var w;
          return (
            P[3] === "1" ? (w = !0) : P[3] === "0" && (w = !1),
            { traceId: P[1], parentSampled: w, parentSpanId: P[2] }
          );
        }
      }
    },
    664444: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getNumberOfUrlSegments = E),
        (e.parseUrl = r),
        (e.stripUrlQueryAndFragment = g);
      function r(P) {
        if (!P) return {};
        var w = P.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!w) return {};
        var _ = w[6] || "",
          p = w[8] || "";
        return {
          host: w[4],
          path: w[5],
          protocol: w[2],
          relative: w[5] + _ + p,
        };
      }
      function g(P) {
        return P.split(/[\?#]/, 1)[0];
      }
      function E(P) {
        return P.split(/\\?\//).filter(function (w) {
          return w.length > 0 && w !== ",";
        }).length;
      }
    },
    604538: function (D, e, r) {
      "use strict";
      var g = r(875832);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GLOBAL_OBJ = void 0),
        (e.getGlobalObject = _),
        (e.getGlobalSingleton = p);
      var E = g(r(569644));
      function P(h) {
        return h && h.Math == Math ? h : void 0;
      }
      var w =
        ((typeof globalThis == "undefined"
          ? "undefined"
          : (0, E.default)(globalThis)) == "object" &&
          P(globalThis)) ||
        ((typeof window == "undefined"
          ? "undefined"
          : (0, E.default)(window)) == "object" &&
          P(window)) ||
        ((typeof self == "undefined" ? "undefined" : (0, E.default)(self)) ==
          "object" &&
          P(self)) ||
        ((typeof r.g == "undefined" ? "undefined" : (0, E.default)(r.g)) ==
          "object" &&
          P(r.g)) ||
        (function () {
          return this;
        })() ||
        {};
      e.GLOBAL_OBJ = w;
      function _() {
        return w;
      }
      function p(h, j, m) {
        var y = m || w,
          b = (y.__SENTRY__ = y.__SENTRY__ || {}),
          f = b[h] || (b[h] = j());
        return f;
      }
    },
    354874: function (D, e, r) {
      "use strict";
      var g = r(875832),
        E = r(569644),
        P = g(r(375798)),
        w = g(r(569644));
      function _() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _ =
          function () {
            return K;
          };
        var K = {},
          G = Object.prototype,
          W = G.hasOwnProperty,
          X =
            Object.defineProperty ||
            function (ue, ee, ae) {
              ue[ee] = ae.value;
            },
          x = typeof Symbol == "function" ? Symbol : {},
          ne = x.iterator || "@@iterator",
          se = x.asyncIterator || "@@asyncIterator",
          ie = x.toStringTag || "@@toStringTag";
        function ge(ue, ee, ae) {
          return (
            Object.defineProperty(ue, ee, {
              value: ae,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            ue[ee]
          );
        }
        try {
          ge({}, "");
        } catch (ue) {
          ge = function (ae, le, ve) {
            return (ae[le] = ve);
          };
        }
        function he(ue, ee, ae, le) {
          var ve = ee && ee.prototype instanceof De ? ee : De,
            de = Object.create(ve.prototype),
            Se = new Ze(le || []);
          return X(de, "_invoke", { value: Ke(ue, ae, Se) }), de;
        }
        function ye(ue, ee, ae) {
          try {
            return { type: "normal", arg: ue.call(ee, ae) };
          } catch (le) {
            return { type: "throw", arg: le };
          }
        }
        K.wrap = he;
        var _e = {};
        function De() {}
        function Ie() {}
        function Ne() {}
        var Me = {};
        ge(Me, ne, function () {
          return this;
        });
        var Ae = Object.getPrototypeOf,
          ke = Ae && Ae(Ae(xe([])));
        ke && ke !== G && W.call(ke, ne) && (Me = ke);
        var Be = (Ne.prototype = De.prototype = Object.create(Me));
        function Ue(ue) {
          ["next", "throw", "return"].forEach(function (ee) {
            ge(ue, ee, function (ae) {
              return this._invoke(ee, ae);
            });
          });
        }
        function We(ue, ee) {
          function ae(ve, de, Se, we) {
            var je = ye(ue[ve], ue, de);
            if (je.type !== "throw") {
              var Fe = je.arg,
                Ce = Fe.value;
              return Ce && E(Ce) == "object" && W.call(Ce, "__await")
                ? ee.resolve(Ce.__await).then(
                    function (Ge) {
                      ae("next", Ge, Se, we);
                    },
                    function (Ge) {
                      ae("throw", Ge, Se, we);
                    }
                  )
                : ee.resolve(Ce).then(
                    function (Ge) {
                      (Fe.value = Ge), Se(Fe);
                    },
                    function (Ge) {
                      return ae("throw", Ge, Se, we);
                    }
                  );
            }
            we(je.arg);
          }
          var le;
          X(this, "_invoke", {
            value: function (de, Se) {
              function we() {
                return new ee(function (je, Fe) {
                  ae(de, Se, je, Fe);
                });
              }
              return (le = le ? le.then(we, we) : we());
            },
          });
        }
        function Ke(ue, ee, ae) {
          var le = "suspendedStart";
          return function (ve, de) {
            if (le === "executing")
              throw new Error("Generator is already running");
            if (le === "completed") {
              if (ve === "throw") throw de;
              return lt();
            }
            for (ae.method = ve, ae.arg = de; ; ) {
              var Se = ae.delegate;
              if (Se) {
                var we = Ve(Se, ae);
                if (we) {
                  if (we === _e) continue;
                  return we;
                }
              }
              if (ae.method === "next") ae.sent = ae._sent = ae.arg;
              else if (ae.method === "throw") {
                if (le === "suspendedStart") throw ((le = "completed"), ae.arg);
                ae.dispatchException(ae.arg);
              } else ae.method === "return" && ae.abrupt("return", ae.arg);
              le = "executing";
              var je = ye(ue, ee, ae);
              if (je.type === "normal") {
                if (
                  ((le = ae.done ? "completed" : "suspendedYield"),
                  je.arg === _e)
                )
                  continue;
                return { value: je.arg, done: ae.done };
              }
              je.type === "throw" &&
                ((le = "completed"), (ae.method = "throw"), (ae.arg = je.arg));
            }
          };
        }
        function Ve(ue, ee) {
          var ae = ee.method,
            le = ue.iterator[ae];
          if (le === void 0)
            return (
              (ee.delegate = null),
              (ae === "throw" &&
                ue.iterator.return &&
                ((ee.method = "return"),
                (ee.arg = void 0),
                Ve(ue, ee),
                ee.method === "throw")) ||
                (ae !== "return" &&
                  ((ee.method = "throw"),
                  (ee.arg = new TypeError(
                    "The iterator does not provide a '" + ae + "' method"
                  )))),
              _e
            );
          var ve = ye(le, ue.iterator, ee.arg);
          if (ve.type === "throw")
            return (
              (ee.method = "throw"), (ee.arg = ve.arg), (ee.delegate = null), _e
            );
          var de = ve.arg;
          return de
            ? de.done
              ? ((ee[ue.resultName] = de.value),
                (ee.next = ue.nextLoc),
                ee.method !== "return" &&
                  ((ee.method = "next"), (ee.arg = void 0)),
                (ee.delegate = null),
                _e)
              : de
            : ((ee.method = "throw"),
              (ee.arg = new TypeError("iterator result is not an object")),
              (ee.delegate = null),
              _e);
        }
        function Ye(ue) {
          var ee = { tryLoc: ue[0] };
          1 in ue && (ee.catchLoc = ue[1]),
            2 in ue && ((ee.finallyLoc = ue[2]), (ee.afterLoc = ue[3])),
            this.tryEntries.push(ee);
        }
        function Qe(ue) {
          var ee = ue.completion || {};
          (ee.type = "normal"), delete ee.arg, (ue.completion = ee);
        }
        function Ze(ue) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            ue.forEach(Ye, this),
            this.reset(!0);
        }
        function xe(ue) {
          if (ue) {
            var ee = ue[ne];
            if (ee) return ee.call(ue);
            if (typeof ue.next == "function") return ue;
            if (!isNaN(ue.length)) {
              var ae = -1,
                le = function ve() {
                  for (; ++ae < ue.length; )
                    if (W.call(ue, ae))
                      return (ve.value = ue[ae]), (ve.done = !1), ve;
                  return (ve.value = void 0), (ve.done = !0), ve;
                };
              return (le.next = le);
            }
          }
          return { next: lt };
        }
        function lt() {
          return { value: void 0, done: !0 };
        }
        return (
          (Ie.prototype = Ne),
          X(Be, "constructor", { value: Ne, configurable: !0 }),
          X(Ne, "constructor", { value: Ie, configurable: !0 }),
          (Ie.displayName = ge(Ne, ie, "GeneratorFunction")),
          (K.isGeneratorFunction = function (ue) {
            var ee = typeof ue == "function" && ue.constructor;
            return (
              !!ee &&
              (ee === Ie || (ee.displayName || ee.name) === "GeneratorFunction")
            );
          }),
          (K.mark = function (ue) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(ue, Ne)
                : ((ue.__proto__ = Ne), ge(ue, ie, "GeneratorFunction")),
              (ue.prototype = Object.create(Be)),
              ue
            );
          }),
          (K.awrap = function (ue) {
            return { __await: ue };
          }),
          Ue(We.prototype),
          ge(We.prototype, se, function () {
            return this;
          }),
          (K.AsyncIterator = We),
          (K.async = function (ue, ee, ae, le, ve) {
            ve === void 0 && (ve = Promise);
            var de = new We(he(ue, ee, ae, le), ve);
            return K.isGeneratorFunction(ee)
              ? de
              : de.next().then(function (Se) {
                  return Se.done ? Se.value : de.next();
                });
          }),
          Ue(Be),
          ge(Be, ie, "Generator"),
          ge(Be, ne, function () {
            return this;
          }),
          ge(Be, "toString", function () {
            return "[object Generator]";
          }),
          (K.keys = function (ue) {
            var ee = Object(ue),
              ae = [];
            for (var le in ee) ae.push(le);
            return (
              ae.reverse(),
              function ve() {
                for (; ae.length; ) {
                  var de = ae.pop();
                  if (de in ee) return (ve.value = de), (ve.done = !1), ve;
                }
                return (ve.done = !0), ve;
              }
            );
          }),
          (K.values = xe),
          (Ze.prototype = {
            constructor: Ze,
            reset: function (ee) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(Qe),
                !ee)
              )
                for (var ae in this)
                  ae.charAt(0) === "t" &&
                    W.call(this, ae) &&
                    !isNaN(+ae.slice(1)) &&
                    (this[ae] = void 0);
            },
            stop: function () {
              this.done = !0;
              var ee = this.tryEntries[0].completion;
              if (ee.type === "throw") throw ee.arg;
              return this.rval;
            },
            dispatchException: function (ee) {
              if (this.done) throw ee;
              var ae = this;
              function le(Fe, Ce) {
                return (
                  (Se.type = "throw"),
                  (Se.arg = ee),
                  (ae.next = Fe),
                  Ce && ((ae.method = "next"), (ae.arg = void 0)),
                  !!Ce
                );
              }
              for (var ve = this.tryEntries.length - 1; ve >= 0; --ve) {
                var de = this.tryEntries[ve],
                  Se = de.completion;
                if (de.tryLoc === "root") return le("end");
                if (de.tryLoc <= this.prev) {
                  var we = W.call(de, "catchLoc"),
                    je = W.call(de, "finallyLoc");
                  if (we && je) {
                    if (this.prev < de.catchLoc) return le(de.catchLoc, !0);
                    if (this.prev < de.finallyLoc) return le(de.finallyLoc);
                  } else if (we) {
                    if (this.prev < de.catchLoc) return le(de.catchLoc, !0);
                  } else {
                    if (!je)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < de.finallyLoc) return le(de.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (ee, ae) {
              for (var le = this.tryEntries.length - 1; le >= 0; --le) {
                var ve = this.tryEntries[le];
                if (
                  ve.tryLoc <= this.prev &&
                  W.call(ve, "finallyLoc") &&
                  this.prev < ve.finallyLoc
                ) {
                  var de = ve;
                  break;
                }
              }
              de &&
                (ee === "break" || ee === "continue") &&
                de.tryLoc <= ae &&
                ae <= de.finallyLoc &&
                (de = null);
              var Se = de ? de.completion : {};
              return (
                (Se.type = ee),
                (Se.arg = ae),
                de
                  ? ((this.method = "next"), (this.next = de.finallyLoc), _e)
                  : this.complete(Se)
              );
            },
            complete: function (ee, ae) {
              if (ee.type === "throw") throw ee.arg;
              return (
                ee.type === "break" || ee.type === "continue"
                  ? (this.next = ee.arg)
                  : ee.type === "return"
                  ? ((this.rval = this.arg = ee.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : ee.type === "normal" && ae && (this.next = ae),
                _e
              );
            },
            finish: function (ee) {
              for (var ae = this.tryEntries.length - 1; ae >= 0; --ae) {
                var le = this.tryEntries[ae];
                if (le.finallyLoc === ee)
                  return this.complete(le.completion, le.afterLoc), Qe(le), _e;
              }
            },
            catch: function (ee) {
              for (var ae = this.tryEntries.length - 1; ae >= 0; --ae) {
                var le = this.tryEntries[ae];
                if (le.tryLoc === ee) {
                  var ve = le.completion;
                  if (ve.type === "throw") {
                    var de = ve.arg;
                    Qe(le);
                  }
                  return de;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (ee, ae, le) {
              return (
                (this.delegate = {
                  iterator: xe(ee),
                  resultName: ae,
                  nextLoc: le,
                }),
                this.method === "next" && (this.arg = void 0),
                _e
              );
            },
          }),
          K
        );
      }
      function p(K, G) {
        var W =
          (typeof Symbol != "undefined" && K[Symbol.iterator]) ||
          K["@@iterator"];
        if (!W) {
          if (
            Array.isArray(K) ||
            (W = h(K)) ||
            (G && K && typeof K.length == "number")
          ) {
            W && (K = W);
            var X = 0,
              x = function () {};
            return {
              s: x,
              n: function () {
                return X >= K.length
                  ? { done: !0 }
                  : { done: !1, value: K[X++] };
              },
              e: function (he) {
                throw he;
              },
              f: x,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var ne = !0,
          se = !1,
          ie;
        return {
          s: function () {
            W = W.call(K);
          },
          n: function () {
            var he = W.next();
            return (ne = he.done), he;
          },
          e: function (he) {
            (se = !0), (ie = he);
          },
          f: function () {
            try {
              !ne && W.return != null && W.return();
            } finally {
              if (se) throw ie;
            }
          },
        };
      }
      function h(K, G) {
        if (!!K) {
          if (typeof K == "string") return j(K, G);
          var W = Object.prototype.toString.call(K).slice(8, -1);
          if (
            (W === "Object" && K.constructor && (W = K.constructor.name),
            W === "Map" || W === "Set")
          )
            return Array.from(K);
          if (
            W === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)
          )
            return j(K, G);
        }
      }
      function j(K, G) {
        (G == null || G > K.length) && (G = K.length);
        for (var W = 0, X = new Array(G); W < G; W++) X[W] = K[W];
        return X;
      }
      var m = Object.defineProperty,
        y = Object.getOwnPropertyDescriptor,
        b = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        s = function (G, W, X) {
          return W in G
            ? m(G, W, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: X,
              })
            : (G[W] = X);
        },
        u = function (G, W) {
          for (var X in W || (W = {})) v.call(W, X) && s(G, X, W[X]);
          if (f) {
            var x = p(f(W)),
              ne;
            try {
              for (x.s(); !(ne = x.n()).done; ) {
                var X = ne.value;
                d.call(W, X) && s(G, X, W[X]);
              }
            } catch (se) {
              x.e(se);
            } finally {
              x.f();
            }
          }
          return G;
        },
        O = function (G, W) {
          var X = {};
          for (var x in G) v.call(G, x) && W.indexOf(x) < 0 && (X[x] = G[x]);
          if (G != null && f) {
            var ne = p(f(G)),
              se;
            try {
              for (ne.s(); !(se = ne.n()).done; ) {
                var x = se.value;
                W.indexOf(x) < 0 && d.call(G, x) && (X[x] = G[x]);
              }
            } catch (ie) {
              ne.e(ie);
            } finally {
              ne.f();
            }
          }
          return X;
        },
        o = function (G, W) {
          for (var X in W) m(G, X, { get: W[X], enumerable: !0 });
        },
        i = function (G, W, X, x) {
          if ((W && (0, w.default)(W) === "object") || typeof W == "function") {
            var ne = p(b(W)),
              se;
            try {
              var ie = function () {
                var he = se.value;
                !v.call(G, he) &&
                  he !== X &&
                  m(G, he, {
                    get: function () {
                      return W[he];
                    },
                    enumerable: !(x = y(W, he)) || x.enumerable,
                  });
              };
              for (ne.s(); !(se = ne.n()).done; ) ie();
            } catch (ge) {
              ne.e(ge);
            } finally {
              ne.f();
            }
          }
          return G;
        },
        l = function (G) {
          return i(m({}, "__esModule", { value: !0 }), G);
        },
        t = function (G, W, X) {
          return new Promise(function (x, ne) {
            var se = function (ye) {
                try {
                  ge(X.next(ye));
                } catch (_e) {
                  ne(_e);
                }
              },
              ie = function (ye) {
                try {
                  ge(X.throw(ye));
                } catch (_e) {
                  ne(_e);
                }
              },
              ge = function (ye) {
                return ye.done
                  ? x(ye.value)
                  : Promise.resolve(ye.value).then(se, ie);
              };
            ge((X = X.apply(G, W)).next());
          });
        },
        n = {};
      o(n, {
        RUM_PREFIX: function () {
          return He;
        },
        default: function () {
          return $t;
        },
        getCumulativeLayoutShift: function () {
          return A;
        },
        getDecodedBodySize: function () {
          return Z;
        },
        getDomContentLoadedEventEnd: function () {
          return te;
        },
        getDomContentLoadedEventStart: function () {
          return J;
        },
        getDomainLookup: function () {
          return oe;
        },
        getEncodedBodySize: function () {
          return q;
        },
        getFirstContentfulPaint: function () {
          return ce;
        },
        getFirstInputDelay: function () {
          return pe;
        },
        getLargestContentfulPaint: function () {
          return Oe;
        },
        getLoadEventEnd: function () {
          return Ee;
        },
        getLoadEventStart: function () {
          return be;
        },
        getPerformanceMetrics: function () {
          return $e;
        },
        getResponseStart: function () {
          return Pe;
        },
        getTcpConnection: function () {
          return Te;
        },
        getTlsNegotiation: function () {
          return Re;
        },
        init: function () {
          return st;
        },
        mark: function () {
          return Pt;
        },
        measure: function () {
          return wt;
        },
        trackEventsV2Factory: function () {
          return Wt;
        },
        trackLoadPerformance: function () {
          return Yt;
        },
        trackSqspImages: function () {
          return rt;
        },
      }),
        (D.exports = l(n));
      var a = {};
      o(a, {
        getCumulativeLayoutShift: function () {
          return A;
        },
        getDecodedBodySize: function () {
          return Z;
        },
        getDomContentLoadedEventEnd: function () {
          return te;
        },
        getDomContentLoadedEventStart: function () {
          return J;
        },
        getDomainLookup: function () {
          return oe;
        },
        getEncodedBodySize: function () {
          return q;
        },
        getFirstContentfulPaint: function () {
          return ce;
        },
        getFirstInputDelay: function () {
          return pe;
        },
        getLargestContentfulPaint: function () {
          return Oe;
        },
        getLoadEventEnd: function () {
          return Ee;
        },
        getLoadEventStart: function () {
          return be;
        },
        getResponseStart: function () {
          return Pe;
        },
        getTcpConnection: function () {
          return Te;
        },
        getTlsNegotiation: function () {
          return Re;
        },
      });
      var c = r(114499),
        A = function (G) {
          (0, c.onCLS)(function (W) {
            var X;
            G({
              cumulativeLayoutShift:
                (X = W == null ? void 0 : W.value) != null ? X : void 0,
            });
          });
        },
        C = "/api/1/performance",
        U = "/records",
        L = "/settings",
        S = "load",
        B = "visibilitychange",
        Y = "SS_MID",
        F = "SS_ANALYTICS_ID",
        z = 3e4,
        Q = 3e4,
        V =
          /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i,
        N = function (G) {
          return function () {
            for (var W = arguments.length, X = new Array(W), x = 0; x < W; x++)
              X[x] = arguments[x];
            return new Promise(function (ne, se) {
              try {
                G.apply(
                  void 0,
                  [
                    function (ie) {
                      ne(ie);
                    },
                  ].concat(X)
                );
              } catch (ie) {
                se(ie);
              }
            });
          };
        },
        R = function (G) {
          return N(setTimeout)(G);
        },
        T = function () {
          return N(function (G) {
            var W = function X(x) {
              (x.type === "pagehide" ||
                document.visibilityState === "hidden") &&
                (G(x),
                removeEventListener("visibilitychange", X, !0),
                removeEventListener("pagehide", X, !0));
            };
            window.addEventListener("visibilitychange", W, !0),
              window.addEventListener("pagehide", W, !0);
          })();
        },
        k = function (G) {
          document.readyState === "complete"
            ? window.setTimeout(G, 0)
            : window.addEventListener("pageshow", G, { once: !0 });
        },
        M = function () {
          return N(k);
        },
        $ = function () {
          var G = { entryType: "navigation", startTime: 0 },
            W = performance.timing;
          for (var X in W)
            if (X !== "navigationStart" && X !== "toJSON") {
              var x = Math.max(W[X] - W.navigationStart, 0);
              G[X] = x;
            }
          return G;
        },
        I = function (G) {
          return t(
            void 0,
            null,
            _().mark(function W() {
              var X, x, ne, se, ie;
              return _().wrap(function (he) {
                for (;;)
                  switch ((he.prev = he.next)) {
                    case 0:
                      return (he.next = 2), M();
                    case 2:
                      if (
                        ((X =
                          window.performance.getEntriesByType("navigation")),
                        (x = (0, P.default)(X, 1)),
                        (ne = x[0]),
                        (se = ne != null ? ne : $()),
                        (ie = se[G]),
                        !(typeof ie != "number" || ie < 0 || ie > 2147483647))
                      ) {
                        he.next = 7;
                        break;
                      }
                      return he.abrupt("return");
                    case 7:
                      return he.abrupt("return", Math.round(ie));
                    case 8:
                    case "end":
                      return he.stop();
                  }
              }, W);
            })
          );
        },
        H = function (G, W) {
          if (typeof G == "number" && typeof W == "number" && G >= W)
            return G - W;
        },
        Z = function (G) {
          return I("decodedBodySize").then(function (W) {
            G({ decodedBodySize: W });
          });
        },
        oe = function (G) {
          return Promise.all([
            I("domainLookupEnd"),
            I("domainLookupStart"),
          ]).then(function (W) {
            var X = (0, P.default)(W, 2),
              x = X[0],
              ne = X[1];
            G({ domainLookup: H(x, ne) });
          });
        },
        te = function (G) {
          return I("domContentLoadedEventEnd").then(function (W) {
            G({ domContentLoadedEventEnd: W });
          });
        },
        J = function (G) {
          return I("domContentLoadedEventStart").then(function (W) {
            G({ domContentLoadedEventStart: W });
          });
        },
        q = function (G) {
          return I("encodedBodySize").then(function (W) {
            G({ encodedBodySize: W });
          });
        },
        re = r(114499),
        ce = function (G) {
          (0, re.onFCP)(function (W) {
            G({ firstContentfulPaint: W ? Math.round(W.value) : void 0 });
          });
        },
        fe = r(114499),
        pe = function (G) {
          (0, fe.onFID)(function (W) {
            G({ firstInputDelay: W ? Math.round(W.value) : void 0 });
          });
        },
        me = r(114499),
        Oe = function (G) {
          (0, me.onLCP)(function (W) {
            G({ largestContentfulPaint: W ? Math.round(W.value) : void 0 });
          });
        },
        Ee = function (G) {
          return I("loadEventEnd").then(function (W) {
            G({ loadEventEnd: W });
          });
        },
        be = function (G) {
          return I("loadEventStart").then(function (W) {
            G({ loadEventStart: W });
          });
        },
        Pe = function (G) {
          return I("responseStart").then(function (W) {
            G({ responseStart: W });
          });
        },
        Te = function (G) {
          return Promise.all([I("connectEnd"), I("connectStart")]).then(
            function (W) {
              var X = (0, P.default)(W, 2),
                x = X[0],
                ne = X[1];
              G({ tcpConnection: H(x, ne) });
            }
          );
        },
        Re = function (G) {
          return Promise.all([
            I("connectEnd"),
            I("secureConnectionStart"),
          ]).then(function (W) {
            var X = (0, P.default)(W, 2),
              x = X[0],
              ne = X[1];
            G({ tlsNegotiation: H(x, ne) });
          });
        };
      function $e(K) {
        var G = this;
        Object.values(a).forEach(function (W) {
          return t(
            G,
            null,
            _().mark(function X() {
              var x, ne;
              return _().wrap(
                function (ie) {
                  for (;;)
                    switch ((ie.prev = ie.next)) {
                      case 0:
                        return (ie.prev = 0), (ie.next = 3), W(K);
                      case 3:
                        ie.next = 8;
                        break;
                      case 5:
                        (ie.prev = 5),
                          (ie.t0 = ie.catch(0)),
                          (ne =
                            (x =
                              window == null
                                ? void 0
                                : window.SQUARESPACE_SENTRY) == null
                              ? void 0
                              : x.captureException) == null ||
                            ne.call(x, ie.t0);
                      case 8:
                      case "end":
                        return ie.stop();
                    }
                },
                X,
                null,
                [[0, 5]]
              );
            })
          );
        });
      }
      var Xe = "4.8.0";
      function qe(K) {
        var G = new RegExp("(^| )".concat(K, "=([^;]+)")),
          W = document.cookie.match(G);
        return W ? W[2] : "";
      }
      function dt() {
        return !!(window.PerformanceMeasure && window.PerformanceMark);
      }
      function et() {
        if (
          !Object.prototype.hasOwnProperty.call(window, "PerformanceObserver")
        )
          return !1;
        try {
          var K = new window.PerformanceObserver(function () {
            return null;
          });
          K.observe({ entryTypes: ["mark"] }), K.disconnect();
        } catch (G) {
          return !1;
        }
        return !0;
      }
      function tt() {
        var K;
        return (
          typeof ((K = window.navigator) == null ? void 0 : K.sendBeacon) ==
            "function" && !V.test(window.navigator.userAgent)
        );
      }
      function pt() {
        var K =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          G,
          W,
          X,
          x,
          ne,
          se,
          ie;
        return {
          context: K,
          analyticsId: qe(F),
          marketingId: qe(Y),
          memberId:
            (X =
              (W =
                (G = window.Static) == null ? void 0 : G.SQUARESPACE_CONTEXT) ==
              null
                ? void 0
                : W.authenticatedAccount) == null
              ? void 0
              : X.id,
          version: Xe,
          connection: {
            downlink: (x = navigator.connection) == null ? void 0 : x.downlink,
            effectiveType:
              (ne = navigator.connection) == null ? void 0 : ne.effectiveType,
            rtt: (se = navigator.connection) == null ? void 0 : se.rtt,
            saveData:
              (ie = navigator.connection) == null ? void 0 : ie.saveData,
          },
          deliveryType: tt() ? "beacon" : "xhr",
          display: {
            devicePixelRatio: window.devicePixelRatio,
            screenHeight: window.screen.height,
            screenWidth: window.screen.width,
            viewportHeight: window.innerHeight,
            viewportWidth: window.innerWidth,
          },
          hardware: {
            deviceMemory: navigator.deviceMemory,
            hardwareConcurrency: navigator.hardwareConcurrency,
          },
          hash: window.location.hash || "",
          hostname: window.location.hostname || "",
          pathname: window.location.pathname || "/",
        };
      }
      var vt = function (G) {
          return t(
            void 0,
            null,
            _().mark(function W() {
              var X, x;
              return _().wrap(function (se) {
                for (;;)
                  switch ((se.prev = se.next)) {
                    case 0:
                      return (
                        (X = pt(G)),
                        (x = {}),
                        $e(function (ie) {
                          Object.assign(x, ie);
                        }),
                        (se.next = 5),
                        Promise.race([R(6e4), T()])
                      );
                    case 5:
                      return se.abrupt("return", u(u({}, X), x));
                    case 6:
                    case "end":
                      return se.stop();
                  }
              }, W);
            })
          );
        },
        gt = function (G, W) {
          return t(
            void 0,
            null,
            _().mark(function X() {
              var x;
              return _().wrap(function (se) {
                for (;;)
                  switch ((se.prev = se.next)) {
                    case 0:
                      return (se.next = 2), vt(W);
                    case 2:
                      (x = se.sent), G(x, "page_speed");
                    case 4:
                    case "end":
                      return se.stop();
                  }
              }, X);
            })
          );
        },
        ht = [
          "media-www.sqspcdn.com",
          "images.squarespace-cdn.com",
          "static1.squarespace.com",
        ],
        mt = function (G) {
          return ht.some(function (W) {
            return G.includes(W);
          });
        },
        yt = function (G) {
          return G.hasAttribute("data-loader")
            ? 2
            : G.hasAttribute("data-src")
            ? 1
            : 0;
        },
        bt = function (G, W) {
          var X;
          if (G.hasAttribute("data-image-resolution"))
            return Number(
              (X = G.getAttribute("data-image-resolution")) == null
                ? void 0
                : X.replace("w", "")
            );
          var x = W.indexOf("format=");
          return x !== -1 ? Number(W.slice(x + 7).replace(/w.*/, "")) : NaN;
        },
        Ot = function (G, W, X) {
          if (
            X === 1 &&
            G instanceof HTMLImageElement &&
            G.naturalHeight === 0
          ) {
            var x = document.querySelector('div[style*="'.concat(W, '"]'));
            if (x) return x;
          }
          return G;
        },
        Et = function (G) {
          if (G instanceof HTMLImageElement) {
            var W = G.naturalHeight,
              X = G.naturalWidth,
              x = G.width,
              ne = G.height;
            return { naturalHeight: W, naturalWidth: X, width: x, height: ne };
          }
          var se = G.getBoundingClientRect(),
            ie = Math.floor(se.width),
            ge = Math.floor(se.height);
          return { naturalHeight: ge, naturalWidth: ie };
        },
        _t = function (G, W) {
          return t(
            void 0,
            null,
            _().mark(function X() {
              var x, ne, se, ie, ge, he, ye, _e, De, Ie, Ne, Me, Ae, ke;
              return _().wrap(function (Ue) {
                for (;;)
                  switch ((Ue.prev = Ue.next)) {
                    case 0:
                      for (
                        x = bt(W, G.name),
                          ne = yt(W),
                          se = W.getAttribute("data-loader"),
                          ie = G.toJSON(),
                          ge = ie.serverTiming,
                          he = ie.workerTiming,
                          ye = O(ie, ["serverTiming", "workerTiming"]),
                          _e = 0,
                          De = Object.entries(ye);
                        _e < De.length;
                        _e++
                      )
                        (Ie = (0, P.default)(De[_e], 2)),
                          (Ne = Ie[0]),
                          (Me = Ie[1]),
                          typeof Me == "number" && (ye[Ne] = Math.floor(Me));
                      return (
                        (Ae = Ot(W, G.name, ne)),
                        (ke = Et(Ae)),
                        Ue.abrupt(
                          "return",
                          new Promise(function (We) {
                            var Ke = new IntersectionObserver(function (Ve) {
                              Ve.forEach(function (Ye) {
                                if (Ye.target === Ae)
                                  return (
                                    Ke.disconnect(),
                                    We(
                                      u(
                                        u(
                                          {
                                            visibleOnLoad: Ye.isIntersecting,
                                            observationTime: Math.floor(
                                              Ye.time
                                            ),
                                            intersectionRatio:
                                              Ye.intersectionRatio,
                                            squarespaceSize: x,
                                            imageType: ne,
                                            imageLoaderType: se,
                                          },
                                          ke
                                        ),
                                        ye
                                      )
                                    )
                                  );
                              });
                            });
                            Ke.observe(Ae);
                          })
                        )
                      );
                    case 8:
                    case "end":
                      return Ue.stop();
                  }
              }, X);
            })
          );
        },
        St = function (G) {
          return t(void 0, [G], function (W) {
            var X = W.resource,
              x = W.deliverMetrics;
            return _().mark(function ne() {
              var se, ie, ge;
              return _().wrap(function (ye) {
                for (;;)
                  switch ((ye.prev = ye.next)) {
                    case 0:
                      if (
                        !(
                          !(
                            X instanceof PerformanceResourceTiming &&
                            X.initiatorType === "img"
                          ) || !mt(X.name)
                        )
                      ) {
                        ye.next = 2;
                        break;
                      }
                      return ye.abrupt("return");
                    case 2:
                      if (
                        ((se = X.name.replace(/\?.*/, "")),
                        (ie = Array.from(
                          document.querySelectorAll(
                            'img[src="'
                              .concat(X.name, '"], img[data-src*="')
                              .concat(se, '"], img[srcset*="')
                              .concat(X.name, '"]')
                          )
                        )),
                        document
                          .querySelectorAll(
                            'picture > source[srcset="'.concat(X.name, '"]')
                          )
                          .forEach(function (_e) {
                            var De = _e.parentElement;
                            De !== null && ie.push(De);
                          }),
                        ie.length === 1)
                      ) {
                        ye.next = 7;
                        break;
                      }
                      return ye.abrupt("return");
                    case 7:
                      return (ye.next = 9), _t(X, ie[0]);
                    case 9:
                      (ge = ye.sent), x(ge, "image");
                    case 11:
                    case "end":
                      return ye.stop();
                  }
              }, ne);
            })();
          });
        },
        rt = function (G) {
          return t(
            void 0,
            null,
            _().mark(function W() {
              var X, x;
              return _().wrap(function (se) {
                for (;;)
                  switch ((se.prev = se.next)) {
                    case 0:
                      if (et()) {
                        se.next = 2;
                        break;
                      }
                      return se.abrupt("return");
                    case 2:
                      (X = function (ge) {
                        return St({ resource: ge, deliverMetrics: G });
                      }),
                        performance.getEntriesByType("resource").forEach(X),
                        (x = new PerformanceObserver(function (ie) {
                          ie.getEntries().forEach(X);
                        })),
                        x.observe({ entryTypes: ["resource"] });
                    case 6:
                    case "end":
                      return se.stop();
                  }
              }, W);
            })
          );
        },
        Le,
        Je = function (G) {
          var W = G.spanName,
            X = G.tracer,
            x = G.startTime,
            ne = G.spanAttributes,
            se = ne === void 0 ? {} : ne;
          Le === void 0 && (Le = new Map());
          var ie = X.startSpan(W, { startTime: x });
          ie.setAttributes(se), Le.set(W, ie);
        },
        nt = function (G) {
          var W = G.spanName,
            X = G.spanAttributes,
            x = X === void 0 ? {} : X;
          if (!(Le === void 0 || !Le.has(W))) {
            var ne = Le.get(W);
            ne.setAttributes(x), ne.end(), Le.delete(W);
          }
        },
        He = "rum-",
        at = function (G) {
          var W;
          typeof ((W = window == null ? void 0 : window.SQUARESPACE_SENTRY) ==
          null
            ? void 0
            : W.captureException) == "function"
            ? window.SQUARESPACE_SENTRY.captureException(G)
            : console.warn(
                "@sqs/rum-collector: user timing exception: ".concat(G)
              );
        };
      function Pt(K) {
        var G =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
          if (!it()) return;
          var W = He + K;
          if (
            (window.performance.clearMarks(W),
            window.performance.mark(W, {
              detail: G.detail,
              startTime: G.startTime,
            }),
            G.tracer !== void 0)
          ) {
            var X = window.performance.getEntriesByName(W, "mark").slice(-1),
              x = (0, P.default)(X, 1),
              ne = x[0];
            Je({
              spanName: K,
              tracer: G.tracer,
              startTime: ne.startTime,
              spanAttributes: G.spanAttributes,
            });
          }
        } catch (se) {
          at(se);
        }
      }
      function wt(K) {
        var G =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { requireStart: !1 };
        try {
          if (!(it() && jt())) return;
          var W = He + K,
            X = { detail: G.detail, duration: G.duration };
          if (
            (G.start === void 0
              ? (X.start = W)
              : typeof G.start == "string"
              ? (X.start = He + G.start)
              : (X.start = G.start),
            (X.end = typeof G.end == "string" ? He + G.end : G.end),
            G.requireStart &&
              (typeof X.start == "number" ||
                window.performance.getEntriesByName(X.start, "mark").length ===
                  0))
          )
            return;
          if (G.tracer !== void 0) {
            var x = u({ measureName: W }, G.spanAttributes);
            typeof X.start == "number"
              ? (Je({ spanName: W, tracer: G.tracer, startTime: X.start }),
                nt({ spanName: W, spanAttributes: x }))
              : (window.performance.getEntriesByName(X.start, "mark").length ===
                  0 &&
                  Je({ spanName: X.start, tracer: G.tracer, startTime: 0 }),
                nt({ spanName: X.start, spanAttributes: x }));
          }
          Rt(W, X);
          var ne = Tt(W);
          return ne;
        } catch (se) {
          at(se);
        }
      }
      function jt() {
        return (
          "performance" in window &&
          "getEntries" in window.performance &&
          "getEntriesByType" in window.performance &&
          "getEntriesByName" in window.performance
        );
      }
      function it() {
        return "mark" in window.performance && "measure" in window.performance;
      }
      function Tt(K) {
        var G = window.performance.getEntriesByName(K, "measure");
        return G[G.length - 1];
      }
      function Rt(K, G) {
        try {
          window.performance.measure(K, G);
        } catch (x) {
          var W = typeof G.start == "string" ? G.start : K,
            X = typeof G.end == "string" ? G.end : void 0;
          try {
            window.performance.measure(K, W, X);
          } catch (ne) {
            if (!(ne instanceof DOMException)) throw ne;
            try {
              window.performance.measure(K, "navigationStart");
            } catch (se) {
              if (!(se instanceof DOMException)) throw se;
              window.performance.measure(K);
            }
          }
        }
      }
      function Dt(K) {
        return typeof K == "string" && K.substring(0, 4) === He;
      }
      function Nt(K) {
        var G = {};
        for (var W in K) typeof K[W] != "function" && (G[W] = K[W]);
        return G;
      }
      var ot = new Set(),
        It = function (G) {
          if (!!dt()) {
            var W = function (ne) {
              var se = ne.map(Nt);
              se.forEach(function (ie) {
                if (!!Dt(ie.name)) {
                  var ge = "".concat(ie.name, "|").concat(ie.duration);
                  ot.has(ge) || (G(ie, "user"), ot.add(ge));
                }
              });
            };
            if ((W(window.performance.getEntriesByType("measure")), et())) {
              var X = new window.PerformanceObserver(function (x) {
                return W(x.getEntries());
              });
              X.observe({ entryTypes: ["measure"] });
            } else
              document.addEventListener(B, function () {
                document.visibilityState === "hidden" &&
                  W(window.performance.getEntriesByType("measure"));
              });
          }
        },
        ut,
        ze = [],
        At = function (G) {
          ze.push(G);
        };
      function Ct(K, G) {
        if (!(tt() && navigator.sendBeacon(K, G))) {
          var W = new XMLHttpRequest();
          W.open("POST", K, !0),
            W.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
            W.send(G);
        }
      }
      function ct() {
        if (ze.length) {
          var K = JSON.stringify(ze);
          Ct(C + U, K), (ze = []);
        }
      }
      function Lt() {
        window.addEventListener(S, function () {
          ut = window.setTimeout(ct, Q);
        }),
          document.addEventListener(B, function () {
            document.visibilityState === "hidden" &&
              (window.clearTimeout(ut), ct());
          });
      }
      function Mt(K) {
        At(u({ raw: !0 }, K));
      }
      var kt = function (G, W) {
          return function (X, x) {
            var ne = {
              app: G,
              data: X,
              event: x,
              pageLoadId: W,
              ts: Date.now(),
            };
            Mt(ne);
          };
        },
        Bt = function () {
          return new Promise(function (G, W) {
            var X = new XMLHttpRequest();
            (X.onreadystatechange = function () {
              if (X.readyState === XMLHttpRequest.DONE)
                if (X.status === 200)
                  try {
                    G(JSON.parse(X.response));
                  } catch (x) {
                    W(x);
                  }
                else
                  X.status !== 0 &&
                    W(
                      new Error(
                        "XHR request DONE with unexpected status: ".concat(
                          X.status
                        )
                      )
                    );
            }),
              (X.ontimeout = function () {
                W(new Error("Metric settings request timeout"));
              }),
              X.open("GET", C + L, !0),
              (X.timeout = z),
              X.send();
          });
        },
        Ut = function (G) {
          return function () {
            G && G.apply(void 0, arguments);
          };
        },
        Ft = function (G) {
          var W = {
            appName: G.appName || "",
            context: G.context || {},
            enabled: typeof G.enabled == "boolean" ? G.enabled : !0,
            captureException: Ut(G.captureException),
          };
          return W;
        };
      function st(K) {
        return t(
          this,
          null,
          _().mark(function G() {
            var W, X, x, ne;
            return _().wrap(
              function (ie) {
                for (;;)
                  switch ((ie.prev = ie.next)) {
                    case 0:
                      if (((W = Ft(K)), W.enabled)) {
                        ie.next = 3;
                        break;
                      }
                      return ie.abrupt("return");
                    case 3:
                      return (X = ""), (ie.prev = 4), (ie.next = 7), Bt();
                    case 7:
                      if (((x = ie.sent), (X = x.pageLoadId), X)) {
                        ie.next = 11;
                        break;
                      }
                      throw new Error("Unable to resolve pageLoadId");
                    case 11:
                      (ne = kt(W.appName, X)),
                        gt(ne, W.context),
                        It(ne),
                        rt(ne),
                        Lt(),
                        (ie.next = 21);
                      break;
                    case 18:
                      (ie.prev = 18),
                        (ie.t0 = ie.catch(4)),
                        W.captureException(ie.t0, {
                          pageLoadId: X,
                          parsedOptions: W,
                        });
                    case 21:
                    case "end":
                      return ie.stop();
                  }
              },
              G,
              null,
              [[4, 18]]
            );
          })
        );
      }
      var Gt = {
          action: "load",
          actor: "user",
          event_owner_team: "web_performance",
          event_source: "web",
          object_type: "website",
        },
        Ht = function () {
          var G = /^qa\d+.sqsp.net/g,
            W = /^stage.sqsp.net/g,
            X = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g,
            x = window.location.hostname.substr(
              window.location.hostname.indexOf(".") + 1
            );
          return W.test(x) || G.test(x)
            ? "staging"
            : X.test(x)
            ? "dev"
            : "prod";
        },
        Wt = function (G) {
          var W =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : Ht();
          return new G(
            { customSchemaName: "Performance", sourceEnvironment: W },
            Gt
          );
        },
        ft = Object.freeze({
          cumulativeLayoutShift: "cumulative_layout_shift",
          decodedBodySize: "decoded_body_size_bytes",
          domContentLoadedEventEnd: "dom_content_loaded_event_end_ms",
          domContentLoadedEventStart: "dom_content_loaded_event_start_ms",
          domainLookup: "domain_lookup_ms",
          encodedBodySize: "encoded_body_size_bytes",
          firstContentfulPaint: "first_contentful_paint_ms",
          firstInputDelay: "first_input_delay_ms",
          largestContentfulPaint: "largest_contentful_paint_ms",
          loadEventEnd: "load_event_end_ms",
          loadEventStart: "load_event_start_ms",
          responseStart: "response_start_ms",
          tcpConnection: "tcp_connection_ms",
          tlsNegotiation: "tls_negotiation_ms",
        }),
        Yt = function (G) {
          return t(
            void 0,
            null,
            _().mark(function W() {
              var X;
              return _().wrap(function (ne) {
                for (;;)
                  switch ((ne.prev = ne.next)) {
                    case 0:
                      return (
                        (X = {}),
                        $e(function (se) {
                          Object.entries(se).forEach(function (ie) {
                            var ge = (0, P.default)(ie, 2),
                              he = ge[0],
                              ye = ge[1];
                            Object.prototype.hasOwnProperty.call(ft, he) &&
                              (X[ft[he]] = ye);
                          });
                        }),
                        (ne.next = 4),
                        Promise.race([R(6e4), T()])
                      );
                    case 4:
                      G(X);
                    case 5:
                    case "end":
                      return ne.stop();
                  }
              }, W);
            })
          );
        };
      function $t() {
        return (
          console.warn(
            "@sqs/rum-collector default export is deprecated. Use named export `init` instead."
          ),
          st.apply(void 0, arguments)
        );
      }
    },
    768918: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r;
      (function (E) {
        (E.MAIN_CONTENT = 1),
          (E.CONTENT_COLLECTION = 1),
          (E.PAGE = 2),
          (E.SPLASH_PAGE = 3),
          (E.CONTENT_ITEM = 50),
          (E.NOT_FOUND = 100),
          (E.ERROR = 101),
          (E.SEARCH = 102),
          (E.LOCK_SCREEN = 103),
          (E.POPUP_OVERLAY = 104),
          (E.PROTECTED_CONTENT = 105),
          (E.MEMBER_AREA_ACCESS_DENIED = 106),
          (E.SHOW_CART = 200),
          (E.CHECKOUT = 201),
          (E.ORDER_CONFIRMED = 202),
          (E.DONATE = 203),
          (E.CONTRIBUTION_CONFIRMED = 204),
          (E.COMMERCE_CART_V2 = 205),
          (E.SUBSCRIPTION_CONFIRMED = 206),
          (E.ORDER_RECEIVED = 207),
          (E.MEMBERSHIP_CONFIRMED = 208),
          (E.REVIEWS_REQUEST = 209),
          (E.DIGITAL_PRODUCT_COMPOSER_PREVIEW = 210),
          (E.ORDER_STATUS = 211),
          (E.NEWSLETTER_UNSUBSCRIBE = 300),
          (E.COMMERCE_EMAIL_PREVIEW = 301);
      })(r || (r = {}));
      var g = r;
      (e.default = g), (D.exports = e.default);
    },
    672325: function (D, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r;
      (function (E) {
        (E.EXPIRED = 1),
          (E.PASTDUE = 2),
          (E.TRIAL = 3),
          (E.BETA = 4),
          (E.REMOVED = 5),
          (E.INTERNAL = 6),
          (E.COMPED = 7),
          (E.PAID = 8),
          (E.V5_LINKED = 11),
          (E.ACTIVE_PARKING_PAGE = 12),
          (E.RESOLD = 13),
          (E.RESOLD_GRACE_PERIOD = 14),
          (E.ENTERPRISE = 15);
      })(r || (r = {}));
      var g = r;
      (e.default = g), (D.exports = e.default);
    },
    6578: function (D) {
      function e(r, g) {
        (g == null || g > r.length) && (g = r.length);
        for (var E = 0, P = new Array(g); E < g; E++) P[E] = r[E];
        return P;
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    922290: function (D) {
      function e(r) {
        if (Array.isArray(r)) return r;
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    82078: function (D, e, r) {
      var g = r(6578);
      function E(P) {
        if (Array.isArray(P)) return g(P);
      }
      (D.exports = E),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    177928: function (D) {
      function e(r) {
        if (r === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return r;
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    385870: function (D) {
      function e(g, E, P, w, _, p, h) {
        try {
          var j = g[p](h),
            m = j.value;
        } catch (y) {
          P(y);
          return;
        }
        j.done ? E(m) : Promise.resolve(m).then(w, _);
      }
      function r(g) {
        return function () {
          var E = this,
            P = arguments;
          return new Promise(function (w, _) {
            var p = g.apply(E, P);
            function h(m) {
              e(p, w, _, h, j, "next", m);
            }
            function j(m) {
              e(p, w, _, h, j, "throw", m);
            }
            h(void 0);
          });
        };
      }
      (D.exports = r),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    858240: function (D) {
      function e(r, g) {
        if (!(r instanceof g))
          throw new TypeError("Cannot call a class as a function");
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    449883: function (D, e, r) {
      var g = r(798523),
        E = r(474180);
      function P(w, _, p) {
        return (
          E()
            ? ((D.exports = P = Reflect.construct.bind()),
              (D.exports.__esModule = !0),
              (D.exports.default = D.exports))
            : ((D.exports = P =
                function (j, m, y) {
                  var b = [null];
                  b.push.apply(b, m);
                  var f = Function.bind.apply(j, b),
                    v = new f();
                  return y && g(v, y.prototype), v;
                }),
              (D.exports.__esModule = !0),
              (D.exports.default = D.exports)),
          P.apply(null, arguments)
        );
      }
      (D.exports = P),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    4636: function (D) {
      function e(g, E) {
        for (var P = 0; P < E.length; P++) {
          var w = E[P];
          (w.enumerable = w.enumerable || !1),
            (w.configurable = !0),
            "value" in w && (w.writable = !0),
            Object.defineProperty(g, w.key, w);
        }
      }
      function r(g, E, P) {
        return (
          E && e(g.prototype, E),
          P && e(g, P),
          Object.defineProperty(g, "prototype", { writable: !1 }),
          g
        );
      }
      (D.exports = r),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    346797: function (D) {
      function e(r, g, E) {
        return (
          g in r
            ? Object.defineProperty(r, g, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[g] = E),
          r
        );
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    820721: function (D, e, r) {
      var g = r(333852);
      function E() {
        return (
          typeof Reflect != "undefined" && Reflect.get
            ? ((D.exports = E = Reflect.get.bind()),
              (D.exports.__esModule = !0),
              (D.exports.default = D.exports))
            : ((D.exports = E =
                function (w, _, p) {
                  var h = g(w, _);
                  if (!!h) {
                    var j = Object.getOwnPropertyDescriptor(h, _);
                    return j.get
                      ? j.get.call(arguments.length < 3 ? w : p)
                      : j.value;
                  }
                }),
              (D.exports.__esModule = !0),
              (D.exports.default = D.exports)),
          E.apply(this, arguments)
        );
      }
      (D.exports = E),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    506051: function (D) {
      function e(r) {
        return (
          (D.exports = e =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (E) {
                  return E.__proto__ || Object.getPrototypeOf(E);
                }),
          (D.exports.__esModule = !0),
          (D.exports.default = D.exports),
          e(r)
        );
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    721854: function (D, e, r) {
      var g = r(798523);
      function E(P, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (P.prototype = Object.create(w && w.prototype, {
          constructor: { value: P, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(P, "prototype", { writable: !1 }),
          w && g(P, w);
      }
      (D.exports = E),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    875832: function (D) {
      function e(r) {
        return r && r.__esModule ? r : { default: r };
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    597993: function (D) {
      function e(r) {
        return Function.toString.call(r).indexOf("[native code]") !== -1;
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    474180: function (D) {
      function e() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (r) {
          return !1;
        }
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    221300: function (D) {
      function e(r) {
        if (
          (typeof Symbol != "undefined" && r[Symbol.iterator] != null) ||
          r["@@iterator"] != null
        )
          return Array.from(r);
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    243871: function (D) {
      function e(r, g) {
        var E =
          r == null
            ? null
            : (typeof Symbol != "undefined" && r[Symbol.iterator]) ||
              r["@@iterator"];
        if (E != null) {
          var P = [],
            w = !0,
            _ = !1,
            p,
            h;
          try {
            for (
              E = E.call(r);
              !(w = (p = E.next()).done) &&
              (P.push(p.value), !(g && P.length === g));
              w = !0
            );
          } catch (j) {
            (_ = !0), (h = j);
          } finally {
            try {
              !w && E.return != null && E.return();
            } finally {
              if (_) throw h;
            }
          }
          return P;
        }
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    485659: function (D) {
      function e() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    609893: function (D) {
      function e() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    699467: function (D, e, r) {
      var g = r(569644).default,
        E = r(177928);
      function P(w, _) {
        if (_ && (g(_) === "object" || typeof _ == "function")) return _;
        if (_ !== void 0)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return E(w);
      }
      (D.exports = P),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    798523: function (D) {
      function e(r, g) {
        return (
          (D.exports = e =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (P, w) {
                  return (P.__proto__ = w), P;
                }),
          (D.exports.__esModule = !0),
          (D.exports.default = D.exports),
          e(r, g)
        );
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    375798: function (D, e, r) {
      var g = r(922290),
        E = r(243871),
        P = r(274603),
        w = r(485659);
      function _(p, h) {
        return g(p) || E(p, h) || P(p, h) || w();
      }
      (D.exports = _),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    333852: function (D, e, r) {
      var g = r(506051);
      function E(P, w) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(P, w) &&
          ((P = g(P)), P !== null);

        );
        return P;
      }
      (D.exports = E),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    603912: function (D, e, r) {
      var g = r(82078),
        E = r(221300),
        P = r(274603),
        w = r(609893);
      function _(p) {
        return g(p) || E(p) || P(p) || w();
      }
      (D.exports = _),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    569644: function (D) {
      function e(r) {
        return (
          (D.exports = e =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (g) {
                  return typeof g;
                }
              : function (g) {
                  return g &&
                    typeof Symbol == "function" &&
                    g.constructor === Symbol &&
                    g !== Symbol.prototype
                    ? "symbol"
                    : typeof g;
                }),
          (D.exports.__esModule = !0),
          (D.exports.default = D.exports),
          e(r)
        );
      }
      (D.exports = e),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    274603: function (D, e, r) {
      var g = r(6578);
      function E(P, w) {
        if (!!P) {
          if (typeof P == "string") return g(P, w);
          var _ = Object.prototype.toString.call(P).slice(8, -1);
          if (
            (_ === "Object" && P.constructor && (_ = P.constructor.name),
            _ === "Map" || _ === "Set")
          )
            return Array.from(P);
          if (
            _ === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
          )
            return g(P, w);
        }
      }
      (D.exports = E),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    852156: function (D, e, r) {
      var g = r(506051),
        E = r(798523),
        P = r(597993),
        w = r(449883);
      function _(p) {
        var h = typeof Map == "function" ? new Map() : void 0;
        return (
          (D.exports = _ =
            function (m) {
              if (m === null || !P(m)) return m;
              if (typeof m != "function")
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (typeof h != "undefined") {
                if (h.has(m)) return h.get(m);
                h.set(m, y);
              }
              function y() {
                return w(m, arguments, g(this).constructor);
              }
              return (
                (y.prototype = Object.create(m.prototype, {
                  constructor: {
                    value: y,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                E(y, m)
              );
            }),
          (D.exports.__esModule = !0),
          (D.exports.default = D.exports),
          _(p)
        );
      }
      (D.exports = _),
        (D.exports.__esModule = !0),
        (D.exports.default = D.exports);
    },
    114499: function (D, e) {
      (function (r, g) {
        g(e);
      })(this, function (r) {
        "use strict";
        var g,
          E,
          P,
          w,
          _,
          p = -1,
          h = function (J) {
            addEventListener(
              "pageshow",
              function (q) {
                q.persisted && ((p = q.timeStamp), J(q));
              },
              !0
            );
          },
          j = function () {
            return (
              window.performance &&
              performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0]
            );
          },
          m = function () {
            var J = j();
            return (J && J.activationStart) || 0;
          },
          y = function (J, q) {
            var re = j(),
              ce = "navigate";
            return (
              p >= 0
                ? (ce = "back-forward-cache")
                : re &&
                  (ce =
                    document.prerendering || m() > 0
                      ? "prerender"
                      : document.wasDiscarded
                      ? "restore"
                      : re.type.replace(/_/g, "-")),
              {
                name: J,
                value: q === void 0 ? -1 : q,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-"
                  .concat(Date.now(), "-")
                  .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: ce,
              }
            );
          },
          b = function (J, q, re) {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(J)) {
                var ce = new PerformanceObserver(function (fe) {
                  Promise.resolve().then(function () {
                    q(fe.getEntries());
                  });
                });
                return (
                  ce.observe(
                    Object.assign({ type: J, buffered: !0 }, re || {})
                  ),
                  ce
                );
              }
            } catch (fe) {}
          },
          f = function (J, q) {
            var re = function ce(fe) {
              (fe.type !== "pagehide" &&
                document.visibilityState !== "hidden") ||
                (J(fe),
                q &&
                  (removeEventListener("visibilitychange", ce, !0),
                  removeEventListener("pagehide", ce, !0)));
            };
            addEventListener("visibilitychange", re, !0),
              addEventListener("pagehide", re, !0);
          },
          v = function (J, q, re, ce) {
            var fe, pe;
            return function (me) {
              q.value >= 0 &&
                (me || ce) &&
                ((pe = q.value - (fe || 0)) || fe === void 0) &&
                ((fe = q.value),
                (q.delta = pe),
                (q.rating = (function (Oe, Ee) {
                  return Oe > Ee[1]
                    ? "poor"
                    : Oe > Ee[0]
                    ? "needs-improvement"
                    : "good";
                })(q.value, re)),
                J(q));
            };
          },
          d = function (J) {
            requestAnimationFrame(function () {
              return requestAnimationFrame(function () {
                return J();
              });
            });
          },
          s = function (J) {
            document.prerendering
              ? addEventListener(
                  "prerenderingchange",
                  function () {
                    return J();
                  },
                  !0
                )
              : J();
          },
          u = -1,
          O = function () {
            return document.visibilityState !== "hidden" ||
              document.prerendering
              ? 1 / 0
              : 0;
          },
          o = function (J) {
            document.visibilityState === "hidden" &&
              u > -1 &&
              ((u = J.type === "visibilitychange" ? J.timeStamp : 0), l());
          },
          i = function () {
            addEventListener("visibilitychange", o, !0),
              addEventListener("prerenderingchange", o, !0);
          },
          l = function () {
            removeEventListener("visibilitychange", o, !0),
              removeEventListener("prerenderingchange", o, !0);
          },
          t = function () {
            return (
              u < 0 &&
                ((u = O()),
                i(),
                h(function () {
                  setTimeout(function () {
                    (u = O()), i();
                  }, 0);
                })),
              {
                get firstHiddenTime() {
                  return u;
                },
              }
            );
          },
          n = function (J, q) {
            (q = q || {}),
              s(function () {
                var re,
                  ce = [1800, 3e3],
                  fe = t(),
                  pe = y("FCP"),
                  me = b("paint", function (Oe) {
                    Oe.forEach(function (Ee) {
                      Ee.name === "first-contentful-paint" &&
                        (me.disconnect(),
                        Ee.startTime < fe.firstHiddenTime &&
                          ((pe.value = Math.max(Ee.startTime - m(), 0)),
                          pe.entries.push(Ee),
                          re(!0)));
                    });
                  });
                me &&
                  ((re = v(J, pe, ce, q.reportAllChanges)),
                  h(function (Oe) {
                    (pe = y("FCP")),
                      (re = v(J, pe, ce, q.reportAllChanges)),
                      d(function () {
                        (pe.value = performance.now() - Oe.timeStamp), re(!0);
                      });
                  }));
              });
          },
          a = function (J, q) {
            (q = q || {}),
              s(function () {
                var re,
                  ce = [0.1, 0.25],
                  fe = y("CLS"),
                  pe = -1,
                  me = 0,
                  Oe = [],
                  Ee = function (Te) {
                    pe > -1 && J(Te);
                  },
                  be = function (Te) {
                    Te.forEach(function (Re) {
                      if (!Re.hadRecentInput) {
                        var $e = Oe[0],
                          Xe = Oe[Oe.length - 1];
                        me &&
                        Re.startTime - Xe.startTime < 1e3 &&
                        Re.startTime - $e.startTime < 5e3
                          ? ((me += Re.value), Oe.push(Re))
                          : ((me = Re.value), (Oe = [Re])),
                          me > fe.value &&
                            ((fe.value = me), (fe.entries = Oe), re());
                      }
                    });
                  },
                  Pe = b("layout-shift", be);
                Pe &&
                  ((re = v(Ee, fe, ce, q.reportAllChanges)),
                  n(function (Te) {
                    (pe = Te.value), fe.value < 0 && ((fe.value = 0), re());
                  }),
                  f(function () {
                    be(Pe.takeRecords()), re(!0);
                  }),
                  h(function () {
                    (me = 0),
                      (pe = -1),
                      (fe = y("CLS", 0)),
                      (re = v(Ee, fe, ce, q.reportAllChanges)),
                      d(function () {
                        return re();
                      });
                  }));
              });
          },
          c = { passive: !0, capture: !0 },
          A = new Date(),
          C = function (J, q) {
            g ||
              ((g = q), (E = J), (P = new Date()), S(removeEventListener), U());
          },
          U = function () {
            if (E >= 0 && E < P - A) {
              var J = {
                entryType: "first-input",
                name: g.type,
                target: g.target,
                cancelable: g.cancelable,
                startTime: g.timeStamp,
                processingStart: g.timeStamp + E,
              };
              w.forEach(function (q) {
                q(J);
              }),
                (w = []);
            }
          },
          L = function (J) {
            if (J.cancelable) {
              var q =
                (J.timeStamp > 1e12 ? new Date() : performance.now()) -
                J.timeStamp;
              J.type == "pointerdown"
                ? (function (re, ce) {
                    var fe = function () {
                        C(re, ce), me();
                      },
                      pe = function () {
                        me();
                      },
                      me = function () {
                        removeEventListener("pointerup", fe, c),
                          removeEventListener("pointercancel", pe, c);
                      };
                    addEventListener("pointerup", fe, c),
                      addEventListener("pointercancel", pe, c);
                  })(q, J)
                : C(q, J);
            }
          },
          S = function (J) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(
              function (q) {
                return J(q, L, c);
              }
            );
          },
          B = function (J, q) {
            (q = q || {}),
              s(function () {
                var re,
                  ce = [100, 300],
                  fe = t(),
                  pe = y("FID"),
                  me = function (be) {
                    be.startTime < fe.firstHiddenTime &&
                      ((pe.value = be.processingStart - be.startTime),
                      pe.entries.push(be),
                      re(!0));
                  },
                  Oe = function (be) {
                    be.forEach(me);
                  },
                  Ee = b("first-input", Oe);
                (re = v(J, pe, ce, q.reportAllChanges)),
                  Ee &&
                    f(function () {
                      Oe(Ee.takeRecords()), Ee.disconnect();
                    }, !0),
                  Ee &&
                    h(function () {
                      var be;
                      (pe = y("FID")),
                        (re = v(J, pe, ce, q.reportAllChanges)),
                        (w = []),
                        (E = -1),
                        (g = null),
                        S(addEventListener),
                        (be = me),
                        w.push(be),
                        U();
                    });
              });
          },
          Y = 0,
          F = 1 / 0,
          z = 0,
          Q = function (J) {
            J.forEach(function (q) {
              q.interactionId &&
                ((F = Math.min(F, q.interactionId)),
                (z = Math.max(z, q.interactionId)),
                (Y = z ? (z - F) / 7 + 1 : 0));
            });
          },
          V = function () {
            return _ ? Y : performance.interactionCount || 0;
          },
          N = function () {
            "interactionCount" in performance ||
              _ ||
              (_ = b("event", Q, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
              }));
          },
          R = 0,
          T = function () {
            return V() - R;
          },
          k = [],
          M = {},
          $ = function (J) {
            var q = k[k.length - 1],
              re = M[J.interactionId];
            if (re || k.length < 10 || J.duration > q.latency) {
              if (re)
                re.entries.push(J),
                  (re.latency = Math.max(re.latency, J.duration));
              else {
                var ce = {
                  id: J.interactionId,
                  latency: J.duration,
                  entries: [J],
                };
                (M[ce.id] = ce), k.push(ce);
              }
              k.sort(function (fe, pe) {
                return pe.latency - fe.latency;
              }),
                k.splice(10).forEach(function (fe) {
                  delete M[fe.id];
                });
            }
          },
          I = function (J, q) {
            (q = q || {}),
              s(function () {
                var re = [200, 500];
                N();
                var ce,
                  fe = y("INP"),
                  pe = function (Oe) {
                    Oe.forEach(function (Pe) {
                      Pe.interactionId && $(Pe),
                        Pe.entryType === "first-input" &&
                          !k.some(function (Te) {
                            return Te.entries.some(function (Re) {
                              return (
                                Pe.duration === Re.duration &&
                                Pe.startTime === Re.startTime
                              );
                            });
                          }) &&
                          $(Pe);
                    });
                    var Ee,
                      be =
                        ((Ee = Math.min(k.length - 1, Math.floor(T() / 50))),
                        k[Ee]);
                    be &&
                      be.latency !== fe.value &&
                      ((fe.value = be.latency),
                      (fe.entries = be.entries),
                      ce());
                  },
                  me = b("event", pe, {
                    durationThreshold: q.durationThreshold || 40,
                  });
                (ce = v(J, fe, re, q.reportAllChanges)),
                  me &&
                    (me.observe({ type: "first-input", buffered: !0 }),
                    f(function () {
                      pe(me.takeRecords()),
                        fe.value < 0 &&
                          T() > 0 &&
                          ((fe.value = 0), (fe.entries = [])),
                        ce(!0);
                    }),
                    h(function () {
                      (k = []),
                        (R = V()),
                        (fe = y("INP")),
                        (ce = v(J, fe, re, q.reportAllChanges));
                    }));
              });
          },
          H = {},
          Z = function (J, q) {
            (q = q || {}),
              s(function () {
                var re,
                  ce = [2500, 4e3],
                  fe = t(),
                  pe = y("LCP"),
                  me = function (be) {
                    var Pe = be[be.length - 1];
                    if (Pe) {
                      var Te = Math.max(Pe.startTime - m(), 0);
                      Te < fe.firstHiddenTime &&
                        ((pe.value = Te), (pe.entries = [Pe]), re());
                    }
                  },
                  Oe = b("largest-contentful-paint", me);
                if (Oe) {
                  re = v(J, pe, ce, q.reportAllChanges);
                  var Ee = function () {
                    H[pe.id] ||
                      (me(Oe.takeRecords()),
                      Oe.disconnect(),
                      (H[pe.id] = !0),
                      re(!0));
                  };
                  ["keydown", "click"].forEach(function (be) {
                    addEventListener(be, Ee, { once: !0, capture: !0 });
                  }),
                    f(Ee, !0),
                    h(function (be) {
                      (pe = y("LCP")),
                        (re = v(J, pe, ce, q.reportAllChanges)),
                        d(function () {
                          (pe.value = performance.now() - be.timeStamp),
                            (H[pe.id] = !0),
                            re(!0);
                        });
                    });
                }
              });
          },
          oe = function J(q) {
            document.prerendering
              ? s(function () {
                  return J(q);
                })
              : document.readyState !== "complete"
              ? addEventListener(
                  "load",
                  function () {
                    return J(q);
                  },
                  !0
                )
              : setTimeout(q, 0);
          },
          te = function (J, q) {
            q = q || {};
            var re = [800, 1800],
              ce = y("TTFB"),
              fe = v(J, ce, re, q.reportAllChanges);
            oe(function () {
              var pe = j();
              if (pe) {
                var me = pe.responseStart;
                if (me <= 0 || me > performance.now()) return;
                (ce.value = Math.max(me - m(), 0)),
                  (ce.entries = [pe]),
                  fe(!0),
                  h(function () {
                    (ce = y("TTFB", 0)),
                      (fe = v(J, ce, re, q.reportAllChanges))(!0);
                  });
              }
            });
          };
        (r.getCLS = a),
          (r.getFCP = n),
          (r.getFID = B),
          (r.getINP = I),
          (r.getLCP = Z),
          (r.getTTFB = te),
          (r.onCLS = a),
          (r.onFCP = n),
          (r.onFID = B),
          (r.onINP = I),
          (r.onLCP = Z),
          (r.onTTFB = te),
          Object.defineProperty(r, "__esModule", { value: !0 });
      });
    },
  },
  function (D) {
    var e = function (g) {
        return D((D.s = g));
      },
      r = e(331070);
  },
]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-5ff8c815b700ecee0114b-min.en-US.js.map
