"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = void 0 && (void 0).__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MurmurHash_1 = require("../misc/MurmurHash");

var Decorators_1 = require("../Decorators");
/**
 * Implements the `popMode` lexer action by calling {@link Lexer#popMode}.
 *
 * The `popMode` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */


var LexerPopModeAction =
/*#__PURE__*/
function () {
  /**
   * Constructs the singleton instance of the lexer `popMode` command.
   */
  function LexerPopModeAction() {
    (0, _classCallCheck2["default"])(this, LexerPopModeAction);
  } // intentionally empty

  /**
   * {@inheritDoc}
   * @returns This method returns {@link LexerActionType#POP_MODE}.
   */


  (0, _createClass2["default"])(LexerPopModeAction, [{
    key: "execute",

    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#popMode}.
     */
    value: function execute(lexer) {
      lexer.popMode();
    }
  }, {
    key: "hashCode",
    value: function hashCode() {
      var hash = MurmurHash_1.MurmurHash.initialize();
      hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
      return MurmurHash_1.MurmurHash.finish(hash, 1);
    }
  }, {
    key: "equals",
    value: function equals(obj) {
      return obj === this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "popMode";
    }
  }, {
    key: "actionType",
    get: function get() {
      return 4
      /* POP_MODE */
      ;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */

  }, {
    key: "isPositionDependent",
    get: function get() {
      return false;
    }
  }]);
  return LexerPopModeAction;
}();

__decorate([Decorators_1.Override], LexerPopModeAction.prototype, "actionType", null);

__decorate([Decorators_1.Override], LexerPopModeAction.prototype, "isPositionDependent", null);

__decorate([Decorators_1.Override, __param(0, Decorators_1.NotNull)], LexerPopModeAction.prototype, "execute", null);

__decorate([Decorators_1.Override], LexerPopModeAction.prototype, "hashCode", null);

__decorate([Decorators_1.Override], LexerPopModeAction.prototype, "equals", null);

__decorate([Decorators_1.Override], LexerPopModeAction.prototype, "toString", null);

exports.LexerPopModeAction = LexerPopModeAction;

(function (LexerPopModeAction) {
  /**
   * Provides a singleton instance of this parameterless lexer action.
   */
  LexerPopModeAction.INSTANCE = new LexerPopModeAction();
})(LexerPopModeAction = exports.LexerPopModeAction || (exports.LexerPopModeAction = {}));
//# sourceMappingURL=LexerPopModeAction.js.map
