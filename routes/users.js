const mongoose = require(`mongoose`);


mongoose.connect(process.env.MONGO_URL).then(function () {
    console.log("Db connected Successfully.")
}).catch(function (error) {
    console.log("There was an Error", error)
});



const passportlocalmongoose = require(`passport-local-mongoose`);

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    profile: {
        type: String,
        // default: `default.jpg`
        default: "https://res.cloudinary.com/dkkrycya8/image/upload/v1730454271/4a0f8187-7eae-4795-bca3-d79c0ac0b8ce_gv5ngq.jpg"
    },
    fullname: String,
    firstname: String,
    lastname: String,
    About: String,
    website: String,
    pins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `pins`,
    },],
    savedpins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `pins`,
    },],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `users`,
    },],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `users`,
    },],

    socketId: String,
});

userSchema.plugin(passportlocalmongoose);

module.exports = mongoose.model("users", userSchema);