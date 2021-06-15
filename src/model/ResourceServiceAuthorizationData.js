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
import ModelServiceAuthorization from './ModelServiceAuthorization';
import RelationshipUser from './RelationshipUser';


class ResourceServiceAuthorizationData {
    
    constructor() { 
        
        ResourceServiceAuthorizationData.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceServiceAuthorizationData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ModelServiceAuthorization.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = ApiClient.convertToType(data['relationships'], RelationshipUser);
            }
        }
        return obj;
    }


}


ResourceServiceAuthorizationData.prototype['type'] = undefined;


ResourceServiceAuthorizationData.prototype['id'] = undefined;


ResourceServiceAuthorizationData.prototype['attributes'] = undefined;


ResourceServiceAuthorizationData.prototype['relationships'] = undefined;






export default ResourceServiceAuthorizationData;

