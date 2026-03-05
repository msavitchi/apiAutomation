import { queryParam } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { ClientAvailabilitySlotsPractitionerId } from '@medapp/api-client/clinical/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Clinical Availability', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /availability/slots', () => {
    it.skip('should get available slots for a practitioner', async () => {
      const response = await new ClientAvailabilitySlotsPractitionerId(ctx).get(
        'test-practitioner-id',
        queryParam('date', '2026-03-15')
      );
      await response.assertThat(OK);
    });

    it.skip('should get available slots filtered by date range', async () => {
      const response = await new ClientAvailabilitySlotsPractitionerId(ctx).get(
        'test-practitioner-id',
        queryParam('startDate', '2026-03-15'),
        queryParam('endDate', '2026-03-22')
      );
      await response.assertThat(OK);
    });

    it.skip('should get available slots filtered by specialty', async () => {
      const response = await new ClientAvailabilitySlotsPractitionerId(ctx).get(
        'test-practitioner-id',
        queryParam('specialtyId', 'test-specialty-id'),
        queryParam('date', '2026-03-15')
      );
      await response.assertThat(OK);
    });
  });
});
