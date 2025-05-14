/** Types generated for queries found in "src/tickets/get/queries/get.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

/** 'Get' parameters type */
export interface IGetParams {
  dateFrom?: DateOrString | null | void;
  dateTo?: DateOrString | null | void;
  limit?: number | null | void;
  offset?: number | null | void;
}

/** 'Get' return type */
export interface IGetResult {
  body: string;
  created_at: Date;
  id: string;
  reason: string;
  status: number;
  title: string;
  updated_at: Date;
}

/** 'Get' query type */
export interface IGetQuery {
  params: IGetParams;
  result: IGetResult;
}

const getIR: any = {"usedParamSet":{"dateFrom":true,"dateTo":true,"limit":true,"offset":true},"params":[{"name":"dateFrom","required":false,"transform":{"type":"scalar"},"locs":[{"a":124,"b":132}]},{"name":"dateTo","required":false,"transform":{"type":"scalar"},"locs":[{"a":165,"b":171}]},{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":215,"b":220}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":234,"b":240}]}],"statement":"SELECT\n    id,\n    status,\n    title,\n    body,\n    reason,\n    created_at,\n    updated_at\nFROM tickets\nWHERE created_at >= :dateFrom::timestamp\n  AND created_at <= :dateTo::timestamp\nORDER BY created_at DESC\nLIMIT :limit::int\nOFFSET :offset::int"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *     id,
 *     status,
 *     title,
 *     body,
 *     reason,
 *     created_at,
 *     updated_at
 * FROM tickets
 * WHERE created_at >= :dateFrom::timestamp
 *   AND created_at <= :dateTo::timestamp
 * ORDER BY created_at DESC
 * LIMIT :limit::int
 * OFFSET :offset::int
 * ```
 */
export const get = new PreparedQuery<IGetParams,IGetResult>(getIR);


