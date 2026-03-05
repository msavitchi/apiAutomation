import { body } from '@msavitchi/resttest/setters';
import { OK } from '@msavitchi/resttest/status';
import { HttpBinAnything } from '../../endpoints/HttpBinAnything';
import { REPLY_POSITIVE_SCHEMA } from '../../schemas/ReplayPositiveSchema';

export async function postAnything(payload: Record<string, unknown>) {
  const response = await new HttpBinAnything().post(body(payload));
  await response.assertThat(OK, REPLY_POSITIVE_SCHEMA);
  return response.to<typeof REPLY_POSITIVE_SCHEMA>();
}
