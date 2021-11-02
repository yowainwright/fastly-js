/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingCommon from './LoggingCommon';
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingNewrelicAllOf from './LoggingNewrelicAllOf';
import LoggingPlacement from './LoggingPlacement';

/**
 * The LoggingNewrelic model module.
 * @module models/LoggingNewrelic
 * @version 3.0.0-alpha1
 */
class LoggingNewrelic {
    /**
     * Constructs a new <code>LoggingNewrelic</code>.
     * @alias module:models/LoggingNewrelic
     * @implements module:models/LoggingCommon
     * @implements module:models/LoggingNewrelicAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingNewrelicAllOf.initialize(this);
        LoggingNewrelic.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingNewrelic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LoggingNewrelic} obj Optional instance to populate.
     * @return {module:models/LoggingNewrelic} The populated <code>LoggingNewrelic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingNewrelic();
            LoggingCommon.constructFromObject(data, obj);
            LoggingNewrelicAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = LoggingPlacement.constructFromObject(data['placement']);
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = LoggingFormatVersion.constructFromObject(data['format_version']);
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], Object);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingNewrelic.prototype['name'] = undefined;

/**
 * @member {module:models/LoggingPlacement} placement
 */
LoggingNewrelic.prototype['placement'] = undefined;

/**
 * @member {module:models/LoggingFormatVersion} format_version
 */
LoggingNewrelic.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingNewrelic.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
 * @member {Object} format
 */
LoggingNewrelic.prototype['format'] = undefined;

/**
 * The Insert API key from the Account page of your New Relic account. Required.
 * @member {String} token
 */
LoggingNewrelic.prototype['token'] = undefined;

/**
 * The region to which to stream logs.
 * @member {module:models/LoggingNewrelic.RegionEnum} region
 * @default 'US'
 */
LoggingNewrelic.prototype['region'] = undefined;


// Implement LoggingCommon interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommon.prototype['name'] = undefined;
/**
 * @member {module:models/LoggingPlacement} placement
 */
LoggingCommon.prototype['placement'] = undefined;
/**
 * @member {module:models/LoggingFormatVersion} format_version
 */
LoggingCommon.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
// Implement LoggingNewrelicAllOf interface:
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
 * @member {Object} format
 */
LoggingNewrelicAllOf.prototype['format'] = undefined;
/**
 * The Insert API key from the Account page of your New Relic account. Required.
 * @member {String} token
 */
LoggingNewrelicAllOf.prototype['token'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:models/LoggingNewrelicAllOf.RegionEnum} region
 * @default 'US'
 */
LoggingNewrelicAllOf.prototype['region'] = undefined;



/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingNewrelic['RegionEnum'] = {

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



export default LoggingNewrelic;

