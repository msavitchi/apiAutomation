import { body } from '@msavitchi/resttest/setters';
import { OK, CREATED } from '@msavitchi/resttest/status';
import { describe, it, beforeAll } from '@jest/globals';
import { Templates, TemplatesTemplateId } from '@medapp/api-client/notification/endpoints';
import type { Context } from '@medapp/api-client';
import { medappContext } from '../../../support/medapp';

let ctx: Context;

describe('Notification Templates', () => {
  beforeAll(async () => {
    ctx = await medappContext();
  });

  describe('GET /templates', () => {
    it.skip('should list notification templates', async () => {
      const response = await new Templates(ctx).get();
      await response.assertThat(OK);
    });
  });

  describe('POST /templates', () => {
    it.skip('should create a notification template', async () => {
      const response = await new Templates(ctx).post(
        body({
          name: 'test-template',
          channel: 'email',
          subject: 'Test Notification',
          body: 'Hello {{name}}, this is a test notification.'
        })
      );
      await response.assertThat(CREATED);
    });
  });

  describe('GET /templates/{id}', () => {
    it.skip('should get notification template by id', async () => {
      const response = await new TemplatesTemplateId(ctx).get('test-template-id');
      await response.assertThat(OK);
    });
  });

  describe('PUT /templates/{id}', () => {
    it.skip('should update notification template', async () => {
      const response = await new TemplatesTemplateId(ctx).put('test-template-id',
        body({
          name: 'updated-template',
          channel: 'email',
          subject: 'Updated Test Notification',
          body: 'Hello {{name}}, this is an updated test notification.'
        })
      );
      await response.assertThat(OK);
    });
  });

  describe('PATCH /templates/{id}', () => {
    it.skip('should partially update notification template', async () => {
      const response = await new TemplatesTemplateId(ctx).patch('test-template-id',
        body({ subject: 'Patched Subject' })
      );
      await response.assertThat(OK);
    });
  });
});
