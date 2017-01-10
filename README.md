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

* Simple types
* Simple class
* Simple interface

Notes:
* VSCode, open shortcut helper and check `Trigger parameter hints`

### Add express to the project

```shell
$ npm i -S express
$ npm i -D @types/express
```

Side notes:
* `npm -i -S` is the shorthand of `npm install --save`, so the package will be added to the `package.json` `dependencies` section.
* Express app generator: `$ npm i -g express-generator`

* Remove `hello` files

```
$ rm src/hello.*
```

* Creating `app.ts` in our `src` folder

`Hello World` with express and TypeScript.

First, just copy-paste the "old" Node.js code from here:
http://expressjs.com/en/starter/hello-world.html

* Run `ts-node src/app.ts`

Rewrite in ES6 like TypeScript style:

```js
import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('App listening on 3000!')
});
```

* Import Application and add as a type.
* Works, but we cannot really unit test, only integration test.

### Setup TSLint

### Setup tsconfig.json