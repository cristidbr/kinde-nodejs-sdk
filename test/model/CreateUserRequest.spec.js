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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KindeManagementApi);
  }
}(this, function(expect, KindeManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KindeManagementApi.CreateUserRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateUserRequest', function() {
    it('should create an instance of CreateUserRequest', function() {
      // uncomment below and update the code to test CreateUserRequest
      //var instance = new KindeManagementApi.CreateUserRequest();
      //expect(instance).to.be.a(KindeManagementApi.CreateUserRequest);
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instance = new KindeManagementApi.CreateUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property identities (base name: "identities")', function() {
      // uncomment below and update the code to test the property identities
      //var instance = new KindeManagementApi.CreateUserRequest();
      //expect(instance).to.be();
    });

  });

}));
