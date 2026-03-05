const defaultEnv = 'stg';

process.env['NODE_CONFIG_DIR'] = __dirname + '/config';

// fallback to default env if NODE_ENV is not set
process.env['NODE_ENV'] = ['', 'test', undefined] //
  .includes(process.env['NODE_ENV']?.toLowerCase())
  ? defaultEnv
  : process.env['NODE_ENV'];

import config from 'config';
import { env } from 'process';

export default function (): void {
  Object.assign(env, config.util.toObject(), env);
}
