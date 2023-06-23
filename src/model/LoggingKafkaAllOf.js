/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingUseTls from './LoggingUseTls';

/**
 * The LoggingKafkaAllOf model module.
 * @module model/LoggingKafkaAllOf
 * @version 4.2.2
 */
class LoggingKafkaAllOf {
    /**
     * Constructs a new <code>LoggingKafkaAllOf</code>.
     * @alias module:model/LoggingKafkaAllOf
     */
    constructor() { 
        
        LoggingKafkaAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingKafkaAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKafkaAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingKafkaAllOf} The populated <code>LoggingKafkaAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingKafkaAllOf();

            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], 'String');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
            }
            if (data.hasOwnProperty('required_acks')) {
                obj['required_acks'] = ApiClient.convertToType(data['required_acks'], 'Number');
            }
            if (data.hasOwnProperty('request_max_bytes')) {
                obj['request_max_bytes'] = ApiClient.convertToType(data['request_max_bytes'], 'Number');
            }
            if (data.hasOwnProperty('parse_log_keyvals')) {
                obj['parse_log_keyvals'] = ApiClient.convertToType(data['parse_log_keyvals'], 'Boolean');
            }
            if (data.hasOwnProperty('auth_method')) {
                obj['auth_method'] = ApiClient.convertToType(data['auth_method'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTls.constructFromObject(data['use_tls']);
            }
        }
        return obj;
    }


}

/**
 * The Kafka topic to send logs to. Required.
 * @member {String} topic
 */
LoggingKafkaAllOf.prototype['topic'] = undefined;

/**
 * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
 * @member {String} brokers
 */
LoggingKafkaAllOf.prototype['brokers'] = undefined;

/**
 * The codec used for compression of your logs.
 * @member {module:model/LoggingKafkaAllOf.CompressionCodecEnum} compression_codec
 */
LoggingKafkaAllOf.prototype['compression_codec'] = undefined;

/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 * @member {module:model/LoggingKafkaAllOf.RequiredAcksEnum} required_acks
 * @default RequiredAcksEnum.one
 */
LoggingKafkaAllOf.prototype['required_acks'] = undefined;

/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingKafkaAllOf.prototype['request_max_bytes'] = 0;

/**
 * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
 * @member {Boolean} parse_log_keyvals
 */
LoggingKafkaAllOf.prototype['parse_log_keyvals'] = undefined;

/**
 * SASL authentication method.
 * @member {module:model/LoggingKafkaAllOf.AuthMethodEnum} auth_method
 */
LoggingKafkaAllOf.prototype['auth_method'] = undefined;

/**
 * SASL user.
 * @member {String} user
 */
LoggingKafkaAllOf.prototype['user'] = undefined;

/**
 * SASL password.
 * @member {String} password
 */
LoggingKafkaAllOf.prototype['password'] = undefined;

/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingKafkaAllOf.prototype['use_tls'] = undefined;





/**
 * Allowed values for the <code>compression_codec</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKafkaAllOf['CompressionCodecEnum'] = {

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
LoggingKafkaAllOf['RequiredAcksEnum'] = {

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


/**
 * Allowed values for the <code>auth_method</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKafkaAllOf['AuthMethodEnum'] = {

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



export default LoggingKafkaAllOf;

