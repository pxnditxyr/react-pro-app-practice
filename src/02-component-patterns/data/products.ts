import { IProduct } from "../interfaces";

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug 2',
  img: './coffee-mug2.png',
};

export const products : IProduct[] = [ product, product2 ];
