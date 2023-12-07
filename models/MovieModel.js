import mongoose from 'mongoose'
import {RATING}  from "../utils/constants.js";

const MovieSchema = new mongoose.Schema({
  title: String,
  releaseDate: Date,
  availableDate: [{ type: Date }],
  length: String,
  rating: {
    type: String,
    enum: Object.values(RATING),
    default: RATING.PG,
  },
  posterURL: String,
  trailerURL: String,
  new:Boolean
})


// UserSchema.methods.toJSON = function () {
//   let obj = this.toObject()
//   delete obj.password
//   return obj
// }

export default mongoose.model('Movie', MovieSchema)
