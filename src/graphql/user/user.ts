import { gql } from "apollo-server-micro";
import { Mongoose } from "mongoose";

const mongoose = new Mongoose();

const UserSchema = new mongoose.Schema({
    name: String,
});

const User = mongoose.model('User', UserSchema);
