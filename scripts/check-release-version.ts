import { readFileSync } from 'node:fs'

const tag = process.argv[2] ?? process.env.RELEASE_TAG
const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as {
  name: string
  version: string
}

if (!tag) {
  console.error('Usage: bun scripts/check-release-version.ts <tag>')
  process.exit(1)
}

const expectedTag = `v${packageJson.version}`
if (tag !== expectedTag) {
  console.error(
    `Release tag ${tag} must match ${packageJson.name}@${packageJson.version} (${expectedTag})`,
  )
  process.exit(1)
}

console.log(`Release tag ${tag} matches ${packageJson.name}@${packageJson.version}`)
