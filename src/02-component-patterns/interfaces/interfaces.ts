import { ReactElement } from 'react';

export interface IProductCardProps {
  children?: ReactElement | ReactElement[];
  product: IProduct;
};

export interface IProduct {
  id: string;
  title: string;
  img?: string;
};

export interface IProductContextProps {
  productCount: number;
  increaseBy: ( value : number ) => void;
  product: IProduct;
};

export interface IProductCardHOCProps {
  ( { children, product } : IProductCardProps) : JSX.Element;
  Title: ( { title } : { title?: string } ) => JSX.Element;
  Image: ( { img } : { img?: string } ) => JSX.Element;
  Buttons: () => JSX.Element;
};

