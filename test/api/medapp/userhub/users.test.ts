import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  Users,
  UsersUserId,
  UsersUserIdStatus,
  UsersStats,
} from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Users', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /users', () => {
    it.skip('should list users', async () => {
      const response = await new Users(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /users', () => {
    it.skip('should create a user', async () => {
      const response = await new Users(ctx).post(
        body({ firstName: 'Test', lastName: 'User', email: 'test@test.com' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /users/{id}', () => {
    it.skip('should get user by id', async () => {
      const response = await new UsersUserId(ctx).get('test-user-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /users/{id}', () => {
    it.skip('should update user', async () => {
      const response = await new UsersUserId(ctx).put('test-user-id',
        body({ firstName: 'Updated', lastName: 'User' })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /users/{id}/status', () => {
    it.skip('should update user status', async () => {
      const response = await new UsersUserIdStatus(ctx).patch('test-user-id',
        body({ status: 'active' })
      );
      await response.assertThat(OK);
    });
  });

  describe('GET /users/stats', () => {
    it.skip('should get user stats', async () => {
      const response = await new UsersStats(ctx).get();
      await response.assertThat(OK);
    });
  });
});
