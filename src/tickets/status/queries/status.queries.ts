/** Types generated for queries found in "src/tickets/status/queries/status.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'Status' parameters type */
export interface IStatusParams {
  newStatus: number;
  reason?: string | null | void;
  ticketId: string;
}

/** 'Status' return type */
export type IStatusResult = void;

/** 'Status' query type */
export interface IStatusQuery {
  params: IStatusParams;
  result: IStatusResult;
}

const statusIR: any = {"usedParamSet":{"newStatus":true,"reason":true,"ticketId":true},"params":[{"name":"newStatus","required":true,"transform":{"type":"scalar"},"locs":[{"a":32,"b":42}]},{"name":"reason","required":false,"transform":{"type":"scalar"},"locs":[{"a":67,"b":73}]},{"name":"ticketId","required":true,"transform":{"type":"scalar"},"locs":[{"a":92,"b":101}]}],"statement":"UPDATE tickets\nSET\n    status = :newStatus!::integer,\n    reason = :reason::text\nwhere id = :ticketId!::uuid"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE tickets
 * SET
 *     status = :newStatus!::integer,
 *     reason = :reason::text
 * where id = :ticketId!::uuid
 * ```
 */
export const status = new PreparedQuery<IStatusParams,IStatusResult>(statusIR);


/** 'StatusAll' parameters type */
export interface IStatusAllParams {
  newStatus?: number | null | void;
  oldStatus?: number | null | void;
}

/** 'StatusAll' return type */
export type IStatusAllResult = void;

/** 'StatusAll' query type */
export interface IStatusAllQuery {
  params: IStatusAllParams;
  result: IStatusAllResult;
}

const statusAllIR: any = {"usedParamSet":{"newStatus":true,"oldStatus":true},"params":[{"name":"newStatus","required":false,"transform":{"type":"scalar"},"locs":[{"a":28,"b":37}]},{"name":"oldStatus","required":false,"transform":{"type":"scalar"},"locs":[{"a":54,"b":63}]}],"statement":"UPDATE tickets\nSET status = :newStatus\nWHERE status = :oldStatus"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE tickets
 * SET status = :newStatus
 * WHERE status = :oldStatus
 * ```
 */
export const statusAll = new PreparedQuery<IStatusAllParams,IStatusAllResult>(statusAllIR);


