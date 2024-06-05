/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ScimMeta' schema.
 */
export type ScimMeta = {
  attributes?: string[];
  /**
   * @example 1
   * Format: "int32".
   */
  version?: number;
  /**
   * Format: "date-time".
   */
  created?: string;
  /**
   * Format: "date-time".
   */
  lastModified?: string;
} & Record<string, any>;
