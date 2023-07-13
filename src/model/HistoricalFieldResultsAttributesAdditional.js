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
import ReadOnlyIdService from './ReadOnlyIdService';

/**
 * The HistoricalFieldResultsAttributesAdditional model module.
 * @module model/HistoricalFieldResultsAttributesAdditional
 * @version 5.0.2
 */
class HistoricalFieldResultsAttributesAdditional {
    /**
     * Constructs a new <code>HistoricalFieldResultsAttributesAdditional</code>.
     * @alias module:model/HistoricalFieldResultsAttributesAdditional
     */
    constructor() { 
        
        HistoricalFieldResultsAttributesAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalFieldResultsAttributesAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalFieldResultsAttributesAdditional} obj Optional instance to populate.
     * @return {module:model/HistoricalFieldResultsAttributesAdditional} The populated <code>HistoricalFieldResultsAttributesAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalFieldResultsAttributesAdditional();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ReadOnlyIdService.constructFromObject(data['service_id']);
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReadOnlyIdService} service_id
 */
HistoricalFieldResultsAttributesAdditional.prototype['service_id'] = undefined;

/**
 * @member {Number} start_time
 */
HistoricalFieldResultsAttributesAdditional.prototype['start_time'] = undefined;






export default HistoricalFieldResultsAttributesAdditional;

