"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingLogentriesAllOf model module.
 * @module model/LoggingLogentriesAllOf
 * @version 3.0.0-alpha1
 */
var LoggingLogentriesAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingLogentriesAllOf</code>.
   * @alias module:model/LoggingLogentriesAllOf
   */
  function LoggingLogentriesAllOf() {
    _classCallCheck(this, LoggingLogentriesAllOf);

    LoggingLogentriesAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingLogentriesAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingLogentriesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogentriesAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingLogentriesAllOf} The populated <code>LoggingLogentriesAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingLogentriesAllOf();

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _LoggingUseTls["default"].constructFromObject(data['use_tls']);
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingLogentriesAllOf;
}();
/**
 * The port number.
 * @member {Number} port
 * @default 20000
 */


LoggingLogentriesAllOf.prototype['port'] = 20000;
/**
 * Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
 * @member {String} token
 */

LoggingLogentriesAllOf.prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingLogentriesAllOf.prototype['use_tls'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingLogentriesAllOf.RegionEnum} region
 */

LoggingLogentriesAllOf.prototype['region'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingLogentriesAllOf['RegionEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "US-2"
   * @const
   */
  "US-2": "US-2",

  /**
   * value: "US-3"
   * @const
   */
  "US-3": "US-3",

  /**
   * value: "EU"
   * @const
   */
  "EU": "EU",

  /**
   * value: "CA"
   * @const
   */
  "CA": "CA",

  /**
   * value: "AU"
   * @const
   */
  "AU": "AU",

  /**
   * value: "AP"
   * @const
   */
  "AP": "AP"
};
var _default = LoggingLogentriesAllOf;
exports["default"] = _default;