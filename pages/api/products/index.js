import dbConnect from '@/server/config/dbConnect';
import { getProducts, newProduct } from '@/server/controllers/productControllers';

export default async function handler(req, res) {
  try {
    dbConnect();
    await getProducts(req, res);
    await newProduct(req, res);
  }
  catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
