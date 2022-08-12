// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseHandler<T> {
  execute(): Promise<T>;
}
