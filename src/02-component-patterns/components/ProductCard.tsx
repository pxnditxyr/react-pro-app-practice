import { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { IProductContextProps, IProduct, IOnChangeArgs, IInitialValues, IProductCardHandlers } from '../interfaces';

export const ProductContext = createContext<IProductContextProps>( {} as IProductContextProps );
const { Provider } = ProductContext;

export interface IProps {
  // children?: ReactElement | ReactElement[];
  children?: ( args : IProductCardHandlers ) => JSX.Element;
  className?: string;
  initialValues?: IInitialValues;
  onChange?: ( args : IOnChangeArgs ) => void;
  product: IProduct;
  style?: CSSProperties;
  value?: number;
};

export const ProductCard = ( { children, product, className, style, onChange, value, initialValues } : IProps ) => {

  const { productCount, increaseBy, isMaxQuantityReached, maxQuantity, reset } = useProduct({
    initialValues,
    onChange,
    product,
    value,
  });

  return (
    <Provider value={{
      productCount,
      increaseBy,
      product,
      maxQuantity: maxQuantity
    }}>
      <div className={ `${ styles.productCard } ${ className }` } style={ style }>
        { children && children({
          quantity: productCount,
          isMaxQuantityReached,
          maxQuantity: initialValues?.maxQuantity,
          reset,
          increaseBy,
          product
        }) }
      </div>
    </Provider>
  );
};
