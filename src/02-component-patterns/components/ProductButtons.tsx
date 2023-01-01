import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { increaseBy, productCount } = useContext( ProductContext );
  return (
    <div className={ styles.buttonsContainer }>
      <button
        className={ styles.buttonMinus }
        onClick={ () => increaseBy( -1 ) }
      > - </button>
      <div className={ styles.countLabel }> { productCount } </div>
      <button
        className={ styles.buttonAdd }
        onClick={ () => increaseBy( +1 ) }
      > + </button>
    </div>
  );
};


