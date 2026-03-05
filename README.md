## Installation

```bash
npm ci
```

> 🚨️ You must be authenticated to [GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

## Scripts

The following scripts are available:

| Script                       | Description                                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `npm run test`               | Executes API tests using [Jest](https://jestjs.io/).                                                                  |
| `npm run performance <path>` | Executes performance tests using [k6w](https://github.com/msavitchi/js-test-libs/blob/main/packages/k6w/README.md). |

> 🚨 The target environment must be set in the `NODE_ENV` environment variable.

## Project Structure

```text
.
├─ config                   # Configuration files
│  ├─ default.json          #  - `<env>` is the value of NODE_ENV
│  └─ <env>.json            #  - `<env>.json` inherit default.json
│
├─ src
│  ├─ endpoints             # API endpoints
│  │  ├─ BaseEndpoint.ts
│  │  └─ <endpoint>.ts
│  │
│  ├─ schemas               # JSON Schemas
│  │  └─ <schema>.ts
│  │
│  ├─ steps                 # Steps grouped by feature/provider
│  │  └─ <group>
│  │     ├─ index.ts
│  │     └─ <group-method>.ts
│  │
│  └─ support
│     ├─ helpers           # Helpers
│     │  └─ <helper>.ts
│     │
│     └─ variables.ts      # Globals
│
└─ test
   ├─ api                   # Tests
   └─ performance           # Performance tests
```

## Learning 📖

Please make use of the following resources for detailed processes, best practices, and solutions to common problems:

- [Wiki](/wiki)
- [API Test Template Wiki](https://github.com/msavitchi/api-test-template/wiki)

Additionally, it is recommended to familiarize yourself with the following packages:

- [Jest](https://jestjs.io/): JavaScript Testing Framework.
- [Hamjest](https://www.npmjs.com/package/hamjest): Assertion library with composable matches.
- [RestTest](https://github.com/msavitchi/js-test-libs/blob/main/packages/resttest/README.md): Opinionated API testing library from the typed world.
- [ApiClient](https://github.com/msavitchi/js-test-libs/blob/main/packages/api-client/README.md): API client built from the msavitchi API specifications.
- [k6w](https://github.com/msavitchi/js-test-libs/tree/main/packages/k6w): A TypeScript and Node.js compatible [k6](https://k6.io/) wrapper.
