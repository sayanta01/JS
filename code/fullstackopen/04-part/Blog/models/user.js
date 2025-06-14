import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    minLength: 2,
    unique: true, // this ensures the uniqueness of username
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 4,
  },
  // this need to be in array to have multiple blogs per user
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model("User", userSchema);
