import { OK } from '@msavitchi/resttest/status';
import { HttpBinAnything } from '../../src/endpoints/HttpBinAnything';

export const options = {
  executor: 'ramping-vus',
  stages: [
    { duration: '1m', target: 100 },
    { duration: '3m', target: 100 },
  ],
  thresholds: {
    http_req_duration: ['p(95) <= 1000'],
  },
};

export default async function () {
  const response = await new HttpBinAnything().get();
  await response.assertThat(OK);
}
