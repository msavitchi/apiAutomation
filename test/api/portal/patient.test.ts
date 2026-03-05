import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Patient, PatientRelatives, Statistics } from '@medapp/api-client/portal/endpoints';
import type { Context } from '@medapp/api-client';
import { portalContext } from '../../support/portal';

let ctx: Context;

describe('Portal Patient', () => {
  beforeAll(async () => {
    ctx = await portalContext();
  });

  describe('GET /patient', () => {
    it('should get patient profile', async () => {
      const response = await new Patient(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /patient', () => {
    it.skip('should create patient profile', async () => {
      const response = await new Patient(ctx).post(
        body({ firstName: 'Test', lastName: 'Patient', email: 'patient@test.com' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('PUT /patient', () => {
    it('should update patient profile', async () => {
      const response = await new Patient(ctx).put(
        body({ firstName: 'Updated', lastName: 'Patient' })
      );
      await response.assertThat(OK);
    });
  });

  describe('GET /patient-relatives', () => {
    it('should list patient relatives', async () => {
      const response = await new PatientRelatives(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /statistics', () => {
    it('should get patient statistics', async () => {
      const response = await new Statistics(ctx).get();
      await response.assertThat(OK);
    });
  });
});
