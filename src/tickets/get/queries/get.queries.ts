/** Types generated for queries found in "src/tickets/get/queries/get.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'Get' parameters type */
export interface IGetParams {
  dateFrom?: string | null | void;
  dateTo?: string | null | void;
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

const getIR: any = {"usedParamSet":{"dateFrom":true,"dateTo":true,"limit":true,"offset":true},"params":[{"name":"dateFrom","required":false,"transform":{"type":"scalar"},"locs":[{"a":137,"b":145}]},{"name":"dateTo","required":false,"transform":{"type":"scalar"},"locs":[{"a":195,"b":201}]},{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":290,"b":295}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":309,"b":315}]}],"statement":"SELECT\n    id,\n    status,\n    title,\n    body,\n    reason,\n    created_at,\n    updated_at\nFROM tickets\nWHERE created_at >= to_timestamp(:dateFrom, 'DD.MM.YYYY')\n  AND created_at <= to_timestamp(:dateTo, 'DD.MM.YYYY') + INTERVAL '1 day' - INTERVAL '1 second'\nORDER BY created_at DESC\nLIMIT :limit::int\nOFFSET :offset::int"};

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
 * WHERE created_at >= to_timestamp(:dateFrom, 'DD.MM.YYYY')
 *   AND created_at <= to_timestamp(:dateTo, 'DD.MM.YYYY') + INTERVAL '1 day' - INTERVAL '1 second'
 * ORDER BY created_at DESC
 * LIMIT :limit::int
 * OFFSET :offset::int
 * ```
 */
export const get = new PreparedQuery<IGetParams,IGetResult>(getIR);


