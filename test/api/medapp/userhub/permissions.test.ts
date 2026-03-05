import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED, NO_CONTENT } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Permissions, PermissionsPermissionId } from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Permissions', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /permissions', () => {
    it.skip('should list permissions', async () => {
      const response = await new Permissions(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /permissions', () => {
    it.skip('should create a permission', async () => {
      const response = await new Permissions(ctx).post(
        body({ name: 'Test Permission', description: 'Test permission description' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /permissions/{id}', () => {
    it.skip('should get permission by id', async () => {
      const response = await new PermissionsPermissionId(ctx).get('test-permission-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /permissions/{id}', () => {
    it.skip('should update permission', async () => {
      const response = await new PermissionsPermissionId(ctx).put('test-permission-id',
        body({ name: 'Updated Permission' })
      );
      await response.assertThat(OK);
    });
  });

  describe('DELETE /permissions/{id}', () => {
    it.skip('should delete permission', async () => {
      const response = await new PermissionsPermissionId(ctx).delete('test-permission-id');
      await response.assertThat(NO_CONTENT);
    });
  });
});
