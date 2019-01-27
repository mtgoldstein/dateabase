const express       = require('express');
const nunjucks      = require('nunjucks');
const bodyParser    = require('body-parser');
const routes        = require('./routes/api');

const app           = express();

//static file setup
app.use('/static-files', express.static('static'));

//template engine setup
app.set('view engine', 'njk')
nunjucks.configure('views', {
    express: app
})

//api routes
app.use(bodyParser.json());
app.use('/api', routes);

//routes
// app.get("/:page", (req, res) => {
//     res.render(req.params.page);
// });

app.use((req, res, next) => {
    res.render('index')
});

//setup port to listen on
app.listen(process.env.port || 3000, () => {
    console.log('Now listening for Dateabase requests')
});