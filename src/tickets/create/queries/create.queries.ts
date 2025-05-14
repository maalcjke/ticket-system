/** Types generated for queries found in "src/tickets/create/queries/create.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'Create' parameters type */
export interface ICreateParams {
  tickets: readonly ({
    status: number | null | void,
    title: string | null | void,
    body: string | null | void,
    reason: string | null | void
  })[];
}

/** 'Create' return type */
export type ICreateResult = void;

/** 'Create' query type */
export interface ICreateQuery {
  params: ICreateParams;
  result: ICreateResult;
}

const createIR: any = {"usedParamSet":{"tickets":true},"params":[{"name":"tickets","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"status","required":false},{"name":"title","required":false},{"name":"body","required":false},{"name":"reason","required":false}]},"locs":[{"a":57,"b":64}]}],"statement":"INSERT INTO tickets (status, title, body, reason)\nVALUES :tickets"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO tickets (status, title, body, reason)
 * VALUES :tickets
 * ```
 */
export const create = new PreparedQuery<ICreateParams,ICreateResult>(createIR);


