import express from 'express';

const app = express();
const port = 3000;

let messages = {
    last_update: 1,
    data: [{name: 'admin', text: 'Welcome to the chat room.'}],
};

app.get('/get', (req: any, res: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(messages);
});

app.get('/new', (req: any, res: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    let ip: string = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip === '::1') {
        ip = '127.0.0.1';
    }
    // tslint:disable-next-line: no-unused-expression
    messages.last_update = Date.now();
    messages.data.push({
        name: ip,
        text: req.query.data,
    });
    res.send('Ok');
    // req.query.color1 === 'red'  // true
    // req.query.color2 === 'blue' // true
    // console.log('here');
    // console.log(req.body.data);
    // res.end('Ok');
    // var user_name=req.body.user;
    // var password=req.body.password;
    // console.log("User name = "+user_name+", password is "+password);
    // res.end("yes");
});

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
