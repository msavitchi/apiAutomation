import 'dotenv/config';
import { body } from '@msavitchi/resttest/setters';
import type { Context } from '@medapp/api-client';
import { AccountsLogin } from '@medapp/api-client/userhub/endpoints';

export async function medappContext(): Promise<Context> {
  const ctx: Context = {
    environment: 'dev',
    client: { id: '', secret: '' },
    debug: true,
    hosts: {
      INTERNAL_DEV_HOST: 'https://medapp.dev.upcodeteam.com',
    },
  };
  const response = await new AccountsLogin(ctx).post(
    body({
      login: process.env['MEDAPP_USER'],
      password: process.env['MEDAPP_PASSWORD'],
      type: 0,
    })
  );
  const loginBody: any = await response.to();
  ctx.jwt = loginBody.token;
  return ctx;
}
