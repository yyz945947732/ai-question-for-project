import { readPackageSync } from 'read-pkg';

export const pkg = readPackageSync();

export function getEntry() {
  if (pkg.bin) {
    if (typeof pkg.bin === 'string') return pkg.bin;
    if (typeof pkg.bin === 'object') {
      const firstBin = Object.values(pkg.bin)[0];
      if (typeof firstBin === 'string') return firstBin;
    }
  }
  if (pkg.main) {
    return pkg.main;
  }
  if (pkg.exports) {
    const entryFromExports = extractFromExports(pkg.exports);
    if (entryFromExports) return entryFromExports;
  }
  if (pkg.module) {
    return pkg.module;
  }
  return null;
}

function extractFromExports(exportsField) {
  if (typeof exportsField === 'string') {
    return exportsField;
  }
  if (typeof exportsField === 'object' && exportsField['.']) {
    const dotExport = exportsField['.'];

    if (typeof dotExport === 'string') return dotExport;
    if (typeof dotExport === 'object') {
      if (dotExport.require) return dotExport.require;
      if (dotExport.import) return dotExport.import;
      if (dotExport.default) return dotExport.default;
    }
  }
  return null;
}
