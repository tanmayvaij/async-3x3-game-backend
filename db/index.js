const { connect } = require("mongoose")

const connectDB = () => {

    connect(process.env.MONGO_URI, (err) => {
        (err) ? console.log(err) : console.log("successfully connected to database")
    })

}

module.exports = { connectDB }
