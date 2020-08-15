/**
 * コンストラクタ関数を表す型
 */
export type Constructor<T> = new (...args: any[]) => T;
