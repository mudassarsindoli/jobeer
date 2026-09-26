import { existsSync, readdirSync, unlinkSync, statSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { resolve, basename, join } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const logosDir = resolve(root, 'public/logos')

const MAX_WIDTH = 512
const QUALITY = 82

if (!existsSync(logosDir)) {
  console.log('No public/logos directory, skipping logo optimization')
  process.exit(0)
}

const files = readdirSync(logosDir).filter((f) => f.endsWith('.png'))

if (files.length === 0) {
  console.log('No .png logos to optimize')
  process.exit(0)
}

let beforeBytes = 0
let afterBytes = 0
let converted = 0

for (const file of files) {
  const src = join(logosDir, file)
  const out = join(logosDir, `${basename(file, '.png')}.webp`)

  const before = statSync(src).size
  beforeBytes += before

  try {
    execFileSync('convert', [
      src,
      '-resize',
      `${MAX_WIDTH}x${MAX_WIDTH}>`,
      '-strip',
      '-quality',
      String(QUALITY),
      out,
    ])
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err.message)
    continue
  }

  const after = statSync(out).size
  afterBytes += after
  converted += 1

  unlinkSync(src)
}

const mb = (bytes) => (bytes / (1024 * 1024)).toFixed(2)
const saved = beforeBytes > 0 ? `(-${((1 - afterBytes / beforeBytes) * 100).toFixed(0)}%)` : ''
console.log(
  `Optimized ${converted}/${files.length} logos: ` +
    `${mb(beforeBytes)} MB -> ${mb(afterBytes)} MB${saved}`,
)