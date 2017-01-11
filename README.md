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
$ npm i -D @types/node
```

### Writing a basic class

Compare simple ES6 with TypeScript.

```shell
$ mkdir src
$ touch src/hello.ts
$ touch src/old-hello.js
```

Run ts with `ts-node`.

* Simple types
* [Simple class](https://github.com/zoltan-nz/product-app-typescript/commit/55db1a6fae83b309e09ddbb33f11ee25a34c802e
)
* [Simple interface](https://github.com/zoltan-nz/product-app-typescript/commit/68fac1658faa9baf23d1bcd68f4375e5fabed819)


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
$ rm src/*hello*
```

* Creating `app.ts` in our `src` folder

`Hello World` with express and TypeScript.

First, just copy-paste the "old" Node.js code from here:
http://expressjs.com/en/starter/hello-world.html

* Run `ts-node src/app.ts`

Rewriting in ES6 style:

```js
import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('App listening on 3000!');
});
```

Time to add some TypeScript syntax.

* Import Application and add as a type.

```typescript

import * as express from 'express';
import { Application } from 'express';

const app:Application = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(3000, () => {
    console.log('App listening on 3000!')
});
```

### Setup TSLint

Manually

```
$ tslint src/app.ts
```

```
$ tslint src/app.ts --fix
```

Add config file

```
$ touch tslint.json
```

```
{
  "extends": "tslint:latest",
  "rules": {
    "quotemark": [true, "single", "avoid-escape"]
  }
}
```

https://palantir.github.io/tslint/rules/

### Setup tsconfig.json

### Useful links


* https://github.com/Microsoft/vscode-samples/tree/master/node-express-typescript
* https://expressjs.com/en/starter/generator.html