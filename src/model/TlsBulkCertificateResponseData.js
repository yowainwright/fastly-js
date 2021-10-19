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
import RelationshipsForTlsBulkCertificate from './RelationshipsForTlsBulkCertificate';
import Timestamps from './Timestamps';
import TlsBulkCertificateData from './TlsBulkCertificateData';
import TlsBulkCertificateResponseDataAllOf from './TlsBulkCertificateResponseDataAllOf';
import TypeTlsBulkCertificate from './TypeTlsBulkCertificate';

/**
 * The TlsBulkCertificateResponseData model module.
 * @module model/TlsBulkCertificateResponseData
 * @version 3.0.0-alpha1
 */
class TlsBulkCertificateResponseData {
    /**
     * Constructs a new <code>TlsBulkCertificateResponseData</code>.
     * @alias module:model/TlsBulkCertificateResponseData
     */
    constructor() { 
        TlsBulkCertificateResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsBulkCertificateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateResponseData} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateResponseData} The populated <code>TlsBulkCertificateResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsBulkCertificateResponseData();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Timestamps);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsBulkCertificate.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsBulkCertificate.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Timestamps} attributes
 */
TlsBulkCertificateResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsBulkCertificate} relationships
 */
TlsBulkCertificateResponseData.prototype['relationships'] = undefined;

/**
 * @member {module:model/TypeTlsBulkCertificate} type
 */
TlsBulkCertificateResponseData.prototype['type'] = undefined;

/**
 * Alphanumeric string identifying a TLS bulk certificate.
 * @member {String} id
 */
TlsBulkCertificateResponseData.prototype['id'] = undefined;






export default TlsBulkCertificateResponseData;

