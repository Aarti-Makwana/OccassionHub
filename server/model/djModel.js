// models/djModel.js
import mongoose from 'mongoose';

const djSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  gallery: { type: String, required: true },
  equipment: { type: String, required: true },
  price: { type: Number, required: true },
});

const DjModel = mongoose.model('DjManager', djSchema);

export default DjModel;
