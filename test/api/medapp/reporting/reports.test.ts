import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Url, SysUrl, EmbeddableDashboards } from '@medapp/api-client/reporting/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Reporting', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('POST /reporting/url', () => {
    it.skip('should generate a reporting URL', async () => {
      const response = await new Url(ctx).post(
        body({ reportId: 'test-report-id', filters: {} })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /reporting/sys/url', () => {
    it.skip('should generate a system reporting URL', async () => {
      const response = await new SysUrl(ctx).post(
        body({ reportId: 'test-sys-report-id', filters: {} })
      );
      await response.assertThat(OK);
    });
  });

  describe('GET /reporting/embeddable-dashboards', () => {
    it.skip('should get embeddable dashboards', async () => {
      const response = await new EmbeddableDashboards(ctx).get();
      await response.assertThat(OK);
    });
  });
});
