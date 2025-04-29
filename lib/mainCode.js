import { getEntry } from './package.js';
import path from 'node:path';
import { readFileSync, existsSync } from 'node:fs';

const SRC_DIR = path.resolve(process.cwd());

export function getMainCode() {
  const entry = getEntry();
  if (!entry) {
    return '';
  }
  const src = path.resolve(SRC_DIR, entry);
  if (!existsSync(src)) {
    return '';
  }
  const includedContent = readFileSync(src, 'utf-8');
  return includedContent;
}
