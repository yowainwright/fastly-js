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
import Backend from './Backend';

/**
 * The SchemasDirector model module.
 * @module model/SchemasDirector
 * @version 3.0.0-alpha1
 */
class SchemasDirector {
    /**
     * Constructs a new <code>SchemasDirector</code>.
     * @alias module:model/SchemasDirector
     */
    constructor() { 
        
        SchemasDirector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasDirector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasDirector} obj Optional instance to populate.
     * @return {module:model/SchemasDirector} The populated <code>SchemasDirector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasDirector();

            if (data.hasOwnProperty('backends')) {
                obj['backends'] = ApiClient.convertToType(data['backends'], [Backend]);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quorum')) {
                obj['quorum'] = ApiClient.convertToType(data['quorum'], 'Number');
            }
            if (data.hasOwnProperty('retries')) {
                obj['retries'] = ApiClient.convertToType(data['retries'], 'Number');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * List of backends associated to a director.
 * @member {Array.<module:model/Backend>} backends
 */
SchemasDirector.prototype['backends'] = undefined;

/**
 * Unused.
 * @member {Number} capacity
 */
SchemasDirector.prototype['capacity'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
SchemasDirector.prototype['comment'] = undefined;

/**
 * Name for the Director.
 * @member {String} name
 */
SchemasDirector.prototype['name'] = undefined;

/**
 * The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
 * @member {Number} quorum
 * @default 75
 */
SchemasDirector.prototype['quorum'] = 75;

/**
 * How many backends to search if it fails.
 * @member {Number} retries
 * @default 5
 */
SchemasDirector.prototype['retries'] = 5;

/**
 * Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
SchemasDirector.prototype['shield'] = 'null';

/**
 * What type of load balance group to use.
 * @member {module:model/SchemasDirector.TypeEnum} type
 * @default TypeEnum.random
 */
SchemasDirector.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {Number}
 * @readonly
 */
SchemasDirector['TypeEnum'] = {

    /**
     * value: 1
     * @const
     */
    "random": 1,

    /**
     * value: 3
     * @const
     */
    "hash": 3,

    /**
     * value: 4
     * @const
     */
    "client": 4
};



export default SchemasDirector;

