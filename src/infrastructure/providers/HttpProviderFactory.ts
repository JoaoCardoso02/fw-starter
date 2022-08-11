import HttpClient from '@infrastructure/providers/HttpClient';
import type { IHeaders } from '@infrastructure/providers/types/IHttpClient';
import type { IHttpProviderFactory } from '@infrastructure/providers/types/IHttpProviderFactory';

export default class HttpProviderFactory implements IHttpProviderFactory {
  public build(baseURL: string, headers: IHeaders = {}, timeout = 10000): HttpClient {
    if (!baseURL) {
      throw new Error('BaseURL is needed');
    }

    return new HttpClient({ baseURL, headers, timeout });
  }
}
