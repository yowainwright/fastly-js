"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingKafka = _interopRequireDefault(require("./LoggingKafka"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingKafkaResponse model module.
 * @module model/LoggingKafkaResponse
 * @version 3.0.0-alpha1
 */
var LoggingKafkaResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingKafkaResponse</code>.
   * @alias module:model/LoggingKafkaResponse
   */
  function LoggingKafkaResponse() {
    _classCallCheck(this, LoggingKafkaResponse);

    LoggingKafkaResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingKafkaResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingKafkaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKafkaResponse} obj Optional instance to populate.
     * @return {module:model/LoggingKafkaResponse} The populated <code>LoggingKafkaResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingKafkaResponse();

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

        if (data.hasOwnProperty('tls_ca_cert')) {
          obj['tls_ca_cert'] = _ApiClient["default"].convertToType(data['tls_ca_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_cert')) {
          obj['tls_client_cert'] = _ApiClient["default"].convertToType(data['tls_client_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_key')) {
          obj['tls_client_key'] = _ApiClient["default"].convertToType(data['tls_client_key'], 'String');
        }

        if (data.hasOwnProperty('tls_hostname')) {
          obj['tls_hostname'] = _ApiClient["default"].convertToType(data['tls_hostname'], 'String');
        }

        if (data.hasOwnProperty('auth_method')) {
          obj['auth_method'] = _ApiClient["default"].convertToType(data['auth_method'], 'String');
        }

        if (data.hasOwnProperty('brokers')) {
          obj['brokers'] = _ApiClient["default"].convertToType(data['brokers'], 'String');
        }

        if (data.hasOwnProperty('compression_codec')) {
          obj['compression_codec'] = _ApiClient["default"].convertToType(data['compression_codec'], 'String');
        }

        if (data.hasOwnProperty('parse_log_keyvals')) {
          obj['parse_log_keyvals'] = _ApiClient["default"].convertToType(data['parse_log_keyvals'], 'Boolean');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('request_max_bytes')) {
          obj['request_max_bytes'] = _ApiClient["default"].convertToType(data['request_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('required_acks')) {
          obj['required_acks'] = _ApiClient["default"].convertToType(data['required_acks'], 'Number');
        }

        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _LoggingUseTls["default"].constructFromObject(data['use_tls']);
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

  return LoggingKafkaResponse;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */


LoggingKafkaResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingKafkaResponse.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingKafkaResponse.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingKafkaResponse.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingKafkaResponse.prototype['response_condition'] = undefined;
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

LoggingKafkaResponse.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

LoggingKafkaResponse.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

LoggingKafkaResponse.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

LoggingKafkaResponse.prototype['tls_hostname'] = 'null';
/**
 * SASL authentication method.
 * @member {module:model/LoggingKafkaResponse.AuthMethodEnum} auth_method
 */

LoggingKafkaResponse.prototype['auth_method'] = undefined;
/**
 * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
 * @member {String} brokers
 */

LoggingKafkaResponse.prototype['brokers'] = undefined;
/**
 * The codec used for compression of your logs.
 * @member {module:model/LoggingKafkaResponse.CompressionCodecEnum} compression_codec
 */

LoggingKafkaResponse.prototype['compression_codec'] = undefined;
/**
 * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
 * @member {Boolean} parse_log_keyvals
 */

LoggingKafkaResponse.prototype['parse_log_keyvals'] = undefined;
/**
 * SASL password.
 * @member {String} password
 */

LoggingKafkaResponse.prototype['password'] = undefined;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

LoggingKafkaResponse.prototype['request_max_bytes'] = 0;
/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 * @member {module:model/LoggingKafkaResponse.RequiredAcksEnum} required_acks
 * @default RequiredAcksEnum.one
 */

LoggingKafkaResponse.prototype['required_acks'] = undefined;
/**
 * The Kafka topic to send logs to. Required.
 * @member {String} topic
 */

LoggingKafkaResponse.prototype['topic'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingKafkaResponse.prototype['use_tls'] = undefined;
/**
 * SASL user.
 * @member {String} user
 */

LoggingKafkaResponse.prototype['user'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingKafkaResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingKafkaResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingKafkaResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingKafkaResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingKafkaResponse.prototype['version'] = undefined;
/**
 * Allowed values for the <code>auth_method</code> property.
 * @enum {String}
 * @readonly
 */

LoggingKafkaResponse['AuthMethodEnum'] = {
  /**
   * value: "plain"
   * @const
   */
  "plain": "plain",

  /**
   * value: "scram-sha-256"
   * @const
   */
  "scram-sha-256": "scram-sha-256",

  /**
   * value: "scram-sha-512"
   * @const
   */
  "scram-sha-512": "scram-sha-512"
};
/**
 * Allowed values for the <code>compression_codec</code> property.
 * @enum {String}
 * @readonly
 */

LoggingKafkaResponse['CompressionCodecEnum'] = {
  /**
   * value: "gzip"
   * @const
   */
  "gzip": "gzip",

  /**
   * value: "snappy"
   * @const
   */
  "snappy": "snappy",

  /**
   * value: "lz4"
   * @const
   */
  "lz4": "lz4",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
/**
 * Allowed values for the <code>required_acks</code> property.
 * @enum {Number}
 * @readonly
 */

LoggingKafkaResponse['RequiredAcksEnum'] = {
  /**
   * value: 1
   * @const
   */
  "one": 1,

  /**
   * value: 0
   * @const
   */
  "none": 0,

  /**
   * value: -1
   * @const
   */
  "all": -1
};
var _default = LoggingKafkaResponse;
exports["default"] = _default;