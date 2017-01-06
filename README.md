## Product App - Node.js - TypeScript

### Basic folder configuration

```shell
$ cd ~/projects
$ mkdir product-app-typescript
$ cd product-app-typescript
$ touch .gitignore README.md
$ git init
$ npm init
```

### Basic TypeScript setup

**Global packages**

```shell
$ npm i -g tslint typescript ts-node
```

* Playing with `ts-node` in console. (simple types, creating object, simple interface)

**Developer packages**

```shell
$ npm i -D tslint typescript ts-node
```

Side notes:
* `npm i -D` short version of `npm install --save-dev`
* `npm -l` shows detailed options
* `npm outdated`, upgrade a package: `npm i -D ts-node@latest`

**Type packages**

```shell
* `npm i -D @types/node
```

### Writing a basic class

Compare simple ES6 with TypeScript.

```shell
$ mkdir src
$ touch src/hello.ts
$ touch src/hello.js
```

Run ts with `ts-node`.

Notes:
* VSCode, open shortcut helper and check `Trigger parameter hints`

### Setup TSLint

### Setup tsconfig.json