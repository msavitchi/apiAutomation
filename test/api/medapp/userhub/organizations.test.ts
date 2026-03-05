import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  Organizations,
  OrganizationsOrganizationId,
  OrganizationsOrganizationIdStatus,
} from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Organizations', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /organizations', () => {
    it.skip('should list organizations', async () => {
      const response = await new Organizations(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /organizations', () => {
    it.skip('should create an organization', async () => {
      const response = await new Organizations(ctx).post(
        body({ name: 'Test Organization' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /organizations/{id}', () => {
    it.skip('should get organization by id', async () => {
      const response = await new OrganizationsOrganizationId(ctx).get('test-org-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /organizations/{id}', () => {
    it.skip('should update organization', async () => {
      const response = await new OrganizationsOrganizationId(ctx).put('test-org-id',
        body({ name: 'Updated Organization' })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /organizations/{id}/status', () => {
    it.skip('should update organization status', async () => {
      const response = await new OrganizationsOrganizationIdStatus(ctx).patch('test-org-id',
        body({ status: 'active' })
      );
      await response.assertThat(OK);
    });
  });
});
