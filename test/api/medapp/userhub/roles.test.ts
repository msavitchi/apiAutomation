import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED, NO_CONTENT } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Roles, RolesRoleId } from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Roles', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /roles', () => {
    it.skip('should list roles', async () => {
      const response = await new Roles(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /roles', () => {
    it.skip('should create a role', async () => {
      const response = await new Roles(ctx).post(
        body({ name: 'Test Role', description: 'Test role description' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /roles/{id}', () => {
    it.skip('should get role by id', async () => {
      const response = await new RolesRoleId(ctx).get('test-role-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /roles/{id}', () => {
    it.skip('should update role', async () => {
      const response = await new RolesRoleId(ctx).put('test-role-id',
        body({ name: 'Updated Role' })
      );
      await response.assertThat(OK);
    });
  });

  describe('DELETE /roles/{id}', () => {
    it.skip('should delete role', async () => {
      const response = await new RolesRoleId(ctx).delete('test-role-id');
      await response.assertThat(NO_CONTENT);
    });
  });
});
