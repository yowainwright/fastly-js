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
 * The Invoicelineitems model module.
 * @module model/Invoicelineitems
 * @version 7.1.0
 */
class Invoicelineitems {
    /**
     * Constructs a new <code>Invoicelineitems</code>.
     * @alias module:model/Invoicelineitems
     */
    constructor() { 
        
        Invoicelineitems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Invoicelineitems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invoicelineitems} obj Optional instance to populate.
     * @return {module:model/Invoicelineitems} The populated <code>Invoicelineitems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invoicelineitems();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('credit_coupon_code')) {
                obj['credit_coupon_code'] = ApiClient.convertToType(data['credit_coupon_code'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
            if (data.hasOwnProperty('ProductName')) {
                obj['ProductName'] = ApiClient.convertToType(data['ProductName'], 'String');
            }
            if (data.hasOwnProperty('ProductGroup')) {
                obj['ProductGroup'] = ApiClient.convertToType(data['ProductGroup'], 'String');
            }
            if (data.hasOwnProperty('Region')) {
                obj['Region'] = ApiClient.convertToType(data['Region'], 'String');
            }
            if (data.hasOwnProperty('UsageType')) {
                obj['UsageType'] = ApiClient.convertToType(data['UsageType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Invoice line item transaction name.
 * @member {String} description
 */
Invoicelineitems.prototype['description'] = undefined;

/**
 * Billed amount for line item.
 * @member {Number} amount
 */
Invoicelineitems.prototype['amount'] = undefined;

/**
 * Discount coupon associated with the invoice for any account or service credits.
 * @member {String} credit_coupon_code
 */
Invoicelineitems.prototype['credit_coupon_code'] = undefined;

/**
 * Price per unit.
 * @member {Number} rate
 */
Invoicelineitems.prototype['rate'] = undefined;

/**
 * Total number of units of usage.
 * @member {Number} units
 */
Invoicelineitems.prototype['units'] = undefined;

/**
 * The name of the product.
 * @member {String} ProductName
 */
Invoicelineitems.prototype['ProductName'] = undefined;

/**
 * The broader classification of the product (e.g., `Compute` or `Full-Site Delivery`).
 * @member {String} ProductGroup
 */
Invoicelineitems.prototype['ProductGroup'] = undefined;

/**
 * The geographical area applicable for regionally based products.
 * @member {String} Region
 */
Invoicelineitems.prototype['Region'] = undefined;

/**
 * The unit of measure (e.g., `requests` or `bandwidth`).
 * @member {String} UsageType
 */
Invoicelineitems.prototype['UsageType'] = undefined;






export default Invoicelineitems;

