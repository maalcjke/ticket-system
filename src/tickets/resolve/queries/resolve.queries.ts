/** Types generated for queries found in "src/tickets/resolve/queries/resolve.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'Resolve' parameters type */
export interface IResolveParams {
  newStatus: number;
  reason?: string | null | void;
  ticketId: string;
}

/** 'Resolve' return type */
export type IResolveResult = void;

/** 'Resolve' query type */
export interface IResolveQuery {
  params: IResolveParams;
  result: IResolveResult;
}

const resolveIR: any = {"usedParamSet":{"newStatus":true,"reason":true,"ticketId":true},"params":[{"name":"newStatus","required":true,"transform":{"type":"scalar"},"locs":[{"a":32,"b":42}]},{"name":"reason","required":false,"transform":{"type":"scalar"},"locs":[{"a":67,"b":73}]},{"name":"ticketId","required":true,"transform":{"type":"scalar"},"locs":[{"a":92,"b":101}]}],"statement":"UPDATE tickets\nSET\n    status = :newStatus!::integer,\n    reason = :reason::text\nwhere id = :ticketId!::uuid"};

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
export const resolve = new PreparedQuery<IResolveParams,IResolveResult>(resolveIR);


