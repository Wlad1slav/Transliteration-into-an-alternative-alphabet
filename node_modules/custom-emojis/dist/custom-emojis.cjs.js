'use strict';

function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

var _emojisObj = /*#__PURE__*/new WeakMap();
var _field = /*#__PURE__*/new WeakMap();
var _InputField_brand = /*#__PURE__*/new WeakSet();
/**
 * InputField - a class for integrating custom emojis into text fields.
 *
 * This class is designed to add the ability to insert emojis into text fields that have the attribute contenteditable="true".
 * It monitors user input and replaces emoji shortcodes with corresponding images, as well as handles pasting text
 * from the clipboard to prevent the insertion of unauthorized formatting.
 *
 * Dependencies:
 * - The class uses functions from CustomEmojis for searching and replacing emojis.
 *
 * Example of use:
 * ```
 * const emojiObj = new CustomEmojis();
 * emojiObj.init().then(() => {
 *     new InputField(emojiObj, 'editable-text-field');
 * });
 * ```
 *
 */

var InputField = /*#__PURE__*/_createClass(function InputField(emojisObj, fieldId) {
  var field = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  _classCallCheck(this, InputField);
  _classPrivateMethodInitSpec(this, _InputField_brand);
  _classPrivateFieldInitSpec(this, _emojisObj, void 0);
  _classPrivateFieldInitSpec(this, _field, void 0);
  _classPrivateFieldSet2(_field, this, field === null ? document.getElementById(fieldId) : field);
  _classPrivateFieldSet2(_emojisObj, this, emojisObj);
  _assertClassBrand(_InputField_brand, this, _setupEventListeners).call(this);
});
function _setupEventListeners() {
  var _this = this;
  // Setting event listeners for a field
  _classPrivateFieldGet2(_field, this).addEventListener('input', function (e) {
    return _assertClassBrand(_InputField_brand, _this, _handleInput).call(_this, e);
  });
  _classPrivateFieldGet2(_field, this).addEventListener('paste', function (e) {
    return _assertClassBrand(_InputField_brand, _this, _handlePaste).call(_this, e);
  });
  _classPrivateFieldGet2(_field, this).addEventListener('input', function (e) {
    return _assertClassBrand(_InputField_brand, _this, _checkTextForIllegalTags).call(_this, e);
  });
}
// CHECKING THE ENTERED TEXT FOR THE PRESENCE OF SHORT CODES
function _handleInput(e) {
  var text = e.target.innerHTML;
  for (var emojiIndex in _classPrivateFieldGet2(_emojisObj, this).config.emojis) {
    if (text.includes(_classPrivateFieldGet2(_emojisObj, this).config.emojis[emojiIndex]['shortcode'])) {
      // If there is a key phrase in the text field,
      // it is replaced by an image
      e.target.innerHTML = text.replace(_classPrivateFieldGet2(_emojisObj, this).config.emojis[emojiIndex]['shortcode'],
      // emojiTag returns an emoji element, outerHTML converts it to a string
      _classPrivateFieldGet2(_emojisObj, this).emojiTag(_classPrivateFieldGet2(_emojisObj, this).config.emojis[emojiIndex]['path'], _classPrivateFieldGet2(_emojisObj, this).config.emojis[emojiIndex]['alt']).outerHTML);
      _assertClassBrand(_InputField_brand, this, _moveCursorToEnd).call(this); // Move the input cursor to the end
    }
  }
}
// INSERT UNFORMATTED TEXT
function _handlePaste(e) {
  // Stop the standard handling of the insert event
  e.preventDefault();

  // Get text from clipboard as plain text
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // Insert plain text without formatting
  document.execCommand("insertHTML", false, text);
}
// CHECK TEXT FOR ILLEGAL TAGS
function _checkTextForIllegalTags(e) {
  var allowedTags = ['IMG']; // Tags are allowed
  var nodes = Array.from(e.target.childNodes); // Get all child nodes

  nodes.forEach(function (node) {
    // If the node is not a text node and is not in the list of allowed tags
    if (node.nodeType !== Node.TEXT_NODE && (!allowedTags.includes(node.nodeName) || !node.classList.contains('svg-emoji'))) {
      node.parentNode.removeChild(node); // Delete the node
    }
  });
}
// MOVE INPUT CURSOR TO END OF LINE
function _moveCursorToEnd() {
  // Method to move the input cursor to the end of the input

  var sel = window.getSelection();
  sel.removeAllRanges();

  // Creates a new range
  var range = document.createRange();
  range.selectNodeContents(_classPrivateFieldGet2(_field, this)); // Selects all content from a div
  range.collapse(false); // false means that the range will be pushed to the end of the content

  // Adds a range to the selection
  sel.addRange(range);

  // Switch the focus to the div so that the user can see the cursor moving
  _classPrivateFieldGet2(_field, this).focus();
}

/**
 * EmojiTable - a class for creating and managing an emoji table.
 *
 * This class allows adding an interactive emoji table to an HTML document, where users can browse
 * and select emojis for insertion into text fields. The table automatically populates with emojis from the CustomEmojis object,
 * and each selected emoji can be inserted into the specified text field.
 *
 * Dependencies:
 * - The class uses data and functions from CustomEmojis to display emojis.
 *
 * Example of use:
 * ```
 * const emojiObj = new CustomEmojis();
 * emojiObj.init().then(() => {
 *     new EmojiTable(emojiObj, 'emoji-table-container', 'editable-text-field');
 * });
 * ```
 *
 */

