/**
 * Created by NICK on 16/1/4
 */


const koa = require('koa');
const app = new koa();

app.use(function *() {
    this.body = "hello world!";
});

app.listen(3000, ()=> {
    console.log('server start at port 3000!');
});