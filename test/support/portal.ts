import 'dotenv/config';
import type { Context } from '@medapp/api-client';
import { login } from '@medapp/api-client/portal';

export async function portalContext(): Promise<Context> {
  const ctx: Context = {
    environment: 'dev',
    client: { id: '', secret: '' },
    debug: true,
    hosts: {
      INTERNAL_DEV_HOST: 'https://medparkportal.fonetyazilim.com',
    },
  };
  const response: any = await login(ctx, {
    username: process.env['PORTAL_USER']!,
    password: process.env['PORTAL_PASSWORD']!,
  });
  ctx.jwt = response.data.accessToken;
  return ctx;
}
