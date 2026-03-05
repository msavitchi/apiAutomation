import { Request, Setter } from '@msavitchi/resttest';
import { RequestLoggerFilter, ResponseLoggerFilter } from '@msavitchi/resttest/filters';
import { baseUri, log, logger } from '@msavitchi/resttest/setters';
import { schema, statusCode } from '@msavitchi/resttest/verifiers';
import { BASE_URL, REST_TEST_LOG_LEVEL } from '../support/variables';

export abstract class BaseEndpoint extends Request {
  constructor(...setters: Setter[]) {
    super(
      {
        update(request) {
          request.verifiers = { statusCode, schema };
        },
      },
      logger(new RequestLoggerFilter()),
      logger(new ResponseLoggerFilter()),
      log(REST_TEST_LOG_LEVEL),
      baseUri(BASE_URL),
      ...setters
    );
  }
}
