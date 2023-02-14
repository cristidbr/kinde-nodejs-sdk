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

import ApiClient from '../ApiClient';

/**
 * The AddOrganizationUsers200Response model module.
 * @module model/AddOrganizationUsers200Response
 * @version 1
 */
class AddOrganizationUsers200Response {
    /**
     * Constructs a new <code>AddOrganizationUsers200Response</code>.
     * @alias module:model/AddOrganizationUsers200Response
     */
    constructor() { 
        
        AddOrganizationUsers200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddOrganizationUsers200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddOrganizationUsers200Response} obj Optional instance to populate.
     * @return {module:model/AddOrganizationUsers200Response} The populated <code>AddOrganizationUsers200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddOrganizationUsers200Response();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('users_add')) {
                obj['users_add'] = ApiClient.convertToType(data['users_add'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddOrganizationUsers200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddOrganizationUsers200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['users_add'])) {
            throw new Error("Expected the field `users_add` to be an array in the JSON data but got " + data['users_add']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
AddOrganizationUsers200Response.prototype['message'] = undefined;

/**
 * @member {Array.<String>} users_add
 */
AddOrganizationUsers200Response.prototype['users_add'] = undefined;






export default AddOrganizationUsers200Response;
