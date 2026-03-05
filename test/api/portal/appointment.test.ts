import { body, queryParam } from '@msavitchi/resttest/setters';
import { OK, CREATED, NO_CONTENT } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  Specialities,
  Staff,
  Appointment,
  AppointmentSlotsStaffId,
  AppointmentPatientId,
} from '@medapp/api-client/portal/endpoints';
import type { Context } from '@medapp/api-client';
import { portalContext } from '../../support/portal';

let ctx: Context;

describe('Portal Appointments', () => {
  beforeAll(async () => {
    ctx = await portalContext();
  });

  describe('GET /specialities', () => {
    it('should list specialities', async () => {
      const response = await new Specialities(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /staff', () => {
    it('should list staff', async () => {
      const response = await new Staff(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /appointment/slots/{staffId}', () => {
    it('should get available slots for staff', async () => {
      const response = await new AppointmentSlotsStaffId(ctx).get('test-staff-id',
        queryParam('date', '2026-03-15')
      );
      await response.assertThat(OK);
    });
  });

  describe('POST /appointment', () => {
    it.skip('should create an appointment', async () => {
      const response = await new Appointment(ctx).post(
        body({ staffId: 'test-staff-id', date: '2026-03-15', slotId: 'test-slot-id' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /appointment/{patientId}', () => {
    it('should get appointments by patient id', async () => {
      const response = await new AppointmentPatientId(ctx).get('test-patient-id');
      await response.assertThat(OK);
    });
  });

  // DELETE not supported on AppointmentPatientId endpoint
});
