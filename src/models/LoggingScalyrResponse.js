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
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingPlacement from './LoggingPlacement';
import LoggingScalyr from './LoggingScalyr';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingScalyrResponse model module.
 * @module models/LoggingScalyrResponse
 * @version 3.0.0-alpha1
 */
class LoggingScalyrResponse {
    /**
     * Constructs a new <code>LoggingScalyrResponse</code>.
     * @alias module:models/LoggingScalyrResponse
     * @implements module:models/LoggingScalyr
     * @implements module:models/Timestamps
     * @implements module:models/ServiceIdAndVersion
     */
    constructor() { 
        LoggingScalyr.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingScalyrResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingScalyrResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LoggingScalyrResponse} obj Optional instance to populate.
     * @return {module:models/LoggingScalyrResponse} The populated <code>LoggingScalyrResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingScalyrResponse();
            LoggingScalyr.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

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
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingScalyrResponse.prototype['name'] = undefined;

/**
 * @member {module:models/LoggingPlacement} placement
 */
LoggingScalyrResponse.prototype['placement'] = undefined;

/**
 * @member {module:models/LoggingFormatVersion} format_version
 */
LoggingScalyrResponse.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingScalyrResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingScalyrResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The region that log data will be sent to.
 * @member {module:models/LoggingScalyrResponse.RegionEnum} region
 * @default 'US'
 */
LoggingScalyrResponse.prototype['region'] = undefined;

/**
 * The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
 * @member {String} token
 */
LoggingScalyrResponse.prototype['token'] = undefined;

/**
 * The name of the logfile within Scalyr.
 * @member {String} project_id
 * @default 'logplex'
 */
LoggingScalyrResponse.prototype['project_id'] = 'logplex';

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
LoggingScalyrResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
LoggingScalyrResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
LoggingScalyrResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
LoggingScalyrResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
LoggingScalyrResponse.prototype['version'] = undefined;


// Implement LoggingScalyr interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingScalyr.prototype['name'] = undefined;
/**
 * @member {module:models/LoggingPlacement} placement
 */
LoggingScalyr.prototype['placement'] = undefined;
/**
 * @member {module:models/LoggingFormatVersion} format_version
 */
LoggingScalyr.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingScalyr.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingScalyr.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The region that log data will be sent to.
 * @member {module:models/LoggingScalyr.RegionEnum} region
 * @default 'US'
 */
LoggingScalyr.prototype['region'] = undefined;
/**
 * The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
 * @member {String} token
 */
LoggingScalyr.prototype['token'] = undefined;
/**
 * The name of the logfile within Scalyr.
 * @member {String} project_id
 * @default 'logplex'
 */
LoggingScalyr.prototype['project_id'] = 'logplex';
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersion interface:
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;



/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingScalyrResponse['RegionEnum'] = {

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



export default LoggingScalyrResponse;

