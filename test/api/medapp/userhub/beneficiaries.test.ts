import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  Beneficiaries,
  BeneficiariesBeneficiaryId,
  BeneficiariesBeneficiaryIdStatus,
} from '@medapp/api-client/userhub/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('UserHub Beneficiaries', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /beneficiaries', () => {
    it.skip('should list beneficiaries', async () => {
      const response = await new Beneficiaries(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /beneficiaries', () => {
    it.skip('should create a beneficiary', async () => {
      const response = await new Beneficiaries(ctx).post(
        body({ firstName: 'Test', lastName: 'Beneficiary', email: 'beneficiary@test.com' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /beneficiaries/{id}', () => {
    it.skip('should get beneficiary by id', async () => {
      const response = await new BeneficiariesBeneficiaryId(ctx).get('test-beneficiary-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /beneficiaries/{id}', () => {
    it.skip('should update beneficiary', async () => {
      const response = await new BeneficiariesBeneficiaryId(ctx).put('test-beneficiary-id',
        body({ firstName: 'Updated', lastName: 'Beneficiary' })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /beneficiaries/{id}/status', () => {
    it.skip('should update beneficiary status', async () => {
      const response = await new BeneficiariesBeneficiaryIdStatus(ctx).patch('test-beneficiary-id',
        body({ status: 'active' })
      );
      await response.assertThat(OK);
    });
  });
});
