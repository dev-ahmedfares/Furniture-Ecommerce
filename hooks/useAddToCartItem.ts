import actAddItemToCart from "@/store/cart/act/actAddItemToCart";
import { addItemLocal } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ICartProduct } from "@/types";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export function useAddToCartItem() {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  const t = useTranslations("cartPage")
  const { loadingAddToCart: loadingCart, items: cartItems } = useAppSelector(
    (state) => state.cart
  );
  const handleAddToCart = (values:ICartProduct) => {
    if (accessToken) {
      dispatch(actAddItemToCart(values))
        .unwrap()
        .then(() => {
          toast.success(t("productAdded"));
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(addItemLocal(values));
      toast.success(t("productAdded"));
    }
  };

  return { handleAddToCart, loadingCart, cartItems };
}
