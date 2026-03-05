import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Modules, ModulesModuleId } from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Modules', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /modules', () => {
    it.skip('should list modules', async () => {
      const response = await new Modules(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /modules', () => {
    it.skip('should create a module', async () => {
      const response = await new Modules(ctx).post(
        body({ name: 'Test Module', description: 'Test module description' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /modules/{id}', () => {
    it.skip('should get module by id', async () => {
      const response = await new ModulesModuleId(ctx).get('test-module-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /modules/{id}', () => {
    it.skip('should update module', async () => {
      const response = await new ModulesModuleId(ctx).put('test-module-id',
        body({ name: 'Updated Module' })
      );
      await response.assertThat(OK);
    });
  });
});
