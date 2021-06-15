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
import ModelServiceAuthorizationAllOf from './ModelServiceAuthorizationAllOf';
import Permission from './Permission';
import Timestamps from './Timestamps';


class ModelServiceAuthorization {
    
    constructor() { 
        Timestamps.initialize(this);ModelServiceAuthorizationAllOf.initialize(this);
        ModelServiceAuthorization.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelServiceAuthorization();
            Timestamps.constructFromObject(data, obj);
            ModelServiceAuthorizationAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = Permission.constructFromObject(data['permission']);
            }
        }
        return obj;
    }


}


ModelServiceAuthorization.prototype['created_at'] = undefined;


ModelServiceAuthorization.prototype['deleted_at'] = undefined;


ModelServiceAuthorization.prototype['updated_at'] = undefined;


ModelServiceAuthorization.prototype['permission'] = undefined;


// Implement Timestamps interface:

Timestamps.prototype['created_at'] = undefined;

Timestamps.prototype['deleted_at'] = undefined;

Timestamps.prototype['updated_at'] = undefined;
// Implement ModelServiceAuthorizationAllOf interface:

ModelServiceAuthorizationAllOf.prototype['permission'] = undefined;




export default ModelServiceAuthorization;

