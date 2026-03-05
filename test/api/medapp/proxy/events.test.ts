import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  AppointmentsEvents,
  PatientsSync,
  PatientsKyc,
  PractitionersSync,
} from '@medapp/api-client/proxy/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Proxy Events', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('POST /appointments/events', () => {
    it.skip('should post an appointment event', async () => {
      const response = await new AppointmentsEvents(ctx).post(
        body({
          eventType: 'appointment.created',
          appointmentId: 'test-appt-id',
          timestamp: '2026-03-02T10:00:00Z'
        })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /patients/sync', () => {
    it.skip('should sync patient data', async () => {
      const response = await new PatientsSync(ctx).post(
        body({
          patientId: 'test-patient-id',
          externalId: 'ext-patient-123',
          data: { name: 'John Doe', dateOfBirth: '1990-01-01' }
        })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /patients/kyc', () => {
    it.skip('should submit patient KYC data', async () => {
      const response = await new PatientsKyc(ctx).post(
        body({
          patientId: 'test-patient-id',
          documentType: 'passport',
          documentNumber: 'AB123456'
        })
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /practitioners/sync', () => {
    it.skip('should sync practitioner data', async () => {
      const response = await new PractitionersSync(ctx).post(
        body({
          practitionerId: 'test-practitioner-id',
          externalId: 'ext-practitioner-456',
          data: { name: 'Dr. Jane Smith', specialty: 'Cardiology' }
        })
      );
      await response.assertThat(OK);
    });
  });
});
