# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TypeScript API testing automation framework targeting httpbin.org, built on msavitchi's RestTest library with Jest for API tests and k6 for performance tests.

## Commands

```bash
npm ci                          # Install (requires GitHub Packages auth)
npm run test                    # Run all API tests via Jest
npm run test -- --testPathPattern=<pattern>  # Run a single test file
npm run performance <path>      # Run k6 performance tests (e.g., npm run performance test/performance/baseline.perf.ts)
```

Set `NODE_ENV` to target an environment (defaults to `stg` if unset or set to `test`).

## Architecture

**Endpoint layer** (`src/endpoints/`): Each API endpoint extends `BaseEndpoint` (which extends RestTest's `Request`). BaseEndpoint wires up status code + schema verifiers, logging, and the base URL automatically. Concrete endpoints define HTTP methods and path structure. Endpoints without URL params expose `get(...setters)`, `post(...setters)`, etc. Endpoints with path params (e.g., `/anything/{id}`) take the param value as the first argument: `get(id, ...setters)`.

**Schema layer** (`src/schemas/`): JSON Schemas exported as `const` objects, used both for response validation in verifiers and for TypeScript type inference via `json-schema-to-ts`. Schemas must use `as const satisfies JSONSchema` to enable type inference.

**Steps layer** (`src/steps/<group>/`): Reusable higher-level test functions that combine endpoint calls with assertions and return typed response objects. Steps are grouped by feature/provider with barrel `index.ts` exports. Each step instantiates an endpoint, calls it, asserts with `assertThat`, and returns `response.to<typeof SCHEMA>()`.

**Test layer** (`test/api/`, `test/performance/`): Jest test files for API tests; k6w-based files for performance tests. Tests import from `@jest/globals` (not global Jest). Performance tests export an `options` object (k6 config) and a default async function.

**Support** (`src/support/`): `variables.ts` exports typed config values (`BASE_URL`, `REST_TEST_LOG_LEVEL`) from `process.env`. `helpers/` contains utility functions.

**Configuration** (`config/`): Uses the `config` npm package. `default.json` provides base values (`BASE_URL`, `REST_TEST_LOG_LEVEL`); environment-specific `<env>.json` files override them. The global setup in `config.ts` (Jest `globalSetup`) merges config into `process.env`, with env vars taking precedence.

## Key Patterns

- **Fluent test API**: `new Endpoint().get(...setters)` returns a response, then `response.assertThat(statusCode, schema, ...path verifiers)`
- **Setters** (from `@msavitchi/resttest/setters`): `queryParam`, `body`, `baseUri`, `pathParam`, `header`, etc.
- **Verifiers** (from `@msavitchi/resttest/verifiers`): `path('key', matcher)` for nested assertions, composable with hamjest matchers (`equalTo`, `containsString`, etc.). Supports dot notation: `path('args.param', equalTo('value'))`
- **Typed responses**: `response.to<typeof SCHEMA>()` converts response using the JSON schema type
- **Status codes**: Import from `@msavitchi/resttest/status` (e.g., `OK`, not raw `200`)
- **HTTP methods**: Import from `@msavitchi/resttest/method` (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)

## Dependencies

- `@msavitchi/resttest` — API testing library (fluent request/response/assertion API)
- `hamjest` — Composable assertion matchers
- `@msavitchi/k6w` / `@msavitchi/k6-fetch` — k6 performance testing wrapper
- `json-schema-to-ts` — Derive TypeScript types from JSON schemas
- `config` — Hierarchical environment configuration
