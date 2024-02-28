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
import Timestamps from './Timestamps';
import TlsCertificateResponseAttributesAllOf from './TlsCertificateResponseAttributesAllOf';

/**
 * The TlsCertificateResponseAttributes model module.
 * @module model/TlsCertificateResponseAttributes
 * @version 7.1.0
 */
class TlsCertificateResponseAttributes {
    /**
     * Constructs a new <code>TlsCertificateResponseAttributes</code>.
     * @alias module:model/TlsCertificateResponseAttributes
     * @implements module:model/Timestamps
     * @implements module:model/TlsCertificateResponseAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);TlsCertificateResponseAttributesAllOf.initialize(this);
        TlsCertificateResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCertificateResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateResponseAttributes} obj Optional instance to populate.
     * @return {module:model/TlsCertificateResponseAttributes} The populated <code>TlsCertificateResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCertificateResponseAttributes();
            Timestamps.constructFromObject(data, obj);
            TlsCertificateResponseAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('issued_to')) {
                obj['issued_to'] = ApiClient.convertToType(data['issued_to'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('signature_algorithm')) {
                obj['signature_algorithm'] = ApiClient.convertToType(data['signature_algorithm'], 'String');
            }
            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Date');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Date');
            }
            if (data.hasOwnProperty('replace')) {
                obj['replace'] = ApiClient.convertToType(data['replace'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TlsCertificateResponseAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TlsCertificateResponseAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TlsCertificateResponseAttributes.prototype['updated_at'] = undefined;

/**
 * The hostname for which a certificate was issued.
 * @member {String} issued_to
 */
TlsCertificateResponseAttributes.prototype['issued_to'] = undefined;

/**
 * The certificate authority that issued the certificate.
 * @member {String} issuer
 */
TlsCertificateResponseAttributes.prototype['issuer'] = undefined;

/**
 * A value assigned by the issuer that is unique to a certificate.
 * @member {String} serial_number
 */
TlsCertificateResponseAttributes.prototype['serial_number'] = undefined;

/**
 * The algorithm used to sign the certificate.
 * @member {String} signature_algorithm
 */
TlsCertificateResponseAttributes.prototype['signature_algorithm'] = undefined;

/**
 * Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic.
 * @member {Date} not_after
 */
TlsCertificateResponseAttributes.prototype['not_after'] = undefined;

/**
 * Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic.
 * @member {Date} not_before
 */
TlsCertificateResponseAttributes.prototype['not_before'] = undefined;

/**
 * A recommendation from Fastly indicating the key associated with this certificate is in need of rotation.
 * @member {Boolean} replace
 */
TlsCertificateResponseAttributes.prototype['replace'] = undefined;


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
// Implement TlsCertificateResponseAttributesAllOf interface:
/**
 * The hostname for which a certificate was issued.
 * @member {String} issued_to
 */
TlsCertificateResponseAttributesAllOf.prototype['issued_to'] = undefined;
/**
 * The certificate authority that issued the certificate.
 * @member {String} issuer
 */
TlsCertificateResponseAttributesAllOf.prototype['issuer'] = undefined;
/**
 * A value assigned by the issuer that is unique to a certificate.
 * @member {String} serial_number
 */
TlsCertificateResponseAttributesAllOf.prototype['serial_number'] = undefined;
/**
 * The algorithm used to sign the certificate.
 * @member {String} signature_algorithm
 */
TlsCertificateResponseAttributesAllOf.prototype['signature_algorithm'] = undefined;
/**
 * Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic.
 * @member {Date} not_after
 */
TlsCertificateResponseAttributesAllOf.prototype['not_after'] = undefined;
/**
 * Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic.
 * @member {Date} not_before
 */
TlsCertificateResponseAttributesAllOf.prototype['not_before'] = undefined;
/**
 * A recommendation from Fastly indicating the key associated with this certificate is in need of rotation.
 * @member {Boolean} replace
 */
TlsCertificateResponseAttributesAllOf.prototype['replace'] = undefined;




export default TlsCertificateResponseAttributes;

