const express = require('express');
const path = require('path');
const userRouter = require('./routes/usersRoute');
const sync = require('./models/sync');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.end("OK");
});

const server = () => {
    console.log("Servidor rodando na porta 8000!!!");
};

const port = '8000';

app.listen(port, server);