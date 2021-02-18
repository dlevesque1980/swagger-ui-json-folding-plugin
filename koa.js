const serve = require('koa-static');
const mount = require('koa-mount');
const Koa = require('koa');
const app = new Koa();

app.use(serve(__dirname + '/demo'));
app.use(mount("/", serve(__dirname + '/dist')));



app.listen(3000);
console.log("web server running on port 3000")