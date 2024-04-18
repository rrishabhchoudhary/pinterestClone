const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterst");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
},
posts: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Post"
}],
password: {
    type: String,
    //required: true
},
email: {
    type: String,
    required: true,
    unique: true
},
fullname: {
    type: String,
    required: true
},
dp: {
    type: String // Assuming dp is the URL of the user's profile picture
}
});

userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);

