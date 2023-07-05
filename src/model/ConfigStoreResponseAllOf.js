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

/**
 * The ConfigStoreResponseAllOf model module.
 * @module model/ConfigStoreResponseAllOf
 * @version 4.4.0
 */
class ConfigStoreResponseAllOf {
    /**
     * Constructs a new <code>ConfigStoreResponseAllOf</code>.
     * @alias module:model/ConfigStoreResponseAllOf
     */
    constructor() { 
        
        ConfigStoreResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigStoreResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigStoreResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ConfigStoreResponseAllOf} The populated <code>ConfigStoreResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigStoreResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An alphanumeric string identifying the config store.
 * @member {String} id
 */
ConfigStoreResponseAllOf.prototype['id'] = undefined;






export default ConfigStoreResponseAllOf;

