import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED, NO_CONTENT } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import {
  ClientAppointments,
  ClientAppointmentsAppointmentId,
  ClientAppointmentsAppointmentIdConfirm,
  ClientAppointmentsAppointmentIdReschedule,
} from '@medapp/api-client/clinical/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Clinical Appointments', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /appointments', () => {
    it('should list appointments', async () => {
      const response = await new ClientAppointments(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /appointments', () => {
    it.skip('should create an appointment', async () => {
      const response = await new ClientAppointments(ctx).post(
        body({ practitionerId: 'test-practitioner', startTime: '2026-03-15T10:00:00Z' })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /appointments/{id}', () => {
    it.skip('should get appointment by id', async () => {
      const response = await new ClientAppointmentsAppointmentId(ctx).get('test-appt-id');
      await response.assertThat(OK);
    });
  });

  describe('PATCH /appointments/{id}', () => {
    it.skip('should cancel appointment', async () => {
      const response = await new ClientAppointmentsAppointmentId(ctx).patch('test-appt-id',
        body({ status: 'cancelled' })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /appointments/{id}/confirm', () => {
    it.skip('should confirm appointment', async () => {
      const response = await new ClientAppointmentsAppointmentIdConfirm(ctx).patch('test-appt-id');
      await response.assertThat(OK);
    });
  });

  describe('POST /appointments/{id}/reschedule', () => {
    it.skip('should reschedule appointment', async () => {
      const response = await new ClientAppointmentsAppointmentIdReschedule(ctx).post('test-appt-id',
        body({ startTime: '2026-03-16T10:00:00Z' })
      );
      await response.assertThat(OK);
    });
  });

  describe('DELETE /appointments/{id}', () => {
    it.skip('should delete appointment', async () => {
      const response = await new ClientAppointmentsAppointmentId(ctx).delete('test-appt-id');
      await response.assertThat(NO_CONTENT);
    });
  });
});
