import express from "express"

const app = express();
const PORT = 3100;

app.get("/")

app.listen(PORT , () => {
    console.log(`App Run is ${PORT}`)
})