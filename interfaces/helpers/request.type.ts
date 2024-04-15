import { Request as expressRequest } from "express";

type RequestParams = Record<string, string>;
type RequestBody = Record<string, unknown>;
type RequestQuery = Record<
  string,
  string | boolean | number | string[] | boolean[] | number[]
>;

type defaultTo<T, R> = T extends R ? T : R;

export type Request<
  T extends {
    body?: RequestBody;
    query?: RequestQuery;
    params?: RequestParams;
  } & Record<string, unknown> = {}
> = expressRequest<
  defaultTo<T["params"], RequestParams>,
  object,
  defaultTo<T["body"], RequestBody>,
  defaultTo<T["query"], RequestQuery>
> &
  Omit<T, "body" | "query" | "params">;
