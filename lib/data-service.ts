import { IProduct } from "@/types";
import { axiosErrorHandler } from "./utils";
import axiosInstance from "@/app/api/axios";

export async function getCategories(locale: string) {
  try {
    const categories = await axiosInstance.get("/api/category/get", {
      headers: {
        "Accept-Language": `${locale}`,
      },
    });

    return categories.data.data;
  } catch (error) {
    return axiosErrorHandler(error);
  }
}
export async function getAllProducts() {
  try {
    const res = await axiosInstance.get("/api/product/get", {
      headers: {
        "Accept-Language": "en_US",
      },
    });
   
    return res.data.data;
  } catch (error) {
    return axiosErrorHandler(error);
  }
}

export async function getCategoryAndProductsById({
  categoryId,
  locale,
}: {
  categoryId: string;
  locale: string;
}) {
  try {
    const [categoryResponse, productsResponse] = await Promise.all([
      axiosInstance.get(`/api/category/find/${categoryId}`, {
        headers: {
          "Accept-Language": `${locale}`,
        },
      }),
      axiosInstance.get(`/api/product/category?category_id=${categoryId}`, {
        headers: {
          "Accept-Language": `${locale}`,
        },
      }),
    ]);
   
    return {
      category: categoryResponse.data.data,
      products: productsResponse.data as IProduct,
    };
  } catch (error) {
    return axiosErrorHandler(error);
  }
}

export async function getProductById({
  productId,
  locale,
}: {
  productId: string;
  locale: string;
}) {
  try {
    const product = await axiosInstance.get(`/api/product/find/${productId}`, {
      headers: {
        "Accept-Language": locale,
      },
    });
   
    return product.data.data;
  } catch (error) {
    return axiosErrorHandler(error);
  }
}
