import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  Entries,
  EntriesEntryId,
  EntriesEntryIdStatus,
  EntriesTypes,
} from '@medapp/api-client/datahub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('DataHub Entries', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /entries', () => {
    it.skip('should list entries', async () => {
      const response = await new Entries(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /entries', () => {
    it.skip('should create an entry', async () => {
      const response = await new Entries(ctx).post(
        body({ type: 'test', data: { key: 'value' } })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /entries/{id}', () => {
    it.skip('should get entry by id', async () => {
      const response = await new EntriesEntryId(ctx).get('test-entry-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /entries/{id}', () => {
    it.skip('should update entry', async () => {
      const response = await new EntriesEntryId(ctx).put('test-entry-id',
        body({ data: { key: 'updated' } })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /entries/{id}/status', () => {
    it.skip('should update entry status', async () => {
      const response = await new EntriesEntryIdStatus(ctx).patch('test-entry-id',
        body({ status: 'active' })
      );
      await response.assertThat(OK);
    });
  });

  describe('GET /entries/types', () => {
    it('should list entry types', async () => {
      const response = await new EntriesTypes(ctx).get();
      await response.assertThat(OK);
    });
  });
});
