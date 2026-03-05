import type { Response, Setter } from '@msavitchi/resttest';
import { DELETE, GET, PATCH, POST, PUT } from '@msavitchi/resttest/method';
import { BaseEndpoint } from './BaseEndpoint';

export class HttpBinAnything extends BaseEndpoint {
  private static PATH = 'anything';

  delete(...setters: Setter[]): Promise<Response> {
    return this.request(DELETE, ...setters);
  }

  get(...setters: Setter[]): Promise<Response> {
    return this.request(GET, ...setters);
  }

  patch(...setters: Setter[]): Promise<Response> {
    return this.request(PATCH, ...setters);
  }

  post(...setters: Setter[]): Promise<Response> {
    return this.request(POST, ...setters);
  }

  put(...setters: Setter[]): Promise<Response> {
    return this.request(PUT, ...setters);
  }

  request(method: string, ...setters: Setter[]): Promise<Response> {
    return this.send(method, HttpBinAnything.PATH, ...setters);
  }
}
