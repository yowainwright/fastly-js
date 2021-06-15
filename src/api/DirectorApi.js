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
import ModelDirector from '../model/ModelDirector';
import SchemasModelBackend from '../model/SchemasModelBackend';


export default class DirectorApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createDirectorWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createDirector");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createDirector");
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
        'backends': this.apiClient.buildCollectionParam(opts['backends'], 'csv'),
        'capacity': opts['capacity'],
        'comment': opts['comment'],
        'name': opts['name'],
        'quorum': opts['quorum'],
        'shield': opts['shield'],
        'type': opts['type'],
        'retries': opts['retries']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ModelDirector;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/director', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createDirector(service_id, version_id, opts) {
      return this.createDirectorWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteDirectorWithHttpInfo(service_id, version_id, director_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteDirector");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteDirector");
      }
      // verify the required parameter 'director_name' is set
      if (director_name === undefined || director_name === null) {
        throw new Error("Missing the required parameter 'director_name' when calling deleteDirector");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'director_name': director_name
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
        '/service/{service_id}/version/{version_id}/director/{director_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteDirector(service_id, version_id, director_name) {
      return this.deleteDirectorWithHttpInfo(service_id, version_id, director_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getDirectorWithHttpInfo(service_id, version_id, director_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getDirector");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getDirector");
      }
      // verify the required parameter 'director_name' is set
      if (director_name === undefined || director_name === null) {
        throw new Error("Missing the required parameter 'director_name' when calling getDirector");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'director_name': director_name
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
      let returnType = ModelDirector;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/director/{director_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getDirector(service_id, version_id, director_name) {
      return this.getDirectorWithHttpInfo(service_id, version_id, director_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listDirectorsWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listDirectors");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listDirectors");
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
      let returnType = [ModelDirector];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/director', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listDirectors(service_id, version_id) {
      return this.listDirectorsWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateDirectorWithHttpInfo(service_id, version_id, director_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateDirector");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateDirector");
      }
      // verify the required parameter 'director_name' is set
      if (director_name === undefined || director_name === null) {
        throw new Error("Missing the required parameter 'director_name' when calling updateDirector");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'director_name': director_name
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
      let returnType = ModelDirector;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/director/{director_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateDirector(service_id, version_id, director_name) {
      return this.updateDirectorWithHttpInfo(service_id, version_id, director_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
