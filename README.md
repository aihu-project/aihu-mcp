# @aihu/mcp

> **Aihu** — agentic discovery and interaction, for human purpose.

MCP server for aihu — exposes aihu_example and aihu_validate tools via stdio transport.

> **Status:** Publish-ready — rides the next release cut. The `aihu_example` index is generated from the `cookbook/` corpus (`scripts/build-cookbook-index.ts`) and CI-guarded against staleness (`check:cookbook`).

<!-- BEGIN_HANDWRITTEN: prose -->
Exposes two tools over the [Model Context Protocol](https://modelcontextprotocol.io)'s
stdio transport:

- **`aihu_example`** — returns a canonical `.aihu` SFC snippet from the generated
  cookbook index that best matches a natural-language `intent`, optionally
  narrowed by keyword `tags`.
- **`aihu_validate`** — compiles a `.aihu` SFC `source` string with the aihu Rust
  compiler and returns either the compiled TypeScript or structured diagnostics
  (code, message, line/col).

## Usage

Programmatic:

```ts
import { createServer, startServer } from '@aihu/mcp'

await startServer()
// or, to configure the transport yourself:
const server = createServer()
```

CLI — this package ships a `serve` bin that starts the stdio server and runs
until the host closes stdin:

```bash
npx serve
# or, from an aihu project that depends on this package:
aihu mcp serve
```
<!-- END_HANDWRITTEN: prose -->

## Install

<!-- BEGIN_AUTOGEN: install -->
<!-- regenerate package facts from package.json when release metadata changes -->

```bash
npm install @aihu/mcp
# or
bun add @aihu/mcp
```

<sub><i>Auto-generated against `@aihu/mcp@0.2.1`.</i></sub>

<!-- END_AUTOGEN: install -->

## Package facts

<!-- BEGIN_AUTOGEN: stats -->
<!-- regenerate: bun scripts/sync-readme.ts (also runs in pre-commit + CI) -->

| | |
|---|---|
| **Version** | `0.2.1` |
| **Tier** | C — Agent surface — MCP server (aihu_example cookbook retrieval + aihu_validate) |
| **Published files** | 3 entries |
| **License** | MIT |

<sub><i>Auto-generated against `@aihu/mcp@0.2.1`.</i></sub>

<!-- END_AUTOGEN: stats -->

## Exports

<!-- BEGIN_AUTOGEN: exports -->
<!-- regenerate: bun scripts/sync-readme.ts (also runs in pre-commit + CI) -->

| Subpath | ESM | CJS |
|---|---|---|
| `.` | `./dist/index.js` | `—` |

<sub><i>Auto-generated against `@aihu/mcp@0.2.1`.</i></sub>

<!-- END_AUTOGEN: exports -->

## Dependencies

<!-- BEGIN_AUTOGEN: deps -->
<!-- regenerate: bun scripts/sync-readme.ts (also runs in pre-commit + CI) -->

**Dependencies:**

- `@aihu/compiler` — `^1.3.6`
- `@modelcontextprotocol/sdk` — `^1.0.0`

<sub><i>Auto-generated against `@aihu/mcp@0.2.1`.</i></sub>

<!-- END_AUTOGEN: deps -->

## See also

<!-- BEGIN_AUTOGEN: see-also -->
<!-- regenerate: bun scripts/sync-readme.ts (also runs in pre-commit + CI) -->

- [Cookbook corpus](./cookbook)
- [Aihu compiler](https://github.com/aihu-project/aihu-compiler)
- [Aihu organization](https://github.com/aihu-project)

<sub><i>Auto-generated against `@aihu/mcp@0.2.1`.</i></sub>

<!-- END_AUTOGEN: see-also -->

## License

<!-- BEGIN_AUTOGEN: license -->
<!-- regenerate: bun scripts/sync-readme.ts (also runs in pre-commit + CI) -->

MIT — see [LICENSE](./LICENSE).

<sub><i>Auto-generated against `@aihu/mcp@0.2.1`.</i></sub>

<!-- END_AUTOGEN: license -->
