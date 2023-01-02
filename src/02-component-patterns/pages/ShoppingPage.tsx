import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {
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
        <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title='Hello' />
            <ProductCard.Buttons />
        </ProductCard> 
        <ProductCard
          product={ product }
          className="bg-dark"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-white font-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>
        <ProductCard product={ product }
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'lightblue',
            borderRadius: '1rem',
          }}
        >
            <ProductCard.Image 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
              }}
            />
            <ProductCard.Title
              title='Hello'
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            />
            <ProductCard.Buttons
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
              }}
            />
        </ProductCard>
      </div>
    </div>
  );
};
