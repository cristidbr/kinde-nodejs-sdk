/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddOrganizationUsers200Response from '../model/AddOrganizationUsers200Response';
import AddOrganizationUsersRequest from '../model/AddOrganizationUsersRequest';
import CreateUser200Response from '../model/CreateUser200Response';
import CreateUserRequest from '../model/CreateUserRequest';
import OrganizationUser from '../model/OrganizationUser';
import RemoveOrganizationUsers200Response from '../model/RemoveOrganizationUsers200Response';
import RemoveOrganizationUsersRequest from '../model/RemoveOrganizationUsersRequest';
import User from '../model/User';

/**
* Users service.
* @module api/UsersApi
* @version 1
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrganizationUsers operation.
     * @callback module:api/UsersApi~addOrganizationUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddOrganizationUsers200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign Users to an Organization
     * Add existing users to an organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code The organization's code.
     * @param {module:model/AddOrganizationUsersRequest} opts.addOrganizationUsersRequest 
     * @param {module:api/UsersApi~addOrganizationUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddOrganizationUsers200Response}
     */
    addOrganizationUsers(opts, callback) {
      opts = opts || {};
      let postBody = opts['addOrganizationUsersRequest'];

      let pathParams = {
      };
      let queryParams = {
        'code': opts['code']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddOrganizationUsers200Response;
      return this.apiClient.callApi(
        '/api/v1/organization/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UsersApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateUser200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create User
     * Creates a user record and optionally zero or more identities for the user. An example identity could be the email address of the user. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserRequest} opts.createUserRequest The details of the user to create.
     * @param {module:api/UsersApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateUser200Response}
     */
    createUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['createUserRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateUser200Response;
      return this.apiClient.callApi(
        '/api/v1/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationUsers operation.
     * @callback module:api/UsersApi~getOrganizationUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Organization Users
     * Get users in an organizaiton.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Field and order to sort the result by.
     * @param {Number} opts.pageSize Number of results per page. Defaults to 10 if parameter not sent.
     * @param {String} opts.nextToken A string to get the next page of results if there are more results.
     * @param {String} opts.code The organization's code.
     * @param {module:api/UsersApi~getOrganizationUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationUser}
     */
    getOrganizationUsers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sort': opts['sort'],
        'page_size': opts['pageSize'],
        'next_token': opts['nextToken'],
        'code': opts['code']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrganizationUser;
      return this.apiClient.callApi(
        '/api/v1/organization/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Users
     * The returned list can be sorted by full name or email address in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query string parameter. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Field and order to sort the result by.
     * @param {Number} opts.pageSize Number of results per page. Defaults to 10 if parameter not sent.
     * @param {Number} opts.userId ID of the user to filter by.
     * @param {String} opts.nextToken A string to get the next page of results if there are more results.
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    getUsers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sort': opts['sort'],
        'page_size': opts['pageSize'],
        'user_id': opts['userId'],
        'next_token': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [User];
      return this.apiClient.callApi(
        '/api/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeOrganizationUsers operation.
     * @callback module:api/UsersApi~removeOrganizationUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveOrganizationUsers200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Users from an Organization
     * Remove existing users from an organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code The organization's code.
     * @param {module:model/RemoveOrganizationUsersRequest} opts.removeOrganizationUsersRequest 
     * @param {module:api/UsersApi~removeOrganizationUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveOrganizationUsers200Response}
     */
    removeOrganizationUsers(opts, callback) {
      opts = opts || {};
      let postBody = opts['removeOrganizationUsersRequest'];

      let pathParams = {
      };
      let queryParams = {
        'code': opts['code']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RemoveOrganizationUsers200Response;
      return this.apiClient.callApi(
        '/api/v1/organization/users', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}