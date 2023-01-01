import { useState } from 'react';

export const useProduct = ( initialProduct : number = 0 ) => {
  const [ productCount, setProductCount ] = useState<number>( initialProduct );
  const increaseBy = ( value : number ) => {
    setProductCount( Math.max( 0, productCount + value ) );
  }

  return {
    productCount,
    increaseBy,
  }
}
