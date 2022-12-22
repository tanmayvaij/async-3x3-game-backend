const { hash, genSalt } = require("bcrypt")
const { UserSchema } = require("./schema")

const handleSignin = (req, res) => {

}

const handleSignup = async (req, res) => {

    const { name, email, username, password } = req.body

    if ( name == "" || email == "" || username == "" || password == "" ) 
        return res.json({ status: false, message: "Missing fields" })

    const userExists = UserSchema.findOne({ email })

    if (userExists) return res.json({ status: "false", message: "User already exists" })

    const salt = await genSalt(10)

    const hashedPassword = await hash(password, salt)

    try {

        const user = new UserSchema({
            
        })

        const savedUser = user.save()
        
        res.json(savedUser)

    }

    catch (err) { console.log(err) }

}

module.exports = { handleSignin, handleSignup }
