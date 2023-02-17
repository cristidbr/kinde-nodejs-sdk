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
    factory(root.expect, root.authorizationCode);
  }
}(this, function(expect, ClientCredentials) {
  'use strict';
  
  let clientCredentials;

  beforeEach(function() {
    clientCredentials = new ClientCredentials();
  });

  describe('ClientCredentials', function() {
    describe('getToken', function() {
      it('should call getToken successfully', function(done) {
        //uncomment below and update the code to test getToken
        //clientCredentials.getToken(client);
        //expect().to.be();
        done();
      });
    });
  });
}));