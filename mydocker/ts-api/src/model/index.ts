import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  rating: Number,
  discount: Number,
  viewers: Number,
  catalog: String,
  category: String,
  image_id: Number,
  number_image: Number
})

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
//name 'user','product' will bind to 'users','products' collection in mongo
const User = mongoose.model('user', UserSchema);
const Product = mongoose.model('product',ProductSchema)

export { User,Product };