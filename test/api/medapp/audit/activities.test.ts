import { queryParam } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Activities } from '@medapp/api-client/audit/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Audit Activities', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /activities', () => {
    it.skip('should list audit activities', async () => {
      const response = await new Activities(ctx).get();
      await response.assertThat(OK);
    });

    it.skip('should list audit activities filtered by user', async () => {
      const response = await new Activities(ctx).get(
        queryParam('userId', 'test-user-id')
      );
      await response.assertThat(OK);
    });

    it.skip('should list audit activities filtered by date range', async () => {
      const response = await new Activities(ctx).get(
        queryParam('startDate', '2026-03-01'),
        queryParam('endDate', '2026-03-02')
      );
      await response.assertThat(OK);
    });

    it.skip('should list audit activities filtered by action type', async () => {
      const response = await new Activities(ctx).get(
        queryParam('action', 'LOGIN')
      );
      await response.assertThat(OK);
    });
  });
});
