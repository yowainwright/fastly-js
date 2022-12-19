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


import ApiClient from "../ApiClient";
import MutualAuthentication from '../model/MutualAuthentication';
import MutualAuthenticationResponse from '../model/MutualAuthenticationResponse';
import MutualAuthenticationsResponse from '../model/MutualAuthenticationsResponse';

/**
* MutualAuthentication service.
* @module api/MutualAuthenticationApi
* @version 3.0.0
*/
export default class MutualAuthenticationApi {

    /**
    * Constructs a new MutualAuthenticationApi. 
    * @alias module:api/MutualAuthenticationApi
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
     * Create a mutual authentication using a bundle of certificates to enable client-to-server mutual TLS.
     * @param {Object} options
     * @param {module:model/MutualAuthentication} [options.mutual_authentication]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MutualAuthenticationResponse} and HTTP response
     */
    createMutualTlsAuthenticationWithHttpInfo(options = {}) {
      let postBody = options['mutual_authentication'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = MutualAuthenticationResponse;
      return this.apiClient.callApi(
        '/tls/mutual_authentications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a mutual authentication using a bundle of certificates to enable client-to-server mutual TLS.
     * @param {Object} options
     * @param {module:model/MutualAuthentication} [options.mutual_authentication]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MutualAuthenticationResponse}
     */
    createMutualTlsAuthentication(options = {}) {
      return this.createMutualTlsAuthenticationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Remove a Mutual TLS authentication
     * @param {Object} options
     * @param {String} options.mutual_authentication_id - Alphanumeric string identifying a mutual authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteMutualTlsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'mutual_authentication_id' is set.
      if (options['mutual_authentication_id'] === undefined || options['mutual_authentication_id'] === null) {
        throw new Error("Missing the required parameter 'mutual_authentication_id'.");
      }

      let pathParams = {
        'mutual_authentication_id': options['mutual_authentication_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/tls/mutual_authentications/{mutual_authentication_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove a Mutual TLS authentication
     * @param {Object} options
     * @param {String} options.mutual_authentication_id - Alphanumeric string identifying a mutual authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteMutualTls(options = {}) {
      return this.deleteMutualTlsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show a Mutual Authentication.
     * @param {Object} options
     * @param {String} options.mutual_authentication_id - Alphanumeric string identifying a mutual authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MutualAuthenticationResponse} and HTTP response
     */
    getMutualAuthenticationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'mutual_authentication_id' is set.
      if (options['mutual_authentication_id'] === undefined || options['mutual_authentication_id'] === null) {
        throw new Error("Missing the required parameter 'mutual_authentication_id'.");
      }

      let pathParams = {
        'mutual_authentication_id': options['mutual_authentication_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = MutualAuthenticationResponse;
      return this.apiClient.callApi(
        '/tls/mutual_authentications/{mutual_authentication_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show a Mutual Authentication.
     * @param {Object} options
     * @param {String} options.mutual_authentication_id - Alphanumeric string identifying a mutual authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MutualAuthenticationResponse}
     */
    getMutualAuthentication(options = {}) {
      return this.getMutualAuthenticationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all mutual authentications.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MutualAuthenticationsResponse} and HTTP response
     */
    listMutualAuthenticationsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = MutualAuthenticationsResponse;
      return this.apiClient.callApi(
        '/tls/mutual_authentications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all mutual authentications.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MutualAuthenticationsResponse}
     */
    listMutualAuthentications(options = {}) {
      return this.listMutualAuthenticationsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a Mutual Authentication.
     * @param {Object} options
     * @param {String} options.mutual_authentication_id - Alphanumeric string identifying a mutual authentication.
     * @param {module:model/MutualAuthentication} [options.mutual_authentication]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MutualAuthenticationResponse} and HTTP response
     */
    patchMutualAuthenticationWithHttpInfo(options = {}) {
      let postBody = options['mutual_authentication'];
      // Verify the required parameter 'mutual_authentication_id' is set.
      if (options['mutual_authentication_id'] === undefined || options['mutual_authentication_id'] === null) {
        throw new Error("Missing the required parameter 'mutual_authentication_id'.");
      }

      let pathParams = {
        'mutual_authentication_id': options['mutual_authentication_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = MutualAuthenticationResponse;
      return this.apiClient.callApi(
        '/tls/mutual_authentications/{mutual_authentication_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Mutual Authentication.
     * @param {Object} options
     * @param {String} options.mutual_authentication_id - Alphanumeric string identifying a mutual authentication.
     * @param {module:model/MutualAuthentication} [options.mutual_authentication]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MutualAuthenticationResponse}
     */
    patchMutualAuthentication(options = {}) {
      return this.patchMutualAuthenticationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}