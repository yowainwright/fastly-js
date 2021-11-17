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
import DomainResponse from '../models/DomainResponse';
import ServiceDetail from '../models/ServiceDetail';
import ServiceListResponse from '../models/ServiceListResponse';
import ServiceResponse from '../models/ServiceResponse';

/**
* Service service.
* @module api/ServiceApi
* @version 3.0.0-alpha1
*/
export default class ServiceApi {

    /**
    * Constructs a new ServiceApi. 
    * @alias module:api/ServiceApi
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
     * Create a service.
     * @param {Object} options
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - The name of the service.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @param {module:models/String} [options.type] - The type of this service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ServiceResponse} and HTTP response
     */
    createServiceWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'comment': options['comment'],
        'name': options['name'],
        'customer_id': options['customer_id'],
        'type': options['type']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/service', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a service.
     * @param {Object} options
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - The name of the service.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @param {module:models/String} [options.type] - The type of this service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ServiceResponse}
     */
    createService(options = {}) {
      return this.createServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteServiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
        '/service/{service_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteService(options = {}) {
      return this.deleteServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific service by id.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ServiceResponse} and HTTP response
     */
    getServiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/service/{service_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific service by id.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ServiceResponse}
     */
    getService(options = {}) {
      return this.getServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List detailed information on a specified service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ServiceDetail} and HTTP response
     */
    getServiceDetailWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = ServiceDetail;
      return this.apiClient.callApi(
        '/service/{service_id}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List detailed information on a specified service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ServiceDetail}
     */
    getServiceDetail(options = {}) {
      return this.getServiceDetailWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List the domains within a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:models/DomainResponse>} and HTTP response
     */
    listServiceDomainsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = [DomainResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/domain', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List the domains within a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:models/DomainResponse>}
     */
    listServiceDomains(options = {}) {
      return this.listServiceDomainsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List services.
     * @param {Object} options
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:models/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:models/ServiceListResponse>} and HTTP response
     */
    listServicesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': options['page'],
        'per_page': options['per_page'],
        'sort': options['sort'],
        'direction': options['direction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ServiceListResponse];
      return this.apiClient.callApi(
        '/service', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List services.
     * @param {Object} options
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:models/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:models/ServiceListResponse>}
     */
    listServices(options = {}) {
      return this.listServicesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific service by name.
     * @param {Object} options
     * @param {String} options.name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ServiceResponse} and HTTP response
     */
    searchServiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'name' is set.
      if (options['name'] === undefined || options['name'] === null) {
        throw new Error("Missing the required parameter 'name'.");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': options['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/service/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific service by name.
     * @param {Object} options
     * @param {String} options.name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ServiceResponse}
     */
    searchService(options = {}) {
      return this.searchServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - The name of the service.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ServiceResponse} and HTTP response
     */
    updateServiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'comment': options['comment'],
        'name': options['name'],
        'customer_id': options['customer_id']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/service/{service_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - The name of the service.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ServiceResponse}
     */
    updateService(options = {}) {
      return this.updateServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
