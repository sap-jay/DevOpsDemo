/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ScimGroupMemberPatch' schema.
 */
export type ScimGroupMemberPatch = {
  /**
   * The identity provider hosting the user. For the default identity provider, use sap.default. Subaccounts created before October 2020 return ldap as the default identity provider. The system accepts both sap.default and ldap for the default identity provider, but returns sap.default or ldap depending on when the subaccount was created.
   * @example "sap.default"
   */
  origin?: string;
  /**
   * @example "USER"
   */
  type?: 'USER';
  /**
   * The ID of a specific user. User IDs can be found using the "/Users" endpoint.
   * @example "ef4772b9-3295-4d12-af66-ef07fce21227"
   */
  value?: string;
  /**
   * Use this parameter to add or remove users from a group.
   * @example "delete"
   */
  operation?: 'delete' | 'create';
} & Record<string, any>;
