import mongoose from "mongoose"

const Schema = mongoose.Schema

const friendSchema = new Schema({
  name: String,
  single: Boolean,
})

// Compile the schema into a model and export it
const Friend = mongoose.model('Friend', friendSchema)

export {
  Friend
}