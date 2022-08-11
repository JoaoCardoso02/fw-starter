import type HttpClient from '@infrastructure/providers/HttpClient';
import type { IHeaders } from '@infrastructure/providers/types/IHttpClient';

export interface IHttpProviderFactory {
  build(baseURL: string, headers: IHeaders, timeout: number): HttpClient;
}
