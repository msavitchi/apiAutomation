import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Listtypes, ListtypesListTypeId } from '@medapp/api-client/datahub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('DataHub List Types', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /listtypes', () => {
    it('should list all list types', async () => {
      const response = await new Listtypes(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /listtypes', () => {
    it.skip('should create a list type', async () => {
      const response = await new Listtypes(ctx).post(
        body({ name: 'test-list-type', description: 'A test list type' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /listtypes/{id}', () => {
    it.skip('should get list type by id', async () => {
      const response = await new ListtypesListTypeId(ctx).get('test-listtype-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /listtypes/{id}', () => {
    it.skip('should update list type', async () => {
      const response = await new ListtypesListTypeId(ctx).put('test-listtype-id',
        body({ name: 'updated-list-type', description: 'An updated test list type' })
      );
      await response.assertThat(OK);
    });
  });
});
