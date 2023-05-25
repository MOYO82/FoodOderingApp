import mongoose from "mongoose";
import bcrypt from"bcryptjs"
const {Schema} = mongoose

const UserSchema = new mongoose.Schema({
    username: {
      type: String, 
      require: true, 
      unique: true,
      min: 7,
      max: 45,
    },  

    email: { type: String, 
      require: true, 
      unique: true,
      lowercase: true,
      immutable: true,
      validators: {
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please add a valid email string to the email path."]
      }
    },
    
    password: { 
      type: String, 
      require: true,
      unique: true,  
      minlength: 8,
      maxlength: 20
     },
     
    token: { 
      type: String, 
      require: true, 
      unique: true },
  },
  {
    timestamps: true
  });
  
  UserSchema.pre("save", async function(next){
    try {
      const user = this;
      if (!user.isModified("password")) next();
      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error){
      return next(error);
    }
    });
  const UserModel = mongoose.model("user", userSchema);
  module.exports = UserModel;