interface Response<T = any> {
  data: T;
  code: number;
  message: string;
}

export type { Response };
