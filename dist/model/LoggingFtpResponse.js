"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCompressionCodec = _interopRequireDefault(require("./LoggingCompressionCodec"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingFtp = _interopRequireDefault(require("./LoggingFtp"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingFtpResponse model module.
 * @module model/LoggingFtpResponse
 * @version 3.0.0-alpha1
 */
var LoggingFtpResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingFtpResponse</code>.
   * @alias module:model/LoggingFtpResponse
   */
  function LoggingFtpResponse() {
    _classCallCheck(this, LoggingFtpResponse);

    LoggingFtpResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingFtpResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingFtpResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingFtpResponse} obj Optional instance to populate.
     * @return {module:model/LoggingFtpResponse} The populated <code>LoggingFtpResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingFtpResponse();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _LoggingFormatVersion["default"].constructFromObject(data['format_version']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _LoggingPlacement["default"].constructFromObject(data['placement']);
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
        }

        if (data.hasOwnProperty('compression_codec')) {
          obj['compression_codec'] = _LoggingCompressionCodec["default"].constructFromObject(data['compression_codec']);
        }

        if (data.hasOwnProperty('gzip_level')) {
          obj['gzip_level'] = _ApiClient["default"].convertToType(data['gzip_level'], 'Number');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Number');
        }

        if (data.hasOwnProperty('timestamp_format')) {
          obj['timestamp_format'] = _ApiClient["default"].convertToType(data['timestamp_format'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('ipv4')) {
          obj['ipv4'] = _ApiClient["default"].convertToType(data['ipv4'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
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

  return LoggingFtpResponse;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */


LoggingFtpResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingFtpResponse.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingFtpResponse.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingFtpResponse.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingFtpResponse.prototype['response_condition'] = undefined;
/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */

LoggingFtpResponse.prototype['compression_codec'] = undefined;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingFtpResponse.prototype['gzip_level'] = 0;
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingFtpResponse.prototype['message_type'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingFtpResponse.prototype['period'] = 3600;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingFtpResponse.prototype['timestamp_format'] = undefined;
/**
 * An hostname or IPv4 address.
 * @member {String} address
 */

LoggingFtpResponse.prototype['address'] = undefined;
/**
 * Hostname used.
 * @member {String} hostname
 */

LoggingFtpResponse.prototype['hostname'] = undefined;
/**
 * IPv4 address of the host.
 * @member {String} ipv4
 */

LoggingFtpResponse.prototype['ipv4'] = undefined;
/**
 * The password for the server. For anonymous use an email address.
 * @member {String} password
 */

LoggingFtpResponse.prototype['password'] = undefined;
/**
 * The path to upload log files to. If the path ends in `/` then it is treated as a directory.
 * @member {String} path
 */

LoggingFtpResponse.prototype['path'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 21
 */

LoggingFtpResponse.prototype['port'] = 21;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingFtpResponse.prototype['public_key'] = 'null';
/**
 * The username for the server. Can be anonymous.
 * @member {String} user
 */

LoggingFtpResponse.prototype['user'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingFtpResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingFtpResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingFtpResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingFtpResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingFtpResponse.prototype['version'] = undefined;
var _default = LoggingFtpResponse;
exports["default"] = _default;