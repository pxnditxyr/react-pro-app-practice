import { useEffect, useRef, useState } from 'react';
import { IInitialValues, IOnChangeArgs, IProduct } from '../interfaces';

interface IUseProductArgs {
  initialValues?: IInitialValues;
  onChange?: ( args : IOnChangeArgs ) => void;
  product: IProduct;
  value?: number;
}

export const useProduct = ( { onChange, product, value = 0, initialValues } : IUseProductArgs ) => {

  const [ productCount, setProductCount ] = useState<number>( initialValues?.quantity || value );
  const isMounted = useRef( false );

  const increaseBy = ( value : number ) => {
    const newValue = Math.max( 0, productCount + value );
    const newQuantity = Math.min( initialValues?.maxQuantity || newValue, newValue );
    setProductCount( newQuantity );
    onChange && onChange({ product, quantity: newValue });
  }

  const reset = () => {
    setProductCount( initialValues?.quantity || value );
  }


  useEffect( () => {
    if ( !isMounted.current ) return;
    setProductCount( initialValues?.quantity || value );
  }, [ value ] );

  useEffect( () => {
    isMounted.current = true;
  }, [] );

  return {
    productCount,
    isMaxQuantityReached: !!initialValues?.quantity && initialValues.maxQuantity === productCount,
    maxQuantity: initialValues?.maxQuantity,
    increaseBy,
    reset
  };
};
