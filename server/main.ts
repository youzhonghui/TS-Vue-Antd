import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => res.send('Hello World!'));
// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
