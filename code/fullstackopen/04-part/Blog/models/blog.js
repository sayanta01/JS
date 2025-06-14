import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  url: String,
  title: String,
  author: String,
  likes: {
    type: Number,
    default: 0,
  },
  // one blog > belongs to only one user, so no array needed
  user: {
    type: mongoose.Schema.Types.ObjectId, // store ObjectId of User document 
    ref: "User",
  },
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model("Blog", blogSchema);
