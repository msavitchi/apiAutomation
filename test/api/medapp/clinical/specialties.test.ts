import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  ClientSpecialties,
  ClientSpecialtiesSpecialtyId,
  ClientPractitionerServices,
} from '@medapp/api-client/clinical/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Clinical Specialties', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /specialties', () => {
    it('should list all specialties', async () => {
      const response = await new ClientSpecialties(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /specialties/{id}', () => {
    it.skip('should get specialty by id', async () => {
      const response = await new ClientSpecialtiesSpecialtyId(ctx).get('test-specialty-id');
      await response.assertThat(OK);
    });
  });

  describe('GET /practitioner/services', () => {
    it('should list practitioner services', async () => {
      const response = await new ClientPractitionerServices(ctx).get();
      await response.assertThat(OK);
    });
  });
});
