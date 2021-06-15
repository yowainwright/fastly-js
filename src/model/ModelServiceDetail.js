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
import ModelService from './ModelService';
import ModelServiceDetailAllOf from './ModelServiceDetailAllOf';
import NestedModelVersion from './NestedModelVersion';
import SchemasModelVersion from './SchemasModelVersion';


class ModelServiceDetail {
    
    constructor() { 
        ModelService.initialize(this);ModelServiceDetailAllOf.initialize(this);
        ModelServiceDetail.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelServiceDetail();
            ModelService.constructFromObject(data, obj);
            ModelServiceDetailAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('paused')) {
                obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('publish_key')) {
                obj['publish_key'] = ApiClient.convertToType(data['publish_key'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = NestedModelVersion.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [SchemasModelVersion]);
            }
            if (data.hasOwnProperty('active_version')) {
                obj['active_version'] = NestedModelVersion.constructFromObject(data['active_version']);
            }
        }
        return obj;
    }


}


ModelServiceDetail.prototype['created_at'] = undefined;


ModelServiceDetail.prototype['deleted_at'] = undefined;


ModelServiceDetail.prototype['updated_at'] = undefined;


ModelServiceDetail.prototype['comment'] = '';


ModelServiceDetail.prototype['customer_id'] = undefined;


ModelServiceDetail.prototype['name'] = undefined;


ModelServiceDetail.prototype['paused'] = undefined;


ModelServiceDetail.prototype['type'] = undefined;


ModelServiceDetail.prototype['publish_key'] = undefined;


ModelServiceDetail.prototype['id'] = undefined;


ModelServiceDetail.prototype['version'] = undefined;


ModelServiceDetail.prototype['versions'] = undefined;


ModelServiceDetail.prototype['active_version'] = undefined;


// Implement ModelService interface:

ModelService.prototype['created_at'] = undefined;

ModelService.prototype['deleted_at'] = undefined;

ModelService.prototype['updated_at'] = undefined;

ModelService.prototype['comment'] = '';

ModelService.prototype['customer_id'] = undefined;

ModelService.prototype['name'] = undefined;

ModelService.prototype['paused'] = undefined;

ModelService.prototype['type'] = undefined;

ModelService.prototype['publish_key'] = undefined;

ModelService.prototype['id'] = undefined;

ModelService.prototype['version'] = undefined;

ModelService.prototype['versions'] = undefined;
// Implement ModelServiceDetailAllOf interface:

ModelServiceDetailAllOf.prototype['active_version'] = undefined;

ModelServiceDetailAllOf.prototype['version'] = undefined;




ModelServiceDetail['TypeEnum'] = {

    
    "vcl": "vcl",

    
    "wasm": "wasm"
};



export default ModelServiceDetail;

