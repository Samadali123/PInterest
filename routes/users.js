const mongoose = require(`mongoose`);

// mongoose.connect("mongodb://0.0.0.0:27017/Pinterest");

// mongoose.connect("mongodb+srv://samadali0125:Samad@123@cluster0.m1ac8d5.mongodb.net/Pinterest-Clone?retryWrites=true&w=majority&appName=Cluster0").then(function() {
//     console.log("Db connected Successfully.")
// }).catch(function(error) {
//     console.log("There was an Error", error)
// });

mongoose.connect("mongodb+srv://samadali0125:Samad%40123@cluster0.m1ac8d5.mongodb.net/Pinterest-Clone?retryWrites=true&w=majority&appName=Cluster0").then(function() {
    console.log("Db connected Successfully.")
}).catch(function(error) {
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