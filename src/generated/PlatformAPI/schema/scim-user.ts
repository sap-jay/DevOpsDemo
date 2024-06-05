/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ScimMeta } from './scim-meta';
import type { Name } from './name';
import type { Email } from './email';
import type { Group } from './group';
import type { Approval } from './approval';
import type { PhoneNumber } from './phone-number';
/**
 * Representation of the 'ScimUser' schema.
 */
export type ScimUser = {
  /**
   * The user ID of a SCIM user.
   * @example "ef4772b9-3295-4d12-af66-ef07fce21227"
   */
  id?: string;
  /**
   * @example "D123456"
   */
  externalId?: string;
  meta?: ScimMeta;
  /**
   * @example "john.miller@example.com"
   */
  userName?: string;
  name?: Name;
  emails?: Email[];
  groups?: Group[];
  /**
   * A list of approval decisions made by this user. Approvals record the user's explicit approval or rejection for an application's request for delegated permissions.
   */
  approvals?: Approval[];
  active?: boolean;
  verified?: boolean;
  /**
   * The identity provider hosting the users. For the default identity provider, use sap.default. Subaccounts created before October 2020 return ldap as the default identity provider. The system accepts both sap.default and ldap for the default identity provider, but returns sap.default or ldap depending on when the subaccount was created.
   * @example "sap.default"
   */
  origin?: string;
  /**
   * @example "5cef7d08-471e-47c4-9695-ad5ef44b4355"
   */
  zoneId?: string;
  displayName?: string;
  locale?: string;
  nickName?: string;
  /**
   * Format: "date-time".
   */
  passwordLastModified?: string;
  /**
   * @example 1588056537011
   * Format: "int64".
   */
  previousLogonTime?: number;
  /**
   * @example 1589284136890
   * Format: "int64".
   */
  lastLogonTime?: number;
  schemas?: string[];
  phoneNumbers?: PhoneNumber[];
  preferredLanguage?: string;
  profileUrl?: string;
  salt?: string;
  timezone?: string;
  title?: string;
  userType?: string;
} & Record<string, any>;
