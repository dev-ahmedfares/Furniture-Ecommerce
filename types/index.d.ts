export type URLProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};
export interface ISignInProps {
  data: { email: string; password: string };
  userType: "personal" | "business";
}
export type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export interface ParamsProps {
  params: Promise<{ id: string }>;
}

export interface ISignUpProps {
  data: { name: string; lastname: string; email: string; password: string };
  userType: "personal" | "business";
}

export interface ISignOutProps {
  accessToken: string;
  userType: "personal" | "business";
}

export interface IUser {
  email: string;
  name: string;
  lastname: string;
  id?: number;
  is_admin?: number;
  is_verfied?: number;
  socialite_id?: string;
}

export interface ICartProduct {
  item_id: number;
  qty: number;
  price: number;
  tax?: number;
  subtotal?: number;
  name:string,

}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  information: string;
  shipping_return: string;
  price: string;
  discount: string;
  discount_Price: string;
  quantity: number;
  sold: string;
  on_Sale: number;
  featured_Product: number;
  best_Selling: number;
  new_Arrival: number;
  status: number;
  productimage: { id: number; product_id: number; link: string }[];
}
