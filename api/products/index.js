import express from 'express';
import api from './stubAPI';

const router = express.Router();

// get all posts
router.get('/', (req, res) => {
  const products = api.getAll();
  res.send({products: products});
});


// Add a post
router.post('/', (req, res) => {
    const newProduct = req.body;

    if (newProduct && api.add(newProduct.name, newProduct.price, newProduct.link, newProduct.quantity)) {
         return res.status(201).send({message: 'Product Created'});
    }
    return res.status(400).send({message: 'Unable to find Product in request.'});
});

// get a post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = api.getPost(id);

       if (post) {
               return res.status(200).send(post);
              }
              return res.status(404).send({message: `Unable to find Product ${id}`});
});

export default router;