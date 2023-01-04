import { IProps as IProductCardProps } from '../components/ProductCard';
import { IProps as IProductTitleProps } from '../components/ProductTitle';
import { IProps as IProductImageProps } from '../components/ProductImage';
import { IProps as IProductButtonsProps } from '../components/ProductButtons';

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
  ( Props : IProductCardProps ) : JSX.Element;
  Title:   ( Props : IProductTitleProps   ) => JSX.Element;
  Image:   ( Props : IProductImageProps   ) => JSX.Element;
  Buttons: ( Props : IProductButtonsProps ) => JSX.Element;
};


export interface IOnChangeArgs {
  product: IProduct;
  quantity: number;
}

export interface IProductInCart extends IProduct {
  quantity: number;
};


