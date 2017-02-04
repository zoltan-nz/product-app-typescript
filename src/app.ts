import * as express from 'express';
import { Application } from 'express';
import * as process from 'process';

const app: Application = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(3000, () => {
    process.stdout.write('App listening on 3000!');
});
