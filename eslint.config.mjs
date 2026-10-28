import { defineConfig } from 'eslint/config';

import polware from './index.mjs';

export default defineConfig(
  { ignores: ['test/fixtures/**'] },
  polware({ tsconfigRootDir: import.meta.dirname }),
);
