const express = require("express")
const { config } = require("dotenv")
const { connectDB } = require("./db")

config()

const AuthRouter = require("./routes/Auth")

const app = express()
const PORT = process.env.PORT || 5000

app.use("/api/auth/", AuthRouter)

const start = () => {

    try {

        connectDB()

        app.listen(PORT, () => {
            console.log("Server started successfully")
        })
        
    }

    catch (err) { console.log(err) }

}

start()
