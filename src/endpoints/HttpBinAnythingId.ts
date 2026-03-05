import type { Response, Setter } from '@msavitchi/resttest';
import { DELETE, GET, PATCH, POST, PUT } from '@msavitchi/resttest/method';
import { pathParam } from '@msavitchi/resttest/setters';
import { BaseEndpoint } from './BaseEndpoint';

export class HttpBinAnythingId extends BaseEndpoint {
  private static PATH = 'anything/{id}';

  delete(id: string, ...setters: Setter[]): Promise<Response> {
    return this.request(DELETE, id, ...setters);
  }

  get(id: string, ...setters: Setter[]): Promise<Response> {
    return this.request(GET, id, ...setters);
  }

  patch(id: string, ...setters: Setter[]): Promise<Response> {
    return this.request(PATCH, id, ...setters);
  }

  post(id: string, ...setters: Setter[]): Promise<Response> {
    return this.request(POST, id, ...setters);
  }

  put(id: string, ...setters: Setter[]): Promise<Response> {
    return this.request(PUT, id, ...setters);
  }

  request(method: string, id: string, ...setters: Setter[]): Promise<Response> {
    return this.send(method, HttpBinAnythingId.PATH,
      pathParam('id', id),
      ...setters);
  }
}
