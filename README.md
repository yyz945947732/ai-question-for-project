# ai-question-for-project

<p>
  <a href="https://www.npmjs.com/package/ai-question-for-project">
    <img src="https://img.shields.io/npm/v/ai-question-for-project.svg" alt="Version" />
  </a>
  <a href="https://github.com/yyz945947732/ai-question-for-project/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="/LICENSE.md">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

AI-generated questions about creating and writing code for project files.

## Features

- 🛠️ Automatically analyze project structure.
- 🧠 Generate AI-ready questions for code generation.
- 📦 Lightweight CLI script.
- 🚀 Easy to integrate into your workflow.

## Install

```sh
npm install -g ai-question-for-project
```

## Usage

```sh
npx aiqs [options]
```

### Options

| Option      | Alias | Description                        |
| ----------- | ----- | ---------------------------------- |
| `--help`    | `-h`  | Show help message.                 |
| `--version` | `-v`  | Show current version.              |
| `--code`    | `-c`  | Generate code-related questions.   |
| `--readme`  | `-r`  | Generate README-related questions. |

### Example

```bash
# This will generate code-related questions to QS.CODE.txt file.
npx aiqs --code
# or
npx aiqs
```

#### output

```txt
I want to develop a library called "ai-question-for-project", and its main functionality is "Generate AI-oriented questions about creating project code based on the project's file information.".
It's a CLI script.
The project does not use TypeScript.
The project already uses the following dependencies (but feel free to add more):
fs-extra,read-pkg,update-notifier,yargs-parser.
Could you help me write the core code in the context of English?
```

## How It Works

The tool reads your project's structure and `package.json`, then automatically generates meaningful, AI-targeted questions to assist in creating or improving your project code.

## LICENSE

[MIT](https://github.com/yyz945947732/ai-question-for-project/blob/master/LICENSE)

---

This project is created using [generator-stupid-cli](https://github.com/yyz945947732/generator-stupid-cli).
