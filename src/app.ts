import * as express from 'express';
import { Application } from 'express';

const app:Application = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(3000, () => {
    console.log('App listening on 3000!')
});