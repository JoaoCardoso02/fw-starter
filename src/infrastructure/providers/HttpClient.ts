import { Axios } from 'axios';

import type { IHttpClientParams } from '@infrastructure/providers/types/IHttpClient';

export default class HttpClient extends Axios {
  constructor(data: IHttpClientParams) {
    super({
      baseURL: data.baseURL,
      headers: data.headers,
      timeout: data.timeout,
    });
  }
}
