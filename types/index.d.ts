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

