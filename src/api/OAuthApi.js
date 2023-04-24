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
import UserProfile from '../model/UserProfile';
import UserProfileV2 from '../model/UserProfileV2';

/**
* OAuth service.
* @module api/OAuthApi
* @version 1
*/
export default class OAuthApi {

    /**
    * Constructs a new OAuthApi. 
    * @alias module:api/OAuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/OAuthApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the details of the currently logged in user
     * Contains the id, names and email of the currently logged in user. 
     * @param {module:api/OAuthApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserProfile}
     */
    getUser(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserProfile;
      return this.apiClient.callApi(
        '/oauth2/user_profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProfileV2 operation.
     * @callback module:api/OAuthApi~getUserProfileV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProfileV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the details of the currently logged in user
     * Contains the id, names, profile picture URL and email of the currently logged in user. 
     * @param {module:api/OAuthApi~getUserProfileV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserProfileV2}
     */
    getUserProfileV2(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserProfileV2;
      return this.apiClient.callApi(
        '/oauth2/v2/user_profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
