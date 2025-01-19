import mongoose from 'mongoose';
import { CountryNames } from './country_names.js';
mongoose.Promise = global.Promise;

export const mongodb ={};

mongodb.mongoose = mongoose;
db.url = 'mongodb://172.19.0.3:27017/mydb';
db.CountryNames = CountryNames(mongoose);


