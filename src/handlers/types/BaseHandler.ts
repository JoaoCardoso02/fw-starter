// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseHandler<P, R> {
  execute({ ...rest }: P): Promise<R>;
}
