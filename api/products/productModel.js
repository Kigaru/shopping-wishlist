import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema( {
    _id: String,
    priority: {type: Number},
    name: String,
    price: {type: Number},
    link: String,
    quantity: {type: Number}
});

export default mongoose.model('Product', ProductSchema);