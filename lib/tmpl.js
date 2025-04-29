import directoryTree from 'directory-tree';
import path from 'node:path';

const SRC_DIR = path.resolve(process.cwd());

function isCN(str) {
  return /[\u4e00-\u9fa5]/.test(str);
}

function getTreeAsString(node, prefix = '', isLast = true) {
  let tree = `${prefix}${isLast ? '└── ' : '├── '}${node.name}\n`;
  if (node.children) {
    const newPrefix = prefix + (isLast ? '    ' : '│   ');
    const lastIndex = node.children.length - 1;

    node.children.forEach((child, index) => {
      const isLastChild = index === lastIndex;
      tree += getTreeAsString(child, newPrefix, isLastChild);
    });
  }

  return tree;
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
Here is the directory structure of the project:
${getTreeAsString(
  directoryTree(SRC_DIR, {
    extensions: /\.(js|ts|json)$/,
    exclude: /node_modules|\.git|\.dist/,
  })
)}
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
