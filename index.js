import dotenv from 'dotenv';
import express from 'express';
import productsRouter from './api/products';
import bodyParser from 'body-parser';
import './db';
import loadProducts from './productsData';

dotenv.config();

const app = express();

if (process.env.seedDb) { 
  loadProducts();
}

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
 
app.use('/api/products', productsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});