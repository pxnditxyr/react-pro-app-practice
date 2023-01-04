import { ProductCard, } from '../components';
import { products } from '../data';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';



export const ShoppingPage = () => {

  const { shoppingCart, onProductQuantityChange } = useShoppingCart();

  return (
    <div
    >
      <h1> Shopping Store </h1>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {
          products.map( ( product ) => (
            <ProductCard 
              className="bg-dark"
              key={ product.id }
              onChange={ ( event ) => onProductQuantityChange( event ) }
              product={ product }
              value={ shoppingCart[ product.id ]?.quantity || 0 }
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white font-bold" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
        }
        <div className="shopping-cart">
          {
            Object.values( shoppingCart ).map( product => (
              <ProductCard
                className="bg-dark"
                key={ product.id }
                onChange={ ( event ) => onProductQuantityChange( event ) }
                product={ product }
                style={{ width: '100px', }}
                value={ product.quantity }
              >
                <ProductCard.Image className="custom-image" />
                <ProductCard.Buttons
                  className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  />
              </ProductCard>    
            ))
          }
          
        </div>
      </div>
    </div>
  );
};
