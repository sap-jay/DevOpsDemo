/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Approval' schema.
 */
export type Approval = {
  /**
   * The client id on the approval. Represents the application this approval or denial was for.
   * @example "cloud_controller"
   */
  clientId?: string;
  /**
   * Format: "date-time".
   */
  expiresAt?: string;
  /**
   * Format: "date-time".
   */
  lastUpdatedAt?: string;
  /**
   * @example "cloud_controller.write"
   */
  scope?: string;
  status?: 'APPROVED' | 'DENIED';
  /**
   * The ID of the user.
   * @example "ef4772b9-3295-4d12-af66-ef07fce21227"
   */
  userId?: string;
} & Record<string, any>;
