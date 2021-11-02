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
import LoggingPlacement from '../models/LoggingPlacement';
import LoggingScalyrResponse from '../models/LoggingScalyrResponse';

/**
* LoggingScalyr service.
* @module api/LoggingScalyrApi
* @version 3.0.0-alpha1
*/
export default class LoggingScalyrApi {

    /**
    * Constructs a new LoggingScalyrApi. 
    * @alias module:api/LoggingScalyrApi
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
     * Create a Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:models/String} [options.region='US'] - The region that log data will be sent to.
     * @param {String} [options.token] - The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
     * @param {String} [options.project_id='logplex'] - The name of the logfile within Scalyr.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingScalyrResponse} and HTTP response
     */
    createLogScalyrWithHttpInfo(options = {}) {
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
        'region': options['region'],
        'token': options['token'],
        'project_id': options['project_id']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingScalyrResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/scalyr', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:models/String} [options.region='US'] - The region that log data will be sent to.
     * @param {String} [options.token] - The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
     * @param {String} [options.project_id='logplex'] - The name of the logfile within Scalyr.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingScalyrResponse}
     */
    createLogScalyr(options = {}) {
      return this.createLogScalyrWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_scalyr_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteLogScalyrWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_scalyr_name' is set.
      if (options['logging_scalyr_name'] === undefined || options['logging_scalyr_name'] === null) {
        throw new Error("Missing the required parameter 'logging_scalyr_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_scalyr_name': options['logging_scalyr_name']
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
        '/service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_scalyr_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteLogScalyr(options = {}) {
      return this.deleteLogScalyrWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_scalyr_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingScalyrResponse} and HTTP response
     */
    getLogScalyrWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_scalyr_name' is set.
      if (options['logging_scalyr_name'] === undefined || options['logging_scalyr_name'] === null) {
        throw new Error("Missing the required parameter 'logging_scalyr_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_scalyr_name': options['logging_scalyr_name']
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
      let returnType = LoggingScalyrResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_scalyr_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingScalyrResponse}
     */
    getLogScalyr(options = {}) {
      return this.getLogScalyrWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the Scalyrs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:models/LoggingScalyrResponse>} and HTTP response
     */
    listLogScalyrWithHttpInfo(options = {}) {
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
      let returnType = [LoggingScalyrResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/scalyr', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the Scalyrs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:models/LoggingScalyrResponse>}
     */
    listLogScalyr(options = {}) {
      return this.listLogScalyrWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_scalyr_name
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:models/String} [options.region='US'] - The region that log data will be sent to.
     * @param {String} [options.token] - The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
     * @param {String} [options.project_id='logplex'] - The name of the logfile within Scalyr.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingScalyrResponse} and HTTP response
     */
    updateLogScalyrWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_scalyr_name' is set.
      if (options['logging_scalyr_name'] === undefined || options['logging_scalyr_name'] === null) {
        throw new Error("Missing the required parameter 'logging_scalyr_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_scalyr_name': options['logging_scalyr_name']
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
        'region': options['region'],
        'token': options['token'],
        'project_id': options['project_id']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingScalyrResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the Scalyr for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_scalyr_name
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/LoggingPlacement} [options.placement]
     * @param {module:models/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:models/String} [options.region='US'] - The region that log data will be sent to.
     * @param {String} [options.token] - The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
     * @param {String} [options.project_id='logplex'] - The name of the logfile within Scalyr.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingScalyrResponse}
     */
    updateLogScalyr(options = {}) {
      return this.updateLogScalyrWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
