import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  ModuleSettings,
  ModuleSettingsModuleSettingId,
  ModuleSettingsModuleSettingIdStatus,
} from '@medapp/api-client/datahub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('DataHub Module Settings', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /module-settings', () => {
    it('should list module settings', async () => {
      const response = await new ModuleSettings(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /module-settings', () => {
    it.skip('should create a module setting', async () => {
      const response = await new ModuleSettings(ctx).post(
        body({ moduleId: 'test-module', key: 'setting-key', value: 'setting-value' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /module-settings/{id}', () => {
    it.skip('should get module setting by id', async () => {
      const response = await new ModuleSettingsModuleSettingId(ctx).get('test-setting-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /module-settings/{id}', () => {
    it.skip('should update module setting', async () => {
      const response = await new ModuleSettingsModuleSettingId(ctx).put('test-setting-id',
        body({ key: 'setting-key', value: 'updated-value' })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /module-settings/{id}/status', () => {
    it.skip('should update module setting status', async () => {
      const response = await new ModuleSettingsModuleSettingIdStatus(ctx).patch('test-setting-id',
        body({ status: 'active' })
      );
      await response.assertThat(OK);
    });
  });
});
