import axios from "axios";
import { axiosErrorHandler } from "./utils";
import axiosInstance from "@/app/api/axios";

export async function getCategories() {
  try {
    const categories = await axiosInstance.get("/api/category/get", {
      headers: {
        "Accept-Language": "en_US",
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
    console.log(res.data.data)
    return res.data.data;
  } catch (error) {
    return axiosErrorHandler(error);
  }
}

export async function getCategoryAndProductsById({
  categoryId,
}: {
  categoryId: string;
}) {
  try {
    const [categoryResponse, productsResponse] = await Promise.all([
      axiosInstance.get(`/api/category/find/${categoryId}`, {
        headers: {
          "Accept-Language": "en_US",
        },
      }),
      axiosInstance.get(`/api/product/category?category_id=${categoryId}`, {
        headers: {
          "Accept-Language": "en_US",
        },
      }),
    ]);
    console.log(categoryResponse, productsResponse);
    return {
      category: categoryResponse.data.data,
      products: productsResponse.data,
    };
  } catch (error) {
    return axiosErrorHandler(error);
  }
}

export async function getProductById({ productId }: { productId: string }) {
  try {
    const product = await axiosInstance.get(`/api/product/find/${productId}`, {
      headers: {
        "Accept-Language": "en_US",
      },
    });
    console.log(product);
    return product.data.data;
  } catch (error) {
    return axiosErrorHandler(error);
  }
}
