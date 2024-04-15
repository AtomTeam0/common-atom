import { Request as expressRequest } from "express";

type ReadonlyRecord<T> = Readonly<Record<string, T>>;

type RequestParams = ReadonlyRecord<string>;
type RequestBody = ReadonlyRecord<unknown>;
type RequestQuery = ReadonlyRecord<
  string | boolean | number | string[] | boolean[] | number[]
>;

type defaultTo<T, R> = T extends R ? T : R;

export type Request<
  T extends {
    body?: RequestBody;
    query?: RequestQuery;
    params?: RequestParams;
  } & ReadonlyRecord<unknown> = {}
> = expressRequest<
  defaultTo<T["params"], RequestParams>,
  object,
  defaultTo<T["body"], RequestBody>,
  defaultTo<T["query"], RequestQuery>
> &
  Omit<T, "body" | "query" | "params">;
