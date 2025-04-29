import { pkg } from './package.js';

import runTasks from './run.js';

const helpText = `ai-question-for-project v${pkg.version}

  Usage: aiqs [options]

  -h --help              Print this help
  -v --version           Print ai-question-for-project version number
  -c --code              Generate questions about how to write code
  -r --readme            Generate questions about how to write readme

For more details, please see https://github.com/yyz945947732/ai-question-for-project`;

const version = () => console.log(`v${pkg.version}`);

const help = () => console.log(helpText);

async function cli(options) {
  if (options.version) {
    version();
  } else if (options.help) {
    help();
  } else {
    return runTasks(options);
  }
  return Promise.resolve();
}

export default cli;
