const User = require("../../models/user");
const { registerRequestModel } = require("./models/registerRequestModel");

const postRegister = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // Step 1. Schema Validation
    const registerRequest = new registerRequestModel(req.body);
    try {
        await registerRequest.validate();
    } catch (error) {
        const errorMessagesArr = []
        for (key in error.errors) {
            const message = error.errors[key].message;
            errorMessagesArr.push(message);
        }
        return res.status(400).json({ errorMessagesArr: errorMessagesArr });
    }

    // Step 2. Database Validation
    try {
        const [bUsernameIsAvaliable, bEmailIsAvaliable] = await Promise.all([
            User.bCheckIfUsernameIsAvaliableAsync(username),
            User.bCheckIfEmailIsAvaliableAsync(email),
        ]);

        if (bUsernameIsAvaliable == false || bEmailIsAvaliable == false) {
            return res.status(400);
        }
    } catch (err) {
        console.log(err);
        return res.status(400);
    }

    // Step 3. User Creation
    const salt = User.generateSalt();
    const hash = User.generateHash(password, salt);

    const user = {
        username: username,
        email: email,
        salt: salt,
        hash: hash
    }

    await User.insertOneAsync(user);
    return res.status(200).json({ username: username });
}

module.exports = {
    postRegister: postRegister
}