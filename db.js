const mongoose = require("mongoose");
console.log("Successfull");
mongoose.connect(
  "mongodb+srv://mahammadkaif38:p4atrifBaDpgjeSZ@cluster0.ulvwhwq.mongodb.net/course-detail"
);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  first: String,
  last: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.export = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
