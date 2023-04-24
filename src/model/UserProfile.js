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
 * The UserProfile model module.
 * @module model/UserProfile
 * @version 1
 */
class UserProfile {
    /**
     * Constructs a new <code>UserProfile</code>.
     * @alias module:model/UserProfile
     */
    constructor() { 
        
        UserProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserProfile} obj Optional instance to populate.
     * @return {module:model/UserProfile} The populated <code>UserProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProfile();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('preferred_email')) {
                obj['preferred_email'] = ApiClient.convertToType(data['preferred_email'], 'String');
            }
            if (data.hasOwnProperty('provided_id')) {
                obj['provided_id'] = ApiClient.convertToType(data['provided_id'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserProfile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserProfile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['preferred_email'] && !(typeof data['preferred_email'] === 'string' || data['preferred_email'] instanceof String)) {
            throw new Error("Expected the field `preferred_email` to be a primitive type in the JSON string but got " + data['preferred_email']);
        }
        // ensure the json data is a string
        if (data['provided_id'] && !(typeof data['provided_id'] === 'string' || data['provided_id'] instanceof String)) {
            throw new Error("Expected the field `provided_id` to be a primitive type in the JSON string but got " + data['provided_id']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }

        return true;
    }


}



/**
 * Unique id of the user in Kinde.
 * @member {String} id
 */
UserProfile.prototype['id'] = undefined;

/**
 * Default email address of the user in Kinde.
 * @member {String} preferred_email
 */
UserProfile.prototype['preferred_email'] = undefined;

/**
 * Value of the user's id in a third-party system when the user is imported into Kinde.
 * @member {String} provided_id
 */
UserProfile.prototype['provided_id'] = undefined;

/**
 * User's last name.
 * @member {String} last_name
 */
UserProfile.prototype['last_name'] = undefined;

/**
 * User's first name.
 * @member {String} first_name
 */
UserProfile.prototype['first_name'] = undefined;






export default UserProfile;

