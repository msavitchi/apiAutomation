import { queryParam } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { path } from '@msavitchi/resttest/verifiers';
import { describe, expect, it } from '@jest/globals';
import { containsString, equalTo } from 'hamjest';
import { HttpBinAnything } from '../../src/endpoints/HttpBinAnything';
import { HttpBinAnythingId } from '../../src/endpoints/HttpBinAnythingId';
import { REPLY_POSITIVE_SCHEMA } from '../../src/schemas/ReplayPositiveSchema';
import * as httpbin from '../../src/steps/httpbin';

describe('/anything', () => {
  it('endpoint sample', async () => {
    const response = await new HttpBinAnything().get(
      queryParam('param', 'value'),
      queryParam('param2', 'value2'));

    await response.assertThat(OK, REPLY_POSITIVE_SCHEMA,
      path('args',
        path('param', equalTo('value')),
        path('param2', equalTo('value2'))));
  });

  it('endpoint with path parameters sample', async () => {
    const anything = 'test';
    const response = await new HttpBinAnythingId().get(anything,
      queryParam('param', 'value'));

    await response.assertThat(OK, REPLY_POSITIVE_SCHEMA,
      path('url', containsString(`/${anything}`)),
      path('args.param', equalTo('value')));
  });

  it('step usage sample', async () => {
    const reply = await httpbin.postAnything({
      param: 'value',
      param2: 'value2',
    });

    expect(reply.json).toStrictEqual({
      param: 'value',
      param2: 'value2',
    });
  });
});
