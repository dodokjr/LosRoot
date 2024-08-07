import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/router/routers';

const app = express();
const PORT = 3100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", routes)

app.listen(PORT , () => {
    console.log(`App Run is ${PORT}`)
})