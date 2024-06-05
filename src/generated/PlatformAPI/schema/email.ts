/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Email' schema.
 */
export type Email = {
  type?: string;
  /**
   * @example "john.miller@example.com"
   */
  value?: string;
  /**
   * Set to true if this is the user's primary email address.
   */
  primary?: boolean;
} & Record<string, any>;
