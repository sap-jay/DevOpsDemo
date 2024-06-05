/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Group' schema.
 */
export type Group = {
  /**
   * @example "Administrators"
   */
  display?: string;
  /**
   * @example "Administrators"
   */
  value?: string;
  /**
   * Membership type. DIRECT means the user is directly associated with the group. INDIRECT means that the membership is derived from a nested group.
   * @example "DIRECT"
   */
  type?: 'DIRECT' | 'INDIRECT';
} & Record<string, any>;
