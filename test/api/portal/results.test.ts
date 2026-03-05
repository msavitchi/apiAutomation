import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { ResultsEpicrisis, ResultsLaboratory, ResultsRadiology } from '@medapp/api-client/portal/endpoints';
import type { Context } from '@medapp/api-client';
import { portalContext } from '../../support/portal';

let ctx: Context;

describe('Portal Results', () => {
  beforeAll(async () => {
    ctx = await portalContext();
  });

  describe('GET /results/epicrisis', () => {
    it('should get epicrisis results', async () => {
      const response = await new ResultsEpicrisis(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /results/laboratory', () => {
    it('should get laboratory results', async () => {
      const response = await new ResultsLaboratory(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /results/radiology', () => {
    it('should get radiology results', async () => {
      const response = await new ResultsRadiology(ctx).get();
      await response.assertThat(OK);
    });
  });
});
