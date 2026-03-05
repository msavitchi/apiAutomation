import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { ServicePrices } from '@medapp/api-client/portal/endpoints';
import type { Context } from '@medapp/api-client';
import { portalContext } from '../../support/portal';

let ctx: Context;

describe('Portal Service Prices', () => {
  beforeAll(async () => {
    ctx = await portalContext();
  });

  describe('GET /service-prices', () => {
    it('should list service prices', async () => {
      const response = await new ServicePrices(ctx).get();
      await response.assertThat(OK);
    });
  });
});
