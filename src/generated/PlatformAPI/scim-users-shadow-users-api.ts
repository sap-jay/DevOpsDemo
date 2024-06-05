/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { ScimUsers, ScimUserPOSTPUT } from './schema';
/**
 * Representation of the 'SCIMUsersShadowUsersApi'.
 * This API is part of the 'PlatformAPI' service.
 */
export const SCIMUsersShadowUsersApi = {
  /**
   * Returns all shadow users of the current subaccount. By default, the system creates shadow users during authentication. You can disable automatic creation of shadow users. When you use a system to provision identities, we recommend that you switch off automatic creation of shadow users for all identity providers. <br/>For more information, see [Switch Off Automatic Creation of Shadow Users](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/d8525671e8b14147b96ef497e1e1af80.html). <br/>The System for Cross-domain Identity Management (SCIM) interface for users supplements the relevant UAA [users](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#users) interface.
   * @param queryParameters - Object containing the following keys: count, startIndex, sortOrder, sortBy, filter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getAllUsersUsingGet: (queryParameters?: {
    count?: number;
    startIndex?: number;
    sortOrder?: string;
    sortBy?: string;
    filter?: string;
  }) =>
    new OpenApiRequestBuilder<ScimUsers>('get', '/Users', {
      queryParameters
    }),
  /**
   * Creates a user with the properties specified in the body. **To create a group membership (assign role collections), use the endpoint [/Groups/{Id}/members](https://docs.cloudfoundry.org/api/uaa/version/74.4.0/index.html#add-member)**.
   * @param body - user
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUserUsingPost: (body: ScimUserPOSTPUT) =>
    new OpenApiRequestBuilder<any>('post', '/Users', {
      body
    }),
  /**
   * Returns a user specified by the user ID (The ID of the user). By default, the system creates shadow users during authentication. You can disable automatic creation of shadow users. When you use a system to provision identities, we recommend that you switch off automatic creation of shadow users for all identity providers. <br/>For more information, see [Switch Off Automatic Creation of Shadow Users](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/d8525671e8b14147b96ef497e1e1af80.html). <br/>The System for Cross-domain Identity Management (SCIM) interface for users supplements the relevant UAA [users](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#users) interface.
   * @param id - The ID of the user.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getUserUsingGet: (id: string) =>
    new OpenApiRequestBuilder<any>('get', '/Users/{id}', {
      pathParameters: { id }
    }),
  /**
   * Updates all fields of a user specified by the user ID. **To update a group membership (assign role collections), use the endpoint [/Groups/{Id}/members](https://docs.cloudfoundry.org/api/uaa/version/74.4.0/index.html#add-member)**. By default, the system creates shadow users during authentication. You can disable automatic creation of shadow users. When you use a system to provision identities, we recommend that you switch off automatic creation of shadow users for all identity providers. <br/>For more information, see [Switch Off Automatic Creation of Shadow Users](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/d8525671e8b14147b96ef497e1e1af80.html). <br/>If automatic creation is switched off, a user can't log in until the administrator creates a shadow user for the user with the PUT method. The System for Cross-domain Identity Management (SCIM) interface for users supplements the relevant UAA [users](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#users) interface.
   * @param id - The ID of the user.
   * @param body - The content of the user.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUserUsingPut: (id: string, body: ScimUserPOSTPUT) =>
    new OpenApiRequestBuilder<any>('put', '/Users/{id}', {
      pathParameters: { id },
      body
    }),
  /**
   * Updates only the specified fields of a user specified by the user ID. **To update a group membership (assign role collections), use the endpoint [/Groups/{Id}/members](https://docs.cloudfoundry.org/api/uaa/version/74.4.0/index.html#add-member)**. By default, the system creates shadow users during authentication. You can disable automatic creation of shadow users. When you use a system to provision identities, we recommend that you switch off automatic creation of shadow users for all identity providers. <br/>For more information, see [Switch Off Automatic Creation of Shadow Users](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/d8525671e8b14147b96ef497e1e1af80.html). <br/>The System for Cross-domain Identity Management (SCIM) interface for users supplements the relevant UAA [users](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#users) interface.
   * @param id - The id parameter of the user.
   * @param body - The content of the user to patch.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  patchUserUsingPatch: (id: string, body: ScimUserPOSTPUT) =>
    new OpenApiRequestBuilder<any>('patch', '/Users/{id}', {
      pathParameters: { id },
      body
    }),
  /**
   * Deletes a user specified by the user ID. By default, the system creates shadow users during authentication. You can disable automatic creation of shadow users. When you use a system to provision identities, we recommend that you switch off automatic creation of shadow users for all identity providers. <br/>For more information, see [Switch Off Automatic Creation of Shadow Users](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/d8525671e8b14147b96ef497e1e1af80.html). <br/>If automatic creation is switched off, a user can't log in until the administrator creates a shadow user for the user. Data privacy regulations or policies may require you to delete shadow users, for example, when the user has left your organization. The System for Cross-domain Identity Management (SCIM) interface for users supplements the relevant UAA [users](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#users) interface.
   * @param id - The ID of the user.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUserUsingDelete: (id: string) =>
    new OpenApiRequestBuilder<any>('delete', '/Users/{id}', {
      pathParameters: { id }
    })
};
