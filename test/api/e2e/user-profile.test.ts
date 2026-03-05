import { body, queryParam } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll, afterAll, expect } from '@jest/globals';
import type { Context } from '@medapp/api-client';
import { AccountsLogin, ClientBeneficiaries } from '@medapp/api-client/userhub/endpoints';
import { Patient } from '@medapp/api-client/portal/endpoints';
import { portalContext } from '../../support/portal';

const medappCtx: Context = {
  environment: 'dev',
  client: { id: '', secret: '' },
  debug: true,
  hosts: {
    INTERNAL_DEV_HOST: 'https://medapp.dev.upcodeteam.com',
  },
};

describe('E2E: Update user profile and verify in portal', () => {
  let originalFirstName: string;
  let originalLastName: string;
  let patientId: string;
  let idNumber: string;
  let portalCtx: Context;

  beforeAll(async () => {
    // Login to MedApp
    const loginResponse = await new AccountsLogin(medappCtx).post(
      body({
        login: process.env['MEDAPP_USER'],
        password: process.env['MEDAPP_PASSWORD'],
        type: 0,
      })
    );
    const loginBody: any = await loginResponse.to();
    medappCtx.jwt = loginBody.token;
    originalFirstName = loginBody.firstName;
    originalLastName = loginBody.lastName;
    patientId = loginBody.externalId;
    idNumber = loginBody.externalIdn;

    // Login to Portal
    portalCtx = await portalContext();
  });

  it('should update user profile and verify the changes in portal', async () => {
    const updatedFirstName = 'TestUpdated';
    const updatedLastName = 'AutoUpdated';

    // Update profile in MedApp
    const updateResponse = await new ClientBeneficiaries(medappCtx).put(
      body({
        firstName: updatedFirstName,
        lastName: updatedLastName,
        email: process.env['MEDAPP_USER']!,
      })
    );
    await updateResponse.assertThat(OK);

    // Verify in MedApp
    const getResponse = await new ClientBeneficiaries(medappCtx).get();
    await getResponse.assertThat(OK);
    const profile: any = await getResponse.to();

    expect(profile.firstName).toBe(updatedFirstName);
    expect(profile.lastName).toBe(updatedLastName);

    // Verify in Portal
    const portalResponse = await new Patient(portalCtx).get(
      queryParam('patientId', patientId),
      queryParam('idNumber', idNumber)
    );
    await portalResponse.assertThat(OK);
    const portalPatient: any = await portalResponse.to();

    expect(portalPatient.data.name.toUpperCase()).toBe(updatedFirstName.toUpperCase());
    expect(portalPatient.data.surname.toUpperCase()).toBe(updatedLastName.toUpperCase());
  });

  afterAll(async () => {
    // Restore original names
    await new ClientBeneficiaries(medappCtx).put(
      body({
        firstName: originalFirstName,
        lastName: originalLastName,
        email: process.env['MEDAPP_USER']!,
      })
    );
  });
});
