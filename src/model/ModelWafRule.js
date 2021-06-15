/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit developer.fastly.com/reference/api/ 
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


class ModelWafRule {
    
    constructor() { 
        
        ModelWafRule.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelWafRule();

            if (data.hasOwnProperty('modsec_rule_id')) {
                obj['modsec_rule_id'] = ApiClient.convertToType(data['modsec_rule_id'], 'Number');
            }
            if (data.hasOwnProperty('publisher')) {
                obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}


ModelWafRule.prototype['modsec_rule_id'] = undefined;


ModelWafRule.prototype['publisher'] = undefined;


ModelWafRule.prototype['type'] = undefined;






ModelWafRule['PublisherEnum'] = {

    
    "fastly": "fastly",

    
    "trustwave": "trustwave",

    
    "owasp": "owasp"
};



ModelWafRule['TypeEnum'] = {

    
    "strict": "strict",

    
    "score": "score",

    
    "threshold": "threshold"
};



export default ModelWafRule;

