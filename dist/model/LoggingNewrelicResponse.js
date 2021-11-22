"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingNewrelic = _interopRequireDefault(require("./LoggingNewrelic"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingNewrelicResponse model module.
 * @module model/LoggingNewrelicResponse
 * @version 3.0.0-alpha1
 */
var LoggingNewrelicResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingNewrelicResponse</code>.
   * @alias module:model/LoggingNewrelicResponse
   * @implements module:model/LoggingNewrelic
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   */
  function LoggingNewrelicResponse() {
    _classCallCheck(this, LoggingNewrelicResponse);

    _LoggingNewrelic["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    LoggingNewrelicResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingNewrelicResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingNewrelicResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingNewrelicResponse} obj Optional instance to populate.
     * @return {module:model/LoggingNewrelicResponse} The populated <code>LoggingNewrelicResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingNewrelicResponse();

        _LoggingNewrelic["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _ApiClient["default"].convertToType(data['placement'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _ApiClient["default"].convertToType(data['format_version'], 'Number');
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], Object);
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LoggingNewrelicResponse;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingNewrelicResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingNewrelicResponse.PlacementEnum} placement
 */

LoggingNewrelicResponse.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingNewrelicResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingNewrelicResponse.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingNewrelicResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
 * @member {Object} format
 */

LoggingNewrelicResponse.prototype['format'] = undefined;
/**
 * The Insert API key from the Account page of your New Relic account. Required.
 * @member {String} token
 */

LoggingNewrelicResponse.prototype['token'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingNewrelicResponse.RegionEnum} region
 * @default 'US'
 */

LoggingNewrelicResponse.prototype['region'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingNewrelicResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingNewrelicResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingNewrelicResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingNewrelicResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingNewrelicResponse.prototype['version'] = undefined; // Implement LoggingNewrelic interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingNewrelic["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingNewrelic.PlacementEnum} placement
 */

_LoggingNewrelic["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingNewrelic.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingNewrelic["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingNewrelic["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
 * @member {Object} format
 */

_LoggingNewrelic["default"].prototype['format'] = undefined;
/**
 * The Insert API key from the Account page of your New Relic account. Required.
 * @member {String} token
 */

_LoggingNewrelic["default"].prototype['token'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingNewrelic.RegionEnum} region
 * @default 'US'
 */

_LoggingNewrelic["default"].prototype['region'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingNewrelicResponse['PlacementEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "waf_debug"
   * @const
   */
  "waf_debug": "waf_debug",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */

LoggingNewrelicResponse['FormatVersionEnum'] = {
  /**
   * value: 1
   * @const
   */
  "v1": 1,

  /**
   * value: 2
   * @const
   */
  "v2": 2
};
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingNewrelicResponse['RegionEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "EU"
   * @const
   */
  "EU": "EU"
};
var _default = LoggingNewrelicResponse;
exports["default"] = _default;