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
 * The SecretStoreResponse model module.
 * @module model/SecretStoreResponse
 * @version 7.1.0
 */
class SecretStoreResponse {
    /**
     * Constructs a new <code>SecretStoreResponse</code>.
     * @alias module:model/SecretStoreResponse
     */
    constructor() { 
        
        SecretStoreResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecretStoreResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretStoreResponse} obj Optional instance to populate.
     * @return {module:model/SecretStoreResponse} The populated <code>SecretStoreResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretStoreResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * ID of the store.
 * @member {String} id
 */
SecretStoreResponse.prototype['id'] = undefined;

/**
 * A human-readable name for the store.
 * @member {String} name
 */
SecretStoreResponse.prototype['name'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SecretStoreResponse.prototype['created_at'] = undefined;






export default SecretStoreResponse;

