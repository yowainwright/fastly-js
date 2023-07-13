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
import LoggingLogentries from './LoggingLogentries';
import LoggingUseTls from './LoggingUseTls';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingLogentriesResponse model module.
 * @module model/LoggingLogentriesResponse
 * @version 5.0.2
 */
class LoggingLogentriesResponse {
    /**
     * Constructs a new <code>LoggingLogentriesResponse</code>.
     * @alias module:model/LoggingLogentriesResponse
     * @implements module:model/LoggingLogentries
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingLogentries.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingLogentriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingLogentriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogentriesResponse} obj Optional instance to populate.
     * @return {module:model/LoggingLogentriesResponse} The populated <code>LoggingLogentriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingLogentriesResponse();
            LoggingLogentries.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTls.constructFromObject(data['use_tls']);
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
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
LoggingLogentriesResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingLogentriesResponse.PlacementEnum} placement
 */
LoggingLogentriesResponse.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingLogentriesResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingLogentriesResponse.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingLogentriesResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingLogentriesResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The port number.
 * @member {Number} port
 * @default 20000
 */
LoggingLogentriesResponse.prototype['port'] = 20000;

/**
 * Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
 * @member {String} token
 */
LoggingLogentriesResponse.prototype['token'] = undefined;

/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingLogentriesResponse.prototype['use_tls'] = undefined;

/**
 * The region to which to stream logs.
 * @member {module:model/LoggingLogentriesResponse.RegionEnum} region
 */
LoggingLogentriesResponse.prototype['region'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingLogentriesResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingLogentriesResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingLogentriesResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingLogentriesResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
LoggingLogentriesResponse.prototype['version'] = undefined;


// Implement LoggingLogentries interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingLogentries.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingLogentries.PlacementEnum} placement
 */
LoggingLogentries.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingLogentries.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingLogentries.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingLogentries.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingLogentries.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The port number.
 * @member {Number} port
 * @default 20000
 */
LoggingLogentries.prototype['port'] = 20000;
/**
 * Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
 * @member {String} token
 */
LoggingLogentries.prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingLogentries.prototype['use_tls'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingLogentries.RegionEnum} region
 */
LoggingLogentries.prototype['region'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingLogentriesResponse['PlacementEnum'] = {

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
LoggingLogentriesResponse['FormatVersionEnum'] = {

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
LoggingLogentriesResponse['RegionEnum'] = {

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



export default LoggingLogentriesResponse;

