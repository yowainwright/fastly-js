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
import ModelSettingsAllOf from './ModelSettingsAllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';


class SchemasModelSettings {
    
    constructor() { 
        ServiceIdAndVersion.initialize(this);ModelSettingsAllOf.initialize(this);
        SchemasModelSettings.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasModelSettings();
            ServiceIdAndVersion.constructFromObject(data, obj);
            ModelSettingsAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('general.default_host')) {
                obj['general.default_host'] = ApiClient.convertToType(data['general.default_host'], 'String');
            }
            if (data.hasOwnProperty('general.default_ttl')) {
                obj['general.default_ttl'] = ApiClient.convertToType(data['general.default_ttl'], 'Number');
            }
            if (data.hasOwnProperty('general.stale_if_error')) {
                obj['general.stale_if_error'] = ApiClient.convertToType(data['general.stale_if_error'], 'Boolean');
            }
            if (data.hasOwnProperty('general.stale_if_error_ttl')) {
                obj['general.stale_if_error_ttl'] = ApiClient.convertToType(data['general.stale_if_error_ttl'], 'Number');
            }
        }
        return obj;
    }


}


SchemasModelSettings.prototype['service_id'] = undefined;


SchemasModelSettings.prototype['version'] = undefined;


SchemasModelSettings.prototype['general.default_host'] = undefined;


SchemasModelSettings.prototype['general.default_ttl'] = undefined;


SchemasModelSettings.prototype['general.stale_if_error'] = false;


SchemasModelSettings.prototype['general.stale_if_error_ttl'] = 43200;


// Implement ServiceIdAndVersion interface:

ServiceIdAndVersion.prototype['service_id'] = undefined;

ServiceIdAndVersion.prototype['version'] = undefined;
// Implement ModelSettingsAllOf interface:

ModelSettingsAllOf.prototype['general.default_host'] = undefined;

ModelSettingsAllOf.prototype['general.default_ttl'] = undefined;

ModelSettingsAllOf.prototype['general.stale_if_error'] = false;

ModelSettingsAllOf.prototype['general.stale_if_error_ttl'] = 43200;




export default SchemasModelSettings;

