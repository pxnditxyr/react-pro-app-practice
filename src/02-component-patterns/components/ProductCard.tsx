import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { IProductContextProps, IProduct, IOnChangeArgs } from '../interfaces';

export interface IProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: ( args : IOnChangeArgs ) => void;
  value?: number;
  product: IProduct;
  style?: CSSProperties;
};



export const ProductContext = createContext<IProductContextProps>( {} as IProductContextProps );

const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style, onChange, value } : IProps ) => {

  const { productCount, increaseBy } = useProduct({ onChange, product, value });
  

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
