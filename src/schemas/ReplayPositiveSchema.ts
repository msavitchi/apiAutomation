import { JSONSchema } from 'json-schema-to-ts';

export const REPLY_POSITIVE_SCHEMA = {
  type: 'object',
  required: [
    'args',
    'data',
    'files',
    'form',
    'headers',
    'json',
    'origin',
    'url',
  ],
  properties: {
    args: {
      type: 'object',
    },
    data: {
      type: 'string',
    },
    files: {
      type: 'object',
    },
    form: {
      type: 'object',
    },
    headers: {
      type: 'object',
    },
    json: {
      type: ['null', 'object'],
    },
    origin: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
  },
} as const satisfies JSONSchema;
