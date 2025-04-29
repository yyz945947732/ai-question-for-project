import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { getEntry } from './package.js';

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
