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

const MyCollectionSchema = new mongoose.Schema({
  name: String
});
const User = mongoose.model('users', UserSchema);
const Product = mongoose.model('product',ProductSchema)
const myCollection = mongoose.model('myCollection',MyCollectionSchema)
export { User,Product,myCollection };