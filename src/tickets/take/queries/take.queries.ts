/** Types generated for queries found in "src/tickets/take/queries/take.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'Take' parameters type */
export interface ITakeParams {
  newStatus: number;
  ticketId: string;
}

/** 'Take' return type */
export type ITakeResult = void;

/** 'Take' query type */
export interface ITakeQuery {
  params: ITakeParams;
  result: ITakeResult;
}

const takeIR: any = {"usedParamSet":{"newStatus":true,"ticketId":true},"params":[{"name":"newStatus","required":true,"transform":{"type":"scalar"},"locs":[{"a":28,"b":38}]},{"name":"ticketId","required":true,"transform":{"type":"scalar"},"locs":[{"a":60,"b":69}]}],"statement":"UPDATE tickets\nSET status = :newStatus!::integer\nwhere id = :ticketId!::uuid"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE tickets
 * SET status = :newStatus!::integer
 * where id = :ticketId!::uuid
 * ```
 */
export const take = new PreparedQuery<ITakeParams,ITakeResult>(takeIR);


