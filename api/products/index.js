import express from 'express';
import Product from './productModel';
import asyncHandler from 'express-async-handler';
import uuid from 'uuid';
const router = express.Router();

// get all product
router.get('/', async (req, res) => {
  try{
  const products = await Product.find();
  res.status(200).json(products);
  } catch (error) {
    handleError(res, error.message);
  }
});


// Add a product
router.post('/', asyncHandler(async (req, res) => {
  req.body._id = uuid();
  req.body.priority = Product.find().size;
  const product = await Product.create(req.body);
  res.status(201).json(product);
}));

// get a product by id
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.find({"_id":id});
    res.status(201).json(product);
}));

//update a product
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const product = await Product.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!product) return res.sendStatus(404);
  return res.json(200, product);
}));

// Delete a contact
router.delete('/:id', asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const product = await Product.find({"_id":req.params.id});
  if (!product) return res.send(404);
  await Product.deleteOne({"_id":product._id});
  return res.status(204).send(product);
}));

function handleError(res, err) {
  return res.send(500, err);
};

export default router;