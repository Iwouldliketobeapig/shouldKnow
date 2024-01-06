import React from 'react';

type A = {
  test: string;
}

type B = Partial<A>;

type _Partial<T> = { [K in keyof T]?: T[K] }

type C = _Partial<A>

type D = Readonly<A>;

type _Pick<T, K extends keyof T> = { [key in K]: T[K] };

type _Omit<T, K extends keyof any> = _Pick<T, Exclude<keyof T, K>>;

export default () => {
  return <div>module1</div>
}