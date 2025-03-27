import actIncreaseItemQty from "@/store/cart/act/actIncreaseItemQty";
import { increaseItemLocal } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ICartProduct } from "@/types";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export function useIncreaseCartItem() {
  const t = useTranslations("cartPage")
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  const { loadingIncrease:loadingCart,items:cartItems  } = useAppSelector((state) => state.cart);

  const handleIncreaseItem = (item: ICartProduct) => {
    if (accessToken) {
      dispatch(actIncreaseItemQty(item))
        .unwrap()
        .then(() => {
          toast.success(t("productAdded"));
        })
        .catch((error) => {
            toast.error(error);
        });
    } else {
        dispatch(increaseItemLocal(item));
        toast.success(t("productAdded"));
    }
  };

  return { handleIncreaseItem,loadingCart,cartItems };
}
