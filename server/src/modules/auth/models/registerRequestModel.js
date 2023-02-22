const mongoose = require('mongoose');

const registerRequestSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 32
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 64
  },
  repeatPassword: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 64,
    validate: {
        validator: function() {
            const repeatPasswordIsMatched = this.get('password') === this.get('repeatPassword');
            return repeatPasswordIsMatched;
        },
        message: "Password and repeat password do not match"
      }
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm
  },
  verifyTos: {
    type: String,
    required: true
  }
});

const registerRequestModel = mongoose.model("registerRequestModel", registerRequestSchema);

module.exports = {
    registerRequestModel: registerRequestModel
}