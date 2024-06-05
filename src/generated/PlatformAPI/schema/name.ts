/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Name' schema.
 */
export type Name = {
  /**
   * @example "Miller"
   */
  familyName?: string;
  /**
   * @example "John"
   */
  givenName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  formatted?: string;
  middleName?: string;
} & Record<string, any>;
