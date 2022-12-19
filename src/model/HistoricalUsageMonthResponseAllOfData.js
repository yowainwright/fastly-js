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
import HistoricalUsageResults from './HistoricalUsageResults';

/**
 * The HistoricalUsageMonthResponseAllOfData model module.
 * @module model/HistoricalUsageMonthResponseAllOfData
 * @version 3.0.1-alpha.1
 */
class HistoricalUsageMonthResponseAllOfData {
    /**
     * Constructs a new <code>HistoricalUsageMonthResponseAllOfData</code>.
     * @alias module:model/HistoricalUsageMonthResponseAllOfData
     */
    constructor() { 
        
        HistoricalUsageMonthResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalUsageMonthResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageMonthResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageMonthResponseAllOfData} The populated <code>HistoricalUsageMonthResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalUsageMonthResponseAllOfData();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], {'String': {'String': HistoricalUsageResults}});
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = HistoricalUsageResults.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} customer_id
 */
HistoricalUsageMonthResponseAllOfData.prototype['customer_id'] = undefined;

/**
 * @member {Object.<String, Object.<String, module:model/HistoricalUsageResults>>} services
 */
HistoricalUsageMonthResponseAllOfData.prototype['services'] = undefined;

/**
 * @member {module:model/HistoricalUsageResults} total
 */
HistoricalUsageMonthResponseAllOfData.prototype['total'] = undefined;






export default HistoricalUsageMonthResponseAllOfData;

