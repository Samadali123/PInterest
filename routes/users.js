const mongoose = require(`mongoose`);

mongoose.connect("mongodb://0.0.0.0:27017/Pinterest");

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
        default: `default.jpg`
    },
    fullname: String,
    firstname: String,
    lastname: String,
    About: String,
    website: String,
    pins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `pins`,
    }, ],
    savedpins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `pins`,
    }, ],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `users`,
    }, ],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: `users`,
    }, ],

    socketId: String,
});

userSchema.plugin(passportlocalmongoose);

module.exports = mongoose.model("users", userSchema);