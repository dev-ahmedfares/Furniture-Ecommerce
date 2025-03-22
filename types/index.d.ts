export type URLProps = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | undefined }>;
  };
  
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
  export interface ISignInProps {
    data: {  email: string; password: string };
    userType: "personal" | "business";
  }