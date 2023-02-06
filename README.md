# kinde_management_api

KindeManagementApi - JavaScript client for kinde_management_api
Provides endpoints to manage your Kinde Businesses
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1
- Package version: 1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://kinde.com/docs](https://kinde.com/docs)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install kinde_management_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your kinde_management_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KindeManagementApi = require('kinde_management_api');

var defaultClient = KindeManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: kindeBearerAuth
var kindeBearerAuth = defaultClient.authentications['kindeBearerAuth'];
kindeBearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new KindeManagementApi.OAuthApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUser(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.kinde.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KindeManagementApi.OAuthApi* | [**getUser**](docs/OAuthApi.md#getUser) | **GET** /oauth2/user_profile | Returns the details of the currently logged in user
*KindeManagementApi.OAuthApi* | [**getUserProfileV2**](docs/OAuthApi.md#getUserProfileV2) | **GET** /oauth2/v2/user_profile | Returns the details of the currently logged in user
*KindeManagementApi.OrganizationsApi* | [**addOrganizationUsers**](docs/OrganizationsApi.md#addOrganizationUsers) | **POST** /api/v1/organization/users | Assign Users to an Organization
*KindeManagementApi.OrganizationsApi* | [**createOrganization**](docs/OrganizationsApi.md#createOrganization) | **POST** /api/v1/organization | Create Organization
*KindeManagementApi.OrganizationsApi* | [**getOrgainzations**](docs/OrganizationsApi.md#getOrgainzations) | **GET** /api/v1/organizations | List Organizations
*KindeManagementApi.OrganizationsApi* | [**getOrganization**](docs/OrganizationsApi.md#getOrganization) | **GET** /api/v1/organization | Get Organization
*KindeManagementApi.OrganizationsApi* | [**getOrganizationUsers**](docs/OrganizationsApi.md#getOrganizationUsers) | **GET** /api/v1/organization/users | List Organization Users
*KindeManagementApi.OrganizationsApi* | [**removeOrganizationUsers**](docs/OrganizationsApi.md#removeOrganizationUsers) | **PATCH** /api/v1/organization/users | Remove Users from an Organization
*KindeManagementApi.UsersApi* | [**addOrganizationUsers**](docs/UsersApi.md#addOrganizationUsers) | **POST** /api/v1/organization/users | Assign Users to an Organization
*KindeManagementApi.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /api/v1/user | Create User
*KindeManagementApi.UsersApi* | [**getOrganizationUsers**](docs/UsersApi.md#getOrganizationUsers) | **GET** /api/v1/organization/users | List Organization Users
*KindeManagementApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /api/v1/users | List Users
*KindeManagementApi.UsersApi* | [**removeOrganizationUsers**](docs/UsersApi.md#removeOrganizationUsers) | **PATCH** /api/v1/organization/users | Remove Users from an Organization


## Documentation for Models

 - [KindeManagementApi.AddOrganizationUsers200Response](docs/AddOrganizationUsers200Response.md)
 - [KindeManagementApi.AddOrganizationUsersRequest](docs/AddOrganizationUsersRequest.md)
 - [KindeManagementApi.CreateOrganizationRequest](docs/CreateOrganizationRequest.md)
 - [KindeManagementApi.CreateUser200Response](docs/CreateUser200Response.md)
 - [KindeManagementApi.CreateUserRequest](docs/CreateUserRequest.md)
 - [KindeManagementApi.CreateUserRequestIdentitiesInner](docs/CreateUserRequestIdentitiesInner.md)
 - [KindeManagementApi.CreateUserRequestIdentitiesInnerDetails](docs/CreateUserRequestIdentitiesInnerDetails.md)
 - [KindeManagementApi.CreateUserRequestProfile](docs/CreateUserRequestProfile.md)
 - [KindeManagementApi.Organization](docs/Organization.md)
 - [KindeManagementApi.OrganizationUser](docs/OrganizationUser.md)
 - [KindeManagementApi.RemoveOrganizationUsers200Response](docs/RemoveOrganizationUsers200Response.md)
 - [KindeManagementApi.RemoveOrganizationUsersRequest](docs/RemoveOrganizationUsersRequest.md)
 - [KindeManagementApi.User](docs/User.md)
 - [KindeManagementApi.UserIdentity](docs/UserIdentity.md)
 - [KindeManagementApi.UserIdentityResult](docs/UserIdentityResult.md)
 - [KindeManagementApi.UserProfile](docs/UserProfile.md)
 - [KindeManagementApi.UserProfileV2](docs/UserProfileV2.md)


## Documentation for Authorization



### kindeBearerAuth

- **Type**: Bearer authentication (JWT)

