## Product App - Node.js - TypeScript

### Prerequisites

* Node.js v6 or higher.
* Yarn v0.20 or newer.

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

Install useful tools in global namespace.

```shell
$ yarn global add tslint typescript ts-node nodemon concurrently mocha
```

**Developer and type packages**

```shell
$ yarn add tslint typescript ts-node @types/node mocha @types/mocha nodemon nyc rimraf coveralls concurrently -D
```

**Configuration files: `tsconfig.json`, `tslint.json`**

# Run

### Prerequesits

* Install Node.js v6 or newer.
* Install `npm` v4 or newer. (optional)
* Install `yarn` v0.19 or newer.

**Install global packages with `yarn`**
```
$ yarn global add mocha typescript ts-node tslint nodemon
```

**Install local packages with `yarn`**
```
$ yarn
```

**Build and launch**

```
$ PORT=4000 NODE_ENV='production' yarn start
```

Use `Postman` or `Insomnia` or your favourite `curl` command to request the server.

### Development

Launch the following three commands in separate terminal:

```
$ yarn watch:build
$ yarn watch:server
$ yarn watch:test
```
or run all together parallel with `concurrently`:

```
$ yarn dev
```

Linter (autofix on!):

```
$ yarn lint
```

Build:

```
$ yarn build
```

Build and test:

```
$ yarn test
```

Build and launch:

```
$ yarn start
```

or

```
$ DEBUG='product-app' yarn start
```

Coverage report:

```
$ yarn test:coverage
```

Install terminal command:

```
$ yarn deploy
$ product-app-server
```

# API

Future api comes here...