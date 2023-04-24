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
 * The UpdateUserRequest model module.
 * @module model/UpdateUserRequest
 * @version 1
 */
class UpdateUserRequest {
    /**
     * Constructs a new <code>UpdateUserRequest</code>.
     * @alias module:model/UpdateUserRequest
     */
    constructor() { 
        
        UpdateUserRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserRequest} obj Optional instance to populate.
     * @return {module:model/UpdateUserRequest} The populated <code>UpdateUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUserRequest();

            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
            }
            if (data.hasOwnProperty('family_name')) {
                obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
            }
            if (data.hasOwnProperty('is_suspended')) {
                obj['is_suspended'] = ApiClient.convertToType(data['is_suspended'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateUserRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateUserRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
            throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
        }
        // ensure the json data is a string
        if (data['family_name'] && !(typeof data['family_name'] === 'string' || data['family_name'] instanceof String)) {
            throw new Error("Expected the field `family_name` to be a primitive type in the JSON string but got " + data['family_name']);
        }

        return true;
    }


}



/**
 * User's first name.
 * @member {String} given_name
 */
UpdateUserRequest.prototype['given_name'] = undefined;

/**
 * User's last name.
 * @member {String} family_name
 */
UpdateUserRequest.prototype['family_name'] = undefined;

/**
 * Whether the user is currently suspended or not.
 * @member {Boolean} is_suspended
 */
UpdateUserRequest.prototype['is_suspended'] = undefined;






export default UpdateUserRequest;

