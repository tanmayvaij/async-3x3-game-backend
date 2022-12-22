const { Schema, model, set } = require("mongoose")

set('strictQuery', true)

const UserSchema = model("user", new Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}))

module.exports = { UserSchema }
