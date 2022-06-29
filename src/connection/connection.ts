import { Mongoose } from "mongoose";

const mongoose = new Mongoose();

const user = process.env.DEVELOPMENT_DB_USER;
const password = process.env.DEVELOPMENT_DB_PASSWORD;
const cluster = process.env.DEVELOPMENT_DB_CLUSTER;

const connection = `mongodb+srv://${user}:${password}@${cluster}.wxuct.mongodb.net/?retryWrites=true&w=majority`;

export async function main() {
    await mongoose.connect(connection);
}