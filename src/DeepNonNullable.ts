type ValueTypes =
  | string
  | number
  | boolean
  | symbol
  | bigint
  | Date
  | RegExp
  | null
  | undefined;

type IsValueType<T> = T extends ValueTypes ? T : unknown extends T ? T : never;

//正直あやしい..
/**
 * 再帰的にNonNullableを適用する
 */
export type DeepNonNullable<T> = T extends IsValueType<T>
  ? NonNullable<T>
  : T extends (infer R)[]
  ? DeepNonNullable<R>[]
  : { [K in keyof T]: DeepNonNullable<T[K]> };
