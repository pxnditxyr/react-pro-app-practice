import { ProductCard, } from '../components';
import { products } from '../data';

import '../styles/custom-styles.css';


const product = products[ 0 ];

export const ShoppingPage = () => {

  return (
    <div
    >
      <h1> Shopping Store </h1>
      <hr />
      <div>
        <ProductCard 
          className="bg-dark"
          key={ product.id }
          product={ product }
          initialValues={{
            quantity: 10,
            maxQuantity: 50,
          }}
        >
          {
            ({ reset, quantity, increaseBy, isMaxQuantityReached }) => (
              <>
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className="text-white font-bold" />
                <ProductCard.Buttons className="custom-buttons" />
                <div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '0.8rem 1rem',
                }}>
                  <button
                    onClick={ reset }
                    className="btn btn-danger"
                  >
                    Reset
                  </button>
                  <button
                    onClick={ () => increaseBy( -2 ) }
                    className="btn btn-primary"
                  > -2 </button>
                  {
                    !isMaxQuantityReached &&
                    <button
                      className="btn btn-primary"
                      onClick={ () => increaseBy( 2 ) }
                    > +2 </button>
                  }
                  <span
                    className="text-white font-bold"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  > { quantity } </span>
                </div>
              </>
            )
          }
        </ProductCard>
      </div>
    </div>
  );
};
