import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { IProductContextProps, IProductCardProps } from '../interfaces';

export const ProductContext = createContext<IProductContextProps>( {} as IProductContextProps );

const { Provider } = ProductContext;

export const ProductCard = ( { children, product } : IProductCardProps ) => {

  const { productCount, increaseBy } = useProduct();

  return (
    <Provider value={{
      productCount,
      increaseBy,
      product
    }}>
      <div className={ styles.productCard }>
        { children }
      </div>
    </Provider>
  );
};
