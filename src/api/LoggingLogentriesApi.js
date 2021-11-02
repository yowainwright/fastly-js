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


import ApiClient from "../ApiClient";
import LoggingFormatVersion from '../models/LoggingFormatVersion';
import LoggingLogentriesResponse from '../models/LoggingLogentriesResponse';
import LoggingPlacement from '../models/LoggingPlacement';
import LoggingUseTls from '../models/LoggingUseTls';

/**
* LoggingLogentries service.
* @module api/LoggingLogentriesApi
* @version 3.0.0-alpha1
*/
export default class LoggingLogentriesApi {

    /**
    * Constructs a new LoggingLogentriesApi. 
    * @alias module:api/LoggingLogentriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Create a Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {Number} [options.port=20000] - The port number.
     * @param {String} [options.token] - Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
     * @param {module:models/LoggingUseTls} [options.use_tls]
     * @param {module:models/String} [options.region] - The region to which to stream logs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingLogentriesResponse} and HTTP response
     */
    createLogLogentriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'port': options['port'],
        'token': options['token'],
        'use_tls': options['use_tls'],
        'region': options['region']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingLogentriesResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logentries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {Number} [options.port=20000] - The port number.
     * @param {String} [options.token] - Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
     * @param {module:models/LoggingUseTls} [options.use_tls]
     * @param {module:models/String} [options.region] - The region to which to stream logs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingLogentriesResponse}
     */
    createLogLogentries(options = {}) {
      return this.createLogLogentriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_logentries_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteLogLogentriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_logentries_name' is set.
      if (options['logging_logentries_name'] === undefined || options['logging_logentries_name'] === null) {
        throw new Error("Missing the required parameter 'logging_logentries_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_logentries_name': options['logging_logentries_name']
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
        '/service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_logentries_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteLogLogentries(options = {}) {
      return this.deleteLogLogentriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_logentries_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingLogentriesResponse} and HTTP response
     */
    getLogLogentriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_logentries_name' is set.
      if (options['logging_logentries_name'] === undefined || options['logging_logentries_name'] === null) {
        throw new Error("Missing the required parameter 'logging_logentries_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_logentries_name': options['logging_logentries_name']
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
      let returnType = LoggingLogentriesResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_logentries_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingLogentriesResponse}
     */
    getLogLogentries(options = {}) {
      return this.getLogLogentriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the Logentries for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:models/LoggingLogentriesResponse>} and HTTP response
     */
    listLogLogentriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
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
      let returnType = [LoggingLogentriesResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logentries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the Logentries for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:models/LoggingLogentriesResponse>}
     */
    listLogLogentries(options = {}) {
      return this.listLogLogentriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_logentries_name
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {Number} [options.port=20000] - The port number.
     * @param {String} [options.token] - Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
     * @param {module:models/LoggingUseTls} [options.use_tls]
     * @param {module:models/String} [options.region] - The region to which to stream logs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingLogentriesResponse} and HTTP response
     */
    updateLogLogentriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_logentries_name' is set.
      if (options['logging_logentries_name'] === undefined || options['logging_logentries_name'] === null) {
        throw new Error("Missing the required parameter 'logging_logentries_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_logentries_name': options['logging_logentries_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'port': options['port'],
        'token': options['token'],
        'use_tls': options['use_tls'],
        'region': options['region']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingLogentriesResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the Logentry for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_logentries_name
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {Number} [options.port=20000] - The port number.
     * @param {String} [options.token] - Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
     * @param {module:models/LoggingUseTls} [options.use_tls]
     * @param {module:models/String} [options.region] - The region to which to stream logs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingLogentriesResponse}
     */
    updateLogLogentries(options = {}) {
      return this.updateLogLogentriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
