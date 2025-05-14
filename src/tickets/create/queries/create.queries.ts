/** Types generated for queries found in "src/tickets/create/queries/create.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'Create' parameters type */
export interface ICreateParams {
  body?: string | null | void;
  reason?: string | null | void;
  status?: number | null | void;
  title?: string | null | void;
}

/** 'Create' return type */
export type ICreateResult = void;

/** 'Create' query type */
export interface ICreateQuery {
  params: ICreateParams;
  result: ICreateResult;
}

const createIR: any = {"usedParamSet":{"status":true,"title":true,"body":true,"reason":true},"params":[{"name":"status","required":false,"transform":{"type":"scalar"},"locs":[{"a":58,"b":64}]},{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":67,"b":72}]},{"name":"body","required":false,"transform":{"type":"scalar"},"locs":[{"a":75,"b":79}]},{"name":"reason","required":false,"transform":{"type":"scalar"},"locs":[{"a":82,"b":88}]}],"statement":"INSERT INTO tickets (status, title, body, reason)\nVALUES (:status, :title, :body, :reason)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO tickets (status, title, body, reason)
 * VALUES (:status, :title, :body, :reason)
 * ```
 */
export const create = new PreparedQuery<ICreateParams,ICreateResult>(createIR);


