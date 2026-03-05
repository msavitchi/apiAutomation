import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll, expect } from '@jest/globals';
import { UsersUserId, UsersStats } from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('User Profile', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  it.skip('should get user stats', async () => {
    const response = await new UsersStats(ctx).get();
    await response.assertThat(OK);
  });
});
