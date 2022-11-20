const express = require('express')
const { dbConection } = require('./database/config')
const cors = require('cors')
require('dotenv').config()

const app = express()

//Database
dbConection()

app.use(cors())

//Public Dir
app.use(express.static("public"))

app.use(express.json())

app.use("/api/auth", require("./routes/auth"))
app.use("/api/events", require("./routes/events"))


app.listen(process.env.PORT, () => {
    console.log(`listening at port ${process.env.PORT}`);
})