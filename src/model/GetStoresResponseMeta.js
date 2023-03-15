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
 * The GetStoresResponseMeta model module.
 * @module model/GetStoresResponseMeta
 * @version 3.1.1
 */
class GetStoresResponseMeta {
    /**
     * Constructs a new <code>GetStoresResponseMeta</code>.
     * Meta for the pagination.
     * @alias module:model/GetStoresResponseMeta
     */
    constructor() { 
        
        GetStoresResponseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStoresResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStoresResponseMeta} obj Optional instance to populate.
     * @return {module:model/GetStoresResponseMeta} The populated <code>GetStoresResponseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStoresResponseMeta();

            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Cursor for the next page.
 * @member {String} next_cursor
 */
GetStoresResponseMeta.prototype['next_cursor'] = undefined;

/**
 * Entries returned.
 * @member {Number} limit
 */
GetStoresResponseMeta.prototype['limit'] = undefined;






export default GetStoresResponseMeta;
