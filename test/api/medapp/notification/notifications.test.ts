import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Notifications, NotificationsPreference } from '@medapp/api-client/notification/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Notifications', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /notifications', () => {
    it.skip('should list notifications', async () => {
      const response = await new Notifications(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('GET /notifications/preference', () => {
    it('should get notification preferences', async () => {
      const response = await new NotificationsPreference(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /notifications/preference', () => {
    it.skip('should set notification preferences', async () => {
      const response = await new NotificationsPreference(ctx).post(
        body({
          email: true,
          sms: false,
          push: true,
          categories: {
            appointments: true,
            reminders: true,
            announcements: false
          }
        })
      );
      await response.assertThat(OK);
    });
  });
});
