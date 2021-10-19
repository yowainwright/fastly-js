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
import RateLimiterResponse from '../models/RateLimiterResponse';
import RateLimiterResponse1 from '../models/RateLimiterResponse1';

/**
* RateLimiter service.
* @module api/RateLimiterApi
* @version 3.0.0-alpha1
*/
export default class RateLimiterApi {

    /**
    * Constructs a new RateLimiterApi. 
    * @alias module:api/RateLimiterApi
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
     * Create a rate limiter for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {module:models/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:models/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:models/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:models/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:models/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/RateLimiterResponse} and HTTP response
     */
    createRateLimiterWithHttpInfo(options = {}) {
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
        'action': options['action'],
        'client_key': this.apiClient.buildCollectionParam(options['client_key'], 'csv'),
        'feature_revision': options['feature_revision'],
        'http_methods': this.apiClient.buildCollectionParam(options['http_methods'], 'csv'),
        'logger_type': options['logger_type'],
        'name': options['name'],
        'penalty_box_duration': options['penalty_box_duration'],
        'response': options['response'],
        'response_object_name': options['response_object_name'],
        'rps_limit': options['rps_limit'],
        'uri_dictionary_name': options['uri_dictionary_name'],
        'window_size': options['window_size']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = RateLimiterResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/rate-limiters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a rate limiter for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {module:models/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:models/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:models/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:models/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:models/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/RateLimiterResponse}
     */
    createRateLimiter(options = {}) {
      return this.createRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteRateLimiterWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rate_limiter_id' is set.
      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      let pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
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
        '/rate-limiters/{rate_limiter_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteRateLimiter(options = {}) {
      return this.deleteRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/RateLimiterResponse} and HTTP response
     */
    getRateLimiterWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rate_limiter_id' is set.
      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      let pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
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
      let returnType = RateLimiterResponse;
      return this.apiClient.callApi(
        '/rate-limiters/{rate_limiter_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/RateLimiterResponse}
     */
    getRateLimiter(options = {}) {
      return this.getRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all rate limiters for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:models/RateLimiterResponse>} and HTTP response
     */
    listRateLimitersWithHttpInfo(options = {}) {
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
      let returnType = [RateLimiterResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/rate-limiters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all rate limiters for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:models/RateLimiterResponse>}
     */
    listRateLimiters(options = {}) {
      return this.listRateLimitersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @param {module:models/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:models/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:models/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:models/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:models/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/RateLimiterResponse} and HTTP response
     */
    updateRateLimiterWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rate_limiter_id' is set.
      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      let pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'action': options['action'],
        'client_key': this.apiClient.buildCollectionParam(options['client_key'], 'csv'),
        'feature_revision': options['feature_revision'],
        'http_methods': this.apiClient.buildCollectionParam(options['http_methods'], 'csv'),
        'logger_type': options['logger_type'],
        'name': options['name'],
        'penalty_box_duration': options['penalty_box_duration'],
        'response': options['response'],
        'response_object_name': options['response_object_name'],
        'rps_limit': options['rps_limit'],
        'uri_dictionary_name': options['uri_dictionary_name'],
        'window_size': options['window_size']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = RateLimiterResponse;
      return this.apiClient.callApi(
        '/rate-limiters/{rate_limiter_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @param {module:models/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:models/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:models/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:models/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:models/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/RateLimiterResponse}
     */
    updateRateLimiter(options = {}) {
      return this.updateRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
