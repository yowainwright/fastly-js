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
import LoggingKafkaResponse from '../models/LoggingKafkaResponse';
import LoggingUseTls from '../models/LoggingUseTls';

/**
* LoggingKafka service.
* @module api/LoggingKafkaApi
* @version 3.0.0-alpha1
*/
export default class LoggingKafkaApi {

    /**
    * Constructs a new LoggingKafkaApi. 
    * @alias module:api/LoggingKafkaApi
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
     * Create a Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:models/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {module:models/String} [options.auth_method] - SASL authentication method.
     * @param {String} [options.brokers] - A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
     * @param {module:models/String} [options.compression_codec] - The codec used for compression of your logs.
     * @param {Boolean} [options.parse_log_keyvals] - Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
     * @param {String} [options.password] - SASL password.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` (no limit).
     * @param {module:models/Number} [options.required_acks=1] - The number of acknowledgements a leader must receive before a write is considered successful.
     * @param {String} [options.topic] - The Kafka topic to send logs to. Required.
     * @param {module:models/LoggingUseTls} [options.use_tls]
     * @param {String} [options.user] - SASL user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingKafkaResponse} and HTTP response
     */
    createLogKafkaWithHttpInfo(options = {}) {
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
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_hostname': options['tls_hostname'],
        'auth_method': options['auth_method'],
        'brokers': options['brokers'],
        'compression_codec': options['compression_codec'],
        'parse_log_keyvals': options['parse_log_keyvals'],
        'password': options['password'],
        'request_max_bytes': options['request_max_bytes'],
        'required_acks': options['required_acks'],
        'topic': options['topic'],
        'use_tls': options['use_tls'],
        'user': options['user']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingKafkaResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:models/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:models/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {module:models/String} [options.auth_method] - SASL authentication method.
     * @param {String} [options.brokers] - A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
     * @param {module:models/String} [options.compression_codec] - The codec used for compression of your logs.
     * @param {Boolean} [options.parse_log_keyvals] - Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
     * @param {String} [options.password] - SASL password.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` (no limit).
     * @param {module:models/Number} [options.required_acks=1] - The number of acknowledgements a leader must receive before a write is considered successful.
     * @param {String} [options.topic] - The Kafka topic to send logs to. Required.
     * @param {module:models/LoggingUseTls} [options.use_tls]
     * @param {String} [options.user] - SASL user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingKafkaResponse}
     */
    createLogKafka(options = {}) {
      return this.createLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_kafka_name' is set.
      if (options['logging_kafka_name'] === undefined || options['logging_kafka_name'] === null) {
        throw new Error("Missing the required parameter 'logging_kafka_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_kafka_name': options['logging_kafka_name']
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
        '/service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteLogKafka(options = {}) {
      return this.deleteLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingKafkaResponse} and HTTP response
     */
    getLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_kafka_name' is set.
      if (options['logging_kafka_name'] === undefined || options['logging_kafka_name'] === null) {
        throw new Error("Missing the required parameter 'logging_kafka_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_kafka_name': options['logging_kafka_name']
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
      let returnType = LoggingKafkaResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingKafkaResponse}
     */
    getLogKafka(options = {}) {
      return this.getLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the Kafka logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:models/LoggingKafkaResponse>} and HTTP response
     */
    listLogKafkaWithHttpInfo(options = {}) {
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
      let returnType = [LoggingKafkaResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the Kafka logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:models/LoggingKafkaResponse>}
     */
    listLogKafka(options = {}) {
      return this.listLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/LoggingKafkaResponse} and HTTP response
     */
    updateLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_kafka_name' is set.
      if (options['logging_kafka_name'] === undefined || options['logging_kafka_name'] === null) {
        throw new Error("Missing the required parameter 'logging_kafka_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_kafka_name': options['logging_kafka_name']
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
      let returnType = LoggingKafkaResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/LoggingKafkaResponse}
     */
    updateLogKafka(options = {}) {
      return this.updateLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
