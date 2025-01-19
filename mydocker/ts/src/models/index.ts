import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  rating: Number,
  viewers: Number,
  catalog: String,
  category: String,
  images: Number
})

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('users', UserSchema);
const Product = mongoose.model('product',ProductSchema)

export { User,Product };