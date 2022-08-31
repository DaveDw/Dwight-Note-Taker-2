const express = require("express");
const api = require('./routes/mainroute');
const html = require('./routes/htmlroute')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api)
app.use('/', html)

require('./routes/routes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})