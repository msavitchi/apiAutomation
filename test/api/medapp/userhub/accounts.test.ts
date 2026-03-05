import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  AccountsLogin,
  AccountsAuthorize,
  AccountsMe,
  AccountsLogout,
  AccountsExists,
  AccountsLanguage,
  AccountsCodeRequest,
  AccountsCodeConfirm,
} from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Accounts', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('POST /accounts/login', () => {
    it('should login with valid credentials', async () => {
      const response = await new AccountsLogin(ctx).post(
        body({ login: process.env['MEDAPP_USER'], password: process.env['MEDAPP_PASSWORD'], type: 0 })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /accounts/authorize', () => {
    it.skip('should refresh token', async () => {
      const loginResponse = await new AccountsLogin(ctx).post(
        body({ login: process.env['MEDAPP_USER'], password: process.env['MEDAPP_PASSWORD'], type: 0 })
      );
      const loginBody: any = await loginResponse.to();
      const response = await new AccountsAuthorize({ ...ctx, jwt: loginBody.token }).post(
        body({ refreshToken: loginBody.refreshToken })
      );
      await response.assertThat(OK);
    });
  });

  describe('GET /accounts/me', () => {
    it('should return current user info', async () => {
      const response = await new AccountsMe(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /accounts/exists', () => {
    it('should check if account exists', async () => {
      const response = await new AccountsExists(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('PATCH /accounts/language', () => {
    it('should update account language', async () => {
      const response = await new AccountsLanguage(ctx).patch(
        body({ language: 'en' })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /accounts/code/request', () => {
    it.skip('should request verification code', async () => {
      const response = await new AccountsCodeRequest(ctx).post(
        body({ email: process.env['MEDAPP_ADMIN_USER'] })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /accounts/code/confirm', () => {
    it.skip('should confirm verification code', async () => {
      const response = await new AccountsCodeConfirm(ctx).post(
        body({ email: process.env['MEDAPP_ADMIN_USER'], code: '123456' })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /accounts/logout', () => {
    it.skip('should logout successfully', async () => {
      const loginResponse = await new AccountsLogin(ctx).post(
        body({ login: process.env['MEDAPP_ADMIN_USER'], password: process.env['MEDAPP_ADMIN_PASSWORD'], type: 0 })
      );
      const loginBody: any = await loginResponse.to();
      const response = await new AccountsLogout({ ...ctx, jwt: loginBody.token }).post();
      await response.assertThat(OK);
    });
  });
});
