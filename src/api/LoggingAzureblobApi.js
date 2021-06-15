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


import ApiClient from "../ApiClient";
import LoggingCompressionCodec from '../model/LoggingCompressionCodec';
import LoggingFormatVersion from '../model/LoggingFormatVersion';
import LoggingMessageType from '../model/LoggingMessageType';
import LoggingPlacement from '../model/LoggingPlacement';
import ModelLoggingAzureblob from '../model/ModelLoggingAzureblob';


export default class LoggingAzureblobApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogAzureWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createLogAzure");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createLogAzure");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'created_at': opts['created_at'],
        'deleted_at': opts['deleted_at'],
        'updated_at': opts['updated_at'],
        'service_id': opts['service_id2'],
        'version': opts['version'],
        'name': opts['name'],
        'placement': opts['placement'],
        'format_version': opts['format_version'],
        'response_condition': opts['response_condition'],
        'format': opts['format'],
        'message_type': opts['message_type'],
        'timestamp_format': opts['timestamp_format'],
        'period': opts['period'],
        'gzip_level': opts['gzip_level'],
        'compression_codec': opts['compression_codec'],
        'path': opts['path'],
        'account_name': opts['account_name'],
        'container': opts['container'],
        'sas_token': opts['sas_token'],
        'public_key': opts['public_key'],
        'file_max_bytes': opts['file_max_bytes']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ModelLoggingAzureblob;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/azureblob', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogAzure(service_id, version_id, opts) {
      return this.createLogAzureWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLoogAzureWithHttpInfo(service_id, version_id, logging_azureblob_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteLoogAzure");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteLoogAzure");
      }
      // verify the required parameter 'logging_azureblob_name' is set
      if (logging_azureblob_name === undefined || logging_azureblob_name === null) {
        throw new Error("Missing the required parameter 'logging_azureblob_name' when calling deleteLoogAzure");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_azureblob_name': logging_azureblob_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLoogAzure(service_id, version_id, logging_azureblob_name) {
      return this.deleteLoogAzureWithHttpInfo(service_id, version_id, logging_azureblob_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogAzureWithHttpInfo(service_id, version_id, logging_azureblob_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getLogAzure");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getLogAzure");
      }
      // verify the required parameter 'logging_azureblob_name' is set
      if (logging_azureblob_name === undefined || logging_azureblob_name === null) {
        throw new Error("Missing the required parameter 'logging_azureblob_name' when calling getLogAzure");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_azureblob_name': logging_azureblob_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelLoggingAzureblob;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogAzure(service_id, version_id, logging_azureblob_name) {
      return this.getLogAzureWithHttpInfo(service_id, version_id, logging_azureblob_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogAzureWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listLogAzure");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listLogAzure");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelLoggingAzureblob];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/azureblob', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogAzure(service_id, version_id) {
      return this.listLogAzureWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogAzureWithHttpInfo(service_id, version_id, logging_azureblob_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateLogAzure");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateLogAzure");
      }
      // verify the required parameter 'logging_azureblob_name' is set
      if (logging_azureblob_name === undefined || logging_azureblob_name === null) {
        throw new Error("Missing the required parameter 'logging_azureblob_name' when calling updateLogAzure");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_azureblob_name': logging_azureblob_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ModelLoggingAzureblob;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogAzure(service_id, version_id, logging_azureblob_name) {
      return this.updateLogAzureWithHttpInfo(service_id, version_id, logging_azureblob_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
