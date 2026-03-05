import { env } from 'process';

export const BASE_URL = env['BASE_URL'] ?? '';
export const MEDAPP_BASE_URL = env['MEDAPP_BASE_URL'] ?? '';
export const MEDPARK_PORTAL_BASE_URL = env['MEDPARK_PORTAL_BASE_URL'] ?? '';
export const REST_TEST_LOG_LEVEL = +(env['REST_TEST_LOG_LEVEL'] ?? '0');
