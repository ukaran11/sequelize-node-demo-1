const express = require('express');
let app = express();

const PORT = 3000;

const path = require('path');

const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.set('views', path.resolve('./src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

const rootPath = path.resolve('./dist');

app.use(express.static(rootPath));

// DB Connection
require('./src/database/connection');

router.use((err, req, res, next) => {
    if(err) {
        return res.send(err.message);
    }
});

app.listen(PORT, err => {
    if(err) return console.log(`Cannot listen on PORT: ${PORT}`);
    console.log(`Server is listening on http://localhost:${PORT}`);
})