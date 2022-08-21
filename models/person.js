// npm install mongoose
import mongoose from "mongoose";

// Connect with database server
mongoose.connect('mongodb://localhost:27017/apidb')
    .then(() => console.log('Connected to MongoDB server successfully!'))
    .catch(err => console.error('Error to connect with database server', err));

// Creating Schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
});

// Creating Model
const Person = mongoose.model("Person", personSchema);

export {Person};