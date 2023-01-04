import { useState } from 'react';

import { IProduct, IProductInCart } from '../interfaces';

interface IShoppingCart {
  [ key : string ] : IProductInCart;
};



export const useShoppingCart = () => {
  const [ shoppingCart, setShoppingCart ] = useState<IShoppingCart>({});

  const onProductQuantityChange = ( { quantity, product } : { quantity : number, product : IProduct } ) => {
    setShoppingCart( ( prevShoppingCart ) => {

      const productInCart : IProductInCart = prevShoppingCart[ product.id ] || { ...product, quantity: 0 };

      if ( Math.max( 0, productInCart.quantity + quantity ) > 0 ) {
        productInCart.quantity += quantity;
        return {
          ...prevShoppingCart,
          [ product.id ]: productInCart,
        }
      }

      const { [ product.id ]: toDelete, ...rest } = prevShoppingCart;
      return { ...rest };

      // if ( quantity === 0 ) {
      //   const { [ product.id ] : toDelete, ...rest } = prevShoppingCart;
      //   return { ...rest }
      // }
      // return {
      //   ...prevShoppingCart,
      //   [ product.id ]: {
      //     ...product,
      //     quantity,
      //   }
      // }
    });
  };

  return {
    onProductQuantityChange,
    shoppingCart,
  };
};
