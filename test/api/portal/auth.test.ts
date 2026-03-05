import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it } from '@jest/globals';
import { Login } from '@medapp/api-client/portal/endpoints';
import type { Context } from '@medapp/api-client';

const ctx: Context = {
  environment: 'dev',
  client: { id: '', secret: '' },
  debug: true,
  hosts: {
    INTERNAL_DEV_HOST: 'https://medparkportal.fonetyazilim.com',
  },
};

describe('Portal Auth', () => {
  describe('POST /login', () => {
    it('should login with valid credentials', async () => {
      const response = await new Login(ctx).post(
        body({ username: process.env['PORTAL_USER'], password: process.env['PORTAL_PASSWORD'] })
      );
      await response.assertThat(OK);
    });
  });
});
