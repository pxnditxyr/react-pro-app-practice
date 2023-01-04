import { useEffect, useState } from 'react';
import { IOnChangeArgs, IProduct } from '../interfaces';

interface IUseProductArgs {
  onChange?: ( args : IOnChangeArgs ) => void;
  product: IProduct;
  value?: number;
}

export const useProduct = ( { onChange, product, value = 0 } : IUseProductArgs ) => {
  const [ productCount, setProductCount ] = useState<number>( value );

  useEffect( () => {
    setProductCount( value );
  }, [ value ] );

  const increaseBy = ( value : number ) => {
    const newValue = Math.max( 0, productCount + value );
    setProductCount( newValue );
    onChange && onChange({ product, quantity: newValue });
  }

  return {
    productCount,
    increaseBy,
  }
}
