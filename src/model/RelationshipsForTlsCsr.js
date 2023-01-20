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
import RelationshipTlsPrivateKey from './RelationshipTlsPrivateKey';
import RelationshipTlsPrivateKeyTlsPrivateKey from './RelationshipTlsPrivateKeyTlsPrivateKey';

/**
 * The RelationshipsForTlsCsr model module.
 * @module model/RelationshipsForTlsCsr
 * @version v3.1.0
 */
class RelationshipsForTlsCsr {
    /**
     * Constructs a new <code>RelationshipsForTlsCsr</code>.
     * @alias module:model/RelationshipsForTlsCsr
     * @implements module:model/RelationshipTlsPrivateKey
     */
    constructor() { 
        RelationshipTlsPrivateKey.initialize(this);
        RelationshipsForTlsCsr.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForTlsCsr</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsCsr} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsCsr} The populated <code>RelationshipsForTlsCsr</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForTlsCsr();
            RelationshipTlsPrivateKey.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_private_key')) {
                obj['tls_private_key'] = RelationshipTlsPrivateKeyTlsPrivateKey.constructFromObject(data['tls_private_key']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsPrivateKeyTlsPrivateKey} tls_private_key
 */
RelationshipsForTlsCsr.prototype['tls_private_key'] = undefined;


// Implement RelationshipTlsPrivateKey interface:
/**
 * @member {module:model/RelationshipTlsPrivateKeyTlsPrivateKey} tls_private_key
 */
RelationshipTlsPrivateKey.prototype['tls_private_key'] = undefined;




export default RelationshipsForTlsCsr;

