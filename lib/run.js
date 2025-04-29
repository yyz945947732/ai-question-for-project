import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { mainCodeTmpl, readmeTmpl } from './tmpl.js';
import { getMainCode } from './mainCode.js';
import { pkg } from './package.js';

const SRC_DIR = path.resolve(process.cwd());
const QS_CODE_FILE = 'QS.CODE.txt';
const QS_README_FILE = 'QS.README.txt';

function writeFile(fileName, content) {
  const filePath = path.join(SRC_DIR, fileName);
  try {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`Successfully wrote to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
  }
}

function writeCodeQS() {
  const qs = mainCodeTmpl(pkg);
  writeFile(QS_CODE_FILE, qs);
}

function writeReadmeQS() {
  const code = getMainCode();
  const qs = readmeTmpl(pkg, code);
  writeFile(QS_README_FILE, qs);
}

function runTasks({ code, readme }) {
  if (code) {
    writeCodeQS();
  }

  if (readme) {
    writeReadmeQS();
  }

  // default run code
  if (!code && !readme) {
    writeCodeQS();
  }
}

export default runTasks;
