import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { IProductContextProps, IProduct } from '../interfaces';

export interface IProps {
  children?: ReactElement | ReactElement[];
  product: IProduct;
  className?: string;
  style?: CSSProperties;
};



export const ProductContext = createContext<IProductContextProps>( {} as IProductContextProps );

const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style } : IProps ) => {

  const { productCount, increaseBy } = useProduct();

  return (
    <Provider value={{
      productCount,
      increaseBy,
      product
    }}>
      <div className={ `${ styles.productCard } ${ className }` } style={ style }>
        { children }
      </div>
    </Provider>
  );
};