function EmojiTable(emojisObj, htmlToAddId, tableId) {
  var _this = this;
  var table = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  // A table with all emojis in the form of buttons that add emojis to a specific html container

  this.table = table === null ? document.getElementById(tableId) : table;
  var _loop = function _loop(emojiIndex) {
    // During the cycle, a button is created and added to the specified container
    var button = emojisObj.createEmojiButton(emojisObj.config.emojis[emojiIndex],
    // An emoji that will be clickable
    function () {
      return emojisObj.addEmojiToHtml(emojisObj.config.emojis[emojiIndex]['shortcode'], htmlToAddId);
    } // Emoji action
    );
    _this.table.appendChild(button);
  };
  for (var emojiIndex in emojisObj.config.emojis) {
    _loop(emojiIndex);
  }
}

var _CustomEmojis_brand = /*#__PURE__*/new WeakSet();
var CustomEmojis = /*#__PURE__*/function () {
  function CustomEmojis() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, CustomEmojis);
    // // // // // // // // // // // // // // // // // // // // //
    // COMPUTE: Loading of necessary information from configs   //
    // // // // // // // // // // // // // // // // // // // // //
    _classPrivateMethodInitSpec(this, _CustomEmojis_brand);
    _defineProperty(this, "config", {
      emojiSize: {
        // Emoji size
        width: 'auto',
        height: '24px',
        maxWidth: '30px'
      },
      autoSearchShortcodes: true,
      // Automatic search for shortcodes on the body of the page
      emojis: null,
      // The emojis that will be used
      emojisJsonPath: 'emojis.json' // Json file from which to download emojis
    });
    config !== null ? Object.assign(this.config, config) : null;
  }
  return _createClass(CustomEmojis, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.config.emojis === null)) {
                _context.next = 3;
                break;
              }
              _context.next = 3;
              return _assertClassBrand(_CustomEmojis_brand, this, _computeEmojis).call(this);
            case 3:
              if (this.config.autoSearchShortcodes) {
                // Search the page for shortcodes and convert them to emojis
                this.searchShortcodesAtElement(null, document.body);
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "emojiTag",
    value:
    // // // // // // // // //
    // Class methods to use //
    // // // // // // // // //
    function emojiTag(path, alt) {
      // Returns an emoji element
      var emoji = document.createElement('img');
      emoji.src = path;
      emoji.classList.add('svg-emoji');
      emoji.alt = alt;
      emoji.loading = 'lazy'; // Enable native lazy loading
      emoji.style.width = this.config.emojiSize.width ? this.config.emojiSize.width : 'auto';
      emoji.style.height = this.config.emojiSize.height ? this.config.emojiSize.height : 'auto';
      emoji.style.maxWidth = this.config.emojiSize.maxWidth ? this.config.emojiSize.maxWidth : 'auto';
      return emoji;
    }
  }, {
    key: "getEmoji",
    value: function getEmoji(shortcode) {
      // Get emoji by shortcode
      for (var i in this.config.emojis) {
        if (this.config.emojis[i]['shortcode'] === shortcode) {
          return this.emojiTag(this.config.emojis[i]['path'], this.config.emojis[i]['alt']);
        }
      }
    }
  }, {
    key: "createEmojiButton",
    value: function createEmojiButton(emoji, fn) {
      // Creates a clickable emoji that calls the given function
      var emojiButton = this.emojiTag(emoji['path'], emoji['alt']);
      emojiButton.classList.add('emoji-button');
      emojiButton.onclick = function () {
        return fn();
      };
      return emojiButton;
    }
  }, {
    key: "addEmojiToHtml",
    value: function addEmojiToHtml(emojiShortcode, elementId) {
      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // Adds an emoji to a specific element based on shortcode

      element = element === null ? document.getElementById(elementId) : element;
      element.innerHTML += this.getEmoji(emojiShortcode).outerHTML;
    }
  }, {
    key: "addInputField",
    value: function addInputField(fieldId) {
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Adds the ability to use custom emojis in a specific input field
      // The input field must have a div tag with the attribute contenteditable="true"

      field = field === null ? document.getElementById(fieldId) : field;
      new InputField(this, fieldId, field);
    }
  }, {
    key: "addEmojiTable",
    value: function addEmojiTable(htmlToAddId, tableId) {
      var table = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // Adds all emojis in the form of buttons to a given html object

      table = table === null ? document.getElementById(tableId) : table;
      new EmojiTable(this, htmlToAddId, tableId, table);
    }
  }, {
    key: "searchShortcodesAtElement",
    value: function searchShortcodesAtElement(elementId) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Checks the element for shortcodes, if it finds shortcodes, replaces them with emojis

      element = element === null ? document.getElementById(elementId) : element;
      for (var emojiIndex in this.config.emojis) {
        if (element.textContent.includes(this.config.emojis[emojiIndex]['shortcode'])) {
          element.innerHTML = element.innerHTML.replace(new RegExp(this.config.emojis[emojiIndex]['shortcode'], 'g'),
          // emojiTag returns an emoji element, outerHTML converts it to a string
          this.emojiTag(this.config.emojis[emojiIndex]['path'], this.config.emojis[emojiIndex]['alt']).outerHTML);
        }
      }
    }
  }]);
}();
function _computeEmojis() {
  return _computeEmojis2.apply(this, arguments);
}
function _computeEmojis2() {
  _computeEmojis2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch(this.config.emojisJsonPath);
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          this.config.emojis = _context2.sent;
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log('Error loading emojis:', _context2.t0);
          throw _context2.t0;
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this, [[0, 9]]);
  }));
  return _computeEmojis2.apply(this, arguments);
}

new CustomEmojis();
