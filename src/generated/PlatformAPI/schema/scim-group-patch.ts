/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ScimMeta } from './scim-meta';
import type { ScimGroupMemberPatch } from './scim-group-member-patch';
/**
 * Representation of the 'ScimGroupPatch' schema.
 */
export type ScimGroupPatch = {
  /**
   * The group ID of a SCIM group.
   * @example "Administrators"
   */
  id?: string;
  meta?: ScimMeta;
  /**
   * @example "Administrators"
   */
  displayName?: string;
  /**
   * @example "5cef7d08-471e-47c4-9695-ad5ef44b4355"
   */
  zoneId?: string;
  /**
   * @example "This role collection includes the administrator and viewer role."
   */
  description?: string;
  members?: ScimGroupMemberPatch[];
} & Record<string, any>;
