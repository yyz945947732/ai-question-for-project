import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

function isCN(str) {
  return /[\u4e00-\u9fa5]/.test(str);
}

function scanFiles() {
  const rootDir = process.cwd();
  const entries = readdirSync(rootDir);
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(`${path.relative(rootDir, fullPath)} (Directory)`);
    } else {
      files.push(path.relative(rootDir, fullPath));
    }
  }

  return files;
}

export const mainCodeTmpl = (pkg) => `I want to develop a library called "${
  pkg.name
}", and its main functionality is "${pkg.description}".
${pkg.bin ? "It's a CLI script." : ''}
${
  pkg.types
    ? 'The project uses TypeScript.'
    : 'The project does not use TypeScript.'
}
The project already uses the following dependencies (but feel free to add more):
${Object.keys(pkg.dependencies).join(',')}.
Could you help me write the core code in the context of ${
  isCN(pkg.description) ? 'Chinese' : 'English'
}?
Here are the files in the project:
${scanFiles().map((file) => `- ${file}`).join('\n')}
`;

export const readmeTmpl = (
  pkg,
  code
) => `I want to write documentation for my project "${
  pkg.name
}", and its description is "${pkg.description}".
${pkg.bin ? "It's a CLI script." : ''}
Need to include badges and MIT license.
Please Written in a popular style.
Here is the code of the project's entry file that you can use for reference（For reference only, no need to display the source code.）:

${code}

Could you help me write the README in ${
  isCN(pkg.description) ? 'Chinese' : 'English'
}?
It's best to directly display it in markdown (md) format for me.
`;
