#!/usr/bin/env node

import fs from 'fs-extra';
import updater from 'update-notifier';
import parseArgs from 'yargs-parser';

import cli from '../lib/index.js';

const pkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);

const aliases = {
  h: 'help',
  v: 'version',
  c: 'code',
  r: 'readme',
};

const parseCliArguments = (args) => {
  const options = parseArgs(args, {
    alias: aliases,
    boolean: ['code', 'readme'],
  });
  return options;
};

const options = parseCliArguments([].slice.call(process.argv, 2));

updater({ pkg }).notify();

cli(options).then(
  () => process.exit(0),
  ({ code }) => process.exit(Number.isInteger(code) ? code : 1)
);
