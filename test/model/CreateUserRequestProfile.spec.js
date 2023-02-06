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
    instance = new KindeManagementApi.CreateUserRequestProfile();
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

  describe('CreateUserRequestProfile', function() {
    it('should create an instance of CreateUserRequestProfile', function() {
      // uncomment below and update the code to test CreateUserRequestProfile
      //var instance = new KindeManagementApi.CreateUserRequestProfile();
      //expect(instance).to.be.a(KindeManagementApi.CreateUserRequestProfile);
    });

    it('should have the property givenName (base name: "given_name")', function() {
      // uncomment below and update the code to test the property givenName
      //var instance = new KindeManagementApi.CreateUserRequestProfile();
      //expect(instance).to.be();
    });

    it('should have the property familyName (base name: "family_name")', function() {
      // uncomment below and update the code to test the property familyName
      //var instance = new KindeManagementApi.CreateUserRequestProfile();
      //expect(instance).to.be();
    });

  });

}));
